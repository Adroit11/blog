(function () {
    'use strict';
    app.controller('authController', ['$state', 'AuthService', function ($state, AuthService) {
        var vm = this;
        vm.login = function () {
            var credentials = {
                email: vm.email,
                password: vm.password
            };

            AuthService.login(credentials).then(function (data) {
                //console.log(data);
                //authenticated, user data in localstorage and rootScope
                $state.go('admin');
            }, function (error) {
                vm.message = "Invalid Credentials. Please try again.";
                //log the error
                //console.log(error.data); 
            });

        }
    }]);
})();