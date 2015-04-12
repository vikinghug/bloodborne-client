require('babel/polyfill');

import MainNavigation from './components/main-navigation/main-navigation';
import Builds from './builds/builds';
import Dungeons from './dungeons/dungeons';

angular.module('Bloodborne', [
  'ui.router',
  'Bloodborne.Builds',
  'Bloodborne.MainNavigation',
  'Bloodborne.Dungeons',
])

.run(function() { })

.constant('CONFIG', {
})

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
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
