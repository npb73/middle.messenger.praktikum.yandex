import { tmpl } from './notFound.tmpl';
import { Error } from '../../components/Error';
import Block from '../../utils/Block';

export class NotFoundPage extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.error = new Error({
      className: 'mainWrapper',
      errorNumber: 404,
      errorText: 'Page not found...',
      link: { to: '/login', text: '< back', className: 'customLink' },
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
