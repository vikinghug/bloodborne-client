var _ = require('underscore');

export default function($http, CONFIG) {
  return {
    all: function(resource) {
      return $http.get('/data/' + resource + '.js')
      .then(function(res) {
        return res.data;
      });
    },

    find: function(resource, id) {
      return $http.get('/data/' + resource + '.js')
      .then(function(res) {
        var foo = _.findWhere(res.data, {id: parseInt(id)});
        console.log(id, res.data, foo);
        return foo;
      });
    }
  };
}
