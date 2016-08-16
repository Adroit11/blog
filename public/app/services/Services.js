(function () {
    'use strict';
    app.factory('PostService', ['$resource', 'API_URL', function ($resource, API_URL) {
        return $resource(API_URL + '/posts/:id', null,
            {
                'query': { method: 'GET', params: { id: '@id' }, isArray: true },
                'post': { method: 'POST' },
                'update': { method: 'PUT', params: { id: '@id' } },
                'remove': { method: 'DELETE', params: { id: '@id' } }
            });
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
            }, function (error) {
                throw error.data;
            }).then(function (response) {
                //returned user data

                //set user's stringified data in local storage
                var user = JSON.stringify(response.data.user);
                localStorage.setItem('user', user);

                //set user's state and data on $rootScope to allow access across the app
                $rootScope.authenticated = true;
                $rootScope.currentUser = response.data.user;
            }, function (error) {
                throw error.data;
            });
        }

        function logout() {
            return $auth.logout().then(function () {
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

    app.factory('SoundService', ['$http', function ($http) {
        return {
            getUri: function (url) {
                return $http.get('https://api.soundcloud.com/resolve.json?url=' + url + '&client_id=bd9c31fe049a3f05e0f6871440aa43da');
                    
            }
        }

    }]);
})();