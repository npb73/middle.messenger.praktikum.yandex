import Handlebars from 'handlebars';
import {tmpl} from './index.tmpl'

import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"


const EditPasswordPage = () => {
  return Handlebars.compile(tmpl)({
    oldPassword: CustomInput({placeholder: 'old password', type: "text", name: "oldPassword"}),
    newPassword: CustomInput({placeholder: 'new password', type: "text", name: "newPassword"}),
    button: CustomButton({buttonName: "save password"})
  })
}

export default EditPasswordPage;
