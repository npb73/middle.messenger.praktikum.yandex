const validRules = {
  first_name: '^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z-]+$',
  second_name: '^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z-]+$',
  login: '^(?=.*[a-z])[a-zA-Z0-9_-]{3,20}$',
  email: '^[a-z0-9._%$#+-]+@[a-z0-9]*[a-z]+.[a-z]+$',
  password: '^(?=.*[A-Z])(?=.*[0-9]).{8,40}$',
  phone: '^[0-9+][0-9]{9,14}$',
  display_name: '^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z-]+$',
  message: '[^s]',
  number: '/^d+$/',
  default: '[^s]',
};

const errorText = {
  name: 'Первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов',
  login: '3-20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов',
  email: 'Латиница, может включать цифры и спецсимволы',
  password: '8-40 символов, обязательно хотя бы одна заглавная буква и цифра',
  phone: '10-15 символов, состоит из цифр, может начинается с плюса',
  displayName: 'Первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов',
  message: 'Не должно быть пустым',
  number: 'Должны быть только цифры',
  default: 'Не должно быть пустым',
};

function valueForReg(inputName: string): { error: string; rules: string } {
  switch (inputName) {
    case 'first_name':
      return { error: errorText.name, rules: validRules.first_name };
    case 'second_name':
      return { error: errorText.name, rules: validRules.second_name };
    case 'login':
      return { error: errorText.login, rules: validRules.login };
    case 'email':
      return { error: errorText.email, rules: validRules.email };
    case 'phone':
      return { error: errorText.phone, rules: validRules.phone };
    case 'password':
      return { error: errorText.password, rules: validRules.password };
    case 'passwordYet':
      return { error: errorText.password, rules: validRules.password };
    case 'oldPassword':
      return { error: errorText.password, rules: validRules.password };
    case 'oldPasswordTwo':
      return { error: errorText.password, rules: validRules.password };
    case 'newPasswordTwo':
      return { error: errorText.password, rules: validRules.password };
    case 'newPassword':
      return { error: errorText.password, rules: validRules.password };
    case 'display_name':
      return { error: errorText.displayName, rules: validRules.display_name };
    case 'message':
      return { error: errorText.message, rules: validRules.message };
    case 'addUser':
      return { error: errorText.number, rules: validRules.number };
    default:
      return { error: errorText.default, rules: validRules.default };
  }
}

export function validator(inputName: string, inputValue: string): { isValid: boolean; errorText: string } {
  const { error, rules } = valueForReg(inputName);
  const regIn = new RegExp(rules, 'i');
  const isValid = regIn.test(inputValue);
  return { isValid, errorText: isValid ? '' : error };
}
