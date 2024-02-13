(function () {
    var myApp = angular.module('app');
    myApp.controller('app.views.department.editd', [
        '$scope', '$uibModalInstance', 'abp.services.app.department', 'id',
        function ($scope, $uibModalInstance, department, id) {
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

                departmentService.UpdateDepartment(vm.department)
                    .then(function () {
                        abp.notify.info(App.localize('SavedSuccessfully'));
                        $uibModalInstance.close();
                    });

            };

        }
    ]);
})();