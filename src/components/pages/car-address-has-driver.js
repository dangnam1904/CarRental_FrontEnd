import React, { Fragment } from "react";
import ProvinceService from "../../services/ProvinceService";
import "../../assets/js/main.js"
import $ from "jquery"
import * as bootstrap from 'bootstrap';

class CarAddressHasDriver extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            province: [],
        };
    }
    readCarInAddress() {
       
        var a = document.getElementsByClassName("name-car")
        console.log(a)
        var sumcar = document.getElementsByClassName("sum-car")
        console.log(a.length)
        for (let i = 0; i < a.length; i++) {
            console.log("fotr")
            $.ajax({
                url: "/sum-car-has-driver",
                data: {
                    address: a[i].innerText
                },
                type: "GET",
                responseType: "application/json"
            }).done(function (ketqua) {
                console.log("gt:" + ketqua)
                sumcar[i].innerHTML = ketqua + "  xe +";
            })
        }
    }
    componentDidMount() {
        ProvinceService.getAllProvince().then((res) => {
            this.setState({ province: this.getAllProvinceOrderByName() });
           console.log(this.getAllProvinceOrderByName())
        });        
       
    }
     getAllProvinceOrderByName(){
        let listProvince=[]
        ProvinceService.getAllProvince().then((result)=>{
            listProvince= result.data;
            result.data.map(r=>{
               listProvince.push(r)
            })
        });
        return listProvince;
    }
    carouselAddressDriver() {

        const multipleItemCarousel = document.querySelector("#carouselAddressDriver");
    
        if (window.matchMedia("(min-width:576px)").matches) {
            const carousel =  new bootstrap.Carousel(multipleItemCarousel, {
                interval: false
            });
    
            var carouselWidth = $(".carousel-inner-address-driver")[0].scrollWidth;
            console.log( "1"+ carouselWidth)
            var cardWidth = $(".carousel-item-address-driver").width();
            console.log( "2"+ cardWidth)
            var d= $(".carousel-item-address-driver");
            console.log(d)
            var scrollPosition = 0;
    
            $("#carousel-control-next-address-driver").on("click", function() {
                console.log(" next -driver")
                if (scrollPosition < carouselWidth - cardWidth * 4) {
                    console.log("next có tài");
                    scrollPosition = scrollPosition + cardWidth;
                    $(".carousel-inner-address-driver").animate({ scrollLeft: scrollPosition }, 600);
                }
            });
            $("#carousel-control-prev-address-driver").on("click", function() {
                if (scrollPosition > 0) {
                    console.log("prev có tài");
                    scrollPosition = scrollPosition - cardWidth;
                    $(".carousel-inner-address-driver").animate({ scrollLeft: scrollPosition }, 600);
                }
            });
        } else {
            $(multipleItemCarousel).addClass("slide");
        }
    }

    render() {
        return (
            <>
                <h4 className="title-content">ĐỊA ĐIỂM NỔI BẬT - XE CÓ TÀI XẾ</h4>
                <div id="carouselAddressDriver" className="carousel"
                    data-bs-ride="carousel">
                    <div className="carousel-inner carousel-inner-address-driver">

                        {this.state.province.map(province =>
                            <Fragment key={province.idProvince}>
                                <div className="carousel-item-address-driver">
                                    <div className="card">
                                        <div className="card-body">
                                            <a href="./">
                                                <img src={"http://localhost:8081/uploads/" + province.imgProvince} alt="..." />
                                                <div className="text">
                                                    <h4 className="name-car">{province.nameProvince}</h4>
                                                    <p className="sum-car"></p>
                                                </div>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </Fragment>
                        )}

                    </div>

                    <button className="carousel-control-prev"
                        id="carousel-control-prev-address-driver" type="button"
                        data-bs-target="#carouselAddressDriver" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next"
                        id="carousel-control-next-address-driver" type="button"
                        data-bs-target="#carouselAddressDriver" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </>
        )
    }
}

export default CarAddressHasDriver;