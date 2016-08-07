(function () {
    'use strict';
    app.controller('authController', ['$auth', '$state', 'AuthService', function ($auth, $state, AuthService) {
        var vm = this;
        vm.login = function () {
            var credentials = {
                email: vm.email,
                password: vm.password
            };

            AuthService.login(credentials).then(function (data) {
                console.log(data);
                //authenticated, user data in localstorage and rootScope
                $state.go('admin');
            }, function() {
                vm.message = "INVALID";
                
            });
        }
    }]);
})();