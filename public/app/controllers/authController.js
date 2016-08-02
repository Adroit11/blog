(function() {
    'use strict';
    app.controller('authController', ['$auth', function ($auth){
        var vm = this;
        vm.login = function() {
            var credentials = {
                email: vm.email,
                password: vm.password
            };
            console.log(credentials);
            //use satellizer's auth service to login
            //$auth.login(credentials).then(function(data){
                //if login successful, go to admin page
                
            //});       
        }
    }]);
})();