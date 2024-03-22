import { tmpl } from './input.tmpl';
import Block from '../../utils/Block';
import './style.sass';

export type InputProps = {
  name: string;
  events: {
    blur?: () => void;
  };
};

export class InputOnly extends Block {
  inputParam: { name: string; elementVal: string };

  constructor(props: InputProps) {
    super(props);
    this.inputParam = {
      name: this.props.name,
      elementVal: (this.element! as HTMLInputElement)!.value,
    };
  }

  get inputValue() {
    return this.inputParam;
  }

  setInputVal(val: string) {
    this.inputParam.elementVal = val;
  }

  _addEvents() {
    this.element!.addEventListener('blur', e => {
      this.setInputVal((e.target as HTMLInputElement).value);
    });
  }

  render() {
    return this.compile(tmpl, this.props);
  }
}
