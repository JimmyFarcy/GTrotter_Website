'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */
/* This is a simple test file, you can create your own file for your owns requirements*/

describe('gTrotter', function() {

  it('should redirect index.html to index.html#/projet', function() {
    browser.get('app/index.html');
    browser.getLocationAbsUrl().then(function(url) {
        expect(url.split('#')[1]).toBe('/projet');
      });
  });

  it('should redirect index.html to contact.html', function() {
    browser.get('contact');
      });
  });


});
