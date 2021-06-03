import CONFIG from '../../globals/config';

const menus = (menu) => {
  let restoMenus = '<div class=\'cardItem\'><ul>';
  menu.forEach((item) => {
    restoMenus += `<li tabindex='0'>${item.name}</li>`;
  });
  restoMenus += '</ul></div>';
  return restoMenus;
};
const reviews = (review) => {
  let restoReviews = '';
  review.forEach((people) => {
    restoReviews
      += `<div class='cardItem'>
<h4 tabindex='0'>${people.name}</h4>
<p tabindex='0'>${people.review}</p>
<p tabindex='0'>${people.date}</p>
</div>`;
  });
  return restoReviews;
};

const createRestaurantDetailTemplate = (result) => {
  const nameResto = result.restaurant.name;
  const review = reviews(result.restaurant.customerReviews);
  const menuFood = menus(result.restaurant.menus.foods);
  const menuDrink = menus(result.restaurant.menus.drinks);
  const { categories } = result.restaurant;
  const categoryOne = categories[0].name;
  let categoryTwo = '';

  if (categories.length > 1) {
    categoryTwo = `- ${categories[1].name}`;
  }
  let rating = ``;
  for (let i = 0; i < Math.floor(result.restaurant.rating); i++) {
    rating += `<i class="fa fa-star"></i>`;
  }
  return `<div class='detailContainer'>
<div class='detailItem detailImg'><img class="lazyload" crossorigin='anonymous' data-src='${CONFIG.BASE_IMAGE_URL_SMALL + result.restaurant.pictureId}' alt='Picture Resto' width='100%'><h3 tabindex='0'>${nameResto}</h3><p tabindex='0'>${result.restaurant.address}, ${result.restaurant.city}</p><p tabindex='0';>Rating: <span style="color: orange">${rating}</span></p>
<p tabindex='0'>Category : ${categoryOne} ${categoryTwo}</p>
</div>
<div tabindex='0' class='detailItem'>Foods
<p>${menuFood}</p>
</div>
<div tabindex='0' class='detailItem detailDrinks'>Drinks
<p>${menuDrink}</p>
</div>
<div tabindex='0' class='detailItem detailReview'>Reviews${review}</div>
<div tabindex='0' class='detailItem'><div class='cardItem'>
</form>
<input type='text' id='inputName' name='inputName' placeholder='  Yourname'>
<input type='text' id='inputReview' name='inputReview' placeholder='  Your Review'>

<button type='submit' id='saveButton'>Submit</button>
</form>
</div>
</div>
</div>
`;
};

const createRestaurantItemTemplate = (restaurant) => `
<div class='card' style='position: relative'><a href="${`#/detail/${restaurant.id}`}">
<img class="lazyload" crossorigin='anonymous' data-src='${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}' alt='Picture Resto' style='border-radius: 5px; width: 100%' ></a>
<div style='background: #334443; position: absolute; top: 20px; padding: 5px; background-color: white;border-radius: 5px; width:50%'>
<a href="${`#/detail/${restaurant.id}`}"><h3>${restaurant.name}</h3></a>
<a href="${`#/detail/${restaurant.id}`}"><p>${restaurant.city}</p></a>
</div>
<a href="${`#/detail/${restaurant.id}`}"><p>Rating: ${restaurant.rating}</p></a>
<a href="${`#/detail/${restaurant.id}`}"><p>${restaurant.description}</p></a></a>
</div>
  `;

const createLikeRestaurantButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true" crossorigin="anonymous"></i>
</button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true" crossorigin="anonymous"></i>
</button>
`;

const creatAboutTemplate = () => `
<div id="items">
<h2>About Us</h2>
<div class="wrapper">
  <div class="box1">
    <h3 tabindex="0">Welcome to GOWFUD</h3>
    <p tabindex="0">We serve Better</p>
  </div>
  <div class="box2">
    <img src="./images/hero-image.jpg" alt="Pic about Us" width="100%">
  </div>
  <div class="box3">
    <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est facilis ipsam quia esse laudantium eos? Id,
      tempora non maiores a eveniet minima ex magnam omnis laborum, eius nulla deleniti minus.</p>
  </div>
  <div class="box4">
    <p tabindex="0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est facilis ipsam quia esse laudantium eos? Id,
      tempora non maiores a eveniet minima ex magnam omnis laborum, eius nulla deleniti minus.</p>
  </div>
  <div class="box5">
    <p tabindex="0">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum
      sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies
      nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
      aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
      felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
      eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante,
      dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</p>
  </div>
  <div class="box6"><a href="https://www.linkedin.com/in/dhona-dwi/">
      <img src="../icons/linkedin_icon.png" alt="linkedin_icon"></a>
    <h4 tabindex="0">Dhona Dwi</h4>
  </div>
  <div class="box7"><a href="https://instagram.com/dhona.dwi">
  <img src="../icons/instagram_icon.png" alt="linkedin_icon"></a>
    <h4 tabindex="0">Dhona Dwi</h4>
  </div>
  <div class="box8">
    <a href="https://facebook.com/odonslank">
    <img src="../icons/facebook_icon.png" alt="linkedin_icon"></a>
    <h4 tabindex="0">Dhona Dwi</h4>
  </div>
</div>
</div>`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  creatAboutTemplate,
};
