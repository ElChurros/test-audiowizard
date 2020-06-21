import React, { Component, createRef } from 'react';

import Context from './context';
import NavBar from './NavBar';
import SideBar from './SideBar';
import PatientCreator from './PatientCreator';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patient: {
        firstName: '',
        setFirstName: (firstName) => this.setState({patient: {...this.state.patient, firstName: firstName}}),
        lastName: '',
        setLastName: (lastName) => this.setState({patient: {...this.state.patient, lastName: lastName}}),
        sex: '',
        setSex: (sex) => this.setState({patient: {...this.state.patient, sex: sex}}),
      }
    }
    this.sidebar = React.createRef();
  }

  render() {
    return (
      <Context.Provider value={this.state}>
        <NavBar ref={this.sidebar}/>
        <div className='container-fluid'>
          <div className='row'>
            <SideBar ref={this.sidebar}/>
            <main className='col-md-9 col-lg-10 ml-sm-auto p-md-4'>
              <PatientCreator />
            </main>
          </div>
        </div>
      </Context.Provider>
    );
  }
}

export default App;
