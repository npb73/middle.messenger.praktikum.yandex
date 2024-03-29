import { tmpl } from './myMessage.tmpl';
import Block from '../../utils/Block';

import './myMessage.sass';

type MyMessageProps = {
  content: string;
};

export class MyMessage extends Block {
  constructor(props: MyMessageProps) {
    super(props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
