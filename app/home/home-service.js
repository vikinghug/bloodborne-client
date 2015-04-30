function HomeService($http,
                     LookupService) {

  return {
    all: function() {
      return LookupService.all('home');
    },

    find: function(id) {
      return LookupService.find('home', id);
    }
  };
}

export default ['$http', 'LookupService', HomeService];
