(function() {
	'use strict';
	app.controller('postsController', ['$scope', 'PostService', function($scope, PostService) {
		$scope.message = "Posts";
		$scope.loading = true;
		//retrieve posts from API
		var query = PostService.query();
		query.$promise.then(function(data) {
			$scope.loading = false;
			$scope.posts = data;
		})
	}]);

})();