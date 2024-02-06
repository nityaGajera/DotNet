(function () {
    angular.module('app').controller('app.views.game.createGame', [
        '$scope', '$uibModalInstance', 'abp.services.app.game',
        function ($scope, $uibModalInstance, gameService) {
            var vm = this;
            vm.game = {};


            function getgamebyid() {
                gameservice.getgamebyid({
                    id: id
                }).then(function (result) {
                    vm.game = result.data.items;
                    console.log(vm.game);
                });
            }
            vm.save = function () {
                vm.saving = true;
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
                //getgamebyid();
            }
            init();
        }
    ]);
})();