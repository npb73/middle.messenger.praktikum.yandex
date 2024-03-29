import { tmpl } from './popupImg.tmpl';
import './popupImg.sass';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import UsersController from '../../controllers/UsersController';

export class PopupImg extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.submitButton = new Button({
      text: 'Сохранить ихображение',
      events: {
        click: async () => {
          const imgInputValue = this.element!.querySelector('.inputImg')!;
          const file = (imgInputValue as HTMLInputElement).files![0];
          const data = new FormData();
          data.append('avatar', file);
          await UsersController.changeProfileAvatar(data);
        },
      },
    });
    this.children.closeButton = new Button({
      text: 'Закрыть',
      events: {
        click: () => {
          document.querySelector('.popupImg')!.classList.remove('popupImg_open');
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
