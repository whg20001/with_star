import React, { useState } from 'react';
import { ICONS } from '../icons';
import { motion, AnimatePresence } from 'motion/react';

export const Messages: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const categories = [
    { id: 'system', name: '系统通知', icon: <ICONS.Bell className="text-primary-container" size={32} />, bgColor: 'bg-primary-container/20' },
    { id: 'volunteer', name: '志愿者', icon: <ICONS.HeartHandshake className="text-secondary" size={32} />, bgColor: 'bg-secondary-container/20' },
    { id: 'medical', name: '医疗专家', icon: <ICONS.Stethoscope className="text-tertiary" size={32} />, bgColor: 'bg-tertiary-container/20' },
  ];

  const messages = [
    {
      id: 1,
      name: '林沐辰医生',
      time: '10:30',
      content: '您的康复评估预约已确认，请准时参加。',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRQyRBJ45Z5QeVtkKk9jZuAnhZoaVphl001xtAa6QZMJMMmN8IwpnC4vEAT0dhH8Eog5sYTnR_Ds7Oq20OUybqEOScX8yE-ELAx5aidl5aIJ-VUt5G46spyelPnn4GHyImXh00d218T-zBffQxNLezoTXzvxE37p9iFGs8urgv0-UU4zIi0pCWSnRTCd62lE370qeK871Z6ZB2S_0fnUZdks4_ZQ78QbPA5IKlXUFhg6dRaySHquuj-PlJa5qURcEl3mlPAvBnam4',
      unread: true,
      online: true
    },
    {
      id: 2,
      name: '志愿者 小乐',
      time: '昨天',
      content: '你好，我可以协助孩子本周的课后辅导。',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3Ov0G8iqBYRYgRYjHMUVJ7D05GKZnGA-ZK1Leo3uZ4Alcszq71tUYcN9BADj7LYzCPIj8BPVOczYOddHAijA9sXOIA5D1ItGeBNGxIsdxr93_Y5x63nT-TspH8WSZvbwAMdWkomrrIRvQfkUY2t_1vH6C_oigXwYwrZQpYhMfwLa4lPCmgaPNgKMk9SQdrBjY9fmBkvgrqWOIWKHbhM0_tFDFFVfVjLMFfJ30WUvSx1yvC6RA8squSmYgfSTst5X0-W2PQGSf58c',
      unread: false
    },
    {
      id: 3,
      name: '心理支持中心',
      time: '昨天',
      content: '最近的冥想练习感觉如何？',
      icon: <ICONS.Brain className="text-on-secondary-fixed" size={24} />,
      iconBg: 'bg-secondary-fixed',
      unreadCount: 2
    },
    {
      id: 4,
      name: '陈老师 (感统课)',
      time: '06/17',
      content: '这是今天课堂的表现报告，孩子进步很大。',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD2Lmz44OGcWWSCxgrxuYbt6AdSN-emwBKuNhZvQOHdRX5SbAzKVtOrwlyetjzrM_ZkKc72Wp_9iyIT6Rz01psMpHKpqdIMG_uuQQxWGGcRjJQAHIsl8W_ItVmsVVCGd2YYtVome8BQmcyslQ9mMoMe8mYO_9mNb1vyMDSyHwvgFOEuLTXqTQyCSdc20thztYyUuHjh0LW3wC3a1LR_zNNuK5iNJow5KkZAJXze5iYlN_apJxZQBmq2onZRO8TS0bolL61ATE8iE4g',
      unread: false
    },
    {
      id: 5,
      name: '社区活动通知',
      time: '06/15',
      content: '周末家园联谊活动开始报名啦！',
      icon: <ICONS.Megaphone className="text-on-primary-fixed" size={24} />,
      iconBg: 'bg-primary-fixed',
      unread: false
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoryMessages: Record<string, typeof messages> = {
    system: [
      { id: 101, name: '系统通知', time: '10:30', content: '您的账号在异地登录，请确认是否本人操作。', icon: <ICONS.Bell className="text-primary" size={24} />, iconBg: 'bg-primary/10', unread: true },
      { id: 102, name: '版本更新', time: '昨天', content: '数位避风港 V2.1.0 版本已发布，快来体验新功能吧！', icon: <ICONS.Sparkles className="text-secondary" size={24} />, iconBg: 'bg-secondary/10', unread: false },
    ],
    volunteer: [
      { id: 201, name: '志愿者 小乐', time: '10:30', content: '你好，我可以协助孩子本周的课后辅导。', avatar: 'https://picsum.photos/seed/v1/100/100', unread: true },
      { id: 202, name: '志愿者 阿强', time: '昨天', content: '明天的社区活动我会准时参加。', avatar: 'https://picsum.photos/seed/v2/100/100', unread: false },
    ],
    medical: [
      { id: 301, name: '林沐辰医生', time: '10:30', content: '您的康复评估预约已确认，请准时参加。', avatar: 'https://picsum.photos/seed/d1/100/100', unread: true },
      { id: 302, name: '陈老师 (感统课)', time: '昨天', content: '这是今天课堂的表现报告，孩子进步很大。', avatar: 'https://picsum.photos/seed/d2/100/100', unread: false },
    ],
  };

  return (
    <div className="bg-background font-body text-on-background antialiased min-h-screen pb-24">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm shadow-teal-900/5 flex items-center px-6 h-16">
        <div className="flex items-center w-full justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => onNavigate('home')}
              className="hover:bg-teal-50/50 transition-colors active:scale-95 duration-200 p-2 rounded-full"
            >
              <ICONS.ArrowLeft className="text-primary" size={24} />
            </button>
            <h1 className="font-headline font-bold tracking-tight text-xl text-primary">消息</h1>
          </div>
          <button className="hover:bg-teal-50/50 transition-colors active:scale-95 duration-200 p-2 rounded-full">
            <ICONS.MoreHorizontal className="text-primary" size={24} />
          </button>
        </div>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-6">
        {/* Search & Filter Area */}
        <div className="flex gap-3 mb-8">
          <div className="flex-1 bg-surface-container-high rounded-full px-5 py-3 flex items-center gap-3">
            <ICONS.Search className="text-outline" size={20} />
            <input 
              className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-outline outline-none" 
              placeholder="搜索对话或联系人..." 
              type="text"
            />
          </div>
          <button className="w-12 h-12 flex items-center justify-center bg-secondary-container text-on-secondary-container rounded-full active:scale-95 transition-transform shadow-lg shadow-secondary/10">
            <ICONS.Filter size={24} />
          </button>
        </div>

        {/* Notification Category Section */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {categories.map(cat => (
            <div 
              key={cat.id} 
              onClick={() => setSelectedCategory(cat.id)}
              className="flex flex-col items-center gap-2 cursor-pointer group"
            >
              <div className={`w-14 h-14 ${cat.bgColor} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                {cat.icon}
              </div>
              <span className="text-xs font-medium text-on-surface">{cat.name}</span>
            </div>
          ))}
        </div>

        {/* Message List */}
        <div className="space-y-4">
          {messages.map(msg => (
            <motion.div 
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={() => onNavigate('chat')}
              className="bg-surface-container-lowest p-4 rounded-lg flex items-center gap-4 hover:bg-surface-container transition-colors cursor-pointer group"
            >
              <div className="relative">
                {msg.avatar ? (
                  <img 
                    className="w-14 h-14 rounded-full object-cover" 
                    src={msg.avatar} 
                    alt={msg.name}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className={`w-14 h-14 rounded-full ${msg.iconBg} flex items-center justify-center`}>
                    {msg.icon}
                  </div>
                )}
                {msg.online && (
                  <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary border-2 border-surface-container-lowest rounded-full"></div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="font-headline font-semibold text-on-surface truncate">{msg.name}</h3>
                  <span className="text-[10px] text-outline font-medium">{msg.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className={`text-sm ${msg.unreadCount ? 'font-medium text-on-surface' : 'text-on-surface-variant'} truncate pr-4`}>
                    {msg.content}
                  </p>
                  {msg.unread && !msg.unreadCount && (
                    <div className="w-2 h-2 bg-primary rounded-full shrink-0"></div>
                  )}
                  {msg.unreadCount && (
                    <div className="bg-secondary text-[10px] text-white px-1.5 py-0.5 rounded-full shrink-0 font-bold">
                      {msg.unreadCount}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      {/* Category Detail Modal (Mask) */}
      <AnimatePresence>
        {selectedCategory && (
          <div className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center p-0 sm:p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCategory(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative w-full max-w-lg bg-white rounded-t-[32px] sm:rounded-[32px] shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
            >
              <div className="p-6 border-b border-outline-variant/10 flex items-center justify-between">
                <h2 className="text-xl font-headline font-bold text-primary">
                  {categories.find(c => c.id === selectedCategory)?.name}
                </h2>
                <button 
                  onClick={() => setSelectedCategory(null)}
                  className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-outline hover:text-primary transition-colors"
                >
                  <ICONS.X size={20} />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {categoryMessages[selectedCategory]?.map(msg => (
                  <div 
                    key={msg.id}
                    onClick={() => {
                      setSelectedCategory(null);
                      onNavigate('chat');
                    }}
                    className="flex items-center gap-4 p-3 rounded-2xl hover:bg-surface-container transition-colors cursor-pointer"
                  >
                    <div className="relative">
                      {msg.avatar ? (
                        <img className="w-12 h-12 rounded-full object-cover" src={msg.avatar} alt="" referrerPolicy="no-referrer" />
                      ) : (
                        <div className={`w-12 h-12 rounded-full ${msg.iconBg} flex items-center justify-center`}>
                          {msg.icon}
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-baseline">
                        <span className="font-bold text-on-surface text-sm">{msg.name}</span>
                        <span className="text-[10px] text-outline">{msg.time}</span>
                      </div>
                      <p className="text-xs text-on-surface-variant truncate mt-0.5">{msg.content}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
