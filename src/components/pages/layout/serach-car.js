import React from "react";
import "../../../assets/css/styles.css"

// import  "../../../assets/js/main.js"


class SearchCar extends React.Component {

    
    render() {

        return (
            <>

                <div className="search-car" >
                    <h2 style={{ textTransform: "uppercase", marginBottom: "25px" }}>Mioto - đồng hành cùng chuyến đi </h2>
                    <form action="/filter" method="get" id="form-search-car" className="col-md-6">
                        <h4 style={{ textAlign: "center" }}> Tìm kiếm xe</h4>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label htmlFor="inputAddress">Nhập nơi muốn thuê xe</label>
                                <input type="text" className="form-control" id="inputEmail4" name="address" placeholder="Nhập tỉnh hoặc quận  ....." />
                            </div>
                            <div className="form-group col-md-12 d-flex">
                                <div>
                                    <label htmlFor="inputDateStart">Ngày nhận xe</label>
                                    <input type="datetime-local" className="form-control" id="inputDateStart" name="dateStart" /> 
                                </div>
                                <div style={{marginLeft:"60px"}}>
                                    <label htmlFor="inputDateEnd">Ngày trả xe</label>
                                    <input type="datetime-local" className="form-control" id="inputDateEnd" name="dateEnd"  />
                                </div>

                            </div>
                            <div className="form-group col-md-12 d-flex">

                                <div className="form-check">
                                    <input className="form-check-input" type="radio" id="gridCheck" defaultValue="false" defaultChecked="checked" name="driver" /><label> Tự lái</label>
                                </div>
                                <div className="form-check" style={{marginLeft:"20px"}}>
                                    <input className="form-check-input" type="radio" id="gridCheck" defaultValue="true" name="driver" /><label> Có Tài xế</label>
                                </div>
                            </div>
                        </div>
                        <input type="submit" className="btn btn-primary btn-search-car" value="Tìm kiếm xe ngay"></input>
                    </form>
                </div>

            </>
        )
    }
}

export default SearchCar;