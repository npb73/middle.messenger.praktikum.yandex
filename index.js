import NotFoundPage from './src/pages/NotFoundPage';
import ServerErrorPage from './src/pages/ServerErrorPage';
import LoginPage from './src/pages/LoginPage';
import './style.sass'

const ROUTES = (route) => {
  switch(route){
    case "/404": return NotFoundPage();
    case "/500": return ServerErrorPage();
    case "/login": return LoginPage();
    default: return NotFoundPage();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');

  if (root) {
    root.innerHTML = ROUTES(window.location.pathname);
  } 
    
})