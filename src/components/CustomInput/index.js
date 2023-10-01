import Handlebars from 'handlebars';
import {tmpl} from './index.tmpl'

const CustomInput = (props) => {
  return Handlebars.compile(tmpl)({
    placeholder: props.placeholder
  });
}

export default CustomInput;