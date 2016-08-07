(function() {
	'use strict';
	app.controller('postsController', ['posts', function(posts) {
		var vm = this;

		//console.log(posts);
		vm.posts = posts;
		vm.message = "Posts";	
		
		
	}]);
})();