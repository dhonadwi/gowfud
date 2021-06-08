Feature('Posting Review');

Scenario('Posting review on detail restaurant', ({ I }) => {
  I.amOnPage('/');
  I.click(locate('.restoItem a').first());
  I.seeElement('#inputName');
  I.fillField('#inputName', 'dhona dwi');
  I.fillField('#inputReview', 'restorannya nyaman dan harganya murah')
  I.click('#saveButton');
  I.click('.swal-button');
});