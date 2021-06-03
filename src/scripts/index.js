import 'regenerator-runtime';
import '../styles/styles.css';
import '../styles/responsive.css';
import '../styles/about.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  home: document.querySelector('#menuHome'),
  favorite: document.querySelector('#menuFavorite'),
  about: document.querySelector('#menuAbout'),
});

window.addEventListener('hashchange', () => {
  const page = window.location.hash.slice(1);
  if (page === 'items') return;
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
