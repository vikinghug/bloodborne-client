require('babel/polyfill');

// import Services from './services';
import Controllers from './controllers';

angular.module('Bloodborne', [
  'ui.router',
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
    templateUrl: "builds/index.html",
    controller: 'Bloodborne.BuildCtrl'
  })
  .state("builds.show", {
    url: "/show",
    templateUrl: "builds/show.html"
  })
  .state("dungeons", {
    url: "/dungeons",
    abstract: true,
    templateUrl: "dungeons/index.html"
  })
  .state("dungeons.index", {
    url: "",
    views: {
      "navigation": {
        templateUrl: "dungeons/navigation.html"
      },
      "mainContent": {
        templateUrl: "dungeons/list.html",
        controller: 'Bloodborne.DungeonCtrl'
      }
    }
  })
  .state("dungeons.show", {
    // url: "/show/:id",
    url: "/show",
    views: {
      "navigation": {
        templateUrl: "dungeons/navigation.html",
      },
      "mainContent": {
        templateUrl: "dungeons/show.html"
      }
    }
  });
});
