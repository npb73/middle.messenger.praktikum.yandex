import { validator } from '../utils/Validation';
import { Input } from './Input';

const events = {
  blur() {
    const inputInstance = this as unknown as Input;
    const { isValid, errorText } = validator(inputInstance.inputParam.name, inputInstance.inputParam.elementVal);
    inputInstance.element!.querySelector('.errorText')!.textContent = errorText;
    inputInstance.setInputIsValid(isValid);
  },
};

export const loginInput = [
  {
    type: 'text',
    placeholder: 'login',
    name: 'login',
    events,
  },
  {
    type: 'password',
    placeholder: 'password',
    name: 'password',
    events,
  },
];

export const signUpInput = [
  {
    type: 'text',
    placeholder: 'email',
    name: 'email',
    events,
  },
  {
    type: 'text',
    placeholder: 'login',
    name: 'login',
    events,
  },
  {
    type: 'text',
    placeholder: 'name',
    name: 'first_name',
    events,
  },
  {
    type: 'text',
    placeholder: 'second name',
    name: 'second_name',
    events,
  },
  {
    type: 'phone',
    placeholder: 'phone number',
    name: 'phone',
    events,
  },
  {
    type: 'password',
    placeholder: 'password',
    name: 'password',
    events,
  },
  {
    type: 'password',
    placeholder: 'repeat password',
    name: 'passwordTwo',
    events,
  },
];

export const profileFormInput = [
  {
    type: 'text',
    placeholder: 'email',
    name: 'email',
    events,
  },
  {
    type: 'text',
    placeholder: 'login',
    name: 'login',
    events,
  },
  {
    type: 'text',
    placeholder: 'name',
    name: 'first_name',
    events,
  },
  {
    type: 'text',
    placeholder: 'second-name',
    name: 'second_name',
    events,
  },
  {
    type: 'text',
    placeholder: 'displayed-name',
    name: 'display_name',
    events,
  },
  {
    type: 'text',
    placeholder: 'phone',
    name: 'phone',
    events,
  },
];

export const changePasswordFormInput = [
  {
    type: 'password',
    placeholder: 'old-password',
    name: 'oldPassword',
    events,
  },
  {
    type: 'password',
    placeholder: 'new-password',
    name: 'newPassword',
    events,
  },
  {
    type: 'password',
    placeholder: 'repeat',
    name: 'newPasswordRepeat',
    events,
  },
];
