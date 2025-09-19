"use client"

import { useState } from "react"
import { Send, Paperclip, Smile, MoreVertical } from "lucide-react"

export default function Chat({ selectedMentor }) {
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "mentor",
      content: "Hello! I'm excited to help you learn today. What would you like to focus on?",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      sender: "user",
      content: "Hi! I'd like to understand neural networks better, especially backpropagation.",
      timestamp: "10:32 AM",
    },
    {
      id: 3,
      sender: "mentor",
      content:
        "Great choice! Backpropagation is fundamental to understanding how neural networks learn. Let's start with the basic concept...",
      timestamp: "10:33 AM",
    },
  ])

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          sender: "user",
          content: message,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ])
      setMessage("")
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Chat Header */}
      <div className="bg-card border-b border-border p-4 flex items-center justify-between">
        <div className="flex items-center">
          <div className="h-10 w-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
            {selectedMentor?.avatar || "M"}
          </div>
          <div className="ml-3">
            <h2 className="font-semibold text-foreground">{selectedMentor?.name || "Mentor"}</h2>
            <p className="text-sm text-muted-foreground">{selectedMentor?.expertise || "Available"}</p>
          </div>
        </div>
        <button className="p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                msg.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
              }`}
            >
              <p className="text-sm">{msg.content}</p>
              <p
                className={`text-xs mt-1 ${
                  msg.sender === "user" ? "text-primary-foreground/70" : "text-muted-foreground"
                }`}
              >
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-card border-t border-border p-4">
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground">
            <Paperclip className="h-5 w-5" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type your message..."
              className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
          </div>
          <button className="p-2 rounded-md text-muted-foreground hover:bg-accent hover:text-accent-foreground">
            <Smile className="h-5 w-5" />
          </button>
          <button
            onClick={handleSendMessage}
            className="bg-primary text-primary-foreground p-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
