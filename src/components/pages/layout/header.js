import React from "react"
import logo from "../../../assets/images/logo1.png"
// import "../../../assets/css/styles.css"

class Header extends React.Component {

   
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg  header"
                    >
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/" style={{marginLeft: "30px" }}>
                            <img src={logo} style={{width: "100px"}} alt="" /></a>
                        <button className="navbar-toggler" type="button"
                            data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><a className="nav-link" href="@{/}">Trang
                                    chủ</a></li>
                                <li className="nav-item"><a className="nav-link"
                                    href="@{/register-car}">Trở thành chủ xe</a></li>
                                <li className="nav-item"><a className="nav-link" href="@{/blog}">Blogs</a></li>
                                <li className="nav-item"><a className="nav-link" href="@{/lien-he}">Liên
                                    hệ</a></li>

                                <li className="nav-item"><a className="nav-link" href="@{/login}">Đăng
                                    nhập</a></li>
                                <li className="nav-item"><a className="nav-link"
                                    href="@{/sign-up}">Đăng kí</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav >
            </>
        )
    }

}

export default  Header;


