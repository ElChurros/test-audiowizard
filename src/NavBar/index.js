import React from 'react';

export function NavBar({className, props}) {
  return (
    <nav className={`navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow ${className ? className : ''}`} {...props}>
      <a className='navbar-brand col-md-3 col-lg-2 mr-0 px-3' href='#'>
        <img src={`${process.env.PUBLIC_URL}/logo.png`} height={40} alt='logo' loading='lazy' />
      </a>
      <a className='nav-link' href='#'>Mon compte</a>
    </nav>
  );
}

export default NavBar;