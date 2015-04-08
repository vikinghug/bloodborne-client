import MainNavigationController from './main-navigation-controller';
import MainNavigationDirective from './main-navigation-directive';

export default angular.module('Bloodborne.MainNavigation', [
  'Bloodborne.Components'
])
.directive('mainNavigation', MainNavigationDirective)
.controller('MainNavigationController', MainNavigationController);
