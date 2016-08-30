<?php

namespace App\Repositories;

use App\User;
use App\Post;
use App\Tag;

class Repository
{
	//get all posts
	public function allPosts()
	{
		//return Post::all();
		return Post::with('user', 'tags')->get();
	}

	//get post by ID
	public function postById($id)
	{
		return Post::with('user')->find($id);
	}

	//insert post
	public function insertPost($data)
	{		
		$post = new Post();
		$user = User::findOrFail($data->author);

		$post->title = $data->title;
		$post->text = $data->text;
		$post->url = $data->url;

		$user->posts()->save($post);
		
		//split tags
	    $tags = explode(',', $data->tags);
		for($x = 0; $x < count($tags); $x++)
		{
			$trim = trim($tags[$x]);
			//check if tag exists
			$tag = Tag::firstOrCreate(['tagname' => $trim]);

			//update the intermediate (post_tag) table
			if ($tag->wasRecentlyCreated)
				$post->tags()->attach($tag->id);
		}
		return true;
		
	}

	//get posts by userID
	public function postsByAuthor($userID)
	{
		$user = User::findOrFail($userID);

		return $user->posts()
					->orderBy('created_at', 'asc')
					->get();
	}

	//update post
	public function updatePost($id, $data)
	{
		$post = Post::findOrFail($id);

		$post->title = $data->title;
		$post->text = $data->text;
		$post->url = $data->url;


		return $post->save();
	}

	//delete post
	public function deletePost($id)
	{
		return Post::destroy($id);
	}
}