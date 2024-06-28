import Ticket from '@/app/(models)/Ticket'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
      const tickets = await Ticket.find();
  
      return NextResponse.json({ tickets }, { status: 200 });
    } catch (err) {
      console.log(err);
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  }

  export async function DELETE(req) {
    try {
        const url = new URL(req.url);
        const id = url.pathname.split('/').pop();

        console.log('Hello',id)
    
        if (!id) {
          return NextResponse.json({ error: 'Ticket ID is required' }, { status: 400 });
        }
    
        const result = await deleteTicketById(id);
    
        if (result.error) {
          return NextResponse.json({ error: result.error }, { status: 500 });
        }
    
        return NextResponse.json({ message: 'Ticket deleted successfully' }, { status: 200 });
      } catch (err) {
        console.log(err);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
      }
  }

export async function POST(req) {
    try {
      const body = await req.json();
      const ticketData = body.formData;
  
      await Ticket.create(ticketData);
  
      return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
    } catch (err) {
      console.log(err);
      return NextResponse.json({ message: "Error", err }, { status: 500 });
    }
  }