'use server'

import { sendTelegramMessage } from '../lib/telegram'

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name')
  const phone = formData.get('phone')
  const email = formData.get('email')
  const course = formData.get('course')
  const userMessage = formData.get('message')

  if (!name || !phone || !email || !course) {
    return { success: false, message: 'Please fill in all required fields' }
  }

  const telegramMessage = `
📬 *New Contact Message*

👤 *Name*: \`${name}\`
📱 *Phone*: \`${phone}\`
📧 *Email*: \`${email}\`
📚 *Course*: ${course}
💬 *Message*: ${userMessage || 'No message provided'}
  `

  return await sendTelegramMessage(telegramMessage)
}
