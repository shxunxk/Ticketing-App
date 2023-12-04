import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faTicket } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className='flrx items-center space-x-4'>
        <Link href='/'>
          <FontAwesomeIcon icon={faHome} className="icon"/>
        </Link>
        <Link href='/TicketingPage/new'>
          <FontAwesomeIcon icon={faTicket} className="icon"/>
        </Link>
      </div>
        <div>
            <p className="text-white">ssnagvenkar@gmail.com</p>
        </div>
    </nav>
  )
}

export default Nav
