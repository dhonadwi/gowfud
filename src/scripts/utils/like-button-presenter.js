import swal from 'sweetalert';
// import FavoriteRestaurantIdb from '../data/restaurants-idb';
import { createLikeRestaurantButtonTemplate, createUnlikeRestaurantButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestaurant, restaurant }) {
    this.likeButtonContainer = likeButtonContainer;
    this.restaurant = restaurant;
    this.favoriteRestaurant = favoriteRestaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.restaurant;
    if (await this.isRestaurantExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isRestaurantExist(id) {
    // const restaurant = await FavoriteRestaurantIdb.getRestaurant(id);
    const restaurant = await this.favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = createLikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.favoriteRestaurant.putRestaurant(this.restaurant);
      swal('Thank you!', 'Your favorite Resto has been saved!', 'success');
      this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = createUnlikeRestaurantButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this.favoriteRestaurant.deleteRestaurant(this.restaurant.id);
      swal('Ouch Noo!', 'Your favorite Resto has been removed!', 'warning');
      this.renderButton();
    });
  },
};

export default LikeButtonPresenter;
