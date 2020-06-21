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
          <main>
          </main>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
