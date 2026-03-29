import React from 'react';
import { ICONS } from '../icons';
import { motion } from 'motion/react';

export const Profile: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="fixed inset-x-0 bottom-0 top-12 bg-surface rounded-t-[32px] z-50 overflow-y-auto shadow-2xl flex flex-col">
      <header className="bg-white/80 backdrop-blur-xl text-on-surface font-headline font-bold text-xl sticky top-0 flex items-center justify-between px-6 py-6 w-full z-50">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate('home')} className="p-2 hover:bg-black/5 rounded-full transition-colors"><ICONS.X size={24} /></button>
          <span className="tracking-tight text-primary">个人中心</span>
        </div>
        <button 
          onClick={() => onNavigate('device-search')}
          className="p-2 hover:bg-black/5 rounded-full transition-colors"
        >
          <ICONS.Smartphone size={24} />
        </button>
      </header>

      <div className="flex-1 px-6 pb-32">
        <section className="mt-8 flex items-center gap-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md">
              <img src="https://picsum.photos/seed/avatar/200/200" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute bottom-1 right-1 bg-primary text-white p-1 rounded-full border-2 border-white flex items-center justify-center">
              <ICONS.UserCheck size={12} fill="currentColor" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-on-surface font-headline tracking-tight">林夏美</h1>
            <p className="text-on-surface-variant text-sm mt-0.5">注册于 2023年03月15日</p>
          </div>
        </section>

        <section className="mt-8">
          <div className="bg-primary p-7 rounded-xl text-white shadow-xl shadow-primary/20 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-white/80 text-xs font-semibold uppercase tracking-wider">账户余额</p>
              <div className="flex items-baseline gap-1 mt-2">
                <span className="text-2xl font-bold">¥</span>
                <span className="text-4xl font-extrabold tracking-tight">2,560.00</span>
              </div>
              <button className="mt-6 px-8 py-2.5 bg-white text-primary font-bold rounded-full text-sm hover:shadow-lg transition-all active:scale-95">充值</button>
            </div>
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-black/5 rounded-full blur-2xl"></div>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-on-surface">当前身份状态</h2>
            <ICONS.Info size={20} className="text-primary/60" />
          </div>
          <div className="flex flex-wrap gap-3">
            {['孕产期', '婴幼儿家长', '在校生家长', '其他'].map((status, idx) => (
              <button key={idx} className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                idx === 2 ? 'bg-primary text-white shadow-md' : 'bg-white text-on-surface-variant border border-outline-variant hover:border-primary/50'
              }`}>{status}</button>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-bold text-on-surface">我的预约</h2>
            <button className="text-primary text-sm font-bold flex items-center gap-1">
              查看全部 <ICONS.ChevronRight size={16} />
            </button>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm border border-outline-variant flex flex-col gap-4 mb-4">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 ring-1 ring-outline-variant">
                <img src="https://picsum.photos/seed/doc1/100/100" alt="Doctor" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-on-surface">专家咨询: 林慕晨博士</h3>
                  <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-full">待参加</span>
                </div>
                <div className="flex items-center gap-2 mt-2 text-on-surface-variant text-sm">
                  <ICONS.Calendar size={14} />
                  <span className="font-medium">11月14日 10:30</span>
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-1">
              <button className="flex-1 py-2.5 bg-surface-low text-on-surface-variant text-xs font-bold rounded-full">更改时间</button>
              <button className="flex-1 py-2.5 bg-primary text-white text-xs font-bold rounded-full shadow-sm">进入咨询室</button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary-container/20 p-5 rounded-xl border border-primary/5">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm text-primary">
                <ICONS.School size={18} fill="currentColor" />
              </div>
              <p className="text-on-surface font-bold text-sm">康复课程</p>
              <p className="text-on-surface-variant text-[11px] mt-1">剩余 8 节课</p>
            </div>
            <div className="bg-tertiary-container/20 p-5 rounded-xl border border-primary/5">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm text-primary">
                <ICONS.FileText size={18} fill="currentColor" />
              </div>
              <p className="text-on-surface font-bold text-sm">测评报告</p>
              <p className="text-on-surface-variant text-[11px] mt-1">2 份待解读</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
