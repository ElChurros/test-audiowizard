import React, { forwardRef } from 'react';

export const NavBar = forwardRef(({className, props}, ref) => {
  return (
    <nav className={`navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow ${className ? className : ''}`} {...props}>
      <a className='navbar-brand col-md-3 col-lg-2 mr-0 px-3' href='#'>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} height={40} alt='logo' loading='lazy' />
      </a>
      <button className='navbar-toggler position-absolute d-md-none collapsed' onClick={() => ref.current.classList.toggle('show')}>
        <span className='navbar-toggler-icon'></span>
      </button>
      <a className='nav-link' href='#'>
        <button className='btn btn-dark'>Mon compte</button>
      </a>
    </nav>
  );
});

export default NavBar;