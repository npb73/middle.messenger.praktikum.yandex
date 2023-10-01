import Handlebars from 'handlebars';
import {tmpl} from './index.tmpl'

import CustomInput from "../../components/CustomInput"

const LoginPage = () => {
  return Handlebars.compile(tmpl)({
    login: CustomInput({placeholder: 'login'}),
    password: CustomInput({placeholder: 'password'})
  });
}

export default LoginPage;