import NotFoundPage from './src/pages/NotFoundPage';
import './style.sass'

const ROUTES = (route) => {
  switch(route){
    default: return NotFoundPage();
    // case "/": return NotFoundPage();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('#root');

  if (root) {
    root.innerHTML = ROUTES(window.location.pathname);
  } 
    
})