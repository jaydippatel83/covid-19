import React, { Component } from 'react';
import logo from '../src/images/logo.webp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Total from './total';
import District from './district';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    states: [],
    search: ''
  }
  componentDidMount() {
    fetch('https://api.covid19india.org/data.json')
      .then(res => res.json())
      .then((data) => {
        this.setState({ states: data })
      })
      .catch(console.log)
  }
  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword })
  }


  render() {
    const data = this.state.states.statewise; 
    return (
      <div>
        <div className="container-fluid  box-shadow">
          <div className="row">
            <div className="col d-flex justify-content-start">
              <img alt="logo" className="App-logo" src={logo} style={{ width: '110px', height: '80px' }} />
              <h2 className="pt-3 pb-3 pr-3 text-light">COVID19 Live Update</h2>
            </div>
          </div>
        </div>
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-6">
              <Total />
            </div>
            <div className="col-6">
              <District />
            </div>
          </div>
          <div className="row  mt-4 mb-2">
            <div className="col-6">
              <div className="col-12 d-flex justify-content-between">
                <h2 className="text-primary">STATES</h2>
                <div className=" " id="search-container">
                  <input type="text" placeholder="Search" onChange={(e) => this.searchSpace(e)} />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6 table-height">
              <table className="table responsive ">
                <thead className="sticky">
                  <tr>
                    <th className="text-secondary" scope="col">State</th>
                    <th className="text-primary" scope="col">Active</th>
                    <th className="text-warning" scope="col">Confirmed</th>
                    <th className="text-success" scope="col">Recovered</th>
                    <th className="text-danger" scope="col">Deaths</th>
                  </tr>
                </thead>
                {
                  data ? data.filter((data) => {
                    if (this.state.search == null)
                      return data
                    else if (data.state.toLowerCase().includes(this.state.search.toLowerCase()) || data.state.toLowerCase().includes(this.state.search.toLowerCase())) {
                      return data
                    }
                  }).map((st, index) => {
                    return (
                      <tbody key={index}>
                        <tr onClick={()=>this.props.cid(st.state)}>
                          <th scope="row">{st.state}</th>
                          <td>{st.active}</td>
                          <td>{st.confirmed}</td>
                          <td>{st.recovered}</td>
                          <td>{st.deaths}</td>
                        </tr>
                      </tbody>
                    )
                  }) : null
                }
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
const mapDispatchToProps = (dispatch) => {
  return{
    cid:(id)=>{dispatch({type:'ADD_ID',payload:id})}
  }
}

export default connect(null,mapDispatchToProps)(App);
