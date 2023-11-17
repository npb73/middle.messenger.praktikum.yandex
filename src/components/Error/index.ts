import { tmpl } from './error.tmpl';
import './style.sass';
import Block from '../../utils/Block';
import { Link } from '../Link';
import type { LinkProps } from '../Link';

type ErrorProps = {
  errorNumber: number;
  errorText: string;
  className: string;
  link: LinkProps;
};

export class Error extends Block {
  constructor(props: ErrorProps) {
    super('div', props);
  }

  init() {
    this.children.link = new Link({
      to: this.props.link.to,
      text: this.props.link.text,
      className: this.props.link.className,
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
