require('babel/polyfill');

import MainNavigation from './components/main-navigation/main-navigation';
import Home from './home/home';
import Auth from './auth/auth';
import Builds from './builds/builds';
import Dungeons from './dungeons/dungeons';

angular.module('Bloodborne', [
  'ui.router',
  'Bloodborne.Home',
  'Bloodborne.Auth',
  'Bloodborne.Builds',
  'Bloodborne.MainNavigation',
  'Bloodborne.Dungeons',
])

.run(function() { })

.constant('CONFIG', {
})

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state("home", {
    url: "/",
    abstract: true,
    controller: 'HomeController',
    templateUrl: 'components/layouts/one-column.html'
  })

  .state("home.index", {
    url: "",
    views: {
      mainContent: {
        templateUrl: 'home/index.html'
      }
    }
  })

  .state("auth", {
    url: "/auth",
    abstract: true,
    controller: 'AuthController',
    templateUrl: 'components/layouts/one-column.html'
  })
  .state("auth.login", {
    url: "/login",
    views: {
      mainContent: { templateUrl: 'auth/login.html' }
    }
  })
  .state("auth.register", {
    url: "/register",
    views: {
      mainContent: { templateUrl: 'auth/register.html' }
    }
  })
  .state("auth.reset", {
    url: "/reset",
    views: {
      mainContent: { templateUrl: 'auth/reset.html' }
    }
  })

  .state("builds", {
    url: "/builds",
    abstract: true,
    controller: 'BuildsController',
    templateUrl: 'components/layouts/two-column-app.html'
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
    templateUrl: 'components/layouts/two-column-app.html',
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
  })
  .state("otherwise", {
    url: '/'
  });
}]);
