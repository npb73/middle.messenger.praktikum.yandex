import { NotFoundPage } from './src/pages/NotFoundPage';
import { ServerErrorPage } from './src/pages/ServerErrorPage';

import { Login } from './src/pages/LoginPage';
import { SignUp } from './src/pages/SignUp';

import { Profile } from './src/pages/Profile';
import { ChangePassword } from './src/pages/ChangePassword';

import { HomePage } from './src/pages/HomePage';

import './style.sass';
import './variables.sass';

const ROUTES = route => {
  switch (route) {
    case '/404':
      return new NotFoundPage();
    case '/500':
      return new ServerErrorPage();
    case '/login':
      return new Login();
    case '/signup':
      return new SignUp();
    case '/home':
      return new HomePage();
    case '/editprofile':
      return new Profile();
    case '/editpassword':
      return new ChangePassword();
    default:
      return new NotFoundPage();
  }
};

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');

  if (root) {
    root.append(ROUTES(window.location.pathname).render());
  }
});
