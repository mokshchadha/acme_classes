import { NextResponse } from 'next/server'
import { sendTelegramMessage } from '../../lib/telegram'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, type } = body

    if (!name || !phone || !type) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      )
    }

    const message = `
🔔 *New Enquiry Received*

👤 *Name*: \`${name}\`
📱 *Phone*: \`${phone}\`
📋 *Enquiry Type*: ${type}
    `

    const result = await sendTelegramMessage(message)
    
    if (result.success) {
      return NextResponse.json({ success: true, message: 'Enquiry submitted successfully' })
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to send enquiry' },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('API Error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
