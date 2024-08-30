import { NextResponse } from 'next/server';
import {init, send} from '@emailjs/browser';

export async function POST(req: Request) {
  init({
    publicKey: "'user_mF812FOK6OmjB48aGokge'",
  });
  try {
    const { name, email, message } = await req.json();
    const result = await send(
      'service_rg6d7ae',  // Replace with your EmailJS service ID
      'template_g8ejmzs', // Replace with your EmailJS template ID
      { name, email, message },
    );

    return NextResponse.json({ success: true, result });
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({ success: false, error: error.message });
  }
}