(function() {
    'use strict';
    app.controller('authController', ['$auth', function ($auth){
        var vm = this;
        vm.message = "Hello";
        vm.login = function() {
            var credentials = {
                email: vm.email,
                password: vm.password
            };

            //use satellizer's auth service to login
            $auth.login(credentials).then(function(data){
                //if login successful, go to admin page
                vm.message = "success";
                console.log(data.data);
            });       
        }
    }]);
})();