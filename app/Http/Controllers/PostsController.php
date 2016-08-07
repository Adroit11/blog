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
                //weird xdebug problem 
        ini_set('xdebug.max_nesting_level', 110);

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
    public function store(Request $request)
    { 
        return \Response::json($this->repo->insertPost($request));

        //$post = Post::create($request->only('title', 'text', 'url'));
        //return response()->json($post, 200);
    }

    //PUT/PATCH /posts/:id
    public function update($id, Request $request)
    {
        return \Response::json($this->repo->updatePost($id, $request));
        // $post = Post::findOrFail($request->id);

        // $post->title = $request->title;
        // $post->text = $request->text;
        // $post->url = $request->url;
    }

    //DELETE /posts/:id
    public function destroy($id)
    {
        return \Response::json($this->repo->deletePost($id));
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

    //GET /user
    public function getAuthenticatedUser()
    {
        try {
            if (! $user = JWTAuth::parseToken()->authenticate()) {
                return response()->json(['user_not_found'], 404);
            }
        } catch (Tymon\JWTAuth\Exceptions\TokenExpiredException $e) {
            return response()->json(['token_expired'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\TokenInvalidException $e) {
            return response()->json(['token_invalid'], $e->getStatusCode());
        } catch (Tymon\JWTAuth\Exceptions\JWTException $e) {
            return response()->json(['token_absent'], $e->getStatusCode());
        }
        // the token is valid and we have found the user via the sub claim
        return response()->json(compact('user'));
    }
    
}
