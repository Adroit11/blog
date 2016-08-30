<!DOCTYPE html>
<html ng-app="blog" lang="en">
	<head>
		<meta charset="utf-8">
		<title>Digs</title>

		<!-- fonts -->
		<link href='https://fonts.googleapis.com/css?family=Lato:400,900|Harmattan' rel='stylesheet' type='text/css'>
		<link href="<?= asset('css/bootstrap.min.css') ?>" rel="stylesheet">
		<link href="<?= asset('css/font-awesome.min.css') ?>" rel="stylesheet">
		<link href="<?= asset('css/styles.css') ?>" rel="stylesheet">
		
		<!--[if lt IE 9]>
			<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
			<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
		<![endif]-->

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
        <script src="<?= asset('js/bootstrap.min.js') ?>"></script>
		<script src="<?= asset('app/lib/ui-bootstrap-tpls-2.0.1.min.js') ?>"></script>
        
        <!-- AngularJS Application Scripts -->
        <script src="<?= asset('app/app.js') ?>"></script>
		<script src="<?= asset('app/services/Services.js') ?>"></script>
		<script src="<?= asset('app/controllers/authController.js') ?>"></script>
        <script src="<?= asset('app/controllers/postsController.js') ?>"></script>
		<script src="<?= asset('app/controllers/adminController.js') ?>"></script>

		<!-- misc -->
		<script src="<?= asset('js/scripts.js') ?>"></script>

	</body>
</html>