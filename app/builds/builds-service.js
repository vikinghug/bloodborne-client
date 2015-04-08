import lookupService from '../components/lookup/lookup-service';

export default function(
  $http,
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
