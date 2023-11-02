import Handlebars from 'handlebars';
import {tmpl} from './index.tmpl'

const CustomAvatar = () => {
  return Handlebars.compile(tmpl)({});
}

export default CustomAvatar;
