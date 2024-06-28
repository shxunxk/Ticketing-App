"use client"

import { useRouter } from 'next/navigation'
import React, {useState} from 'react'

const TicketForm = () => {

    const router = useRouter()

    
    const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name
        setFormData((prevState)=>({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/Tickets',
        {
            method: 'POST',
            body: JSON.stringify({formData}),
            'content-type': 'application/json'
        })
        console.log(res)
        if(!res.ok){
            throw new Error('Failed to create Ticket')
        }
        router.refresh()
        router.push('/')
    };
    
    const initialTicket ={
        title: "",
        description: '',
        priority: 1,
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
        <label>Priority</label>
        <div>
            <input
                id='priority-1'
                name='priority'
                type='radio'
                value={1}
                checked={formData.priority == 1}
                onChange={handleChange}
            />
            <label>1</label>
            <input
                id='priority-2'
                name='priority'
                type='radio'
                value={2}
                checked={formData.priority == 2}
                onChange={handleChange}
            />
            <label>2</label>
            <input
                id='priority-3'
                name='priority'
                type='radio'
                value={3}
                checked={formData.priority == 3}
                onChange={handleChange}
            />
            <label>3</label>
        </div>
        <label>Status</label>
        <select name='status' value={formData.status} onChnage={handleChange}>
            <option value = 'SUCCESS'>Started</option>
            <option value = 'PENDING'>In Progress</option>
            <option value = 'NOT STARTED'>Not Started</option>
        </select>
        <input type='submit' className='btn' value = 'Create Ticket'></input>
      </form>
    </div>
  )
}

export default TicketForm