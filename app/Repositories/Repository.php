<?php

namespace App\Repositories;

use App\User;
use App\Post;

class Repository
{
	//get all posts
	public function allPosts()
	{
		//return Post::all();
		return Post::with('user')->get();
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
		$post->title = $data->title;
		$post->text = $data->text;
		$post->url = $data->url;

		// Post::create($data);
		$user = User::findOrFail($data->$userID);
		return $user->posts()->save($post);
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
	public function updatePost($data, $id)
	{
		return Post::findOrFail($id)->update($data);
	}

	//delete post
	public function deletePost($id)
	{
		return Post::destroy($id);
	}
}