import NavigationCtrl from './controllers/NavigationCtrl';
import BuildCtrl from './controllers/BuildCtrl';
import DungeonCtrl from './controllers/DungeonCtrl';

export default angular.module('Bloodborne.Controllers', [])
.controller('Bloodborne.NavigationCtrl', NavigationCtrl)
.controller('Bloodborne.BuildCtrl', BuildCtrl)
.controller('Bloodborne.DungeonCtrl', DungeonCtrl);
