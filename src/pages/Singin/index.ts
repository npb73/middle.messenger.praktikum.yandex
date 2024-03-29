import { Form } from '../../modules/Form';
import { registrationInput } from '../../components/constants';
import { tmpl } from './singin.tmpl';
import './singin.sass';
import Block from '../../utils/Block';
import AuthController from '../../controllers/AuthController';
import { ISignInData, ISignUpData } from '../../api/AuthApi';
import { Routes } from '../../../main';
import ChatsController from '../../controllers/ChatsController';

export class Singin extends Block {
  constructor() {
    super({});
  }

  async fetch(data: ISignUpData) {
    await AuthController.signup(data);
    await ChatsController.getChats();
  }

  init() {
    this.children.regForm = new Form({
      title: 'sign up',
      inputsArr: registrationInput,
      buttonText: 'create account',
      link: { to: Routes.LoginRoute, text: '< back' },
      fetch: this.fetch as (data: ISignUpData | ISignInData) => void,
    });
  }

  render() {
    return this.compile(tmpl, {});
  }
}
