import { beforeEach, describe, it } from 'mocha';
import sinon from 'sinon';
import { expect } from 'chai';
import Block from '../utils/Block';

describe('Block', () => {
  let block: Block;

  beforeEach(() => {
    block = new Block({});
  });

  it('set props', () => {
    block.setProps({
      newProps: 'newProps',
    });

    expect(block.props).to.have.property('newProps', 'newProps');
  });

  it('update event on set props', () => {
    const spy = sinon.spy(block, 'componentDidUpdate' as keyof Block);
    block.setProps({
      newProps: 'newProps',
    });

    expect(spy.calledOnce).to.eq(true);
  });
});
