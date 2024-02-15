(function () {
    angular.module('app').controller('app.views.branch.index', [
        '$scope', '$timeout', '$uibModal', 'abp.services.app.branch',
        function ($scope, $timeout, $uibModal, branchService) {
            var vm = this;
            vm.branch = [];

            function getbranch() {
                branchService.getBranchData()
                    .then(function (result) {
                        vm.branch = result.data;
                    });
            }

            vm.openBranchCreate = function () {
                var modalInstance = $uibModal.open({
                    templateUrl: '/App/Main/views/branch/create.cshtml',
                    controller: 'app.views.branch.create as vm',
                    backdrop: 'static'
                });

                modalInstance.rendered.then(function () {

                    $.AdminBSB.input.activate();

                });

                modalInstance.result.then(function () {
                    getbranch();
                });

            };

            function init() {
                getbranch();
            }
            init();
        }
    ]);
})();