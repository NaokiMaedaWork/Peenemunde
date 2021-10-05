import React from 'react';

const Item = (props) => {
    const articles = props.articles.map((article,index) => {
        console.log(article)
        return (
            <div className="pt-4" key={index}>
                <div className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative">
                    <div className="col-auto d-none d-lg-block">
                        <svg className="bd-placeholder-img" width="300" height="200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"></rect><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
                    </div>
                    <div className="col p-4 d-flex flex-column position-static">
                        <strong className="d-inline-block mb-2 text-primary">World</strong>
                        <h3 className="mb-0">{article.title}</h3>
                        <div className="mb-1 text-muted">{article.updateDate}</div>
                        <p className="card-text mb-auto">{article.body}</p>
                        <a href="#" className="stretched-link">Continue reading</a>
                    </div>
                </div>
            </div>
        );
    });
    return (
        <div className="container">
            {articles}
            <div className="d-grid gap-2 col-6 mx-auto text-center">
                <a className="btn btn-outline-primary rounded-pill" href="#">See more</a>
            </div>
        </div>
    );
}

export default Item;