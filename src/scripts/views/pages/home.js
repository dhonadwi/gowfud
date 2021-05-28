import Restaurants from '../../data/restaurants-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const HomePage = {
  async render() {
    return `
    <h2  style='display: none' id='welcomeHome'>Welcome!</h2>
    <div id='items'>
    <div class='restaurants'>
    <h3 id='loadingBar'>Please Wait...</h3>
    </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.restaurants');
    try {
      const restaurants = await Restaurants.getAll();
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      document.querySelector('#loadingBar').style.display = 'none';
      document.querySelector('#welcomeHome').style.display = 'block';
    } catch (error) {
      document.querySelector('#loadingBar').style.display = 'none';
      // document.querySelector('#welcomeHome').style.display = 'block';
      restaurantsContainer.innerHTML += '<h4 style=\'color: red; margin: 0 auto;\'>Please check your Internet Connection</h4>';
    }
  },
};

export default HomePage;
