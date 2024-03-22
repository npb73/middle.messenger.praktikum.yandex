import { tmpl } from './notFound.tmpl';
import { Error } from '../../modules/Error';
import Block from '../../utils/Block';
import { Routes } from '../../../main';

export class NotFound extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.error = new Error({
      errorNumber: 404,
      errorText: 'page not found',
      link: { to: Routes.LoginRoute, text: '< back' },
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
