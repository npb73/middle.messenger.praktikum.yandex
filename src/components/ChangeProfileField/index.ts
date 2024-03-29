import Block from '../../utils/Block';
import { tmpl } from './changeProfileField.tmpl';
import './changeProfileField.sass';

type ChangeProfileFieldProps = {
  fieldName: string;
  fieldValue: string;
  name: string;
  events: {
    blur?: () => void;
  };
};

export class ChangeProfileField extends Block {
  inputParam: { name: string; elementVal: string; isValid: boolean };

  constructor(props: ChangeProfileFieldProps) {
    super(props);
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
