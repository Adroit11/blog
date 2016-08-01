var app = angular.module('blog', ['ngResource', 'ngRoute']);

app.constant('API_URL', 'http://localhost:8000/api');

//custom filter for urls inside iframes
app.filter('trustAsResourceUrl', ['$sce', function ($sce) {
	return function(val) {
		return $sce.trustAsResourceUrl(val);
	}
}]);

app.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'app/views/Posts.html',
				controller: 'postsController'
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
			.otherwise({
				redirectTo: '/'
			});
}]);