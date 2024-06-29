import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRouter } from 'next/navigation';
import React from 'react';

const DeleteBlock = ({ id }) => {
  const router = useRouter();

  const deleteBlock = async () => {
      const res = await fetch(`/api/Tickets/${id}`, {
        method: "DELETE",
      }); 
      if (res.ok) {
        router.refresh();
      }

  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faX}
        className='text-red-400 cursor-pointer'
        onClick={deleteBlock}
      />
    </div>
  );
};

export default DeleteBlock;