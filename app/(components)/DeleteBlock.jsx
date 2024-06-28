import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const DeleteBlock = ({ id }) => {

  const deleteBlock = async (id) => {
    try {
      const res = await fetch(`/api/Tickets/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!res.ok) {
        throw new Error('Failed to delete ticket');
      }

      const data = await res.json();
    } catch (error) {
    }
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faX}
        className='text-red-400 cursor-pointer'
        onClick={() => deleteBlock(id)}
      />
    </div>
  );
};

export default DeleteBlock;
