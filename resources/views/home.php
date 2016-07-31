<!DOCTYPE html>
<html ng-app="blog">
	<head>
		<meta charset="utf-8">
		<title>Music Blog</title>

		<script
			  src="https://code.jquery.com/jquery-3.1.0.min.js"
			  integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s="
			  crossorigin="anonymous"></script>

		<!-- FONTS -->
		<link href='https://fonts.googleapis.com/css?family=Bungee+Inline|Harmattan' rel='stylesheet' type='text/css'>

		<!-- load boostrap css -->
		<!-- <link href="<?= asset('css/bootstrap.min.css') ?>" rel="stylesheet"> -->

		<!-- STYLES -->
		<link href="<?= asset('css/styles.css') ?>" rel="stylesheet">

		<!--[if lt IE 9]>
			<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
			<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
		<![endif]-->

		<!--mobile menu script -->
		<script>
		$(document).ready(function(){
			$(".nav-button").click(function () {
				$(".nav-button,.primary-nav").toggleClass("open");
			});    
		});
		</script>
	</head>
	<body ng-controller="postsController">
		<header class="clearfix">
			<div class="logo">
				<img ng-src="img/logo.png" />
				<h1>MUSIC BLOG</h1>
				<h2>Purveyors of Wholesome Thug Shit and Progressive Ignorance</h2>
			</div>
			<nav>
				<ul class="primary-nav">
					<li><a href="#">about</a></li>
					<li><a href="#">posts</a></li>
					<li><a href="#">contact</a></li>
				</ul>
				<button class="nav-button">Toggle Navigation</button>
			</nav>
		</header>
		<main>

		</main>
		<footer>

		</footer>
		<h2>Posts -- {{ message }}</h2>
		<div ng-repeat="post in posts">
			{{ post.title }} <br />
			{{ post.text }} <br />
			{{ post.user.name }} <br />
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