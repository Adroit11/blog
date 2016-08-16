(function () {
	'use strict';
	app.controller('postsController', ['posts', 'SoundService', function (posts, SoundService) {
		var vm = this;
		vm.message = "Posts";
		vm.limit = 15; //posts per page
		vm.posts = posts;

		//console.log(posts);
		posts.forEach(parseURL);

		vm.loadMore = function () {
			var total = vm.limit + 15;
			vm.limit = total > vm.posts.length ? vm.posts.length : total;
		}

		function parseURL(item) {
			var url = item.url;
			var regYT = /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/;
			var regSC = /^https?:\/\/(soundcloud\.com|snd\.sc)\/(.*)$/;

			if (url.match(regYT) != null) {
				//youtube
				item.embedURL = "https://www.youtube.com/embed/" + url.match(regYT)[1];
			} else if (url.match(regSC) != null) {
				//soundcloud
				SoundService.getUri(url).then(function success(response) {
					var trackUri = response.data.uri;
					item.embedURL = "https://w.soundcloud.com/player/?url=" + trackUri + "&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true";

				}, function error(err) {

				});
			}
		}
	}]);
})();