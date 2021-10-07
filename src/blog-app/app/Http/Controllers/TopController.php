<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Inertia\Inertia;

class TopController extends Controller
{
    // 定数
    const ARTICLE_NUM = 4; 

    // 依存関係
    protected $article;

    public function __construct(Article $article)
    {
        $this->article = $article;
    }
    /**
     * トップページを表示する
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        return Inertia::render('top/Index', [
            'articles' => $this->article->getByNum(self::ARTICLE_NUM),
        ]);
    }
    /**
     * 追加で記事を取得する
     *
     * @return JSON
     */
    public function seeMore($num)
    {
        return $this->article->getByNum($num);
    }
}