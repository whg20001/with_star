import React from 'react';
import { ICONS } from '../icons';
import { motion } from 'motion/react';

export const BookingDetail: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="bg-surface min-h-screen pb-20">
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl flex justify-between items-center px-6 h-16 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('psychology')} className="p-2 text-primary hover:bg-primary/5 rounded-full transition-all"><ICONS.ArrowLeft size={24} /></button>
          <h1 className="text-primary font-headline font-bold text-lg">预约详情</h1>
        </div>
        <button className="p-2 text-primary"><ICONS.Share2 size={24} /></button>
      </header>

      <main className="pt-20 px-6 space-y-8 max-w-2xl mx-auto">
        <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10 flex items-center gap-6">
          <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-md">
            <img src="https://picsum.photos/seed/doc1/200/200" alt="林慕晨 博士" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-on-surface font-headline">林慕晨 博士</h2>
              <div className="flex items-center gap-1 text-secondary">
                <ICONS.Star size={16} fill="currentColor" />
                <span className="font-bold text-sm">4.9</span>
              </div>
            </div>
            <p className="text-primary font-semibold text-sm">资深心理咨询专家 / 孤独症干预专家</p>
            <div className="flex flex-wrap gap-2">
              {['情绪调节', '亲子关系', '压力管理'].map((tag, idx) => (
                <span key={idx} className="bg-secondary-container/30 text-on-secondary-container px-2.5 py-0.5 rounded-md text-[10px] font-bold">{tag}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-bold text-on-surface font-headline">选择咨询方式</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { type: '视频咨询', price: '¥400/50min', icon: ICONS.Video, active: true },
              { type: '语音咨询', price: '¥300/50min', icon: ICONS.Phone }
            ].map((method, idx) => (
              <button key={idx} className={`p-5 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all ${
                method.active ? 'border-primary bg-primary/5 text-primary shadow-lg' : 'border-outline-variant/20 bg-surface-container-lowest text-on-surface-variant'
              }`}>
                <method.icon size={28} />
                <div className="text-center">
                  <p className="font-bold text-sm">{method.type}</p>
                  <p className="text-[10px] opacity-70 mt-1">{method.price}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-on-surface font-headline">预约时间</h3>
            <span className="text-xs text-primary font-bold">2023年11月</span>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {[
              { d: '周一', n: '13' },
              { d: '周二', n: '14', active: true },
              { d: '周三', n: '15' },
              { d: '周四', n: '16' },
              { d: '周五', n: '17' },
              { d: '周六', n: '18' }
            ].map((day, idx) => (
              <div key={idx} className={`flex-shrink-0 flex flex-col items-center justify-center w-14 h-20 rounded-2xl transition-all cursor-pointer ${
                day.active ? 'bg-primary text-on-primary shadow-xl scale-105' : 'bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high'
              }`}>
                <span className="text-[10px] font-medium opacity-70">{day.d}</span>
                <span className="text-lg font-bold">{day.n}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-3 mt-4">
            {['09:00', '10:00', '14:00', '15:00', '16:00', '19:00'].map((time, idx) => (
              <button key={idx} className={`py-3 rounded-xl text-sm transition-all ${
                idx === 1 ? 'bg-primary/10 text-primary ring-2 ring-primary font-bold' : 'bg-surface-container-low text-on-surface-variant font-medium hover:bg-surface-container-high'
              }`}>{time}</button>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h3 className="text-lg font-bold text-on-surface font-headline">咨询需求描述</h3>
          <textarea className="w-full h-32 p-5 bg-surface-container-low rounded-2xl text-on-surface placeholder:text-outline/60 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none border-none shadow-inner" placeholder="请简单描述您目前面临的困扰或希望通过咨询达到的目标..."></textarea>
        </section>

        <div className="pt-6">
          <button 
            onClick={() => onNavigate('psychology')}
            className="w-full py-4 bg-primary text-on-primary font-headline font-bold text-lg rounded-full shadow-xl active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            确认预约 <ICONS.CheckCircle2 size={20} />
          </button>
          <p className="text-center text-[10px] text-outline mt-4 leading-relaxed px-10">点击确认即表示您同意我们的《心理咨询服务协议》及《隐私保护条例》。</p>
        </div>
      </main>
    </div>
  );
};
