import { Form } from '../../components/Form';
import { signUpInput } from '../../components/inputs';
import { tmpl } from './signup.tmpl';
import './signup.sass';
import Block from '../../utils/Block';

export class SignUp extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.signUpForm = new Form({
      inputsArr: signUpInput,
      buttonText: 'create account',
      link: { to: '/login', text: '< back', className: 'customLink' },
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
