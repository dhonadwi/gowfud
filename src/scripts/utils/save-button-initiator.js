import swal from 'sweetalert';
import Restaurants from '../data/restaurants-source';

const SaveButtonInitiator = {
  async init({
    saveButton, inputName, inputReview, id,
  }) {
    this.id = id;
    this.inputName = inputName;
    this.inputReview = inputReview;
    saveButton.addEventListener('click', () => {
      const reviewData = {
        id: this.id,
        name: this.inputName.value,
        review: this.inputReview.value,
      };
      this.postReview(reviewData);
    });
  },

  async postReview(review) {
    try {
      const success = await Restaurants.postReview(review);
      if (success.message === 'success') {
        swal('Thank you!', 'Your review has been submitted!', 'success');
      }
    } catch (error) {
      swal('Error!', 'Your review has not been submitted!', 'error');
    }
  },

};

export default SaveButtonInitiator;
