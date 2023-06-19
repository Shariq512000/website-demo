import Usa from "../USA/Usa";


function Dashboard() {

    return (
        <div className="dashboard">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card1">

                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card2">
                            <p>Organic Traffic in USA</p>
                            <div className="row">
                                <div className="col-md-7">
                                    <Usa />
                                </div>
                                <div className="col-md-5">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <p>Texas</p>
                                        </div>
                                        <div className="col-md-6">
                                            <span>81%</span>
                                        </div>
                                    </div>
                                    <input type="range" />

                                    <div className="row">
                                        <p>Washington</p>
                                        <span>68%</span>
                                    </div>
                                    <input type="range" />

                                    <div className="row">
                                        <p>Wyoming</p>
                                        <span>48%</span>
                                    </div>
                                    <input type="range" />

                                    <div className="row">
                                        <p>Virginia</p>
                                        <span>32%</span>
                                    </div>
                                    <input type="range" />
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;