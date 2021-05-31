import urlParser from '../../routes/url-parser';
import Restaurants from '../../data/restaurants-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import SaveButtonInitiator from '../../utils/save-button-initiator';

const DetailPage = {
  async render() {
    return `
    <div id='items'>
      <div id='restaurant'>
      <div class="spinner">
        <div class="rect1"></div>
        <div class="rect2"></div>
        <div class="rect3"></div>
        <div class="rect4"></div>
        <div class="rect5"></div>
        <h3 id='loadingBar'>Loading...</h3>
      </div>
      </div>
      <div id="likeButtonContainer"></div></div>
    `;
  },

  async afterRender() {
    const restaurantContainer = document.querySelector('#restaurant');
    try {
      const url = urlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await Restaurants.getDetail(url.id);
      const {
        id, name, address, city, rating, customerReviews, description, pictureId,
      } = restaurant.restaurant;
      restaurantContainer.innerHTML = await createRestaurantDetailTemplate(restaurant);

      await LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id,
          name,
          address,
          city,
          rating,
          foods: restaurant.restaurant.menus.foods,
          drinks: restaurant.restaurant.menus.drinks,
          customerReviews,
          description,
          pictureId,
        },
      });
      await SaveButtonInitiator.init({
        saveButton: document.querySelector('#saveButton'),
        inputName: document.querySelector('#inputName'),
        inputReview: document.querySelector('#inputReview'),
        id: restaurant.restaurant.id,
      });
    } catch (error) {
      restaurantContainer.innerHTML = '<h4 style=\'color: red; margin: 0 auto;\'>Please check your Internet Connection</h4>';
    }
  },
};

export default DetailPage;
