import React from 'react'

const StatusDisplay = ({status}) => {
  return (
    <span className={`inline-block rounded-full px-2 py-2 text-xs font-semibold text-gray-200 ${status === 'not started'?'bg-blue-500': status === 'done' ? 'bg-yellow-500' : 'bg-green-500'}`}>
        <p className='text-white-400'>{status}</p>
    </span>
  )
}

export default StatusDisplay
