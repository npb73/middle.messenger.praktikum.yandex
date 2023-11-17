import { Form } from '../../components/Form';
import { changePasswordFormInput } from '../../components/inputs';
import { tmpl } from './changepassword.tmpl';
import './changepassword.sass';
import Block from '../../utils/Block';

export class ChangePassword extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.passwordChangeForm = new Form({
      inputsArr: changePasswordFormInput,
      buttonText: 'change password',
      link: { to: '/home', text: '< back', className: 'customLink' },
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
