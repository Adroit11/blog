(function () {
    'use strict';

    app.controller('adminController', ['posts', '$uibModal', 'AuthService', 'PostService', '$rootScope', '$state', function (posts, $uibModal, AuthService, PostService, $rootScope, $state) {
        var vm = this;
        //console.log(posts);
        vm.posts = posts;
        //console.log($rootScope.currentUser);

        //if token has expired, do not allow them to view admin state.
        if (localStorage.getItem('user') === null)
            $state.go('auth');

        vm.user = $rootScope.currentUser;

        vm.clear = function () {
            vm.srch = '';
        }

        //modal
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
                if (vm.method === 'Edit') {
                    //console.log(data);
                    PostService.update({ id: data.id }, data);
                    $state.reload();
                }
                else if (vm.method === 'Create') {
                    data.author = vm.user.id;
                    //console.log(data);
                    PostService.post(data);
                    $state.reload();
                }
                else if (vm.method === 'Delete') {
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
        //console.log(post);
        $scope.post = post;
        $scope.method = method;
        $scope.tags = [];

        //get tag names from object array in order to simplify model binding
        if ($scope.post != null && $scope.post.tags.length > 0) {
            $scope.post.tags.forEach(function (item) {
                $scope.tags.push(item.TagName);
            });
        }

        $scope.ok = function () {
            //build tags object array on post
            $scope.post.tags = $scope.tags;
            //console.log($scope.post.tags);
            $uibModalInstance.close($scope.post);
        };

        $scope.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }]);
})();