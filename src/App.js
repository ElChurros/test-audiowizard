import React, {useRef, useState} from 'react';

import Context from './context';
import NavBar from './NavBar';
import SideBar from './SideBar';
import PatientCreator from './PatientCreator';
import './App.css';

function App() {
  const [state, setState] = useState({
    patient: {
      firstName: '',
      setFirstName: (firstName) => setState({patient: {...state.patient, firstName: firstName}}),
      lastName: '',
      setLastName: (lastName) => setState({patient: {...state.patient, lastName: lastName}}),
      sex: '',
      setsex: (sex) => setState({patient: {...state.patient, sex: sex}}),
    }
  })
  const sidebar = useRef();
  return (
    <Context.Provider value={state}>
      <NavBar ref={sidebar}/>
      <div className='container-fluid'>
        <div className='row'>
          <SideBar ref={sidebar}/>
          <main className='col-md-9 col-lg-10 ml-sm-auto p-md-4'>
            <PatientCreator />
          </main>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
