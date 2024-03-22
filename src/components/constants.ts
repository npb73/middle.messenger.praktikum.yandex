import { validator } from '../utils/Validator';
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

export const registrationInput = [
  {
    type: 'email',
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
    placeholder: 'last_name',
    name: 'second_name',
    events,
  },
  {
    type: 'tel',
    placeholder: 'phone',
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
    placeholder: 'password (again)',
    name: 'passwordTwo',
    events,
  },
];

export const profileFieldValues = [
  {
    fieldName: 'Почта',
    fieldValue: 'email',
    name: 'email',
    events,
  },
  {
    fieldName: 'Логин',
    fieldValue: 'login',
    name: 'login',
    events,
  },
  {
    fieldName: 'Имя',
    fieldValue: 'first_name',
    name: 'first_name',
    events,
  },
  {
    fieldName: 'Фамилия',
    fieldValue: 'second_name',
    name: 'second_name',
    events,
  },
  {
    fieldName: 'Имя в чате',
    fieldValue: 'display_name',
    name: 'display_name',
    events,
  },
  {
    fieldName: 'Телефон',
    fieldValue: 'phone',
    name: 'phone',
    events,
  },
];

export const changePasswordFieldValues = [
  {
    fieldName: 'Старый пароль',
    fieldValue: 'oldPassword',
    name: 'oldPassword',
    events,
  },
  {
    fieldName: 'Новый пароль',
    fieldValue: 'newPassword',
    name: 'newPassword',
    events,
  },
  {
    fieldName: 'Повторите новый пароль',
    fieldValue: 'newPasswordTwo',
    name: 'newPasswordTwo',
    events,
  },
];

export const RESOURCES_URL = 'https://ya-praktikum.tech/api/v2/resources';
