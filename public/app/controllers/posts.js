(function() {
	'use strict';
	app.controller('postsController', ['$scope', '$http', 'API_URL', function($scope, $http, API_URL) {
		//retrieve posts from API
		$scope.message = "angular is working";
		$http.get(API_URL + '/posts')
			.then(function successCallback(response) {
				$scope.posts = response.data;
				$scope.message = "success";
			}, function errorCallback(response) {

			});
	}]);

})();