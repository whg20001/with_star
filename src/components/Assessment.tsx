import React from 'react';
import { ICONS } from '../icons';
import { motion } from 'motion/react';

export const Assessment: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="fixed inset-0 bg-on-background/10 backdrop-blur-md z-50 flex items-center justify-center">
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-lg flex items-center justify-between px-6 py-4 shadow-sm">
        <button onClick={() => onNavigate('psychology')} className="p-2 text-primary hover:bg-primary/5 rounded-full transition-all"><ICONS.X size={24} /></button>
        <h1 className="font-headline font-bold text-lg text-primary">心理自评</h1>
        <div className="w-10"></div>
      </header>

      <main className="relative w-[92%] max-w-lg bg-surface-container-lowest rounded-lg shadow-xl overflow-hidden flex flex-col max-h-[85vh]">
        <section className="px-8 pt-10 pb-6 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-secondary-container/20 text-secondary font-medium text-sm mb-4">
            <ICONS.Heart size={14} className="mr-2" fill="currentColor" /> 情绪守护计划
          </div>
          <p className="text-on-surface-variant text-sm tracking-widest uppercase mb-2">第 1 / 10 题</p>
          <div className="w-full h-2 bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full w-[10%] bg-primary rounded-full transition-all duration-500"></div>
          </div>
        </section>

        <section className="flex-1 px-8 py-4 overflow-y-auto">
          <div className="relative p-6 rounded-lg bg-surface-container-low border border-outline-variant/15 mb-8">
            <h2 className="text-on-surface text-xl font-bold leading-relaxed">在过去的一周里，您是否感到由于照顾孩子而过度疲劳？</h2>
          </div>

          <div className="space-y-4 mb-8">
            {['从不', '偶尔', '经常', '总是'].map((opt, idx) => (
              <button key={idx} className={`group w-full flex items-center justify-between p-5 rounded-lg border transition-all active:scale-[0.98] ${
                idx === 2 ? 'border-primary/40 bg-primary/5 text-primary font-bold' : 'bg-surface-container-lowest border-outline-variant/20 hover:border-primary/40'
              }`}>
                <span className="text-lg">{opt}</span>
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${idx === 2 ? 'border-primary' : 'border-outline-variant group-hover:border-primary'}`}>
                  {idx === 2 && <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>}
                </div>
              </button>
            ))}
          </div>
        </section>

        <footer className="px-8 py-6 bg-surface-container-low/50 flex items-center justify-between gap-4">
          <button className="flex-1 h-11 flex items-center justify-center gap-2 rounded-full text-primary font-bold hover:bg-primary/5 transition-colors">
            <ICONS.ArrowLeft size={18} /> 上一题
          </button>
          <button 
            onClick={() => onNavigate('psychology')}
            className="flex-[1.5] h-11 bg-primary text-on-primary rounded-full font-bold shadow-lg flex items-center justify-center gap-2 active:scale-95"
          >
            下一题 <ICONS.ChevronRight size={18} />
          </button>
        </footer>
      </main>
    </div>
  );
};
