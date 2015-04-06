export default function(
    $scope,
    $stateParams,
    BuildService,
    CONFIG) {

  BuildService.all().then(function(data) {
    $scope.builds = data;
  });

  if ($stateParams.id !== undefined) {
    BuildService.find($stateParams.id).then(function(data) {
      $scope.build = data;
      console.log($scope.build);
    });
  }
} 
