(function () {
    angular.module('app').controller('app.views.game.indexgame', [
        '$scope', '$timeout', '$uibModal', 'abp.services.app.game',
        function ($scope, $timeout, $uibModal, gameService) {
            var vm = this;
            vm.game = [];
           // vm.search = "";
            function getgame() {
                gameService.getGameData($scope.search).then(function (result) {
                    vm.game = result.data;
                    console.log(vm.game);
                });
            }

            $scope.searchBy = function () {
                getgame();
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
            vm.isActivedata = function (item) {
                debugger;

                abp.message.confirm(
                    "IsActive Game '" + item.name + "'?",
                    "Change the IsActive?",
                    function (result) {
                        if (result) {

                            gameService.isActiveGame({ id: item.id })
                                .then(function () {
                                    abp.notify.info("IsActive Game is: " + item.name);
                                    debugger;
                                    getgame();
                                });
                        }
                    });
            };
         


            function init() {
                getgame();
            }
            init();
        }
    ]);
})();