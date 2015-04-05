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
    "url": "/builds",
    templateUrl: "builds/index.html",
    controller: 'Bloodborne.BuildCtrl'
  })
  .state("builds.show", {
    "url": "/show",
    templateUrl: "builds/show.html"
  })
  .state("dungeons", {
    "url": "/dungeons",
    templateUrl: "dungeons/index.html",
    controller: 'Bloodborne.DungeonCtrl'
  })
  .state("dungeons.show", {
    "url": "/show",
    templateUrl: "dungeons/show.html"
  });
});
