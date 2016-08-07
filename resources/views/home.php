<!DOCTYPE html>
<html ng-app="blog">
	<head>
		<meta charset="utf-8">
		<title>Digs</title>

		<script src="https://code.jquery.com/jquery-3.1.0.min.js" integrity="sha256-cCueBR6CsyA4/9szpPfrX3s49M9vUU5BgtiJj06wt/s=" crossorigin="anonymous"></script>

		<!-- FONTS -->
		<link href='https://fonts.googleapis.com/css?family=Bungee+Inline|Harmattan' rel='stylesheet' type='text/css'>

		<!-- load boostrap css -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
		<!-- <link href="<?= asset('css/bootstrap.min.css') ?>" rel="stylesheet"> -->

		<!-- STYLES -->
		<link href="<?= asset('css/styles.css') ?>" rel="stylesheet">
		<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css">

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
	<body>
		<div ui-view></div>
		
		<!-- Load Javascript Libraries (AngularJS, JQuery, Bootstrap) -->
        <script src="<?= asset('app/lib/angular/angular.min.js') ?>"></script>
		<script src="<?= asset('app/lib/angular/angular-resource.min.js') ?>"></script>
		<script src="<?= asset('app/lib/angular/angular-ui-router.min.js') ?>"></script>
		<script src="<?= asset('app/lib/satellizer.min.js') ?>"></script>
		<script src="<?= asset('app/lib/angular/angular-touch.min.js') ?>"></script>
		<script src="<?= asset('app/lib/angular/angular-animate.min.js') ?>"></script>
		<script src="<?= asset('js/jquery-3.1.0.min.js') ?>"></script>
        <!-- <script src="<?= asset('js/bootstrap.min.js') ?>"></script> -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
		<script src="<?= asset('app/lib/ui-bootstrap-tpls-2.0.1.min.js') ?>"></script>
        
        <!-- AngularJS Application Scripts -->
        <script src="<?= asset('app/app.js') ?>"></script>
		<script src="<?= asset('app/services/Services.js') ?>"></script>
		<script src="<?= asset('app/controllers/authController.js') ?>"></script>
        <script src="<?= asset('app/controllers/postsController.js') ?>"></script>
		<script src="<?= asset('app/controllers/adminController.js') ?>"></script>

	</body>
</html>