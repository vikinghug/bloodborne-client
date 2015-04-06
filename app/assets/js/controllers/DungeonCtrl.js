export default function(
    $scope,
    $http,
    CONFIG) {

  $http.get('/data/dungeons.js')
  .then(function(res) {
    $scope.dungeons = res.data;
  });
} 

