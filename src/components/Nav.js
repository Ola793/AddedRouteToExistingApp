import React from 'react';
import './../index.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className={styles.navigation}>
      <div>
        <NavLink to='/'> Home </NavLink>
      </div>
      <div>
        <NavLink to='/battle'> Battle </NavLink>
      </div>
      <div>
        <NavLink to='/popular'> Popular </NavLink>
      </div>
    </div>
  );
};

export default Nav;