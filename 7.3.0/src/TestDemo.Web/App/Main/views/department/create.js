(function () {
    angular.module('app').controller('app.views.department.create', [
        '$scope', '$uibModalInstance', 'abp.services.app.department',
        function ($scope, $uibModalInstance, departmentService) {
            var vm = this;
            vm.department = {};
            

            function getDepartmentbyid() {
                departmentService.getDepartmentbyid({
                    id: id
                }).then(function (result) {
                    vm.department = result.data.items;
                    console.log(vm.department);
                });
            }


            vm.save = function () {
                departmentService.create(vm.department).then(function () {
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
                getDepartmentbyid();
            }
            init();
        }
    ]);
})();