'use server'

import { sendTelegramMessage } from '../lib/telegram'

export async function sendCustomMessage(message: string) {
  if (!message || message.trim() === '') {
    return { success: false, message: 'Message cannot be empty' }
  }

  return await sendTelegramMessage(message)
}
