import React from 'react';
import './NavBar.css';

const NavBar = ({prev, prevAction, next, nextAction}) => (
  <div className='nav-bar'>
    <div className='prev-nav'>
      {prev &&
        <a onClick={prevAction}>
          <i className="fas fa-caret-left"></i>
          {prev}
        </a>
      }
    </div>
    <div className='next-nav'>
      {next &&
        <a onClick={nextAction}>
          {next}
          <i className="fas fa-caret-right"></i>
        </a>
      }
    </div>
  </div>
);

export default NavBar;
