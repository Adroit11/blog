(function () {
    'use strict';

    app.controller('adminController', ['posts', '$uibModal', 'AuthService', 'PostService', '$rootScope', '$state', function (posts, $uibModal, AuthService, PostService, $rootScope, $state) {
        var vm = this;
         console.log(posts);
        vm.posts = posts;
        //console.log($rootScope.currentUser);
        //if token has expired, do not allow them to view admin state.
        if (localStorage.getItem('user') === null)
            $state.go('auth');

        vm.user = $rootScope.currentUser;
        

        vm.open = function (method, post) {
            vm.method = method;
            var modalInstance = $uibModal.open({
                //animation: true,
                templateUrl: 'app/partials/postForm.html',
                controller: 'ModalInstanceCtrl',
                resolve: {
                    post: function () {
                        return post;
                    },

                    method: function () {
                        return method;
                    }
                }
            });

            modalInstance.result.then(function (data) {
                if (vm.method === 'Edit')
                {
                    PostService.update({ id: data.id }, data);
                }
                else if (vm.method === 'Create')
                {
                    data.author = vm.user.id;
                    //console.log(data);
                    PostService.post(data);
                    $state.reload();
                }
                else if (vm.method === 'Delete')
                {
                    PostService.remove({ id: data.id });
                    $state.reload();
                }
            }, function () {
                //modal dismissed
                
            });
        }

        vm.logout = function () {
            AuthService.logout().then(function () {
                $state.go('user.posts');
            });
        }
    }]);

    app.controller('ModalInstanceCtrl', ['$scope', '$uibModalInstance', 'method', 'post', function ($scope, $uibModalInstance, method, post) {
        
        if (method === 'Delete') {
            $scope.confirmDelete = true;
        }
        $scope.post = post;
        $scope.method = method;

        $scope.ok = function () {
            $uibModalInstance.close($scope.post);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);
})();