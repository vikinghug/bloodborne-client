function MainNavigationController($scope,
                                  $state,
                                  CONFIG) {

  $scope.$state = $state;
}

export default ['$scope', '$state', 'CONFIG', MainNavigationController];
