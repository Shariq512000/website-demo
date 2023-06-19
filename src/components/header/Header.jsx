import profilePicture from "../Side Bar/images/download.jpg"


function Header() {


    return (
        <div>
            <div className="container-fluid">
                <h3>LOGO</h3>
                <input type="text" />
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
    )
}

export default Header;