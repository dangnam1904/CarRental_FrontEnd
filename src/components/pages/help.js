import React from "react"
import "../../assets/css/styles.css"
import "../../assets/js/main.js"
import image1 from "../../assets/images/step-1.c204d3e1.svg"
import image2 from "../../assets/images/step-2.0bcadc00.svg"
import image3 from "../../assets/images/step-3.5ee48572.svg"
import image4 from "../../assets/images/step-4.518ab6a3.svg"

class Help extends React.Component {
    constructor(props) {
        super(props);
      }
    
    render() {
        return (
            <>
               <div className="col-md-12 help-use"
				style={{position: "static" ,marginTop: "180px",paddingBottom: "20px"}}>

				<h3>Hướng dẫn thuê xe</h3>
				<a href="@{/help}" className="d-md-flex a-help">
					<div className="fix-img">
						<div>
							<img src={image1} alt="" srcSet=""/>
							<p>Đặt xe</p>
						</div>

					</div>
					<div className="fix-img">
						<div>
							<img src={image2} alt="" srcSet=""/>
							<p>Nhận xe</p>
						</div>

					</div>
					<div className="fix-img">
						<div>
                        <img src={image3} alt="" srcSet=""/>
							<p>Trải nghiệm chuyến đi</p>
						</div>

					</div>
					<div className="fix-img">
						<div>
                        <img src={image4} alt="" srcSet=""/>
							<p>Kết thúc giao dịch</p>
						</div>

					</div>
				</a>
			</div>
            </>
        )
    }

}

export default Help;


