function DungeonsController($scope,
                            $stateParams,
                            DungeonsService,
                            CONFIG) {

  DungeonsService.all().then(function(data) {
    $scope.dungeons = data;
  });

  if ($stateParams.id !== undefined) {
    DungeonsService.find($stateParams.id).then(function(data) {
      $scope.dungeon = data;
      console.log($scope.dungeon);
    });
  }
}


export default ['$scope', '$stateParams', 'DungeonsService', 'CONFIG', DungeonsController];
