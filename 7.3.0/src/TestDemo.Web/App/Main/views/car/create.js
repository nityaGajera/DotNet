(function () {
    angular.module('app').controller('app.views.car.create', [
        '$scope', '$uibModalInstance', 'abp.services.app.car',
        function ($scope, $uibModalInstance, carService) {
            var vm = this;
            vm.car = {};

            vm.save = function () {
                carService.createCar(vm.car).then(function () {
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
            }
            init();
        }
    ]);
})();