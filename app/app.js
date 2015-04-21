require('babel/polyfill');

import MainNavigation from './components/main-navigation/main-navigation';
import Home from './home/home';
import Builds from './builds/builds';
import Dungeons from './dungeons/dungeons';

angular.module('Bloodborne', [
  'ui.router',
  'angular.filter',
  'Bloodborne.Home',
  'Bloodborne.Builds',
  'Bloodborne.MainNavigation',
  'Bloodborne.Dungeons',
  'ng-token-auth'
])

.run(function() { })

.constant('CONFIG', {
  serverUrl: 'http://localhost:1337/'
})

.config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$authProvider', 'CONFIG', function($stateProvider, $urlRouterProvider, $httpProvider, $authProvider, CONFIG) {

  var handleResponse = function(res, $auth) {
    debugger;
    var foo = "thing";
    console.log(res);
    return res;
  }

  $httpProvider.defaults.withCredentials = true;

  $authProvider.configure({
    apiUrl                : CONFIG.serverUrl + 'auth',
    emailSignInPath       : '/login',
    emailRegistrationPath : '/login',
    signOutUrl            : '/logout',
    tokenValidationPath   : '/validate',
    handleLoginResponse   : handleResponse
  });

  $stateProvider
  .state("home", {
    url: "/",
    abstract: true,
    controller: 'HomeController',
    templateUrl: "home/layout.html"
  })
  .state("home.index", {
    url: "",
    views: {
      mainContent: {
        templateUrl: "home/index.html"
      },
    }
  })
  .state("home.login", {
    url: "login",
    views: {
      mainContent: {
        templateUrl: "home/login.html"
      },
    }
  })
  .state("home.register", {
    url: "register",
    views: {
      mainContent: {
        templateUrl: "home/register.html"
      },
    }
  })

  .state("builds", {
    url: "/builds",
    abstract: true,
    controller: 'BuildsController',
    templateUrl: "builds/layout.html"
  })

  .state("builds.index", {
    url: "",
    views: {
      navigation: {
        templateUrl: "builds/list.html",
      },
      mainContent: {
        templateUrl: "builds/index.html"
      },
    }
  })

  .state("builds.show", {
    url: "/:id",
    views: {
      "navigation": {
        templateUrl: "builds/list.html",
      },
      mainContent: {
        controller: 'BuildsController',
        templateUrl: "builds/show.html"
      },
    }
  })

  .state("dungeons", {
    url: "/dungeons",
    abstract: true,
    templateUrl: "dungeons/layout.html",
    controller: 'DungeonsController'
  })

  .state("dungeons.new", {
    url: "/new",
    views: {
      mainContent: {
        controller: 'DungeonsController',
        templateUrl: "dungeons/new.html"
      }
    }
  })

  .state("dungeons.index", {
    url: "",
    views: {
      mainContent: {
        templateUrl: "dungeons/index.html",
      },
      navigation: {
        templateUrl: "dungeons/list.html",
      },
    }
  })

  .state("dungeons.show", {
    url: "/:id",
    views: {
      navigation: {
        templateUrl: "dungeons/list.html",
      },
      mainContent: {
        templateUrl: "dungeons/show.html",
        controller: 'DungeonsController',
      }
    }
  });
}]);
