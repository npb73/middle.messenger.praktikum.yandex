import { tmpl } from './input.tmpl';
import './input.sass';
import Block from '../../utils/Block';

export type InputProps = {
  placeholder: string;
  type: string;
  name: string;
  events: {
    blur?: () => void;
  };
};

export class Input extends Block {
  inputParam: { name: string; elementVal: string; isValid: boolean };

  constructor(props: InputProps) {
    super('div', props);
    this.inputParam = {
      name: this.props.name,
      elementVal: this.element!.querySelector('input')!.value,
      isValid: false,
    };
  }

  get inputValue() {
    return this.inputParam;
  }

  setInputVal(val: string) {
    this.inputParam.elementVal = val;
  }

  setInputIsValid(param: boolean) {
    this.inputParam.isValid = param;
  }

  _addEvents() {
    Object.keys(this.props.events).forEach(eventName => {
      this.element!.querySelector('input')!.addEventListener(eventName, e => {
        this.setInputVal((e.target as HTMLInputElement).value);
        this.props.events[eventName].apply(this);
      });
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
