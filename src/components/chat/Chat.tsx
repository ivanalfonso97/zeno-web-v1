import { useState } from 'react'
import { sendMessage } from '../../lib/api/chat/chatApi'

interface Message {
  id: string
  content: string
  role: 'user' | 'assistant'
  timestamp: Date
}

function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    if (!inputValue.trim() || isLoading) return

    const userMessage: Message = {
      id: crypto.randomUUID(),
      content: inputValue.trim(),
      role: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsLoading(true)

    // Create a placeholder for the assistant's message that will be updated in real-time
    const assistantMessageId = crypto.randomUUID()
    setMessages(prev => [...prev, {
      id: assistantMessageId,
      content: '',
      role: 'assistant',
      timestamp: new Date()
    }])

    try {
      const chatMessages = messages.map(msg => ({ role: msg.role, content: msg.content }))
      const reader = await sendMessage([...chatMessages, { role: 'user', content: userMessage.content }])
      const decoder = new TextDecoder('utf-8')
      let result
      let accumulatedContent = ''

      while (true) {
        result = await reader.read()
        if (result.done) break

        const chunk = decoder.decode(result.value, { stream: true })
        
        // Directly parse each chunk as JSON and extract content
        const jsonChunk = JSON.parse(chunk)
        if (jsonChunk.content) {
          accumulatedContent += jsonChunk.content
        }

        setMessages(prev => {
          const newMessages = prev.map(message =>
            message.id === assistantMessageId ? { ...message, content: accumulatedContent } : message
          )
          return newMessages
        })
      }

      // Final decode for any remaining buffered stream data
      accumulatedContent += decoder.decode()

      setMessages(prev =>
        prev.map(message =>
          message.id === assistantMessageId ? { ...message, content: accumulatedContent } : message
        )
      )

    } catch (error) {
      console.error('Failed to send message or stream error:', error)
      // TODO: Show error toast and potentially remove the partial message
      setMessages(prev => prev.filter(msg => msg.id !== assistantMessageId)) // Remove partial message on error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center h-full">
      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 w-4/5">
        {messages.map(message => (
          <div
            key={message.id}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl p-4 ${
                message.role === 'user'
                  ? 'bg-white dark:bg-opacity-5 text-white'
                  : 'text-dark dark:text-white'
              }`}
            >
              <p className="medium">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white dark:bg-opacity-5 rounded-2xl p-4">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-gray animate-bounce"/>
                <div className="w-2 h-2 rounded-full bg-gray animate-bounce [animation-delay:0.2s]"/>
                <div className="w-2 h-2 rounded-full bg-gray animate-bounce [animation-delay:0.4s]"/>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Form */}
      <form onSubmit={handleSubmit} className="flex items-center justify-center p-4 w-4/5">
        <div className="flex flex-grow gap-4">
          <input
            type="text"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="form-input flex-1 bg-white dark:bg-opacity-5 text-dark dark:text-white placeholder:text-gray"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="btn btn-primary px-6"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}

export default Chat 