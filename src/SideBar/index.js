import React from 'react';

export function SideBar({className, ...props}) {
  return (
    <nav className={`sidebar col-md-3 col-lg-2 d-md-block bg-light ${className ? className : ''}`}>
      <div className='sidebar-sticky pt-3'>
        <a className='nav-link' href='#'>Link 1</a>
        <a className='nav-link' href='#'>Link 2</a>
        <a className='nav-link' href='#'>Link 3</a>
      </div>
    </nav>
  );
}

export default SideBar;