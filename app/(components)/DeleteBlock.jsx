import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const DeleteBlock = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faX} className='text-red-400'/>
    </div>
  )
}

export default DeleteBlock
