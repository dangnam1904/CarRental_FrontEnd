import React from "react";
import "../../assets/css/styles.css"
import "../../assets/js/main.js"
import Header from './layout/header'
import SearchCar from "./layout/serach-car"
import Insurance from "./insurance";
import Features from "./features";
import Help from "./help";
import CarAddressHasDriver from "./car-address-has-driver"
//  import img from "../../assets/images/features_1.d60ace8e.jpg"

class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <Header />
                <SearchCar />
                <div className="container" style={{ padding: "0px" }}>    
                    <Insurance />
                    <Features />
                    <Help/>
                    <CarAddressHasDriver/>
                </div>

            </>

        )
    }
}

export default Home