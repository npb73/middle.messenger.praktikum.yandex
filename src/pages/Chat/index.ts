import { IGetChat } from '../../api/ChatsApi';
import { PopupCreateChat } from '../../modules/PopupCreateChat/index';
import { OneChat } from '../../components/OneChat';
import Block from '../../utils/Block';
import { tmpl } from './chat.tmpl';
import './chat.sass';
import { State, store, withStore } from '../../utils/Store';
import { SelectChat } from '../../modules/SelectChat';
import Router from '../../utils/Router';
import { Button } from '../../components/Button';
import { Routes } from '../../../main';

export class BaseChat extends Block {
  constructor() {
    super({});
  }

  selectChat(id: number) {
    this.setProps({ selectedChatId: id });
  }

  createChat() {
    document.querySelector('.popup_createChat')!.classList.add('popup_open');
  }

  async init() {
    this.children.createChatButton = new Button({
      text: 'Создать чат',
      events: {
        click: () => {
          document.querySelector('.popup_createChat')!.classList.add('popup_open');
        },
      },
    });
    this.children.toProfileButton = new Button({
      text: 'Профиль',
      events: {
        click: () => {
          Router.go(Routes.ProfileRoure);
        },
      },
    });
    this.children.chatList =
      store.getState().chats?.map(props => new OneChat({ ...props, selectChat: this.selectChat.bind(this) })) || [];

    this.children.popupCreateChat = new PopupCreateChat();
    this.children.selectChat = new SelectChat({
      id: 0,
      data: Object.values(this.props).find(el => (el as IGetChat)?.id === this.props.selectedChatId) as IGetChat,
      deleteChat: this.selectChat.bind(this),
    });
  }

  protected componentDidUpdate(): boolean {
    this.children.chatList = store
      .getState()
      .chats!.map(props => new OneChat({ ...props, selectChat: this.selectChat.bind(this) }));

    this.children.selectChat = new SelectChat({});

    return true;
  }

  render() {
    return this.compile(tmpl, { ...this.props, create: this.createChat });
  }
}

function mapStateToProps(state: State) {
  return { ...state.chats };
}

export const Chat = withStore(mapStateToProps)(BaseChat);
