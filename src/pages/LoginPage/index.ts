import { Form } from '../../components/Form';
import { loginInput } from '../../components/inputs';
import { tmpl } from './loginPage.tmpl';
import './login.sass';
import Block from '../../utils/Block';

export class Login extends Block {
  constructor() {
    super('div', {});
    this.render();
  }

  init() {
    this.children.loginForm = new Form({
      inputsArr: loginInput,
      buttonText: 'log in',
      link: { to: '/signup', text: 'create account', className: 'customLink' },
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
