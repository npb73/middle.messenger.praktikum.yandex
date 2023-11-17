import { tmpl } from './homePage.tmpl.ts';
import Block from '../../utils/Block';

import './homepage.sass';

export class HomePage extends Block {
  constructor() {
    super('div', {});
    this.render();
  }

  render() {
    return this.compile(tmpl, {});
  }
}
