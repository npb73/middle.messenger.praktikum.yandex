import { tmpl } from './input.tmpl';
import './input.sass';
import Block from '../../utils/Block';
import { validator } from '../../utils/Validation';

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

    // Немного намудрил с архитектурой, попробую исправить в следующем спринте
    // пока итог только такой, без использования _addEvents
    const inputElement = this.element!.querySelector('input');
    if (inputElement) {
      inputElement.addEventListener('blur', e => {
        this.setInputVal((e.target as HTMLInputElement).value);
        const { isValid, errorText } = validator(inputElement.name, (e.target as HTMLInputElement).value);
        this.setInputIsValid(isValid);
        this.element!.querySelector('.errorText')!.textContent = errorText;
      });
    }
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

  render() {
    return this.compile(tmpl, this.props);
  }
}
