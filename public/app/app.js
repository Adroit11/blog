var app = angular.module('blog', ['ngResource', 'ui.router', 'satellizer', 'ui.bootstrap']);

app.constant('API_URL', 'http://localhost:8000/api');

//custom filter for urls inside iframes
app.filter('trustAsResourceUrl', ['$sce', function ($sce) {
	return function (val) {
		return $sce.trustAsResourceUrl(val);
	}
}]);

//format laravel dates to make angular happy
app.filter('dateFormat', function () {
	return function (dateSTR) {
		var o = dateSTR.replace(/-/g, "/"); // Replaces hyphens with slashes
		return Date.parse(o + " -0000"); // No TZ subtraction on this sample
	}
});

app.config(['API_URL', '$stateProvider', '$urlRouterProvider', '$authProvider', '$httpProvider', '$provide', function (API_URL, $stateProvider, $urlRouterProvider, $authProvider, $httpProvider, $provide) {
	function redirectWhenLoggedOut ($q, $injector) {
        return {
            responseError: function (rejection) {
                //use $injector to get $state, to avoid a circular dependency error
                var $state = $injector.get('$state');

                //status code 400 could be used for other reasons by Laravel, check for specific rejection reasons instead
                var rejectionReasons = ['token_not_provided', 'token_expired', 'token_absent', 'token_invalid'];

                angular.forEach(rejectionReasons, function(value, key){
                    //redirect to login state if rejection reason encountered
                    if(rejection.data.error === value) {
                        localStorage.removeItem('user');
                        $state.go('auth');
                    }
                });

				return $q.reject(rejection);
            }
        }

    }

	$provide.factory('redirectWhenLoggedOut', redirectWhenLoggedOut);

	$httpProvider.interceptors.push('redirectWhenLoggedOut');
	
	$authProvider.loginUrl = API_URL + '/login';

	$urlRouterProvider.otherwise('/posts');

	$stateProvider
		.state('user', {
			url: '/',
			templateUrl: 'app/partials/user.html'
		})
		.state('user.posts', {
			url: 'posts',
			templateUrl: 'app/partials/user.posts.html',
			resolve: {
				PostService: 'PostService',

				posts: function (PostService) {
					return PostService.query().$promise;
				}
			},
			controller: 'postsController',
			controllerAs: 'vm'
		})
		.state('user.about', {
			url: 'about',
			templateUrl: 'app/partials/user.about.html'
		})
		.state('user.contact', {
			url: 'contact',
			templateUrl: 'app/partials/user.contact.html',
			// controller: 'contactController',
			// controllerAs: 'vm'
		})
		.state('admin', {
			url: '/admin',
			templateUrl: 'app/partials/admin.html',
			resolve: {
				PostService: 'PostService',

				posts: function (PostService) {
					return PostService.query().$promise;
				}
			},
			controller: 'adminController',
			controllerAs: 'vm'
		})
		.state('auth', {
			url: '/login',
			templateUrl: 'app/partials/login.html',
			controller: 'authController as vm'
		});

}]);

app.run(['$rootScope', '$state', function ($rootScope, $state) {

	//event fires whenever state changes
	$rootScope.$on('$stateChangeStart', function (event, toState) {
		var user = JSON.parse(localStorage.getItem('user'));

		if (user) {

			$rootScope.authenticated = true;

			$rootScope.currentUser = user;

			if (toState.name === 'auth') {
				event.preventDefault();
				$state.go('admin');
			}
		}
	});
}]);
