(function () {
	'use strict';
	app.controller('postsController', ['posts', 'SoundService', function (posts, SoundService) {
		var vm = this;
		vm.message = "Posts";
		vm.limit = 3; //posts per page
		vm.posts = posts;
		vm.tags = [];

		//console.log(posts);

		//parse URLs and build tags list
		posts.forEach(parseURL);

		vm.loadMore = function () {
			var total = vm.limit + 3;
			vm.limit = total > vm.posts.length ? vm.posts.length : total;
		}

		vm.filter = function (tag) {
			vm.srch = tag;
		}

		vm.clear = function () {
			vm.srch = '';
		}

		function parseURL(item) {
			//build tags list
			for ( var x = 0; x < item.tags.length; x++)
			{
				var theTag = item.tags[x].TagName;
				if(vm.tags.indexOf(theTag) == -1)
					vm.tags.push(theTag);
			}

			//parse URL
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