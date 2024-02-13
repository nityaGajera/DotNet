(function () {
    angular.module('app').controller('app.views.department.created', [
        '$scope', '$uibModalInstance', 'abp.services.app.department',
        function ($scope, $uibModalInstance, departmentService) {
            var vm = this;
            vm.department = {};
            alert(22);
            vm.save = function () {
                abp.ui.setBusy();
                departmentService.createDepartment(vm.department)
                    .then(function () {
                        abp.notify.info(App.localize('SavedSuccessfully'));
                        $uibModalInstance.close();
                    }).finally(function () {
                        abp.ui.clearBusy();
                    });
            };
            vm.cancel = function () {
                $uibModalInstance.dismiss();
            };
            function init() {
                getDepartmentName();
            }
            init();
        }
    ]);
})();