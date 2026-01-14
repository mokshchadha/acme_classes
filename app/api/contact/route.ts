import { NextResponse } from 'next/server'
import { sendTelegramMessage } from '../../lib/telegram'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, course, message } = body

    if (!name || !phone || !email || !course) {
      return NextResponse.json(
        { success: false, message: 'Required fields missing' },
        { status: 400 }
      )
    }

    const telegramMessage = `
📬 *New Contact Message*

👤 *Name*: \`${name}\`
📱 *Phone*: \`${phone}\`
📧 *Email*: \`${email}\`
📚 *Course*: ${course}
💬 *Message*: ${message || 'No message provided'}
    `

    const result = await sendTelegramMessage(telegramMessage)
    
    if (result.success) {
      return NextResponse.json({ success: true, message: 'Message sent successfully' })
    } else {
      return NextResponse.json(
        { success: false, message: 'Failed to send message' },
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
