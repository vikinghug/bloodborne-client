export default function(
    $scope,
    $stateParams,
    DungeonService,
    CONFIG) {

  DungeonService.all().then(function(data) {
    $scope.dungeons = data;
  });

  if ($stateParams.id !== undefined) {
    DungeonService.find($stateParams.id).then(function(data) {
      $scope.dungeon = data;
      console.log($scope.dungeon);
    });
  }
} 
