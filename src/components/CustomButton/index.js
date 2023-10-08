import Handlebars from 'handlebars';
import {tmpl} from './index.tmpl'

const CustomInput = (props) => {
  return Handlebars.compile(tmpl)({
    buttonName: props.buttonName
  });
}

export default CustomInput;
