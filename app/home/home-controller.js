function HomeController($scope,
                        $auth) {
  // $scope.login = function() {
  //   $auth.submitLogin($scope.loginForm)
  //   .then(function(resp) {
  //     console.log('then: ', resp);
  //   })
  //   .catch(function(resp) {
  //     console.log('catch: ', resp);
  //   });
  // };

  $scope.registrationSubmit = function(form) {
    $auth.submitRegistration(form)
      .then(function(resp) {
        $auth.persistData('auth_headers', {
          Authorization: 'Bearer ' + resp.token,
        });
      })
      .catch(function(resp) {
        console.log('catch', resp);
      });
  }

}


export default ['$scope', '$auth', HomeController];
