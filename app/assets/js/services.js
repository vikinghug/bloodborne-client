import LookupService from './services/LookupService';
import BuildService from './services/BuildService';
import DungeonService from './services/DungeonService';
export default angular.module('Bloodborne.Services', [])
.service('LookupService', LookupService)
.service('BuildService', BuildService)
.service('DungeonService', DungeonService);
