'use server'

import { sendTelegramMessage } from '../lib/telegram'

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

  return await sendTelegramMessage(message)
}
