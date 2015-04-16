function DungeonsController($scope,
                            $stateParams,
                            DungeonsService) {


  if ($stateParams.id === undefined) {

    DungeonsService.all().then(function(data) {
      $scope.dungeons = data;
    });

  } else {

    DungeonsService.find($stateParams.id).then(function(data) {
      $scope.activeDungeon = data;
    });
  }
}


export default ['$scope', '$stateParams', 'DungeonsService', DungeonsController];
