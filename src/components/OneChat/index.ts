import { tmpl } from './oneChat.tmpl';
import Block from '../../utils/Block';
import './oneChat.sass';
import { IGetChat } from '../../api/ChatsApi';
import { RESOURCES_URL } from '../constants';
import { store } from '../../utils/Store';

type OneChatProps = IGetChat & {
  selectChat: (id: number) => void;
};
export class OneChat extends Block {
  constructor(props: OneChatProps) {
    super({
      ...props,
      events: {
        click: () => {
          store.set('selectedChatId', this.props.id);
          props.selectChat(this.props.id);
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, {
      ...this.props,
      imgSrc: this.props.avatar
        ? `
      ${RESOURCES_URL}/${this.props.avatar}`
        : '',
    });
  }
}
