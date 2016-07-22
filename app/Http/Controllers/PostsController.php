<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;

use App\Post;

class PostsController extends Controller
{
    public function index()
    {
        $posts = Post::all();
        return \Response::json($posts);
    }

    public function store(StorePostRequest $request)
    { 
        // $post = new App\Post;
        // $post->author = $request->author;
        // $post->title = $request->title;
        // $post->text = $request->text;
        // $post->url = $request->url;

        // $post->save();

        // return \Response::json(['success' => true]);

        $post = Post::create($request->only('author', 'title', 'text', 'url'));

        return response()->json($post, 200);
    }


    //[GET]postbyID
    public function edit($id)
    {
        $post = Post::findOrFail($id);

        return \Response::json($post);
    }

    public function update(Request $request)
    {
        $post = Post::findOrFail($request-id);

        $post->title = $request->title;
        $post->text = $request->text;
        $post->url = $request->url;
    }

    public function destroy($id)
    {
        App\posts::destroy($id);

        return \Response::json(['success' => true]);
    }
}
