const assert = require('assert');
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('liking restaurant', async ({ I }) => {
  I.see('You haven\'t liked any Resto', 'h3');
  I.amOnPage('/');
  I.seeElement('.restoItem a');
  const firstRestaurant = locate('.restoItem h3').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.click('.swal-button');
  I.amOnPage('/#/favorite');
  I.seeElement('#items');
  const likedRestaurantName = await I.grabTextFrom('.restaurants h3');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('unliking restaurant', async ({ I }) => {
  I.see('You haven\'t liked any Resto', 'h3');
  I.amOnPage('/');
  I.seeElement('.restoItem a');
  I.click(locate('.restoItem a').first());
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.click('.swal-button');
  I.amOnPage('/#/favorite');
  I.seeElement('#items');
  I.click('.restoItem a');
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.click('.swal-button');
});