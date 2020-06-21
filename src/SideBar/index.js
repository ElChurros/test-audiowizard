import React, { forwardRef } from 'react';

export const SideBar = forwardRef(({className, ...props}, ref) => {
  return (
    <nav ref={ref} className={`sidebar col-md-3 col-lg-2 d-md-block bg-light collapse ${className ? className : ''}`}>
      <div className='sidebar-sticky'>
        <div className='py-3'>
          <a className='nav-link' href='#'>Link 1</a>
          <a className='nav-link' href='#'>Link 2</a>
          <a className='nav-link' href='#'>Link 3</a>
        </div>
        <div className='pt-3 border-top'>
          <a className='nav-link' href='#'>Link 4</a>
          <a className='nav-link' href='#'>Link 5</a>
        </div>
      </div>
    </nav>
  );
})

export default SideBar;