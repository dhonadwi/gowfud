const assert = require('assert');
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.see('You haven\'t liked any Resto', 'h3');
});

Scenario('liking restaurant', async ({ I }) => {
  I.see('You haven\'t liked any Resto', 'h3');
  I.amOnPage('/');  
  // pause();
  I.seeElement('.card a');
  // I.click(locate('.card a').first());
  const firstRestaurant = locate('.card h3').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);

  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.click('.swal-button');
  
  I.amOnPage('/#/favorite');
  
  I.seeElement('#items');
  // pause();

  const likedRestaurantName = await I.grabTextFrom('.restaurants h3');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);

})
