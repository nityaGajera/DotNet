(function () {
    var myApp = angular.module('app');
    myApp.controller('app.views.car.edit', [
        '$scope', '$uibModalInstance', 'abp.services.app.car', 'id',
        function ($scope, $uibModalInstance, carService, id) {
            var vm = this;
            vm.car = {};

            function init() {
                debugger;
                if (id == undefined) {

                } else {
                    getCarbyid();
                }
            }
            init();

            function getCarbyid() {
                carService.getCarbyid({
                    id: id
                }).then(function (result) {
                    debugger;
                    vm.car = result.data;
                    console.log(vm.car);
                });
            }

            vm.cancel = function () {
                $uibModalInstance.close();
            }
            vm.save = function () {

                carService.updateCar(vm.car)
                    .then(function () {
                        abp.notify.info(App.localize('SavedSuccessfully'));
                        $uibModalInstance.close();
                    });

            };

        }
    ]);
})();