function DungeonsService($http,
                         LookupService) {

  return {
    all: function() {
      return LookupService.all('dungeon');
    },

    find: function(id) {
      return LookupService.find('dungeon', id);
    }
  };
}

export default ['$http', 'LookupService', DungeonsService];
