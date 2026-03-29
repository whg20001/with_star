import React, { useState, useRef, useEffect } from 'react';
import { ICONS } from '../icons';
import { motion, AnimatePresence } from 'motion/react';

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'other';
  timestamp: string;
}

export const Chat: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: '林医生您好，我想咨询一下孩子最近的康复进度。', sender: 'me', timestamp: '10:25' },
    { id: 2, text: '林沐辰医生：您好！孩子的康复评估预约已确认，请准时参加。', sender: 'other', timestamp: '10:30' },
    { id: 3, text: '好的，谢谢医生。我们需要带什么资料吗？', sender: 'me', timestamp: '10:32' },
    { id: 4, text: '带上最近一次的评估报告即可。', sender: 'other', timestamp: '10:35' },
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (inputText.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: inputText,
        sender: 'me',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <div className="bg-background font-body text-on-surface h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm flex items-center px-6 h-16">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => onNavigate('messages')}
              className="p-2 hover:bg-surface-low transition-colors rounded-full active:scale-95"
            >
              <ICONS.ArrowLeft className="text-primary" size={24} />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container/20">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRQyRBJ45Z5QeVtkKk9jZuAnhZoaVphl001xtAa6QZMJMMmN8IwpnC4vEAT0dhH8Eog5sYTnR_Ds7Oq20OUybqEOScX8yE-ELAx5aidl5aIJ-VUt5G46spyelPnn4GHyImXh00d218T-zBffQxNLezoTXzvxE37p9iFGs8urgv0-UU4zIi0pCWSnRTCd62lE370qeK871Z6ZB2S_0fnUZdks4_ZQ78QbPA5IKlXUFhg6dRaySHquuj-PlJa5qURcEl3mlPAvBnam4" 
                  alt="Doctor" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <h2 className="font-headline font-bold text-on-surface text-base leading-tight">林沐辰医生</h2>
                <p className="text-[10px] text-primary font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span> 在线
                </p>
              </div>
            </div>
          </div>
          <button className="p-2 hover:bg-surface-low transition-colors rounded-full text-primary">
            <ICONS.Phone size={20} />
          </button>
        </div>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto pt-20 pb-24 px-6 space-y-6 hide-scrollbar">
        <div className="text-center py-4">
          <span className="text-[10px] font-bold text-outline uppercase tracking-widest bg-surface-container-high px-3 py-1 rounded-full">今天 10:25</span>
        </div>

        <AnimatePresence initial={false}>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}>
                <div className={`px-4 py-3 rounded-2xl shadow-sm ${
                  msg.sender === 'me' 
                    ? 'bg-primary text-on-primary rounded-tr-none' 
                    : 'bg-white text-on-surface rounded-tl-none border border-outline-variant/10'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
                <span className="text-[10px] text-outline mt-1 px-1 font-medium">{msg.timestamp}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </main>

      {/* Input Area */}
      <div className="fixed bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-outline-variant/10 px-6 py-4 flex items-center gap-3 z-50">
        <button className="p-2 text-outline hover:text-primary transition-colors">
          <ICONS.Plus size={24} />
        </button>
        <div className="flex-1 bg-surface-container-high rounded-2xl px-4 py-2 flex items-center">
          <input 
            type="text" 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="输入消息..."
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm outline-none"
          />
          <button className="p-1 text-outline hover:text-primary transition-colors">
            <ICONS.Mic size={20} />
          </button>
        </div>
        <motion.button 
          whileTap={{ scale: 0.9 }}
          onClick={handleSend}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            inputText.trim() ? 'bg-primary text-on-primary shadow-lg shadow-primary/20' : 'bg-surface-container-highest text-outline'
          }`}
        >
          <ICONS.Send size={20} />
        </motion.button>
      </div>
    </div>
  );
};
