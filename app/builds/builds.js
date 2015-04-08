import BuildsService from './builds-service';
import BuildsController from './builds-controller';

export default angular.module('Bloodborne.Builds', [
  'Bloodborne.Components'
])
.service('BuildsService', BuildsService)
.controller('BuildsController', BuildsController);
