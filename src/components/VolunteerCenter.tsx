import React from 'react';
import { ICONS } from '../icons';
import { motion } from 'motion/react';

export const VolunteerCenter: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="pb-32">
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md flex items-center justify-between px-6 h-16 shadow-sm">
        <div className="flex items-center gap-3">
          <div 
            onClick={() => onNavigate('profile')}
            className="w-10 h-10 rounded-full overflow-hidden bg-primary-container flex items-center justify-center cursor-pointer active:scale-95 transition-transform"
          >
            <img src="https://picsum.photos/seed/avatar5/100/100" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <h1 className="text-xl font-bold text-primary tracking-tight">数位避风港</h1>
        </div>
        <button 
          onClick={() => onNavigate('messages')}
          className="text-primary p-2 hover:bg-black/5 rounded-full transition-colors"
        >
          <ICONS.Bell size={24} />
        </button>
      </header>

      <main className="pt-24 px-6 max-w-2xl mx-auto space-y-8">
        <section className="space-y-4">
          <h2 className="text-[1.75rem] font-headline font-bold text-primary tracking-tight leading-tight">寻找志愿者</h2>
          <p className="text-on-surface-variant text-sm">在这里，每一份爱心都能找到共鸣的港湾</p>
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <ICONS.Search size={20} className="text-outline" />
            </div>
            <input className="w-full h-14 pl-12 pr-4 bg-surface-container-lowest rounded-lg border-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm" placeholder="搜索专长、姓名或关键词..." type="text"/>
          </div>
        </section>

        <section className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
          {[
            { label: '全部', icon: ICONS.Users, active: true },
            { label: '心理陪伴', icon: ICONS.Heart },
            { label: '康复协助', icon: ICONS.Sparkles },
            { label: '课业辅导', icon: ICONS.School }
          ].map((cat, idx) => (
            <button key={idx} className={`flex-none px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all ${
              cat.active ? 'bg-primary text-on-primary' : 'bg-surface-container-lowest text-on-surface-variant hover:bg-secondary-container/20'
            }`}>
              <cat.icon size={18} />
              <span>{cat.label}</span>
            </button>
          ))}
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-on-background">推荐志愿者</h3>
            <span className="text-sm text-primary font-medium">查看更多</span>
          </div>

          {[
            { name: '林晓月', rating: '4.9 (128次服务)', tags: ['心理咨询', '绘本朗读'], desc: '拥有3年特殊儿童陪护经验，擅长通过艺术疗法与孩子建立连接。', img: 'https://picsum.photos/seed/vol1/200/200' },
            { name: '张建国', rating: '5.0 (56次服务)', tags: ['体适能训练', '户外活动'], desc: '退役运动员，极具耐心，能够协助孩子进行基础的身体机能康复训练。', img: 'https://picsum.photos/seed/vol2/200/200' }
          ].map((vol, idx) => (
            <div key={idx} className="bg-surface-container-lowest rounded-lg p-5 flex gap-4 items-start shadow-sm border border-outline-variant/10">
              <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                <img src={vol.img} alt={vol.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-on-surface">{vol.name}</h4>
                    <div className="flex items-center gap-1 text-tertiary">
                      <ICONS.Star size={12} fill="currentColor" />
                      <span className="text-xs font-bold">{vol.rating}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => onNavigate('volunteer-application')}
                    className="bg-primary-container text-on-primary-container px-4 py-1.5 rounded-full text-sm font-semibold"
                  >申请</button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {vol.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="bg-secondary-container/30 text-on-secondary-container px-2.5 py-0.5 rounded-md text-[11px] font-medium">{tag}</span>
                  ))}
                </div>
                <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">{vol.desc}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-gradient-to-br from-secondary-container to-tertiary-container rounded-lg p-6 relative overflow-hidden shadow-lg">
          <div className="relative z-10 space-y-4">
            <div className="inline-block px-3 py-1 bg-white/30 backdrop-blur-sm rounded-full text-[10px] font-bold text-on-secondary-container tracking-widest uppercase">Join Us</div>
            <h3 className="text-2xl font-headline font-extrabold text-on-secondary-container leading-tight">成为志愿者</h3>
            <p className="text-on-secondary-container/80 text-sm max-w-[200px]">您的微小行动，可能成为一个家庭重获希望的开始。</p>
            <button 
              onClick={() => onNavigate('volunteer-registration')}
              className="mt-4 bg-primary text-on-primary px-8 py-3 rounded-full font-bold shadow-lg flex items-center gap-2"
            >
              立即申请加入 <ICONS.ChevronRight size={18} />
            </button>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-20">
            <ICONS.Users size={120} fill="currentColor" />
          </div>
        </section>
      </main>
    </div>
  );
};
