import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class Restaurants {
  static async getAll() {
    const response = await fetch(API_ENDPOINT.GETALL);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async getDetail(id) {
    const response = await fetch(API_ENDPOINT.GETDETAIL(id));
    return response.json();
  }

  static async postReview(review) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(review),
    };
    const response = await fetch(API_ENDPOINT.POSTREVIEW, options);
    return response.json();
  }
}

export default Restaurants;
