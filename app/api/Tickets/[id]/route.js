import Ticket from '@/app/(models)/Ticket'
import { NextResponse } from 'next/server'

  export async function DELETE(req, { params }) {
    try {
      const { id } = params;
      
      if (!id) {
        return NextResponse.json({ error: 'Ticket ID is required' }, { status: 400 });
      }
  
      await Ticket.findByIdAndDelete(id);
  
      return NextResponse.json({ message: 'Ticket deleted successfully' }, { status: 200 });
    } catch (err) {
      console.log(err);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }