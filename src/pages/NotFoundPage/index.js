import Handlebars from 'handlebars';
import {tmpl} from './index.tmpl'

const NotFoundPage = () => {
  return Handlebars.compile(tmpl)({});
}

export default NotFoundPage;
