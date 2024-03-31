import { JSDOM } from 'jsdom';

const { window } = new JSDOM('<main id="root"></main>', {
  url: 'http://localhost:5173',
});

global.window = window;
global.document = window.document;
global.DocumentFragment = window.DocumentFragment;
