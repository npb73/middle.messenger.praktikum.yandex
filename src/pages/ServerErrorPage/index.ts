import { tmpl } from './serverErrorPage.tmpl';
import { Error } from '../../components/Error';
import Block from '../../utils/Block';

export class ServerErrorPage extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.error = new Error({
      className: 'mainWrapper',
      errorNumber: 500,
      errorText: 'We`re fix it, please wait...',
      link: { to: '/login', text: '< back', className: 'customLink' },
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
