import profilePicture from "../Side Bar/images/download.jpg"
import "./Header.css";

function Header() {


    return (
        <div className="header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2">
                        <div className="row">
                            <div className="col-md-6">
                                <h3>LOGO</h3>
                            </div>
                            <div className="col-md-6">
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="profile">
                            <div className="profilePic">
                                <img src={profilePicture} alt="" />
                            </div>
                            <div className="profileDetail">
                                <p>Jhon Doe</p>
                                <p>Super Admin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;