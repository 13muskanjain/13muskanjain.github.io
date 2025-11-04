interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-6`}>
      <div
        className={`max-w-[75%] rounded-2xl px-5 py-3.5 ${
          isUser
            ? 'bg-[#2F2F2F] text-white'
            : 'bg-transparent text-gray-100'
        }`}
      >
        <p className="text-[15px] leading-relaxed whitespace-pre-wrap">{message.content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
