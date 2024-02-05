(function () {
    angular.module('app').controller('app.views.game.indexgame', [
        '$scope', '$timeout', '$uibModal', 'abp.services.app.game',
        function ($scope, $timeout, $uibModal, gameService) {
            var vm = this;
            vm.game = [];
            function getgame() {
                gameService.getGameData().then(function (result) {
                    vm.game = result.data;
                    console.log(vm.game);
                });
            }

            vm.opengameCreateGame = function () {
                var modalInstance = $uibModal.open({
                    templateUrl: '/App/Main/views/game/CreateGame.cshtml',
                    controller: 'app.views.game.createGame as vm',
                    backdrop: 'static'
                });

                modalInstance.rendered.then(function () {

                    $.AdminBSB.input.activate();

                });

                modalInstance.result.then(function () {
                    getgame();
                });

            };
            vm.openGameEditModal = function (game) {
                var modalInstance = $uibModal.open({
                    templateUrl: '/App/Main/views/game/editgame.cshtml',
                    controller: 'app.views.game.editgame as vm',
                    backdrop: 'static',
                    resolve: {
                        id: function () {
                            return game.id;
                        }
                    }
                });

                modalInstance.rendered.then(function () {
                    $timeout(function () {
                        $.AdminBSB.input.activate();
                    }, 0);
                });

                modalInstance.result.then(function () {
                    getgame();
                });
            };
            vm.deletedata = function (item) {
                debugger;

                abp.message.confirm(
                    "Delete Test '" + item.name + "'?",
                    //"Delete Test '" + item.version + "'?",
                    "Delete?",
                    function (result) {
                        if (result) {

                            gameService.deleteGame({ id: item.id })
                                .then(function () {
                                    abp.notify.info("Deleted Game is: " + item.name);
                                    debugger;
                                    getgame();
                                });
                        }
                    });
            };
            vm.delete = function (game) {
                abp.message.confirm(
                    "Delete game '" + game.name + "'?",
                    "Delete",
                    function (result) {
                        if (result) {
                            gameService.delete({ id: item.id })
                                .then(function () {
                                    abp.notify.info("Deleted game: " + t.name);
                                    getgame();
                                });
                        }
                    });
            }


            function init() {
                getgame();
            }
            init();
        }
    ]);
})();