import React from 'react';
import { ICONS } from '../icons';
import { motion } from 'motion/react';

export const VolunteerApplication: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center bg-on-background/40 backdrop-blur-sm">
      <div className="w-full max-w-lg bg-surface-container-lowest rounded-t-xl md:rounded-lg shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <header className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/10">
          <h2 className="font-headline text-xl font-bold tracking-tight text-on-surface">申请志愿服务</h2>
          <button onClick={() => onNavigate('volunteers')} className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors"><ICONS.X size={24} /></button>
        </header>

        <div className="px-6 pb-10 space-y-8 overflow-y-auto hide-scrollbar">
          <div className="flex items-center gap-4 p-5 bg-surface-container-low rounded-lg mt-4">
            <img src="https://picsum.photos/seed/vol1/200/200" alt="林晓月" className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/10" referrerPolicy="no-referrer" />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="font-headline font-bold text-lg text-on-surface">林晓月</h3>
                <div className="flex items-center gap-1 text-primary">
                  <ICONS.Star size={18} fill="currentColor" />
                  <span className="font-bold text-sm">4.9</span>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-on-surface-variant text-sm bg-surface-container-high px-2 py-0.5 rounded-md">心理咨询师</span>
                <span className="text-on-surface-variant text-xs">128次服务</span>
              </div>
            </div>
          </div>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-headline font-semibold text-on-surface">选择日期</span>
              <span className="text-xs text-primary font-medium">2023年10月</span>
            </div>
            <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
              {[
                { d: '周一', n: '23' },
                { d: '周二', n: '24', active: true },
                { d: '周三', n: '25' },
                { d: '周四', n: '26' },
                { d: '周五', n: '27' },
                { d: '周六', n: '28' }
              ].map((day, idx) => (
                <div key={idx} className={`flex-shrink-0 flex flex-col items-center justify-center w-14 h-20 rounded-lg transition-all cursor-pointer ${
                  day.active ? 'bg-primary text-on-primary shadow-lg scale-105' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}>
                  <span className="text-[10px] font-medium opacity-70">{day.d}</span>
                  <span className="text-lg font-bold">{day.n}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <span className="font-headline font-semibold text-on-surface">选择时间</span>
            <div className="grid grid-cols-4 gap-3">
              {['09:00', '10:00', '14:00', '15:00', '16:00', '19:00'].map((time, idx) => (
                <button key={idx} className={`py-3 rounded-lg text-sm transition-all ${
                  idx === 1 ? 'bg-primary/10 text-primary ring-2 ring-primary font-bold' : idx === 4 ? 'bg-surface-container text-on-surface-variant opacity-40 cursor-not-allowed' : 'bg-surface-container text-on-surface-variant font-medium hover:bg-surface-container-high'
                }`}>{time}</button>
              ))}
            </div>
          </section>

          <section className="space-y-4">
            <span className="font-headline font-semibold text-on-surface">备注需求</span>
            <textarea className="w-full h-32 p-4 bg-surface-container-high rounded-lg text-on-surface placeholder:text-outline/60 focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all resize-none border-none" placeholder="请简单描述孩子的情况或您的需求（如：自闭症，希望引导社交互动）"></textarea>
          </section>

          <div className="pt-4">
            <button 
              onClick={() => onNavigate('volunteers')}
              className="w-full py-4 bg-primary text-on-primary font-headline font-bold text-lg rounded-full shadow-lg active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              确认申请 <ICONS.Send size={20} />
            </button>
            <p className="text-center text-[10px] text-outline mt-4 leading-relaxed px-6">点击确认即表示您同意我们的《志愿服务协议》并承诺在服务过程中遵守相关隐私准则。</p>
          </div>
        </div>
      </div>
    </div>
  );
};
