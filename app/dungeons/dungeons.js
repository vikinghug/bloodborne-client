import DungeonsService from './dungeons-service';
import DungeonsController from './dungeons-controller';

export default angular.module('Bloodborne.Dungeons', [
  'Bloodborne.Components'
])
.service('DungeonsService', DungeonsService)
.controller('DungeonsController', DungeonsController);
