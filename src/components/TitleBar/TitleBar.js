import React from 'react';
import './TitleBar.css';

/**
 * Title bar of the panel. On Click this will collapse/expand the panel
 * @param {Object} props containing title[String], collapsed[Boolean], action[Function] props 
 */
const TitleBar = ({title, collapsed, action}) => (
  <div className='title-bar'>
    <button onClick={action}>
      <i className="note-icon fas fa-sticky-note"></i>
      {title}
      <i className={`float-icon fas fa-caret-${collapsed ? 'down' : 'up'}`}></i>
    </button>
  </div>
);

export default TitleBar;
