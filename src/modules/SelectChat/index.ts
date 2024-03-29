import { tmpl } from './selectChat.tmpl';
import './selectChat.sass';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import { PopupCreateUser } from '../PopupAddUser';
import { InputOnly } from '../../components/InputOnly';
import { MyMessage } from '../../components/MyMessage';
import { PopupDeleteUser } from '../PopupDeleteUser';
import ChatsController from '../../controllers/ChatsController';
import MessageController, { IMessage } from '../../controllers/MessageController';
import { RESOURCES_URL } from '../../components/constants';
import { State, store, withStore } from '../../utils/Store';
import { FriendMessage } from '../../components/FriendMessage';

interface MessengerProps {
  selectedChat: number | undefined;
  messages: IMessage[];
  userId: number;
}
export class BaseSelectChat extends Block {
  constructor(props: MessengerProps) {
    super(props);
  }

  init(): void {
    this.children.popupCreateUser = new PopupCreateUser({ chatId: this.props.selectedChat });
    this.children.popupDeleteUser = new PopupDeleteUser({ chatId: this.props.selectedChat });

    this.children.addUserButton = new Button({
      text: 'add user',
      events: {
        click: () => {
          document.querySelector('.popup_createUser')!.classList.add('popup_open');
        },
      },
    });
    this.children.deleteUserButton = new Button({
      text: 'delete user',
      events: {
        click: () => {
          document.querySelector('.popup_deleteUser')!.classList.add('popup_open');
        },
      },
    });
    this.children.chatList = (this.props.messages as IMessage[]).map(el => {
      if (el.user_id === this.props.userId) {
        return new MyMessage(el);
      }
      return new FriendMessage(el);
    });
    this.children.deleteChatButton = new Button({
      text: 'delete chat',
      events: {
        click: () => {
          ChatsController.deleteChat({ chatId: this.props.selectedChat });
          store.set('selectedChatId', undefined);
          this.setProps({ selectedChat: undefined });
        },
      },
    });

    this.children.button = new Button({
      text: 'send',
      events: {
        click: e => {
          e.preventDefault();
          const InputValue = (this.children.input as InputOnly).inputParam.elementVal;
          if (InputValue) {
            MessageController.sendMessage(this.props.selectedChat, InputValue);
            ((this.children.input as InputOnly).element! as HTMLInputElement).value = '';
          }
        },
      },
    });

    this.children.input = new InputOnly({
      name: 'message',
      events: {
        blur() {},
      },
    });
  }

  protected componentDidUpdate(): boolean {
    this.children.chatList = (this.props.messages as IMessage[]).map(el => {
      if (el.user_id === this.props.userId) {
        return new MyMessage(el);
      }
      return new FriendMessage(el);
    });
    return true;
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      imgSrc: this.props.data?.avatar
        ? `
       ${RESOURCES_URL}/${this.props.data?.avatar}`
        : '',
    });
  }
}

const withSelectChat = withStore((state: State) => {
  if (!state.selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user?.id,
    };
  }

  return {
    messages: (state.messages || {})[state.selectedChatId] || [],
    selectedChat: state.selectedChatId,
    userId: state.user!.id,
  };
});

export const SelectChat = withSelectChat(BaseSelectChat as unknown as typeof Block);
