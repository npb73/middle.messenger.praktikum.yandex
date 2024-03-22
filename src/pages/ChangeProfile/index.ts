import { IUser } from '../../api/ChatsApi';
import { IChangeProfileData } from '../../api/UsersApi';
import { RESOURCES_URL, profileFieldValues } from '../../components/constants';
import { ChangeProfileField } from '../../components/ChangeProfileField';
import { tmpl } from './changeProfile.tmpl';
import './changeProfile.sass';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { validator } from '../../utils/Validator';
import UsersController from '../../controllers/UsersController';
import { store } from '../../utils/Store';
import Router from '../../utils/Router';
import { Routes } from '../../../main';
import { PopupImg } from '../../modules/Popup';

export class ChangeProfile extends Block {
  constructor() {
    super({});
  }

  formValid() {
    let validAll = true;
    const formResult: Record<string, string> = {};
    (this.children.profileFields as ChangeProfileField[]).forEach(el => {
      if (!el.inputParam.isValid) {
        const { errorText, isValid } = validator(el.inputParam.name, el.inputParam.elementVal);
        if (!isValid) {
          validAll = false;
        }
        const copyEl = el;
        copyEl.element!.querySelector('.errorText')!.textContent = errorText;
      }
      formResult[el.inputParam.name] = el.inputParam.elementVal;
    });
    if (validAll) {
      UsersController.changeProfile(formResult as IChangeProfileData);
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

    this.children.profileFields = profileFieldValues.map(
      field =>
        new ChangeProfileField({
          ...field,
          fieldValue: (store.getState().user?.[field.fieldValue as keyof IUser] as string) || '',
        })
    );
    this.children.profilePageButton = new Button({
      text: '<',
      events: {
        click: () => {
          Router.go(Routes.ProfileRoure);
        },
      },
    });
    this.children.imgButton = new Button({
      text: '',
      events: {
        click: () => {
          document.querySelector('.popupImg')!.classList.add('popupImg_open');
        },
      },
    });
    this.children.popup = new PopupImg();
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
