<?php

namespace App\Http\Controllers;

use App\Post;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Requests\StorePostRequest;
use App\Repositories\Repository;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;


class PostsController extends Controller
{
    //the post repo instance
    protected $posts;

    //create new controller instance of our repo
    public function __construct(Repository $repo)
    {
        //$this->middleware('auth');
        $this->middleware('jwt.auth', ['except' => ['index', 'show', 'login']]);
        $this->repo = $repo;
    }

    //GET /posts
    public function index()
    {
        return \Response::json($this->repo->allPosts());
    }

    //GET /posts/:id
    public function show($id)
    {
        return \Response::json($this->repo->postById($id));
    }

    //POST /posts
    public function store(StorePostRequest $request)
    { 
        return \Response::json($this->repo->insertPost($request));

        //$post = Post::create($request->only('title', 'text', 'url'));
        //return response()->json($post, 200);
    }

    //PUT/PATCH /posts/:id
    public function update(UpdatePostRequest $request)
    {
        // $post = Post::findOrFail($request->id);

        // $post->title = $request->title;
        // $post->text = $request->text;
        // $post->url = $request->url;
    }

    //DELETE /posts/:id
    public function destroy($id)
    {
        App\posts::destroy($id);

        return \Response::json(['success' => true]);
    }

    //POST /login
    public function login (Request $request)
    {
        $credentials = $request->only('email', 'password');

        try {
            // verify the credentials and create a token for the user
            if (! $token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            // something went wrong
            return response()->json(['error' => 'could_not_create_token'], 500);
        }

        // if no errors are encountered we can return a JWT
        return response()->json(compact('token'));
    }
}
