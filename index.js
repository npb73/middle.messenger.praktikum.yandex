import NotFoundPage from './src/pages/NotFoundPage';
import ServerErrorPage from './src/pages/ServerErrorPage';
import LoginPage from './src/pages/LoginPage';
import SignupPage from './src/pages/SignupPage';
import HomePage from './src/pages/HomePage';

import './style.sass'


const ROUTES = (route) => {
  switch(route){
    case "/4044": return NotFoundPage();
    case "/500": return ServerErrorPage();
    case "/login": return LoginPage();
    case "/signup": return SignupPage();
    case "/home": return HomePage();
    default: return NotFoundPage();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');

  if (root) {
    root.innerHTML = ROUTES(window.location.pathname);
  } 
    
})