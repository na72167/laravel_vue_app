<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProduct extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('product', function (Blueprint $table) {
            $table->increments('id',11);
            $table->string('name',255);
            $table->integer('category_id',11);
            $table->string('comment',255);
            $table->integer('price',11);
            $table->string('pic1',255);
            $table->string('pic2',255);
            $table->string('pic3',255);
            $table->integer('user_id',11);
            $table->tinyInteger('delete_flg',11);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('product');
    }
}
