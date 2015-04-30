function MainNavigationController($scope,
                                  $state) {

  $scope.$state = $state;
}

export default ['$scope', '$state', MainNavigationController];
