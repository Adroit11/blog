(function () {
    'use strict';
    app.factory('PostService', ['$resource', 'API_URL', function ($resource, API_URL) {
        return $resource(API_URL + '/posts/:id', { id: "@id" });
    }]);

    app.factory('UserService', ['$http', 'API_URL', function ($http, API_URL) {
        return {
            getUserData: function () {
                return $http.get(API_URL + '/user');
            }
        }
    }]);

    app.factory('AuthService', ['$auth', 'UserService', '$rootScope', function ($auth, UserService, $rootScope) {
        function login(credentials) {
            //satellizer's $auth service to login
            return $auth.login(credentials).then(function (response) {
                //if login successful, get user data
                //console.log('success');
                return UserService.getUserData();
            }, function error(response) {
                // vm.message = "Invalid Credentials. Please try again."
                // console.log(response);
                return "Error: " + response.data;
            }).then(function (response) {
                //returned user data

                //set user's stringified data in local storage
                var user = JSON.stringify(response.data.user);
                localStorage.setItem('user', user);

                //set user's state and data on $rootScope to allow access across the app
                $rootScope.authenticated = true;
                $rootScope.currentUser = response.data.user;

            });
        }

        function logout() {
            return $auth.logout().then(function(){
                //remove from local storage
                localStorage.removeItem('user');
                //set authenticated to false
                $rootScope.authenticated = false;
                $rootScope.currentUser = null;
            });
        }

        return {
            login: login,
            logout: logout
        }
    }]);
})();