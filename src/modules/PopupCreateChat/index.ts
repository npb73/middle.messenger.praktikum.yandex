import { tmpl } from './popup.tmpl';
import './popup.sass';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import ChatsController from '../../controllers/ChatsController';
import { validator } from '../../utils/Validator';

export class PopupCreateChat extends Block {
  constructor() {
    super({});
  }

  createChat() {
    const input = this.children.input as Input;
    const { errorText, isValid } = validator(input.inputParam.name, input.inputParam.elementVal);
    const copyEl = input;
    copyEl.element!.querySelector('.errorText')!.textContent = errorText;
    if (isValid) {
      ChatsController.createChat({ title: input.inputParam.elementVal });
      document.querySelector('.popup_createChat')!.classList.remove('popup_open');
    }
  }

  init() {
    this.children.input = new Input({
      placeholder: 'Название чата',
      type: 'text',
      name: 'message',
      events: {
        blur() {
          const inputInstance = this as unknown as Input;
          const { isValid, errorText } = validator(inputInstance.inputParam.name, inputInstance.inputParam.elementVal);
          inputInstance.element!.querySelector('.errorText')!.textContent = errorText;
          inputInstance.setInputIsValid(isValid);
        },
      },
    });
    this.children.submitButton = new Button({
      text: 'Создать чат',
      events: {
        click: () => {
          this.createChat();
        },
      },
    });
    this.children.closeButton = new Button({
      text: 'Закрыть',
      events: {
        click: () => {
          const input = this.children.input as Input;
          input.element!.querySelector('.errorText')!.textContent = '';
          document.querySelector('.popup_createChat')!.classList.remove('popup_open');
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
