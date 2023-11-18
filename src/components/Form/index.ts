import { tmpl } from './form.tmpl';

import { Input } from '../Input';
import type { InputProps } from '../Input';

import { Link } from '../Link';
import type { LinkProps } from '../Link';

import Block from '../../utils/Block';
import { Button } from '../Button';
import { validator } from '../../utils/Validation';

import './form.sass';

type FormProps = {
  inputsArr: InputProps[];
  link: LinkProps;
  buttonText: string;
};

export class Form extends Block {
  constructor(props: FormProps) {
    super('div', props);
  }

  formValid() {
    const formResult: Record<string, string> = {};
    (this.children.inputFields as Input[]).forEach(el => {
      if (!el.inputParam.isValid) {
        const { errorText } = validator(el.inputParam.name, el.inputParam.elementVal);
        const copyEl = el;
        copyEl.element!.querySelector('.errorText')!.textContent = errorText;
      }
      if (el.inputParam.name !== 'passwordTwo') {
        formResult[el.inputParam.name] = el.inputParam.elementVal;
      }
    });

    // eslint-disable-next-line no-console
    console.log(formResult);
  }

  init() {
    this.children.link = new Link({ to: this.props.link.to, text: this.props.link.text, className: '' });
    this.children.button = new Button({
      text: this.props.buttonText,
      events: {
        click: e => {
          this.formValid();
          e.preventDefault();
        },
      },
      className: 'buttonContainer',
    });

    this.children.inputFields = this.props.inputsArr.map((inputProp: InputProps) => new Input(inputProp));
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
