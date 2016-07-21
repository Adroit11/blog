<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\posts;

class PostsController extends Controller
{
    public function index()
    {
        $posts = App\posts::all();
        return Response::json($posts);
    }

    public function store(Request $request)
    {
        //TODO validation
        
        $post = new App\posts;
        $post->author = $request->author;
        $post->title = $request->title;
        $post->text = $request->text;
        $post->url = $request->url;

        $post->save();

        return Response::json(['success' => true]);
    }


    //[GET]postbyID
    public function edit(Request $request)
    {
        $post = App\posts::findOrFail($request->id);

        return Response::json($post);
    }

    public function update(Request $request)
    {
        $post = App\posts::findOrFail(request-id);

        $post->title = $request->title;
        $post->text = $request->text;
        $post->url = $request->url;
    }

    public function destroy(Request $request)
    {
        App\posts::destroy($request->id);

        return Response::json(['success' => true]);
    }
}
