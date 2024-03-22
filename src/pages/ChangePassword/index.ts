import { changePasswordFieldValues, RESOURCES_URL } from '../../components/constants';
import { tmpl } from '../ChangeProfile/changeProfile.tmpl';
import '../ChangeProfile/changeProfile.sass';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { validator } from '../../utils/Validator';
import UsersController from '../../controllers/UsersController';
import { IChangePasswordData } from '../../api/UsersApi';
import Router from '../../utils/Router';
import { Routes } from '../../../main';
import { store } from '../../utils/Store';
import { ChangePasswordField } from '../../components/ChangePasswordField';

export class ChangePassword extends Block {
  constructor() {
    super({});
  }

  formValid() {
    let validAll = true;
    const formResult: Record<string, string> = {};
    (this.children.profileFields as ChangePasswordField[]).forEach(el => {
      if (!el.inputParam.isValid) {
        const { errorText, isValid } = validator(el.inputParam.name, el.inputParam.elementVal);
        if (!isValid) {
          validAll = false;
        }
        const copyEl = el;
        copyEl.element!.querySelector('.errorText')!.textContent = errorText;
      }
      if (el.inputParam.name !== 'newPasswordTwo') {
        formResult[el.inputParam.name] = el.inputParam.elementVal;
      }
    });
    if (validAll) {
      UsersController.changePassword(formResult as IChangePasswordData);
    }
  }

  init() {
    this.children.button = new Button({
      text: 'Сохранить',
      events: {
        click: () => {
          this.formValid();
        },
      },
    });

    this.children.profileFields = changePasswordFieldValues.map(field => new ChangePasswordField(field));
    this.children.profilePageButton = new Button({
      text: '<',
      events: {
        click: () => {
          Router.go(Routes.ProfileRoure);
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, {
      imgSrc: store.getState().user?.avatar
        ? `
        ${RESOURCES_URL}/${store.getState().user!.avatar}`
        : '',
    });
  }
}
