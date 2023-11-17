import { Form } from '../../components/Form';
import { profileFormInput } from '../../components/inputs';
import { tmpl } from './profile.tmpl';
import './profile.sass';
import Block from '../../utils/Block';

export class Profile extends Block {
  constructor() {
    super('div', {});
  }

  init() {
    this.children.profileForm = new Form({
      inputsArr: profileFormInput,
      buttonText: 'save profile',
      link: { to: '/home', text: '< back', className: 'customLink' },
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
