<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Inertia\Inertia;

class TopController extends Controller
{
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
        return Inertia::render('Top', [
            'articles' => $this->article->getAll(),
        ]);
    }
}