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
    controller: 'Bloodborne.BuildCtrl',
    templateUrl: "builds/layout.html"
  })
  .state("builds.index", {
    url: "",
    views: {
      mainContent: {
        templateUrl: "builds/index.html"
      },
      navigation: {
        templateUrl: "builds/list.html",
      },
    }
  })
  .state("builds.show", {
    url: "/:id",
    views: {
      mainContent: {
        templateUrl: "builds/show.html"
      },
      "navigation": {
        templateUrl: "builds/list.html",
      }
    }
  })
  .state("dungeons", {
    url: "/dungeons",
    abstract: true,
    templateUrl: "dungeons/layout.html",
    controller: 'Bloodborne.DungeonCtrl'
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
        controller: 'Bloodborne.DungeonCtrl',
      }
    }
  });
});
