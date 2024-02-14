(function () {
    var myApp = angular.module('app');
    myApp.controller('app.views.department.edit', [
        '$scope', '$uibModalInstance', 'abp.services.app.department', 'id',
        function ($scope, $uibModalInstance, departmentService, id) {
            var vm = this;
            vm.department = {};

            function init() {
                debugger;
                if (id == undefined) {

                } else {
                    getDepartmentbyid();
                }
            }
            init();

            function getDepartmentbyid() {
                departmentService.getDepartmentbyid({
                    id: id
                }).then(function (result) {
                    debugger;
                    vm.department = result.data;
                    console.log(vm.department);
                });
            }

            vm.cancel = function () {
                $uibModalInstance.close();
            }
            vm.save = function () {

                departmentService.updateDepartment(vm.department)
                    .then(function () {
                        abp.notify.info(App.localize('SavedSuccessfully'));
                        $uibModalInstance.close();
                    });

            };

        }
    ]);
})();