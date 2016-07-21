<?php

use Illuminate\Database\Seeder;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        DB::table('posts')->delete();

        DB::table('posts')->insert([
            'author' => 'Sina',
            'title' => 'Bill Withers - Im Her Daddy',
            'text' => 'You should have told me Lucy....',
            'url' => 'www.youtube.com/v=5SAke0jV-0o'
        ]);

        DB::table('posts')->insert([
            'author' => 'Ed',
            'title' => 'Action Bronson - Compliments to the Chef',
            'text' => 'La Musica de Harry Fry',
            'url' => 'www.youtube.com/watch?v=bFFOBuNbM24'
        ]);
    }
}
