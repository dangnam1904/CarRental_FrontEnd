import React from "react"
import "../../assets/css/styles.css"
import "../../assets/js/main.js"
import image1 from "../../assets/images/features_2.63b45674.jpg"
import image2 from "../../assets/images/features_2.63b45674.jpg"
import image3 from "../../assets/images/features_3.d9b52125.jpg"
import image4 from "../../assets/images/features_4.173d9abf.jpg"
import image5 from "../../assets/images/features_5.c524494b.jpg"
import image6 from "../../assets/images/features_6.2eb8bccb.jpg"
class Features extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div className="features__sect">
                    <h4 className="title-content">Tính năng nổi bật</h4>

                    <div id="carouselTinhNang" className="carousel " data-bs-ride="carousel">
                        <div className="carousel-inner carousel-inner-tt">
                            <div className="carousel-item carousel-item-tt active">
                                <div className="card">
                                    <img src={image1} className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-tt">
                                <div className="card">
                                    <img src={image2}
                                        className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-tt">
                                <div className="card">
                                    <img src={image3}
                                        className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-tt">
                                <div className="card">
                                    <img src={image4}
                                        className="card-img-top" alt="..." />
                                </div>
                            </div>
                            <div className="carousel-item carousel-item-tt" >
                            <div className="card">
                                <img src={image5}
                                    className="card-img-top" alt="..." />
                            </div>
                            </div>

                            <div className="carousel-item carousel-item-tt">
                                <div className="card">
                                    <img src={image6}
                                        className="card-img-top" alt="..." />
                                </div>
                            </div>
                        </div>

                    </div>
                    <button className="carousel-control-prev" id="carousel-control-prev-tt"
                        type="button" data-bs-target="#carouselTinhNang"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" id="carousel-control-next-tt"
                        type="button" data-bs-target="#carouselTinhNang"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div >
            </>
        )
    }

}

export default Features;


