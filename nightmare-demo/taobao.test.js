var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

/*
Search failed: Cannot read property 'textContent' of null
 */

nightmare
  .goto('https://www.taobao.com/')
  .type('#q', '电视机')
  .click('form[action*="/search"] [type=submit]')
  .wait(3000)
  .exists('#spulist-grid')
//  .wait('#spulist-grid')
  .evaluate(function () {
    return document.querySelector('#spulist-grid .grid-item .info-cont')
      .textContent.trim();
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });
