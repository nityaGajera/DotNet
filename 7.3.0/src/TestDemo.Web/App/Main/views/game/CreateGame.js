(function () {
    angular.module('app').controller('app.views.game.createGame', [
        '$scope', '$uibModalInstance', 'abp.services.app.game',
        function ($scope, $uibModalInstance, gameService) {
            var vm = this;
            vm.game = {};
            vm.name = {};
            vm.permission = {};
            function getGameName() {
                gameService.getPermissionData()
                    .then(function (result) {
                        vm.name = result.data;
                });
            }


            function getgamebyid() {
                gameService.getgamebyid({
                    id: id
                }).then(function (result) {
                    vm.game = result.data.items;
                    console.log(vm.game);
                });
            }


            vm.save = function () {
                for (i = 0; i < vm.name.length; i++) {
                    if (vm.game.name == vm.name[i].name) {
                        abp.notify.error("name ID is Taken");
                        return;
                    }
                }
                gameService.createGame(vm.game).then(function () {
                    abp.notify.info(App.localize('SavedSuccessfully'));
                    $uibModalInstance.close();

                }).finally(function () {
                    vm.saving = false;
                });
            };
            vm.cancel = function () {
                $uibModalInstance.dismiss();
            };
            function init() {
                getGameName();
                //getgamebyid();
            }
            init();
        }
    ]);
})();