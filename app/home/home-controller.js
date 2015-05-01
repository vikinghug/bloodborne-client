function HomeController($scope, $auth) {
  $scope.registrationSubmit = function(form) {
    $auth.submitRegistration(form)
      .then(function(resp) {
        $auth.persistData('auth_headers', {
          Authorization: 'Bearer ' + resp.token,
        });

        alert('Registered (and logged in)!');
      })
      .catch(function(resp) {
        console.log('catch', resp);
      });
  }

}


export default ['$scope', '$auth', HomeController];
