import React, { Component } from 'react';
import { connect } from 'react-redux';
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
        const pid = this.props.id;
        const data = this.state.dist;
        let distData = null;
        for (let X in data[pid]) {
            distData = data[pid].districtData;
        }
        const display = distData ? Object.keys(distData).map((d, key) => {
            console.log(distData, "data"); 
            return (
                <li className="list-group-item d-flex justify-content-between" key={key}>
                    {d}
                    <span>{distData[d].confirmed}</span>
                </li>
            );
        }) : null
        return (
            <div>
                <div className="container-fluid" style={{position:'absolute'}}>
                    <div className="row">
                        <div className="col">
                            <h2 className="text-primary text-uppercase">{pid === '' ? 'India' : pid}</h2>
                            <p className="font-weight-bold text-secondary">State Records</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 dist-height mb-4 pb-3">
                            <ul className="list-group">
                                {display}
                            </ul> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        id: state.id
    }
}
export default connect(mapStateToProps, null)(District);
