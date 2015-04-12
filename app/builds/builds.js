import BuildsService from './builds-service';
import BuildsController from './builds-controller';
import StatDirective from './stat/stat-directive';

export default angular.module('Bloodborne.Builds', [
  'Bloodborne.Components',
  'Bloodborne.Stat'
])
.service('BuildsService', BuildsService)
.controller('BuildsController', BuildsController);
