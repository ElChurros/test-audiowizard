import React from 'react';

import Context from './context';
import NavBar from './NavBar';
import SideBar from './SideBar';
import './App.css';


function App() {
  return (
    <Context.Provider>
      <NavBar/>
      <div className='container-fluid'>
        <div className='row'>
          <SideBar/>
          <main>
          </main>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
