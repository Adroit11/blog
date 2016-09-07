<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePostTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('Post_Tag', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('Tag_ID');
            $table->integer('Post_ID');

            $table->foreign('Tag_ID')->references('id')->on('tags')->onDelete('cascade');
            $table->foreign('Post_ID')->references('id')->on('posts')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
        Schema::drop('Post_Tag');
    }
}
