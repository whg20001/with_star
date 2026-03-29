import React from 'react';
import { ICONS } from '../icons';
import { motion } from 'motion/react';

export const VolunteerRegistration: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="fixed inset-0 z-50 bg-on-background/30 backdrop-blur-md flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-surface-container-low rounded-lg shadow-2xl relative flex flex-col max-h-[90vh] overflow-hidden border border-outline-variant/15">
        <header className="sticky top-0 z-50 flex items-center justify-between px-6 h-16 bg-white/70 backdrop-blur-xl shadow-sm">
          <button onClick={() => onNavigate('volunteers')} className="p-2 text-primary hover:bg-primary/5 rounded-full"><ICONS.X size={24} /></button>
          <h2 className="font-headline font-bold text-lg text-primary">志愿者注册</h2>
          <div className="w-10"></div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <div className="relative w-full h-40 rounded-lg overflow-hidden">
            <img src="https://picsum.photos/seed/vol-reg/600/300" alt="Volunteers" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-4">
              <p className="text-white font-medium">加入我们的温情社区，为孩子们点亮一盏灯。</p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                <h3 className="font-headline font-bold text-on-surface">基本信息</h3>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-on-surface-variant px-1">真实姓名</label>
                <input className="w-full h-12 px-4 bg-surface-container-high rounded-lg border-none focus:ring-2 focus:ring-primary/20 outline-none" placeholder="输入您的姓名" type="text"/>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-on-surface-variant px-1">年龄</label>
                  <input className="w-full h-12 px-4 bg-surface-container-high rounded-lg border-none focus:ring-2 focus:ring-primary/20 outline-none" placeholder="您的年龄" type="number"/>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-on-surface-variant px-1">性别</label>
                  <div className="flex bg-surface-container-high p-1 rounded-lg h-12">
                    <button className="flex-1 rounded-md bg-primary text-on-primary text-sm font-medium" type="button">男</button>
                    <button className="flex-1 rounded-md text-on-surface-variant text-sm font-medium" type="button">女</button>
                    <button className="flex-1 rounded-md text-on-surface-variant text-sm font-medium" type="button">其他</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-6 bg-secondary rounded-full"></span>
                <h3 className="font-headline font-bold text-on-surface">擅长领域</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['课业辅导', '心理疏导', '康复训练', '绘本讲读', '其他'].map((tag, idx) => (
                  <button key={idx} className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${
                    idx === 0 ? 'border-primary text-primary bg-primary/5' : 'bg-surface-container-high text-on-surface-variant border-transparent'
                  }`} type="button">{tag}</button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-6 bg-tertiary rounded-full"></span>
                <h3 className="font-headline font-bold text-on-surface">可服务时间</h3>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-lg border border-outline-variant/10 shadow-sm">
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                  {['一', '二', '三', '四', '五', '六', '日'].map(d => (
                    <div key={d} className={`text-[10px] ${d === '六' || d === '日' ? 'text-primary font-bold' : 'text-outline'}`}>{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {[...Array(7)].map((_, idx) => (
                    <div key={idx} className={`aspect-square rounded-sm ${idx >= 5 ? 'bg-primary-container' : 'bg-surface-container-high'}`}></div>
                  ))}
                </div>
                <p className="mt-3 text-xs text-on-surface-variant flex items-center gap-2">
                  <ICONS.Clock size={14} /> 倾向于周末下午时段
                </p>
              </div>
            </div>
          </form>
        </div>

        <footer className="p-6 bg-surface-container-lowest border-t border-outline-variant/10">
          <button 
            onClick={() => onNavigate('volunteers')}
            className="w-full h-14 bg-primary text-on-primary font-headline font-bold rounded-lg shadow-lg active:scale-95 transition-all"
          >提交申请</button>
          <p className="text-center text-[10px] text-outline mt-3 px-4">提交即代表您同意《志愿者服务协议》及《隐私政策》</p>
        </footer>
      </div>
    </div>
  );
};
