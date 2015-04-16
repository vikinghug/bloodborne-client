var _ = require('underscore');

export default angular.module('Bloodborne.Components', [])
.service('LookupService', ['$http', 'CONFIG', function($http, CONFIG) {
  return {
    all: function(resource) {
      return $http.get(CONFIG.serverUrl + resource)
      .then(function(res) {
        return res.data;
      });
    },

    find: function(resource, id) {
      return $http.get(CONFIG.serverUrl + resource + '/' + id)
      .then(function(res) {
        return res.data;
      });
    }
  };
}]);
