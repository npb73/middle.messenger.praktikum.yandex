import Handlebars from 'handlebars';
import {tmpl} from './index.tmpl'

import CustomInput from "../../components/CustomInput"

const LoginPage = () => {
  return Handlebars.compile(tmpl)({
    login: CustomInput({placeholder: 'login', name: 'login', type: 'text'}),
    password: CustomInput({placeholder: 'password', name: 'password', type: 'password'})
  })
}

export default LoginPage;