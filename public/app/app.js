var app = angular.module('blog', ['ngResource', 'ui.router', 'satellizer']);

app.constant('API_URL', 'http://localhost:8000/api');

//custom filter for urls inside iframes
app.filter('trustAsResourceUrl', ['$sce', function ($sce) {
	return function(val) {
		return $sce.trustAsResourceUrl(val);
	}
}]);

app.config(['API_URL', '$stateProvider', '$urlRouteProvider', '$authProvider', function(API_URL, $stateProvider, $urlRouteProvider, $authProvider) {
	$authProvider.loginUrl = API_URL + '/login';

	$urlRouteProvider.otherwise('/auth');

	$stateProvider
		.state('user', {
			url: '/',
			templateUrl: 'app/partials/user.html'
		})
		.state('user.posts', {
			url: '/posts',
			templateUrl: 'app/partials/user.posts.html',
			controller: 'postsController',
			controllerAs: 'vm'
		})
		.state('user.about', {
			url: '/about',
			templateUrl: 'app/partials/user.about.html'
		})
		.state('user.contact', {
			url: '/contact',
			templateUrl: 'app/partials/user.contact.html',
			controller: 'contactController',
			controllerAs: 'vm'
		})
		.state('admin', {
			url: '/admin',
			templateUrl: 'app/partials/admin.html',
			controller: 'adminController',
			controllerAs: 'vm'
		})
		.state('admin.create', {
			url: '/admin/create',
			templateUrl: 'app/partials/admin.create.html'
		})
		.state('admin.edit', {
			url: '/admin/edit/:id',
			templateUrl: 'app/partials/admin.edit.html'
		})
		.state('auth', {
			url: 'login',
			templateUrl: 'app/partials/login.html',
			controller: 'authController as vm'
		});

}]);