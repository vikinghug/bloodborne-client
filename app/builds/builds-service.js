import lookupService from '../components/lookup/lookup-service';

function BuildsService($http,
                       CONFIG,
                       LookupService) {

  return {
    all: function() {
      return LookupService.all('builds');
    },

    find: function(id) {
      return LookupService.find('builds', id);
    }
  };
}


export default ['$http', 'CONFIG', 'LookupService', BuildsService];
