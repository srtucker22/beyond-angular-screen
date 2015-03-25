'use strict';

describe('Services: LoaderService', function () {

  // load the controller's module
  beforeEach(module('demoApp'));
  it('should return json data for the specified url or an error', function() {
    inject(function(loader, $httpBackend, $rootScope) {
      var err, err2;
      var res, res2;
      var response = 'cheese';

      $httpBackend.expect('GET', 'success').respond(200, response); // response with data
      $httpBackend.expect('GET', 'fail').respond(200);  // response without data

      loader.getJson('success').then(function(result) {
        res = result;
      },function(error){
        err = error;
      });

      loader.getJson('fail').then(function(result) {
        console.log(result);
        res2 = result;
      },function(error){
        err2 = error;
      });

      $rootScope.$digest();
      $httpBackend.flush();

      expect(res).toBe(response);
      expect(err).not.toBeDefined();
      expect(err2).toBe('no data found');
      expect(res2).not.toBeDefined();

      $httpBackend.verifyNoOutstandingRequest();
    });
  });
});