(function () {
    angular.module('app').controller('app.views.car.index', [
        '$scope', '$timeout', '$uibModal', 'abp.services.app.car',
        function ($scope, $timeout, $uibModal, carService) {
            var vm = this;
            vm.car = [];
            function getcar() {
                carService.getCarData()
                    .then(function (result) {
                        vm.car = result.data;
                    });
            }

            vm.opencarCreate = function () {
                var modalInstance = $uibModal.open({
                    templateUrl: '/App/Main/views/car/create.cshtml',
                    controller: 'app.views.car.create as vm',
                    backdrop: 'static'
                });

                modalInstance.rendered.then(function () {

                    $.AdminBSB.input.activate();

                });

                modalInstance.result.then(function () {
                    getcar();
                });

            };
            vm.opencarEdit = function (car) {
                var modalInstance = $uibModal.open({
                    templateUrl: '/App/Main/views/car/edit.cshtml',
                    controller: 'app.views.car.edit as vm',
                    backdrop: 'static',
                    resolve: {
                        id: function () {
                            return car.id;
                        }
                    }
                });

                modalInstance.rendered.then(function () {
                    $timeout(function () {
                        $.AdminBSB.input.activate();
                    }, 0);
                });

                modalInstance.result.then(function () {
                    getcar();
                });
            };
            vm.deletedata = function (item) {
                debugger;

                abp.message.confirm(
                    "delete test '" + item.name + "'?",
                    "delete?",
                    function (result) {
                        if (result) {

                            carService.deleteCar({ id: item.id })
                                .then(function () {
                                    abp.notify.info("deleted car is: " + item.name);
                                    getcar();
                                });
                        }
                    });
            };

            function init() {
                getcar();
            }
            init();
        }
    ]);
})();