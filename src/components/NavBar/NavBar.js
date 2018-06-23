import React from 'react';
import './NavBar.css';

const NavBar = ({collapsed, prev, prevAction, next, nextAction}) => {
  // a11y : deactivate the nav bar elements when the panel is collapsed
  const collapsedAttr = collapsed ? {
    'aria-hidden': true,
    'tabIndex': -1
  } : {};

  return (
    <div className='nav-bar'>
      <div className='prev-nav'>
        {prev &&
          <button onClick={prevAction} {...collapsedAttr}>
            <i className="fas fa-caret-left"></i>
            {prev}
          </button>
        }
      </div>
      <div className='next-nav'>
        {next &&
          <button onClick={nextAction} {...collapsedAttr}>
            {next}
            <i className="fas fa-caret-right"></i>
          </button>
        }
      </div>
    </div>
  );
};

export default NavBar;
