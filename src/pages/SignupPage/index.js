import Handlebars from 'handlebars';
import {tmpl} from './index.tmpl'

import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"


const SignupPage = () => {
  return Handlebars.compile(tmpl)({
    email: CustomInput({placeholder: 'email', type: "text", name: "email"}),
    username: CustomInput({placeholder: 'username', type: "text", name: "username"}),
    firstname: CustomInput({placeholder: 'firstname', type: "text", name: "firstname"}),
    lastname: CustomInput({placeholder: 'lastname', type: "text", name: "lastname"}),
    phone: CustomInput({placeholder: 'phone', type: "text", name: "phone"}),
    password: CustomInput({placeholder: 'password', type: "password", name: "password"}),
    passwordAccept: CustomInput({placeholder: 'password (again)', type: "password", name: "passwordAccept"}),
    button: CustomButton({buttonName: "create"})
  })
}

export default SignupPage;