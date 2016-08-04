(function(){
    'use strict';

    app.controller('adminController', ['PostService', function(PostService){
        var vm = this;
        
        //get posts
        var query = PostService.query();
		query.$promise.then(function(data) {
			vm.loading = false;
			vm.posts = data;
		});
        
            
    }]);
})();