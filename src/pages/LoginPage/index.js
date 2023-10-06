import Handlebars from 'handlebars';
import {tmpl} from './index.tmpl'

import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"


const LoginPage = () => {
  return Handlebars.compile(tmpl)({
    login: CustomInput({placeholder: 'login', type: "text", name: "login"}),
    password: CustomInput({placeholder: 'password', type: "password", name: "password"}),
    button: CustomButton({buttonName: "Log In"})
  })
}

export default LoginPage;