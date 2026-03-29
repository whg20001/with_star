import React, { useState } from 'react';
import { ICONS } from '../icons';
import { motion, AnimatePresence } from 'motion/react';

export const Psychology: React.FC<{ 
  onNavigate: (page: string, data?: any) => void,
  activeTab: 'circle' | 'classroom' | 'consultation',
  onTabChange: (tab: 'circle' | 'classroom' | 'consultation') => void,
  selectedCategory: string | null,
  onCategoryChange: (category: string | null) => void
}> = ({ onNavigate, activeTab, onTabChange, selectedCategory, onCategoryChange }) => {
  const [showTopicModal, setShowTopicModal] = useState(false);
  const [confessionText, setConfessionText] = useState('');
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedCounselor, setSelectedCounselor] = useState<any>(null);
  const [bookingRecords, setBookingRecords] = useState<any[]>([]);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<any>(null);
  const [showRecordDetail, setShowRecordDetail] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [showEditTimeModal, setShowEditTimeModal] = useState(false);
  const [editDate, setEditDate] = useState('');
  const [editTime, setEditTime] = useState('');

  const classroomSections = [
    { id: 'emotion', title: '情绪管理', icon: <ICONS.Sparkles className="text-secondary" />, courses: [
      { title: '接纳不完美：家长的自我和解', duration: '15:00', participants: '2.3k', img: 'https://picsum.photos/seed/emo1/400/300' },
      { title: '如何应对孩子的突发情绪', duration: '20:00', participants: '1.8k', img: 'https://picsum.photos/seed/emo2/400/300' },
      { title: '情绪急救箱：快速平复心情', duration: '10:00', participants: '1.5k', img: 'https://picsum.photos/seed/emo3/400/300' },
    ]},
    { id: 'mindfulness', title: '正念冥想', icon: <ICONS.Brain className="text-secondary" />, courses: [
      { title: '5分钟呼吸空间：快速找回平静', duration: '05:00', participants: '5.6k', img: 'https://picsum.photos/seed/zen1/400/300' },
      { title: '慈心冥想：把爱留给自己', duration: '12:00', participants: '3.1k', img: 'https://picsum.photos/seed/zen2/400/300' },
    ]},
    { id: 'selfcare', title: '自我关怀', icon: <ICONS.Heart className="text-secondary" />, courses: [
      { title: '建立你的心理避风港', duration: '18:00', participants: '1.5k', img: 'https://picsum.photos/seed/self1/400/300' },
      { title: '拒绝内耗：高效的时间管理', duration: '25:00', participants: '1.2k', img: 'https://picsum.photos/seed/self2/400/300' },
      { title: '自我关怀：在疲惫中寻找力量', duration: '22:00', participants: '2.1k', img: 'https://picsum.photos/seed/self3/400/300' },
    ]},
  ];

  const handlePublish = () => {
    if (!confessionText.trim()) return;
    
    // Simulate publishing
    setShowSuccessToast(true);
    setConfessionText('');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 3000);
  };

  const topicConfessions = [
    { id: 1, user: '匿名用户', content: '第一次听到孩子喊妈妈，我直接在客厅哭了出来，那是这辈子听过最动听的声音。', time: '2小时前' },
    { id: 2, user: '匿名用户', content: '虽然等了很久，但那一刻我觉得所有的辛苦都值了。', time: '5小时前' },
    { id: 3, user: '匿名用户', content: '那天我正在厨房忙碌，突然听到一声模糊的“爸爸”，我手里的铲子都掉了。', time: '昨天' },
  ];

  const tabs = [
    { id: 'circle', label: '心情圈', icon: <ICONS.Heart size={20} /> },
    { id: 'classroom', label: '心课堂', icon: <ICONS.Brain size={20} /> },
    { id: 'consultation', label: '心咨询', icon: <ICONS.UserCheck size={20} /> },
  ];

  const renderCategoryView = () => {
    const section = classroomSections.find(s => s.id === selectedCategory);
    if (!section) return null;

    return (
      <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
        <div className="flex items-center gap-4 mb-6">
          <button 
            onClick={() => onCategoryChange(null)}
            className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary"
          >
            <ICONS.ArrowLeft size={20} />
          </button>
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            {section.icon} {section.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {section.courses.map((course, cIdx) => (
            <div 
              key={cIdx} 
              onClick={() => onNavigate('course-detail', course)}
              className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm flex group cursor-pointer active:scale-98 transition-transform"
            >
              <div className="w-32 h-32 flex-shrink-0">
                <img src={course.img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-4 flex flex-col justify-between flex-1 min-w-0">
                <div>
                  <h3 className="text-base font-bold text-on-surface mb-1">{course.title}</h3>
                  <p className="text-xs text-on-surface-variant line-clamp-2">这是一段关于课程的简短介绍，帮助您了解课程内容。</p>
                </div>
                <div className="flex items-center justify-between text-xs text-outline font-medium">
                  <span className="flex items-center gap-1"><ICONS.Clock size={14} /> {course.duration}</span>
                  <span className="flex items-center gap-1"><ICONS.Users size={14} /> {course.participants}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderCircle = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* 倾诉树洞 */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2">
            <ICONS.Sparkles className="text-secondary" size={24} /> 倾诉树洞
          </h2>
          <span className="text-xs text-outline font-medium bg-surface-container-high px-3 py-1 rounded-full">匿名守护中</span>
        </div>
        
        <div className="bg-gradient-to-br from-secondary-container/30 to-primary-container/20 p-6 rounded-[2rem] border border-white shadow-sm">
          <div 
            onClick={() => setShowTopicModal(true)}
            className="flex items-center gap-2 mb-4 cursor-pointer hover:opacity-80 transition-opacity"
          >
            <div className="bg-secondary text-on-secondary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-tighter">今日话题</div>
            <p className="text-sm font-bold text-on-surface truncate">“当孩子第一次学会叫爸爸/妈妈时，你的心情是怎样的？”</p>
            <ICONS.ChevronRight size={16} className="text-outline" />
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/50 mb-4">
            <textarea 
              value={confessionText}
              onChange={(e) => setConfessionText(e.target.value)}
              placeholder="在这里，你可以卸下所有防备，说出心里话..." 
              className="w-full bg-transparent border-none focus:ring-0 text-sm placeholder:text-outline/60 resize-none h-24"
            />
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/40">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 rounded border-outline/30 text-secondary focus:ring-secondary/20" />
                <span className="text-xs text-outline group-hover:text-secondary transition-colors">匿名发布</span>
              </label>
              <button 
                onClick={handlePublish}
                disabled={!confessionText.trim()}
                className="bg-secondary text-on-secondary px-5 py-2 rounded-full text-xs font-bold shadow-lg shadow-secondary/20 flex items-center gap-2 active:scale-95 transition-transform disabled:opacity-50 disabled:scale-100"
              >
                发布 <ICONS.Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 互助留言板 */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2">
            <ICONS.MessageSquare className="text-secondary" size={24} /> 互助留言板
          </h2>
          <button className="text-secondary text-xs font-bold flex items-center gap-1">
            急需求助 <ICONS.Megaphone size={14} />
          </button>
        </div>
        
        <div className="space-y-3">
          {[
            { user: '小鱼儿妈妈', time: '10分钟前', content: '孩子最近总是半夜惊醒，大家有什么安抚的好办法吗？', replies: 12, urgent: true },
            { user: '晨曦爸爸', time: '1小时前', content: '刚带孩子做完评估，心情很复杂，想找人聊聊。', replies: 5, urgent: false },
          ].map((post, idx) => (
            <div key={idx} className={`p-4 rounded-2xl border transition-all ${post.urgent ? 'bg-error-container/10 border-error/20' : 'bg-surface-container-lowest border-outline-variant/10'}`}>
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-secondary-container flex items-center justify-center text-[10px] font-bold text-secondary">
                    {post.user[0]}
                  </div>
                  <span className="text-xs font-bold text-on-surface">{post.user}</span>
                </div>
                <span className="text-[10px] text-outline">{post.time}</span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-3">{post.content}</p>
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-[10px] font-bold text-outline hover:text-secondary transition-colors">
                  <ICONS.MessageCircle size={14} /> {post.replies} 回复
                </button>
                <button className="flex items-center gap-1 text-[10px] font-bold text-outline hover:text-secondary transition-colors">
                  <ICONS.Heart size={14} /> 抱抱
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 减压音频 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-primary flex items-center gap-2">
          <ICONS.Headphones className="text-secondary" size={24} /> 减压音频
        </h2>
        
        <div className="bg-surface-container-low rounded-[2rem] p-6 border border-outline-variant/10">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center shadow-lg shadow-secondary/20">
              <ICONS.Play size={32} className="text-on-secondary fill-on-secondary" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-on-surface">每日随机推荐</h3>
              <p className="text-xs text-on-surface-variant mt-1">根据您今日的心情，为您挑选了一段疗愈旋律</p>
            </div>
            <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-secondary shadow-sm active:scale-95 transition-transform">
              <ICONS.RefreshCw size={20} />
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            {[
              { title: '林间晨雨', duration: '12:00', type: '自然音' },
              { title: '深海呼吸', duration: '08:00', type: '白噪音' },
              { title: '星空摇篮', duration: '15:00', type: '催眠曲' },
              { title: '午后暖阳', duration: '10:00', type: '轻音乐' },
            ].map((audio, idx) => (
              <button key={idx} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-all group">
                <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-outline group-hover:text-secondary transition-colors">
                  <ICONS.Music size={16} />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-xs font-bold text-on-surface truncate">{audio.title}</p>
                  <p className="text-[10px] text-outline">{audio.type} · {audio.duration}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderClassroom = () => {
    if (selectedCategory) return renderCategoryView();

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="relative">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <ICONS.Search size={20} className="text-outline" />
          </div>
          <input 
            className="w-full bg-surface-container-high border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-secondary/20 text-on-surface placeholder-outline font-body" 
            placeholder="搜索心理课程、冥想引导..." 
            type="text"
          />
        </div>

        {/* 快速分类 */}
        <div className="grid grid-cols-3 gap-3">
          {classroomSections.map((section) => (
            <button 
              key={section.id}
              onClick={() => onCategoryChange(section.id)}
              className="flex flex-col items-center gap-2 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/10 hover:border-secondary/30 transition-all active:scale-95"
            >
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
                {section.icon}
              </div>
              <span className="text-xs font-bold text-on-surface">{section.title}</span>
            </button>
          ))}
        </div>

        {classroomSections.map((section, sIdx) => (
          <section key={sIdx} className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 
                onClick={() => onCategoryChange(section.id)}
                className="text-xl font-bold text-primary flex items-center gap-2 cursor-pointer hover:opacity-80"
              >
                {section.icon} {section.title} <ICONS.ChevronRight size={18} className="text-outline" />
              </h2>
              <button 
                onClick={() => onCategoryChange(section.id)}
                className="text-secondary text-xs font-bold"
              >
                查看全部
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.courses.map((course, cIdx) => (
                <div 
                  key={cIdx} 
                  onClick={() => onNavigate('course-detail', course)}
                  className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/10 shadow-sm flex group cursor-pointer active:scale-98 transition-transform"
                >
                  <div className="w-24 h-24 flex-shrink-0">
                    <img src={course.img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-3 flex flex-col justify-between flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-on-surface truncate">{course.title}</h3>
                    <div className="flex items-center justify-between text-[10px] text-outline font-medium">
                      <span className="flex items-center gap-1"><ICONS.Clock size={12} /> {course.duration}</span>
                      <span className="flex items-center gap-1"><ICONS.Users size={12} /> {course.participants}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  };

  const handleBooking = (counselor: any) => {
    setSelectedCounselor(counselor);
    setShowBookingModal(true);
  };

  const confirmBooking = () => {
    if (!bookingDate || !bookingTime) return;
    
    const newRecord = {
      id: Date.now(),
      counselor: selectedCounselor,
      date: bookingDate,
      time: bookingTime,
      status: '已预约'
    };
    
    setBookingRecords([newRecord, ...bookingRecords]);
    setBookingSuccess(true);
    setShowBookingModal(false);
    
    // Clear form
    setBookingDate('');
    setBookingTime('');
    
    setTimeout(() => {
      setBookingSuccess(false);
    }, 3000);
  };

  const handleCancelBooking = (id: number) => {
    setBookingRecords(bookingRecords.filter(r => r.id !== id));
    setShowMoreOptions(false);
    setShowRecordDetail(false);
  };

  const handleOpenEditTime = (record: any) => {
    setSelectedRecord(record);
    setEditDate(record.date);
    setEditTime(record.time);
    setShowEditTimeModal(true);
    setShowMoreOptions(false);
  };

  const handleSaveEditTime = () => {
    setBookingRecords(bookingRecords.map(r => 
      r.id === selectedRecord.id ? { ...r, date: editDate, time: editTime } : r
    ));
    setShowEditTimeModal(false);
    setShowRecordDetail(false);
  };

  const renderRecordDetailModal = () => (
    <AnimatePresence>
      {showRecordDetail && selectedRecord && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowRecordDetail(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20"
          >
            <div className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-b border-outline-variant/10 flex justify-between items-center">
              <h3 className="font-bold text-on-surface">预约详情</h3>
              <button onClick={() => setShowRecordDetail(false)} className="text-outline hover:text-on-surface">
                <ICONS.X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-md">
                  <img src={selectedRecord.counselor.img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{selectedRecord.counselor.name}</h4>
                  <p className="text-sm text-outline">{selectedRecord.counselor.title}</p>
                </div>
              </div>
              <div className="space-y-4 bg-surface-container-low p-4 rounded-2xl">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline">预约状态</span>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-secondary-container text-secondary">{selectedRecord.status}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline">预约日期</span>
                  <span className="text-sm font-bold">{selectedRecord.date}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline">预约时间</span>
                  <span className="text-sm font-bold">{selectedRecord.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-outline">咨询费用</span>
                  <span className="text-sm font-bold text-secondary">{selectedRecord.counselor.price}</span>
                </div>
              </div>
              <div className="pt-2">
                <button 
                  onClick={() => {
                    setShowRecordDetail(false);
                    setShowMoreOptions(true);
                  }}
                  className="w-full py-3 rounded-xl border border-outline-variant text-sm font-bold text-on-surface-variant hover:bg-surface-container-high transition-colors"
                >
                  管理预约
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const renderMoreOptionsSheet = () => (
    <AnimatePresence>
      {showMoreOptions && selectedRecord && (
        <div className="fixed inset-0 z-[130] flex items-end justify-center">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowMoreOptions(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="relative w-full max-w-md bg-white rounded-t-[2.5rem] shadow-2xl overflow-hidden p-6 pb-12"
          >
            <div className="w-12 h-1.5 bg-outline-variant/30 rounded-full mx-auto mb-6" />
            <h3 className="text-center font-bold text-on-surface mb-6">更多选项</h3>
            <div className="space-y-2">
              <button 
                onClick={() => handleOpenEditTime(selectedRecord)}
                className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-surface-container-high transition-colors text-on-surface"
              >
                <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-primary">
                  <ICONS.Calendar size={20} />
                </div>
                <span className="font-bold">更改预约时间</span>
              </button>
              <button 
                onClick={() => handleCancelBooking(selectedRecord.id)}
                className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-error-container/10 transition-colors text-error"
              >
                <div className="w-10 h-10 rounded-full bg-error-container/20 flex items-center justify-center">
                  <ICONS.Trash2 size={20} />
                </div>
                <span className="font-bold">取消预约</span>
              </button>
            </div>
            <button 
              onClick={() => setShowMoreOptions(false)}
              className="w-full mt-4 py-4 rounded-2xl bg-surface-container-high font-bold text-on-surface-variant"
            >
              取消
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const renderEditTimeModal = () => (
    <AnimatePresence>
      {showEditTimeModal && selectedRecord && (
        <div className="fixed inset-0 z-[140] flex items-center justify-center p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowEditTimeModal(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20"
          >
            <div className="p-6 border-b border-outline-variant/10 flex justify-between items-center">
              <h3 className="font-bold text-on-surface">修改预约时间</h3>
              <button onClick={() => setShowEditTimeModal(false)} className="text-outline hover:text-on-surface">
                <ICONS.X size={20} />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-outline ml-1">新日期</label>
                  <input 
                    type="date" 
                    value={editDate}
                    onChange={(e) => setEditDate(e.target.value)}
                    className="w-full bg-surface-container-high border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-outline ml-1">新时间</label>
                  <select 
                    value={editTime}
                    onChange={(e) => setEditTime(e.target.value)}
                    className="w-full bg-surface-container-high border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm font-medium"
                  >
                    <option value="09:00 - 10:00">09:00 - 10:00</option>
                    <option value="10:00 - 11:00">10:00 - 11:00</option>
                    <option value="14:00 - 15:00">14:00 - 15:00</option>
                    <option value="15:00 - 16:00">15:00 - 16:00</option>
                    <option value="16:00 - 17:00">16:00 - 17:00</option>
                  </select>
                </div>
              </div>
              <button 
                onClick={handleSaveEditTime}
                className="w-full bg-primary text-on-primary py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform"
              >
                保存修改
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const renderBookingModal = () => (
    <AnimatePresence>
      {showBookingModal && (
        <div className="fixed inset-0 z-[110] flex items-end sm:items-center justify-center p-4 sm:p-6">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowBookingModal(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col border border-white/40"
          >
            <div className="p-6 border-b border-outline-variant/10 flex items-center justify-between bg-gradient-to-r from-primary-container/20 to-transparent">
              <h3 className="font-bold text-on-surface">预约咨询</h3>
              <button 
                onClick={() => setShowBookingModal(false)}
                className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-outline hover:text-on-surface transition-colors"
              >
                <ICONS.X size={20} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-2xl border border-outline-variant/10">
                <div className="w-16 h-16 rounded-xl overflow-hidden shadow-sm">
                  <img src={selectedCounselor?.img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-on-surface">{selectedCounselor?.name}</h4>
                  <p className="text-xs text-outline">{selectedCounselor?.title}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-outline ml-1">选择日期</label>
                  <input 
                    type="date" 
                    value={bookingDate}
                    onChange={(e) => setBookingDate(e.target.value)}
                    className="w-full bg-surface-container-high border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-outline ml-1">选择时间</label>
                  <select 
                    value={bookingTime}
                    onChange={(e) => setBookingTime(e.target.value)}
                    className="w-full bg-surface-container-high border-none rounded-xl py-3 px-4 focus:ring-2 focus:ring-primary/20 text-sm font-medium"
                  >
                    <option value="">请选择时间段</option>
                    <option value="09:00 - 10:00">09:00 - 10:00</option>
                    <option value="10:00 - 11:00">10:00 - 11:00</option>
                    <option value="14:00 - 15:00">14:00 - 15:00</option>
                    <option value="15:00 - 16:00">15:00 - 16:00</option>
                    <option value="16:00 - 17:00">16:00 - 17:00</option>
                  </select>
                </div>
              </div>

              <div className="bg-secondary-container/10 p-4 rounded-2xl border border-secondary/10">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-outline">咨询费用</span>
                  <span className="text-sm font-bold text-secondary">{selectedCounselor?.price}</span>
                </div>
                <p className="text-[10px] text-outline">温馨提示：预约成功后，请准时参加咨询。如需取消，请提前24小时联系。</p>
              </div>
            </div>

            <div className="p-6 bg-surface-container-low border-t border-outline-variant/10">
              <button 
                onClick={confirmBooking}
                disabled={!bookingDate || !bookingTime}
                className="w-full bg-primary text-on-primary py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform disabled:opacity-50 disabled:scale-100"
              >
                确认预约
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const renderConsultation = () => (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* 紧急热线 */}
      <section className="bg-error-container/10 border border-error/20 p-6 rounded-[2rem] flex items-center gap-6">
        <div className="w-16 h-16 rounded-full bg-error flex items-center justify-center text-on-error shadow-lg shadow-error/20 animate-pulse">
          <ICONS.Phone size={32} fill="currentColor" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-error">紧急心理热线</h3>
          <p className="text-xs text-on-surface-variant mt-1">如果你感到极度痛苦或有自伤倾向，请立即拨打</p>
          <button className="mt-3 bg-error text-on-error px-6 py-2 rounded-full text-sm font-bold shadow-md active:scale-95 transition-transform">
            立即拨打 400-XXX-XXXX
          </button>
        </div>
      </section>

      {/* 咨询师列表 */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-primary flex items-center gap-2">
            <ICONS.UserCheck className="text-secondary" size={24} /> 心理咨询师
          </h2>
          <button className="text-secondary text-xs font-bold">筛选条件</button>
        </div>
        <div className="space-y-4">
          {[
            { name: '林博士', title: '资深心理专家', tags: ['情绪管理', '家庭关系'], rating: 4.9, price: '¥400/次', img: 'https://picsum.photos/seed/doc1/200/200' },
            { name: '王老师', title: '国家二级咨询师', tags: ['压力调节', '自我成长'], rating: 5.0, price: '¥300/次', img: 'https://picsum.photos/seed/doc2/200/200' },
          ].map((doc, idx) => (
            <div key={idx} className="bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/10 shadow-sm flex gap-4">
              <div className="w-20 h-20 rounded-2xl overflow-hidden flex-shrink-0">
                <img src={doc.img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-on-surface">{doc.name}</h3>
                  <span className="text-secondary font-bold text-sm">{doc.price}</span>
                </div>
                <p className="text-xs text-outline font-medium">{doc.title}</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {doc.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-secondary-container/30 text-on-secondary-container px-2 py-0.5 rounded-full text-[10px] font-bold">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 text-[10px] text-outline font-bold">
                    <ICONS.Star size={12} className="text-secondary fill-secondary" /> {doc.rating}
                  </div>
                  <button 
                    onClick={() => handleBooking(doc)}
                    className="bg-primary text-on-primary px-4 py-1.5 rounded-full text-xs font-bold active:scale-95 transition-transform"
                  >
                    立即预约
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 预约记录 */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-primary flex items-center gap-2">
          <ICONS.History className="text-secondary" size={24} /> 预约记录
        </h2>
        {bookingRecords.length > 0 ? (
          <div className="space-y-3">
            {bookingRecords.map((record) => (
              <div 
                key={record.id} 
                onClick={() => {
                  setSelectedRecord(record);
                  setShowRecordDetail(true);
                }}
                className="bg-surface-container-lowest p-4 rounded-2xl border border-outline-variant/10 shadow-sm flex items-center gap-4 active:scale-[0.98] transition-all cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                  <img src={record.counselor.img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-sm text-on-surface">{record.counselor.name}</h4>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-secondary-container text-secondary">{record.status}</span>
                  </div>
                  <p className="text-[11px] text-outline mt-0.5">{record.date} {record.time}</p>
                </div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedRecord(record);
                    setShowMoreOptions(true);
                  }}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-outline hover:bg-surface-container-high transition-colors"
                >
                  <ICONS.MoreHorizontal size={18} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-surface-container-low p-6 rounded-[2rem] border border-outline-variant/10 text-center">
            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-outline mx-auto mb-3">
              <ICONS.Calendar size={24} />
            </div>
            <p className="text-sm text-on-surface-variant">暂无预约记录</p>
            <button 
              onClick={() => {
                // Scroll to counselors section or just stay here
              }}
              className="mt-4 text-secondary text-xs font-bold hover:underline"
            >
              去预约咨询师
            </button>
          </div>
        )}
      </section>
    </div>
  );

  return (
    <div className="pb-32 min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md flex items-center justify-between px-6 h-16 shadow-sm">
        <div className="flex items-center gap-3">
          <div 
            onClick={() => onNavigate('profile')}
            className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center overflow-hidden cursor-pointer active:scale-95 transition-transform"
          >
            <img src="https://picsum.photos/seed/avatar4/100/100" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <span className="text-xl font-bold text-primary tracking-tight">数位避风港</span>
        </div>
        <button 
          onClick={() => onNavigate('messages')}
          className="text-primary p-2 hover:bg-black/5 rounded-full transition-colors"
        >
          <ICONS.Bell size={24} />
        </button>
      </header>

      <main className="pt-20 px-6 max-w-2xl mx-auto">
        {/* Tab Navigation */}
        <div className="flex bg-surface-container-high p-1.5 rounded-full mb-8 sticky top-20 z-40 shadow-sm">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id as any)}
              className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === tab.id 
                  ? 'bg-white text-primary shadow-md scale-[1.02]' 
                  : 'text-outline hover:text-on-surface'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="pb-10">
          {activeTab === 'circle' && renderCircle()}
          {activeTab === 'classroom' && renderClassroom()}
          {activeTab === 'consultation' && renderConsultation()}
        </div>
      </main>

      {renderBookingModal()}
      {renderRecordDetailModal()}
      {renderMoreOptionsSheet()}
      {renderEditTimeModal()}

      {/* 成功提示 */}
      <AnimatePresence>
        {(showSuccessToast || bookingSuccess) && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-24 left-1/2 -translate-x-1/2 z-[100] bg-secondary text-on-secondary px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 font-bold"
          >
            <ICONS.CheckCircle2 size={20} />
            {bookingSuccess ? '预约成功' : '已发送'}
          </motion.div>
        )}
      </AnimatePresence>

      {/* 今日话题蒙板 */}
      <AnimatePresence>
        {showTopicModal && (
          <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowTopicModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              className="relative w-full max-w-lg bg-white/60 backdrop-blur-3xl rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[80vh] border border-white/40"
            >
              <div className="p-6 border-b border-white/20 flex items-center justify-between bg-gradient-to-r from-secondary-container/30 to-transparent">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary text-on-secondary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">今日话题</div>
                  <h3 className="font-bold text-on-surface">大家的心声</h3>
                </div>
                <button 
                  onClick={() => setShowTopicModal(false)}
                  className="w-10 h-10 rounded-full bg-white/40 backdrop-blur-md flex items-center justify-center text-outline hover:text-on-surface transition-colors"
                >
                  <ICONS.X size={20} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4 custom-scrollbar">
                <p className="text-sm font-bold text-primary italic mb-6">“当孩子第一次学会叫爸爸/妈妈时，你的心情是怎样的？”</p>
                
                {topicConfessions.map((confession) => (
                  <motion.div 
                    key={confession.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-white/40 backdrop-blur-sm p-4 rounded-2xl border border-white/60 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-secondary">{confession.user}</span>
                      <span className="text-[10px] text-outline">{confession.time}</span>
                    </div>
                    <p className="text-sm text-on-surface-variant leading-relaxed">{confession.content}</p>
                  </motion.div>
                ))}
              </div>

              <div className="p-6 bg-white/20 backdrop-blur-md border-t border-white/20">
                <button 
                  onClick={() => setShowTopicModal(false)}
                  className="w-full bg-secondary text-on-secondary py-4 rounded-2xl font-bold shadow-lg shadow-secondary/20 active:scale-95 transition-transform"
                >
                  我也要说两句
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

