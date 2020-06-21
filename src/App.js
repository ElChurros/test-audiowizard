import React, {useRef} from 'react';

import Context from './context';
import NavBar from './NavBar';
import SideBar from './SideBar';
import './App.css';

function App() {
  const sidebar = useRef();
  return (
    <Context.Provider>
      <NavBar ref={sidebar}/>
      <div className='container-fluid'>
        <div className='row'>
          <SideBar ref={sidebar}/>
          <main className='col-md-9 col-lg-10 ml-sm-auto px-md-4'>
            
          </main>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
