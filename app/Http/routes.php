<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', function () {
    return view('home');
});

Route::resource('/api/posts', 'PostsController', 
    ['only' => ['index', 'store', 'show', 'edit', 'update', 'destroy']]);

// App::missing(function($exception)
// {
//     return File::get(public_path() . '/home.php');
// });