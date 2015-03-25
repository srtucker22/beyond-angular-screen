'use strict';

app.controller('NewsCtrl', [
	'$scope',
	'loader',

	function($scope, loader) {
    var vm = this;
    vm.initialLoad = 3;
    vm.showMore = true;
    vm.showMoreArticles = showMoreArticles;

    activate();

    // activate the controller
    function activate(){
      // get json file with articles
      loader.getJson('/scripts/json/articles.json').then(function(res){
        vm.articles = res.results;
        vm.maxArticles = res.count; // total articles available
        vm.viewableArticleCount = vm.initialLoad; // total viewable articles
        console.log(vm.articles);
      }, function(err){
        console.log(err);
      });
    }

    // show all articles
    function showMoreArticles(){
      vm.showMore = false;
      vm.viewableArticleCount = vm.maxArticles;
    }
	}
]);
