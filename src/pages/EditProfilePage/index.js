import Handlebars from 'handlebars';
import {tmpl} from './index.tmpl'

import CustomInput from "../../components/CustomInput"
import CustomButton from "../../components/CustomButton"
import CustomAvatar from "../../components/CustomAvatar"


const EditProfilePage = () => {
  return Handlebars.compile(tmpl)({
    avatar: CustomAvatar({}),
    email: CustomInput({placeholder: 'new email', type: "text", name: "email"}),
    username: CustomInput({placeholder: 'new username', type: "text", name: "login"}),
    displayName: CustomInput({placeholder: 'new display name', type: "text", name: "display_name"}),
    firstname: CustomInput({placeholder: 'new firstname', type: "text", name: "first_name"}),
    lastname: CustomInput({placeholder: 'new lastname', type: "text", name: "second_name"}),
    phone: CustomInput({placeholder: 'new phone', type: "text", name: "phone"}),
    button: CustomButton({buttonName: "save"})
  })
}

export default EditProfilePage;
