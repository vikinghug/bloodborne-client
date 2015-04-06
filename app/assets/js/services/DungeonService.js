var _ = require('underscore');

export default function($http, CONFIG) {
  return {
    all: function() {
      return $http.get('/data/dungeons.js')
      .then(function(res) {
        return res.data;
      });
    },

    find: function(id) {
      return $http.get('/data/dungeons.js')
      .then(function(res) {
        var foo = _.findWhere(res.data, {id: parseInt(id)});
        console.log(id, res.data, foo);
        return foo;
      });
    }
  };
}
