import FavoriteRestaurantIdb from '../../data/restaurants-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const favoritePage = {
  async render() {
    return `<div id='items'>
      <h2>Your Liked Resto</h2>
      <div id='likedResto' class='' style='color:red; width:100%;'>
      <h3 style='margin: 0 auto; text-align: center'>You haven't liked any Resto</h3>
      </div>
      <div id='restaurants' class='restaurants'>
      </div></div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restoContainer = document.querySelector('#restaurants');
    if (restaurants.length >= 1) {
      document.querySelector('#likedResto').style.display = 'none';
    }
    restaurants.forEach((resto) => {
      restoContainer.innerHTML += createRestaurantItemTemplate(resto);
    });
  },
};

export default favoritePage;
