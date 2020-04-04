import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class District extends Component {
    state = {
        dist: [],
    }
    componentDidMount() {
        fetch(' https://api.covid19india.org/state_district_wise.json')
            .then(res => res.json())
            .then((data) => {
                this.setState({ dist: data })
            })
            .catch(console.log)
    }

    render() {
        const data = this.state.dist;
        // console.log("obj", data);
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h2 className="text-primary">INDIA COVID-19 TRACKER</h2>
                            <p className="font-weight-bold text-secondary">Last Update : {data.lastupdatedtime}</p> 
                        </div>
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-lg-3 box-a">
                            <p className="active font-weight-bold">Active</p>
                            <h3 className="font-weight-bold text-primary">  </h3>
                        </div>
                        <div className="col-3 box-b">
                            <p className="confirm font-weight-bold">Confirmed</p>
                            <h3 className="font-weight-bold text-warning">  </h3>
                        </div>
                        <div className="col-3 box-c">
                            <p className="recover font-weight-bold">Recovered</p>
                            <h3 className="font-weight-bold text-success"> </h3>
                        </div>
                        <div className="col-3 box-d">
                            <p className="death font-weight-bold">Deaths</p>
                            <h3 className="font-weight-bold text-danger">  </h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default District;
