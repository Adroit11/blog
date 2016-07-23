<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Requests\StorePostRequest;
use App\Repositories\PostRepository;


class PostsController extends Controller
{
    //the post repo instance
    protected $posts;

    //create new controller instance of our repo
    public function __construct(PostRepository $posts)
    {
        //$this->middleware('auth');
        $this->posts = $posts;
    }

    public function index()
    {
        return \Response::json($this->posts->allPosts());
    }

    public function show($id)
    {
        return \Response::json($this->posts->postById($id));
    }

    public function store(StorePostRequest $request)
    { 

        $post = Post::create($request->only('title', 'text', 'url'));

        return response()->json($post, 200);
    }


    //[GET]postbyID
    public function edit($id)
    {
        $post = Post::findOrFail($id);

        return \Response::json($post);
    }

    public function update(UpdatePostRequest $request)
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
