(function () {
    angular.module('app').controller('app.views.department.indexd', [
        '$scope', '$uibModal', 'abp.services.app.department', '$timeout',
        function ($scope, $uibModal, departmentService, $timeout) {
            var vm = this;

            vm.department = [];

            function getAllDepartment() {
                departmentService.getDepartmentData()
                    .then(function (result) {
                        vm.department = result.data;
                    });
            }

            //vm.openDepartmentd = function () {
            //    var modalInstance = $uibModal.open({
            //        templateUrl: '/App/Main/views/game/createGame.cshtml',
            //        controller: 'app.views.department.created as vm',
            //        backdrop: 'static'
            //    });

            //    modalInstance.rendered.then(function () {
            //        $.AdminBSB.input.activate();
            //    });

            //    modalInstance.result.then(function () {
            //        getAllDepartment();
            //    });
            //};

            vm.openDepartmentd = function () {
                var modalInstance = $uibModal.open({
                    templateUrl: '/App/Main/views/department/created.cshtml',
                    controller: 'app.views.department.created as vm',
                    backdrop: 'static'
                });

                modalInstance.rendered.then(function () {

                    $.AdminBSB.input.activate();

                });

                modalInstance.result.then(function () {
                    getAllDepartment();
                });

            };

            //vm.openDepartmentEditd = function (department) {
            //    var modalInstance = $uibModal.open({
            //        templateUrl: '/App/Main/views/department/editd.cshtml',
            //        controller: 'app.views.department.editd as vm',
            //        backdrop: 'static',
            //        resolve: {
            //            id: function () {
            //                return department.id;
            //            }
            //        }
            //    });

            //    modalInstance.rendered.then(function () {
            //        $.AdminBSB.input.activate();
            //    });

            //    modalInstance.result.then(function () {
            //        getAllDepartment();
            //    });
            //};

            //vm.delete = function (role) {
            //    abp.message.confirm(
            //        "delete role '" + role.name + "'?",
            //        "delete",
            //        function (result) {
            //            if (result) {
            //                roleservice.delete({ id: role.id })
            //                    .then(function () {
            //                        abp.notify.info("deleted role: " + role.name);
            //                        getroles();
            //                    });
            //            }
            //        });
            //}

            //vm.refresh = function () {
            //    getAllDepartment();
            //};

            getAllDepartment();
        }
    ]);
})();
