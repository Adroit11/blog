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

Route::group(['prefix' => 'api'], function()
{
    Route::resource('posts', 'PostsController', 
        ['only' => ['index', 'store', 'show', 'update', 'destroy']]);

    Route::post('login', 'PostsController@login');
    Route::get('user', 'PostsController@getAuthenticatedUser');
});