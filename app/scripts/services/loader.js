(function(){
  'use strict';

  /**
  * Loader :: Loads a json file
  */

  angular.module('demoApp').factory('loader', loader);

  loader.$inject = ['$http', '$q'];

  function loader($http, $q){
    return {
      getJson : getJson
    };

    function getJson(url){
      var defer = $q.defer();

      $http.get(url).then(function(res){
        if(res && res.data){
          defer.resolve(res.data);
        }else{
          defer.reject("no data found");
        }
      }, function(err){
        defer.reject(err);
      });

      return defer.promise;
    }
  }

})();

