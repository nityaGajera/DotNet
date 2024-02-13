(function () {
    angular.module('app').controller('app.views.department.index', [
        '$scope', '$timeout', '$uibModal', 'abp.services.app.department',
        function ($scope, $timeout, $uibModal, departmentService) {
            var vm = this;
            vm.department = [];
            function getdepartment() {
                gameService.getDepartmentData()
                    .then(function (result) {
                        vm.department = result.data;
                });
            }

            vm.opendepartmentCreate = function () {
                var modalInstance = $uibModal.open({
                    templateUrl: '/App/Main/views/department/Create.cshtml',
                    controller: 'app.views.department.create as vm',
                    backdrop: 'static'
                });

                modalInstance.rendered.then(function () {

                    $.AdminBSB.input.activate();

                });

                modalInstance.result.then(function () {
                    getdepartment();
                });

            };
            vm.opendepartmentEdit = function (department) {
                var modalInstance = $uibModal.open({
                    templateUrl: '/App/Main/views/department/edit.cshtml',
                    controller: 'app.views.game.edit as vm',
                    backdrop: 'static',
                    resolve: {
                        id: function () {
                            return department.id;
                        }
                    }
                });

                modalInstance.rendered.then(function () {
                    $timeout(function () {
                        $.AdminBSB.input.activate();
                    }, 0);
                });

                modalInstance.result.then(function () {
                    getdepartment();
                });
            };
            //vm.deletedata = function (item) {
            //    debugger;

            //    abp.message.confirm(
            //        "Delete Test '" + item.name + "'?",
            //        //"Delete Test '" + item.version + "'?",
            //        "Delete?",
            //        function (result) {
            //            if (result) {

            //                gameService.deleteGame({ id: item.id })
            //                    .then(function () {
            //                        abp.notify.info("Deleted Game is: " + item.name);
            //                        debugger;
            //                        getgame();
            //                    });
            //            }
            //        });
            //};

            function init() {
                getdepartment();
            }
            init();
        }
    ]);
})();