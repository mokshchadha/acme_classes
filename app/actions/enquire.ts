'use server'

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_CHAT_ID

export async function submitEnquiry(formData: FormData) {
  const name = formData.get('name')
  const phone = formData.get('phone')
  const type = formData.get('type')

  if (!name || !phone || !type) {
    return { success: false, message: 'All fields are required' }
  }

  const message = `
🔔 *New Enquiry Received*

👤 *Name*: \`${name}\`
📱 *Phone*: \`${phone}\`
📋 *Enquiry Type*: ${type}
  `

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
        parse_mode: 'Markdown',
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Telegram API Error:', data)
      return { success: false, message: 'Failed to send enquiry' }
    }

    return { success: true, message: 'Enquiry sent successfully!' }
  } catch (error) {
    console.error('Submission Error:', error)
    return { success: false, message: 'Failed to connect to server' }
  }
}
