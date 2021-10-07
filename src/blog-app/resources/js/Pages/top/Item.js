import React, { useState } from 'react';
import axios from "axios";

const Item = (props) => {
    // 記事データ
    const [articlesData, setArticlesData] = useState(props.articles);
    // 一回で表示する記事数
    const [currentArticleNum, setArticleNum] = useState(4);

    /**
     * 記事追加表示
     * seeMoreボタン押下時
     * @param  {object} e イベント
     * @return {void}
     */
    const seeMore = (e) => {
        e.preventDefault();

        // さらに取得件数を増やす
        let newArticleNum = currentArticleNum + 4;

        // 記事をさらに4件分取得
        axios.get('/top/seeMore/' + newArticleNum)
            .then(function (response) {
                if (response.data.length > currentArticleNum) {
                    // 現在の件数を更新
                    setArticleNum(newArticleNum);

                    // 記事を更新
                    setArticlesData(response.data);
                }
            })
            .catch(function (error) {
                // TODO エラー表示
                console.log(error);
            })
    }

    /**
     * 記事詳細表示
     * 記事押下時
     * @param  {object} e イベント
     * @return {void}
     */
    const showMore = (e) => {
        e.preventDefault();
        // 詳細画面に遷移
        console.log(e.target.id)
    }

    return (
        <div className="container">
            {articlesData.map((data, index) => {
                return (
                    <div className="pt-4" key={index}>
                        <div className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                            <div className="col-auto d-none d-lg-block">
                                <img src={data.thumbnail} alt="thumb" />
                            </div>
                            <div className="col p-4 d-flex flex-column position-static">
                                <strong className="d-inline-block mb-2 text-primary">World</strong>
                                <h3 className="mb-0">{data.title}</h3>
                                <div className="mb-1 text-muted">{data.updateDate}</div>
                                <p className="card-text mb-auto">{data.body}</p>
                                <a href="#" id={data.id} className="stretched-link" onClick={showMore}>Continue reading</a>
                            </div>
                        </div>
                    </div>
                );
            })}
            <div className="d-grid gap-2 col-6 mx-auto text-center">
                <a className="btn btn-outline-primary rounded-pill" href="#" onClick={seeMore}>See more</a>
            </div>
        </div>
    );
}

export default Item;