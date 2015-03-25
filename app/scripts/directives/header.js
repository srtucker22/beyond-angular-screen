(function(){
  'use strict';

  /**
  * Directive: Header
  */

  angular.module('demoApp').directive('modHeader', modHeaderDirective);

  modHeaderDirective.$inject = ['$location'];

  function modHeaderDirective($location){
    return {
      templateUrl: 'views/modules/header.html',
      restrict: 'E',
      transclude: true,
      link: function(scope, elem, attrs){

        scope.page = $location.path();

      }
    };
  }

})();