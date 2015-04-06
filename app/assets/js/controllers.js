import BuildCtrl from './controllers/BuildCtrl';
import DungeonCtrl from './controllers/DungeonCtrl';

export default angular.module('Bloodborne.Controllers', [])
.controller('Bloodborne.BuildCtrl', BuildCtrl)
.controller('Bloodborne.DungeonCtrl', DungeonCtrl);
