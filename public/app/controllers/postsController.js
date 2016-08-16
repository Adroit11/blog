(function () {
	'use strict';
	app.controller('postsController', ['posts', function (posts) {
		var vm = this;
		vm.message = "Posts";
		
		vm.posts = posts;
		
		// posts.forEach(iframeURL);

		// function iframeURL(item, index) {
		// 	var regYT = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
		// 	var regSC = /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;
		// 	var matchYT = item.url.match(regYT);
			
		// 	if (matchYT && matchYT[2].length == 11) {
		// 		item.embedURL = match[2];
		// 	}
		// 	// else if (item.url.match('http://player\.soundcloud\.com')) {
		// 	// 	soundcloud_url = unescape(item.url.split(/value="/)[1].split(/["]/)[0]);
		// 	// 	soundcloud_id = soundcloud_url.split(/tracks\//)[1].split(/[&"]/)[0];
		// 	// 	item.embedURL = soundcloud_id;
		// 	// }
		// }


		vm.clearSrch = function () {
			vm.srch = "";
		}

		
	}]);
})();