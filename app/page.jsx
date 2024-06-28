"use client"
import React, { useEffect, useState } from 'react';
import TicketCard from './(components)/TicketCard';

const Dashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const res = await fetch('/api/Tickets', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
        });
        if (!res.ok) {
          throw new Error('Failed to fetch tickets');
        }

        const data = await res.json();
        console.log(data)
        setTickets(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getTickets();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className='p-5'>
      <div className='lg:grid grid-cols-2 xl:grid-cols-4 gap-4'>
        {tickets.tickets.map((ticket, index) => (
          <TicketCard key={index} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
