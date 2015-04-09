function DungeonsService($http,
                         CONFIG,
                         LookupService) {

  return {
    all: function() {
      return LookupService.all('dungeons');
    },

    find: function(id) {
      return LookupService.find('dungeons', id);
    }
  };
}

export default ['$http', 'CONFIG', 'LookupService', DungeonsService];
