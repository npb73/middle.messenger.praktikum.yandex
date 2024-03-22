import { NotFound } from './src/pages/NotFound';
import { Profile } from './src/pages/Profile';
import { Login } from './src/pages/Login';
import { Singin } from './src/pages/Singin';
import { FixProblem } from './src/pages/FixProblem';
import { ChangeProfile } from './src/pages/ChangeProfile';
import { ChangePassword } from './src/pages/ChangePassword';
import { Chat } from './src/pages/Chat';
import Router from './src/utils/Router';

import './style.sass';
import './variables.sass';

import AuthController from './src/controllers/AuthController';
import ChatsController from './src/controllers/ChatsController';

export enum Routes {
  LoginRoute = '/',
  RegistrationRoure = '/sign-up',
  ProfileRoure = '/profile',
  FixRoute = '/fix',
  ChangeProfileRoute = '/settings',
  ChangePasswordRoure = '/changepassword',
  ChatRoute = '/messenger',
  NotFoundRoute = '/404',
}

window.addEventListener('DOMContentLoaded', async () => {
  Router.use(Routes.LoginRoute, Login)
    .use(Routes.RegistrationRoure, Singin)
    .use(Routes.ProfileRoure, Profile)
    .use(Routes.FixRoute, FixProblem)
    .use(Routes.ChangeProfileRoute, ChangeProfile)
    .use(Routes.ChangePasswordRoure, ChangePassword)
    .use(Routes.ChatRoute, Chat)
    .use(Routes.NotFoundRoute, NotFound);

  let isProtectedRoute = true;

  if (
    window.location.pathname === Routes.LoginRoute ||
    window.location.pathname === Routes.RegistrationRoure ||
    window.location.pathname === Routes.NotFoundRoute ||
    window.location.pathname === Routes.FixRoute
  ) {
    isProtectedRoute = false;
  }

  try {
    await AuthController.fetchUser();
    await ChatsController.getChats();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.ProfileRoure);
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.LoginRoute);
    }
  }
});
