import React from 'react';

class Carousel extends React.Component{
    render() {
        return (
            <div id="carouselExampleIndicators" className="container carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" style={{height:'400px'}}>
                    <div className="carousel-item active">
                        <img src={`./img/Cosmos04.jpg`} alt="Logo" />
                    </div>
                    <div className="carousel-item">
                        <img src={`./img/Cosmos05.jpg`} alt="Logo" />
                    </div>
                    <div className="carousel-item">
                        <img src={`./img/Cosmos07.jpg`} alt="Logo" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
          </div>
        );
    }
}

export default Carousel;
