import Handlebars from 'handlebars';
import {tmpl} from './index.tmpl'

const CustomInput = (props) => {
  return Handlebars.compile(tmpl)({
    placeholder: props.placeholder,
    name: props.name,
    type: props.type
  });
}

export default CustomInput;
