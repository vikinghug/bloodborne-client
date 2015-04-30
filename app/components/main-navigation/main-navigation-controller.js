function MainNavigationController($scope,
                                  $state,
                                  $auth) {

  $scope.$state = $state;

}

export default ['$scope', '$state', '$auth', MainNavigationController];
