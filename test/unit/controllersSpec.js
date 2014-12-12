'use strict';

/* jasmine specs for controllers go here */
describe('GTrotter controllers', function() {

  // beforeEach(function(){
  //   this.addMatchers({
  //     toEqualData: function(expected) {
  //       return angular.equals(this.actual, expected);
  //     }
  //   });
  // });

  beforeEach(module('appGTrotter'));

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
