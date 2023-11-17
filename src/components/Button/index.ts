import { tmpl } from './button.tmpl';
import Block from '../../utils/Block';

export type ButtonProps = {
  text: string;
  events: {
    click: (e: MouseEvent) => void;
  };
  className: string;
};

export class Button extends Block {
  constructor(props: ButtonProps) {
    super('div', props);
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
