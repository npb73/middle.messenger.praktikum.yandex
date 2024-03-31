import { expect } from 'chai';
import sinon from 'sinon';
import Block from '../utils/Block';
import Router from '../utils/Router';

describe('Router', () => {
  global.window.history.back = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
    }
  };
  global.window.history.forward = () => {
    if (typeof window.onpopstate === 'function') {
      window.onpopstate({ currentTarget: window } as unknown as PopStateEvent);
    }
  };

  const getFakeContent = sinon.fake.returns(document.createElement('div'));

  const BlockMock = class {
    getContent = getFakeContent;
  } as unknown as typeof Block;

  it('return Router instance', () => {
    const result = Router.use('/', BlockMock);

    expect(result).to.eq(Router);
  });

  it('render page on history back', () => {
    Router.use('/', BlockMock).start();

    Router.back();

    expect(getFakeContent.callCount).to.eq(1);
  });

  it('go to path', () => {
    Router.use('/', BlockMock).start();

    Router.go('/login');

    expect(global.window.location.pathname).to.eq('/login');
  });

  it('render page on start', () => {
    Router.use('/', BlockMock).start();

    expect(getFakeContent.callCount).to.eq(1);
  });
});
