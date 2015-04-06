require('babel/polyfill');

// import Services from './services';
import Controllers from './controllers';
import Services from './services';

angular.module('Bloodborne', [
  'ui.router',
  'Bloodborne.Services',
  'Bloodborne.Controllers'
])
.run(function() {
})
.constant('CONFIG', {
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state("builds", {
    url: "/builds",
    abstract: true,
    templateUrl: "builds/index.html"
  })
  .state("builds.index", {
    url: "",
    views: {
      mainContent: {
        templateUrl: "builds/list.html",
        controller: 'Bloodborne.BuildCtrl'
      }
    }
  })
  .state("builds.show", {
    url: "/:id",
    views: {
      mainContent: {
        templateUrl: "builds/show.html"
      }
    }
  })
  .state("dungeons", {
    url: "/dungeons",
    abstract: true,
    templateUrl: "dungeons/index.html",
    controller: 'Bloodborne.DungeonCtrl'
  })
  .state("dungeons.index", {
    url: "",
    views: {
      "navigation": {
        templateUrl: "dungeons/list.html",
      },
    }
  })
  .state("dungeons.show", {
    url: "/:id",
    views: {
      "navigation": {
        templateUrl: "dungeons/list.html",
      },
      "mainContent": {
        templateUrl: "dungeons/show.html",
        controller: 'Bloodborne.DungeonCtrl',
      }
    }
  });
});
