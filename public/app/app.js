var app = angular.module('blog', ['ngResource', 'ngRoute', 'satellizer']);

app.constant('API_URL', 'http://localhost:8000/api');

//custom filter for urls inside iframes
app.filter('trustAsResourceUrl', ['$sce', function ($sce) {
	return function(val) {
		return $sce.trustAsResourceUrl(val);
	}
}]);

app.config(['API_URL', '$routeProvider', '$authProvider', function(API_URL, $routeProvider, $authProvider) {
	$authProvider.loginUrl = API_URL + '/login';

	$routeProvider
		.when('/', {
			templateUrl: 'app/views/Posts.html',
			controller: 'postsController',
			controllerAs: 'vm'
		})
		// .when('/post/:id', {
		// 	templateUrl: 'views/Post.html',
		// 	controller: 'controllers/posts.js'
		// })
		.when('/about', {
			templateUrl: 'app/views/About.html',
			// controller: 'controllers/about.js'
		})
		.when('/contact', {
			templateUrl: 'app/views/Contact.html',
			// controller: 'controllers/about.js'
		})
		.when('/login', {
			templateUrl: 'app/views/Login.html',
			controller: 'authController',
			controllerAs: 'vm'
		})
		.when('/admin', {
			templateUrl: 'app/views/admin/Admin.html',
			controller: 'adminController',
			controllerAs: 'vm'
		})
		.when('/admin/edit/:id', {
			templateUrl: 'app/views/admin/edit.html',
			controller: 'adminController',
			controllerAs: 'vm'
		})
		.otherwise({
			redirectTo: '/'
		});

}]);