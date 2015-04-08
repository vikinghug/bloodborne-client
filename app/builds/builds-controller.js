export default function(
  $scope,
  $stateParams,
  BuildsService,
  CONFIG) {

  BuildsService.all().then(function(data) {
    $scope.builds = data;
  });

  if ($stateParams.id !== undefined) {
    BuildsService.find($stateParams.id).then(function(data) {
      $scope.build = data;
      console.log($scope.build);
    });
  }
} 
