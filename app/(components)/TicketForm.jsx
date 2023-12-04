"use client"

import { useRouter } from 'next/router'
import React, {useState} from 'react'

const TicketForm = () => {

    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormData((prevState)=>({
            ...prevState,
            [name]: value,

        }))
    }

    const handleSubmit = () => {
        console.log('Submit')
    }
    
    const initialTicket ={
        title: "",
        description: '',
        priority: 1,
        progress: 0,
        status: 'not started',
        category: 'Hardware'
    }

    const [formData, setFormData] = useState(initialTicket)
  return (
    <div className='flex justify-center'>
      <form className='flex flex-col gap-3 w-1/2' method='post' onSubmit={handleSubmit}>
        <h4>Create your Ticket</h4>
        <label htmlFor="title"></label>
        <input id='title' name='title' type='text' onChange={handleChange} required={true} value={formData.title}></input>
        <h4>Description</h4>
        <label htmlFor="description"></label>
        <textarea id='description' name='description' type='text' onChange={handleChange} required={true} value={formData.description} rows='5'></textarea>
        <h4>Category</h4>
        <label htmlFor="description"></label>
        <select id='description' name='description' required={true} value={formData.description}>
            <option value = 'Hardware Problem'>Hardware Problem</option>
            <option value = 'Software Problem'>Software Problem</option>
        </select>
      </form>
    </div>
  )
}

export default TicketForm