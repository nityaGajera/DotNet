(function () {
    var myApp = angular.module('app');
    myApp.controller('app.views.game.editgame', [
        '$scope', '$uibModalInstance', 'abp.services.app.game', 'id',
        function ($scope, $uibModalInstance, gameService, id) {
            var vm = this;
            vm.game = {
                isActive: true
            };

            function init() {
                debugger;
                if (id == undefined) {

                } else {
                    getGamebyid();
                }
            }
            init();

            function getGamebyid() {
                gameService.getGamebyid({
                    id: id
                }).then(function (result) {
                    debugger;
                    vm.game = result.data;
                    console.log(vm.game);
                });
            }

            vm.cancel = function () {
                $uibModalInstance.close();
            }
            vm.save = function () {

                gameService.updateGame(vm.game)
                    .then(function () {
                        abp.notify.info(App.localize('SavedSuccessfully'));
                        $uibModalInstance.close();
                    });

            };

        }
    ]);
})();