import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Loader2, Bot } from 'lucide-react';
import { sendMessageStream } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init',
      role: 'model',
      text: "Hi! I'm Alex's AI assistant. Ask me anything about his work, skills, or experience.",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const modelMessageId = (Date.now() + 1).toString();
    
    // Optimistic UI for model message
    setMessages((prev) => [
      ...prev,
      { id: modelMessageId, role: 'model', text: '', isStreaming: true },
    ]);

    try {
      const stream = sendMessageStream(userMessage.text);
      let fullText = '';

      for await (const chunk of stream) {
        fullText += chunk;
        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === modelMessageId ? { ...msg, text: fullText } : msg
          )
        );
      }
      
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === modelMessageId ? { ...msg, isStreaming: false } : msg
        )
      );

    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === modelMessageId ? { ...msg, text: "Sorry, I encountered an error.", isStreaming: false } : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[380px] h-[500px] bg-surface border border-zinc-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="p-4 bg-zinc-900 border-b border-zinc-800 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-indigo-500/10 rounded-lg">
                <Bot size={18} className="text-indigo-400" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-white">Ask AI Assistant</h3>
                <p className="text-xs text-zinc-400">Powered by Gemini 2.5</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1.5 hover:bg-zinc-800 rounded-md transition-colors text-zinc-400 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50 backdrop-blur-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-sm'
                      : 'bg-zinc-800 text-zinc-200 rounded-tl-sm border border-zinc-700'
                  }`}
                >
                  {msg.text}
                  {msg.isStreaming && (
                    <span className="inline-block w-1.5 h-3 ml-1 bg-indigo-400 animate-pulse align-middle" />
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-3 bg-zinc-900 border-t border-zinc-800">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my experience..."
                className="w-full bg-zinc-950 border border-zinc-800 text-zinc-200 text-sm rounded-xl pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-600"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 p-1.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 ${
          isOpen ? 'bg-zinc-800 text-white rotate-90' : 'bg-white text-black hover:bg-indigo-50'
        }`}
      >
        {!isOpen && (
           <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        )}
        {isOpen ? (
            <X size={24} />
        ) : (
            <Sparkles size={24} className="text-indigo-600" />
        )}
      </button>
    </div>
  );
};

export default AIChatBot;
