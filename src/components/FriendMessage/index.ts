import Block from '../../utils/Block';
import { tmpl } from './friendMessage.tmpl';
import './friendMessage.sass';

type FriendMessageProps = { content: string };

export class FriendMessage extends Block {
  constructor(props: FriendMessageProps) {
    super(props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
