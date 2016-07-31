<?php

namespace App\Repositories;

use App\User;
use App\Post;

class PostRepository
{
	//get all posts
	public function allPosts()
	{
		//return Post::all();
		return Post::with('user')->get();
	}

	//insert post
	public function insertPost($data)
	{
		Post::create($data);
	}

	//get posts by userID
	public function postsByAuthor($userID)
	{
		$user = User::findOrFail($userID);

		return $user->posts()
					->orderBy('created_at', 'asc')
					->get();
	}

	//get post by ID
	public function postById($id)
	{
		return Post::findOrFail($id);
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