import Handlebars from 'handlebars';
import {tmpl} from './index.tmpl'

const HomePage = () => {
  return Handlebars.compile(tmpl)({});
}

export default HomePage;