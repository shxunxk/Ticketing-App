import { faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ProgressiveDisplay = () => {
  return (
    <div className='w-full bg-gray-200 rounded-full h-2.5'>
      <div className='bg-blue-600 h-2.5 rounded-full' style={{width: '75%'}}>

      </div>
      {/* <FontAwesomeIcon icon={faFire} className='text-red-400'/> */}
    </div>
  )
}

export default ProgressiveDisplay
