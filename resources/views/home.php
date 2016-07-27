<!DOCTYPE html>
<html ng-app="blog">
	<head>
		<title>Music Blog</title>

		<!-- load boostrap css -->
		<!-- <link hre="<?= asset('css/bootstrap.min.css') ?>" rel="stylesheet"> -->
	</head>
	<body ng-controller="postsController">
		<h2>Posts -- {{ message }}</h2>
		<div ng-repeat="post in posts">
			{{ post.title }} <br />
			{{ post.text }} <br />
			{{ post.author }} <br />
			{{ post.url }} <br />
		</div>


		<!-- Load Javascript Libraries (AngularJS, JQuery, Bootstrap) -->
        <script src="<?= asset('app/lib/angular/angular.min.js') ?>"></script>
        <script src="<?= asset('js/jquery-3.1.0.min.js') ?>"></script>
        <!-- <script src="<?= asset('js/bootstrap.min.js') ?>"></script> -->
        
        <!-- AngularJS Application Scripts -->
        <script src="<?= asset('app/app.js') ?>"></script>
        <script src="<?= asset('app/controllers/posts.js') ?>"></script>

	</body>
</html>