const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN
const CHAT_ID = process.env.TELEGRAM_CHAT_ID

export async function sendTelegramMessage(text: string, parseMode: 'Markdown' | 'HTML' = 'Markdown') {
  if (!BOT_TOKEN || !CHAT_ID) {
    console.error('Telegram Env Vars missing')
    return { success: false, message: 'Configuration error' }
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: parseMode,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      console.error('Telegram API Error:', data)
      return { success: false, message: 'Failed to send message' }
    }

    return { success: true, message: 'Message sent successfully' }
  } catch (error) {
    console.error('Telegram Connection Error:', error)
    return { success: false, message: 'Failed to connect to Telegram' }
  }
}
