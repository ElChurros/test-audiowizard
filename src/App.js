import React from 'react';

import Context from './context';
import NavBar from './NavBar';
import './App.css';


function App() {
  return (
    <Context.Provider>
      <NavBar/>
    </Context.Provider>
  );
}

export default App;
