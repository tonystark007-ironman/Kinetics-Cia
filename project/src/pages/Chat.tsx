import React, { useState } from 'react';
import { Users, Send } from 'lucide-react';

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState('team');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'A', text: "Hey team! How's everyone doing today?", isMe: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const teamMembers = [
    { id: 'team', name: 'Team Chat', subtitle: 'All team members', initial: 'T' },
    { id: 'aswath', name: 'Aswath Pranav Balan T', subtitle: 'Click to chat', initial: 'A' },
    { id: 'krupashni', name: 'Krupashni Janakiraman', subtitle: 'Click to chat', initial: 'K' },
    { id: 'dhoni', name: 'MS Dhoni', subtitle: 'Click to chat', initial: 'M' },
    { id: 'matheesha', name: 'Matheesha Pathirana', subtitle: 'Click to chat', initial: 'M' },
    { id: 'rachel', name: 'Rachel', subtitle: 'Click to chat', initial: 'R' },
    { id: 'joey', name: 'Joey', subtitle: 'Click to chat', initial: 'J' }
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setMessages(prev => [...prev, { id: Date.now(), sender: 'A', text: inputValue, isMe: true }]);
    setInputValue('');

    // Automated reply
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        sender: 'Bot', 
        text: "Hey!..this is an automated reply", 
        isMe: false 
      }]);
    }, 500);
  };

  return (
    <div className="flex h-[calc(100vh-8rem)] bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-80 bg-white border-r">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">Chats</h2>
        </div>
        <div className="overflow-y-auto h-full">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedChat(member.id)}
              className={`flex items-center p-4 cursor-pointer hover:bg-gray-50 ${
                selectedChat === member.id ? 'bg-blue-50' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold mr-3">
                {member.initial}
              </div>
              <div>
                <div className="font-medium">{member.name}</div>
                <div className="text-sm text-gray-500">{member.subtitle}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold">
            {selectedChat === 'team' ? 'Team Chat' : 'Private Chat'}
          </h2>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isMe ? 'justify-end' : 'justify-start'} mb-4`}
            >
              {!message.isMe && (
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold mr-2">
                  {message.sender}
                </div>
              )}
              <div
                className={`max-w-md rounded-lg p-3 ${
                  message.isMe
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-4 border-t">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 p-3 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;