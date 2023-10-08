import Handlebars from 'handlebars';
import {tmpl} from './index.tmpl'

const ServerErrorPage = () => {
  return Handlebars.compile(tmpl)({});
}

export default ServerErrorPage;
