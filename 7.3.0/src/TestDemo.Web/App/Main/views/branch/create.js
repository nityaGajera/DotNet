(function () {
    angular.module('app').controller('app.views.branch.create', [
        '$scope', '$uibModal', 'abp.services.app.branch',
        function ($scope, $uibModal, branchService) {
            var vm = this;
            vm.branch = {};
            vm.department = [];
            function getdepartment() {
                branchService.bindCategoryIds()
                    .then(function (result) {
                        vm.department = result.data;
                        console.log(vm.department);
                    });
            }
            
            vm.save = function () {
                branchService.createBranch(vm.branch).then(function () {
                    abp.notify.info(App.localize('SavedSuccessfully'));
                    $uibModal.close();

                }).finally(function () {
                    vm.saving = false;
                });
            };
            vm.cancel = function () {
                $uibModal.dismiss();
            };
            function init() {
                getdepartment();
            }
            init();
        }
    ]);
})();