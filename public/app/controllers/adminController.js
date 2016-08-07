(function () {
    'use strict';

    app.controller('adminController', ['posts', '$uibModal', 'AuthService', '$rootScope', '$state', function (posts, $uibModal, AuthService, $rootScope, $state) {
        var vm = this;
        // console.log(posts);
        vm.posts = posts;
        console.log($rootScope.currentUser);
        vm.user = $rootScope.currentUser;

        vm.open = function (method) {
            var modalInstance = $uibModal.open({
                //animation: true,
                templateUrl: 'app/partials/postForm.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    method: function () {
                        return method;
                    }
                }
            });

            modalInstance.result.then(function (data) {
                //vm.newPost = data;
                vm.post = data;

            }, function () {
                //modal dismissed
                console.log('dismissed');
            });
        }

        vm.logout = function () {
            AuthService.logout().then(function () {
                console.log('User ' + $rootScope.currentUser);
                $state.go('user');
            });
        }
    }]);

    app.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'method', function ($scope, $uibModalInstance, method) {
        $scope.method = method;
        $scope.post;

        $scope.ok = function () {
            $uibModalInstance.close($scope.post);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);
})();