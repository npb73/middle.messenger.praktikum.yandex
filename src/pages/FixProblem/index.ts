import { tmpl } from './fixProblem.tmpl';
import { Error } from '../../modules/Error';
import Block from '../../utils/Block';
import { Routes } from '../../../main';

export class FixProblem extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.error = new Error({
      errorNumber: 500,
      errorText: 'server error',
      link: { to: Routes.LoginRoute, text: '< back>' },
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
