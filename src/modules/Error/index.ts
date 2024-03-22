import { tmpl } from './error.tmpl';
import type { LinkProps } from '../../components/Link';
import './error.sass';
import Block from '../../utils/Block';
import { Button } from '../../components/Button';
import Router from '../../utils/Router';

type ErrorProps = {
  errorNumber: number;
  errorText: string;
  link: LinkProps;
};

export class Error extends Block {
  constructor(props: ErrorProps) {
    super(props);
  }

  init() {
    this.children.linkButton = new Button({
      text: this.props.link.text,
      events: {
        click: () => {
          Router.go(this.props.link.to);
        },
      },
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
