import HomePage from '../views/pages/home';
import DetailPage from '../views/pages/detail';
import AboutPage from '../views/pages/about';
import favoritePage from '../views/pages/favorites';

const routes = {
  '/': HomePage,
  '/home': HomePage,
  '/detail/:id': DetailPage,
  '/about': AboutPage,
  '/favorite': favoritePage,
};

export default routes;
