import { tmpl } from './popup.tmpl';
import './popup.sass';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { validator } from '../../utils/Validator';
import ChatsController from '../../controllers/ChatsController';

export class PopupCreateUser extends Block {
  constructor(props: { chatId: number }) {
    super(props);
  }

  addUser() {
    const input = this.children.input as Input;
    const { errorText, isValid } = validator(input.inputParam.name, input.inputParam.elementVal);
    const copyEl = input;
    copyEl.element!.querySelector('.errorText')!.textContent = errorText;
    if (isValid) {
      const num = parseInt(input.inputParam.elementVal, 10);
      ChatsController.addUsers({ users: [num], chatId: this.props.chatId });
      document.querySelector('.popup_createUser')!.classList.remove('popup_open');
    }
  }

  init() {
    this.children.input = new Input({
      placeholder: 'id пользователя',
      type: 'text',
      name: 'number',
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
      text: 'Добавить пользователя',
      events: {
        click: () => {
          this.addUser();
        },
      },
    });
    this.children.closeButton = new Button({
      text: 'Закрыть',
      events: {
        click: () => {
          document.querySelector('.popup_createUser')!.classList.remove('popup_open');
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
