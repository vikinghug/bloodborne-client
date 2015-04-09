export default angular.module('Bloodborne.Stat', [
  'Bloodborne.Components'
])
.controller('StatController', ['$scope', 'LookupService', function(
  $scope,
  LookupService) {

  $scope.statValue = "--";

  $scope.add = function() {
    console.log($scope.statKey);

    LookupService.all($scope.statKey).then(function(data) {
      console.log(data);
    });
  };

  $scope.subtract = function(stat) {

    LookupService.all($scope.statKey).then(function(data) {
      console.log(data);
    });
  };
}])
.directive('stat', function() {
  return {
    scope: {
      build: "=build",
      statValue: "=statValue"
    },
    templateUrl: '/builds/stat/stat.html',
    replace: true,
    controller: 'StatController',
    controllerAs: 'ctrl',
    link: function($scope, element, attrs) {
      $scope.statName = attrs.statName;
      $scope.statKey = attrs.statKey;
    }
  };
}); 
