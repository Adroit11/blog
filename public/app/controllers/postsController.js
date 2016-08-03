(function() {
	'use strict';
	app.controller('postsController', ['PostService', function(PostService) {
		vm = this;

		vm.message = "Posts";
		vm.loading = true;
		//retrieve posts from API
		var query = PostService.query();
		query.$promise.then(function(data) {
			vm.loading = false;
			vm.posts = data;
		})
	}]);

})();