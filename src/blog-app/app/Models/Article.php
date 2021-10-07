<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Article extends Model
{
    use HasFactory;
    /**
     * 全件取得
     *
     * @return JSON
     */
    function getAll(){
        return Article::all();
    }
    /**
     * 指定した件数分取得
     *
     * @return JSON
     */
    function getByNum($num){
        return Article::limit($num)->get();
    }
}
