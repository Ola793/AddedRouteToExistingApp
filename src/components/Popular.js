import React from 'react';
import './../index.css';
import { NavLink } from 'react-router-dom';

const Popular = () => {
  return (
    <div className={styles.navigation}>
      <h1>Popular</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, doloremque?
      Eum temporibus perspiciatis officiis ipsam est, consectetur velit obcaecati quisquam.
      Nostrum necessitatibus, eos voluptatem nihil dolore impedit vel odit exercitationem.
      </p>
      <div>
        <NavLink to='/'> Home </NavLink>
      </div>
      <div>
        <NavLink to='/battle'> Battle </NavLink>
      </div>
    </div>
  );
};

export default Popular;