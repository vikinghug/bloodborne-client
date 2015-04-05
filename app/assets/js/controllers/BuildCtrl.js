export default function(
    $scope,
    $http,
    CONFIG) {

  $http.get('/data/builds.js')
  .then(function(res) {
    $scope.builds = res.data;
  });
} 
