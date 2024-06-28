"use client"
import React from 'react'
import DeleteBlock from './DeleteBlock'
import PriorityDisplay from './PriorityDisplay'
import ProgressiveDisplay from './ProgressiveDisplay'
import StatusDisplay from './StatusDisplay'

const TicketCard = ({ticket}) => {
  return (
    <div className='flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2'>
        <div className='flex mb-3 justify-between'>
        <PriorityDisplay priority={ticket.priority}/>
        <DeleteBlock id = {ticket._id}/>
        </div>
        <h4>{ticket.title}</h4>
        <hr className='h-px border-0 bg-page mb-2'/>
        <p className='whitespace-pre-wrap'>{ticket.description}</p>
        <div className='flex-grow'></div>
        <div className='flex mt-2'>
          <div className='flex flex-col'>
            <p className='text-xs my-1'>Date: {ticket.createdAt.split('T')[0]}<br/>Time: {ticket.createdAt.split('T')[1].split(".")[0]}</p>
            {/* <ProgressiveDisplay/> */}
          </div>
          <div className='ml-auto flex items-end'>
            <StatusDisplay status = {ticket.status}/>
          </div>
        </div>
    </div>
  )
}

export default TicketCard
