import React, { Fragment } from "react"
import "../../assets/css/styles.css"
import InsuranceService from "../../services/InsuranceService";

class Insurance extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
          insurance: []
        };
      }
    closepPoupupInsurances() {
		document.getElementById("contentInsurances").classList
				.remove("open-contentInsurances");
	}

	openInsurances() {
		document.getElementById("contentInsurances").classList
				.add("open-contentInsurances");
	}
    componentDidMount(){
        InsuranceService.getAllInsurance().then((res) => {
            this.setState({ insurance: res.data});
        });
    }
    
    render() {
        return (
            <>
               <div style={{ position: "relative" }}>
                    <div className="insurance-partner">
                    <p style={{ textDecoration: "underline" }} >Đối tác bảo hiểm</p>
                    <div className="partner-logo hasCursor" >
                        { this.state.insurance.map(insurance =>
                                    <Fragment key={insurance.idInsurance}>
                                        <div className="partner-logo__image" >
                                            <img className="img-fluid" src= {"http://localhost:8081/uploads/"+insurance.imageInsurance}
                                                 alt="" onClick={this.openInsurances}/>
                                        </div>
                                        <div id="contentInsurances" className="contentInsurances">
                                            <i className="icon-remove fa-solid fa-xmark" onClick={this.closepPoupupInsurances}
                                                ></i>
                                            <div dangerouslySetInnerHTML={ {__html: insurance.contentInsurance} }
                                                style={{marginTop: "50px",padding: "10px 20px", textAlign: "justify"}}></div>
                                        </div>
                                    </Fragment> 
                                )
                        }
                         </div>   
                    </div>
                </div>
            </>
        )
    }

}

export default  Insurance;


