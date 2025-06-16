import { fetchWithAuth } from '../fetchWithAuth'

const BASE_URL = import.meta.env.VITE_ZENO_SERVER_V1_BASE_URL

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export async function sendMessage(messages: ChatMessage[]): Promise<ReadableStreamDefaultReader<Uint8Array>> {
  const response = await fetchWithAuth(`${BASE_URL}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ messages })
  })

  if (!response.body) {
    throw new Error('Response body is null')
  }

  if (!response.ok) {
    throw new Error(`Failed to send message: ${response.statusText || response.status}`)
  }

  return response.body.getReader()
} 