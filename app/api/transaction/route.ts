import connectToDb from '@/lib/connectToDb'
import { NextResponse } from 'next/server'
export const GET = async () => {
  console.log('Loading');
  
   await  connectToDb()

  return NextResponse.json({data: 'Hello'}, {status: 200})
}