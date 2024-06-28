import { faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const PriorityDisplay = ({ priority }) => {
  const fireIcons = Array.from({ length: priority }, (_, index) => (
    <div key={index} className="pr-1">
          <FontAwesomeIcon key={index} icon={faFire} className='text-red-400' />
    </div>
  ));
  return <div className='flex'>{fireIcons}</div>;
};

export default PriorityDisplay;
