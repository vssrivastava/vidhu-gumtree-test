import React from 'react';
import ipad from '../../static/images/ipad-mini.jpg';
import './ItemInformation.css';

/**
 * Component to show the item information text/content
 * @param {Object} props containing 'content[String]' prop 
 */
const ItemInformation = ({content}) => (
  <div className='item-info'>
    {content.thumbnail &&
      // Ideally the thumbnail should have the complete path that should be used in src
      <img className='ipad-img' src={ipad} alt='thumbnail' />
    }
    <div className='info-content'>
      {/* title was not part of requirement but I still added it so we know if they are in sync with nav bar*/}
      <h2>{content.title}</h2>
      <div>{content.description}</div>
    </div>
  </div>
);

export default ItemInformation;
