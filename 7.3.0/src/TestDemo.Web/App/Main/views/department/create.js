(function () {
    angular.module('app').controller('app.views.department.create', [
        '$scope', '$uibModalInstance', 'abp.services.app.department',
        function ($scope, $uibModalInstance, departmentService) {
            var vm = this;
            vm.department = {};

            vm.save = function () {
                departmentService.createDepartment(vm.department).then(function () {
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
