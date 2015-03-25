
'use strict';

describe('Controller: NewsCtrl', function () {

  // load the controller's module
  beforeEach(module('demoApp'));
  var NewsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q) {
    scope = $rootScope.$new();

    var mockLoader = {
      getJson: function(url){
        var defer = $q.defer();
        defer.resolve({results: url, count: 1});
        return defer.promise;
      }
    };

    NewsCtrl = $controller('NewsCtrl', {
      $scope: scope,
      loader: mockLoader
    });
  }));

  it('initialize the controller, get articles from json', function () {
    scope.$digest();
    expect(NewsCtrl.articles).toBe('/scripts/json/articles.json');
    expect(NewsCtrl.maxArticles).toBe(1);
  });

  it('should increase the number of viewable articles', function () {
    NewsCtrl.showMore = true;
    NewsCtrl.viewableArticleCount = 7;

    NewsCtrl.showMoreArticles();

    expect(NewsCtrl.viewableArticleCount).toBe(NewsCtrl.maxArticles);
    expect(NewsCtrl.showMore).toBe(false);
  });
});