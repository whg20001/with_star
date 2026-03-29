import React from 'react';
import { ICONS } from '../icons';
import { motion } from 'motion/react';

export const InstitutionDetail: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="pb-32 bg-surface">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl shadow-sm flex justify-between items-center w-full px-6 py-4">
        <button 
          onClick={() => onNavigate('map')}
          className="p-2 hover:bg-surface-container-low rounded-full transition-colors text-primary"
        >
          <ICONS.ArrowLeft size={24} />
        </button>
        <h1 className="font-headline font-bold text-lg tracking-tight text-on-surface">机构详情</h1>
        <button className="p-2 hover:bg-surface-container-low rounded-full transition-colors text-on-surface-variant">
          <ICONS.Share2 size={24} />
        </button>
      </header>

      <main className="pt-20 space-y-6">
        <section className="relative h-64">
          <img 
            src="https://picsum.photos/seed/institution/800/600" 
            alt="Institution" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md text-primary">
            <ICONS.Bookmark size={20} />
          </div>
        </section>

        <section className="px-6 space-y-4">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h2 className="text-2xl font-headline font-extrabold text-on-surface tracking-tight">星星之家儿童康复中心</h2>
              <div className="flex items-center gap-2 text-on-surface-variant text-sm">
                <div className="flex items-center gap-1 text-[#FFB800]">
                  <ICONS.Star size={14} fill="currentColor" />
                  <span className="font-bold">4.9</span>
                </div>
                <span>•</span>
                <span>128 条评价</span>
                <span>•</span>
                <span>医保定点</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {['自闭症干预', '语言治疗', '感统训练', '早期筛查', '家长培训'].map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="px-6 grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 bg-primary text-on-primary rounded-xl font-bold shadow-lg shadow-primary/20">
            <ICONS.Phone size={18} />
            立即咨询
          </button>
          <button className="flex items-center justify-center gap-2 py-3 bg-surface-container-high text-on-surface rounded-xl font-bold border border-outline-variant/10">
            <ICONS.Navigation size={18} />
            查看路线
          </button>
        </section>

        <section className="px-6 space-y-4">
          <h3 className="text-lg font-bold text-on-surface">机构介绍</h3>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            星星之家儿童康复中心成立于2015年，是一家专注于特殊儿童早期干预与康复的专业机构。我们拥有一支由资深康复治疗师、心理咨询师和特殊教育专家组成的团队，致力于为自闭症、发育迟缓、言语障碍等儿童提供个性化的康复方案。
          </p>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            中心占地面积1200平方米，设有感统训练室、言语治疗室、音乐治疗室等多个功能区，配备了先进的康复器材。我们坚持“以家庭为中心”的康复理念，不仅关注孩子的进步，也为家长提供心理支持和家庭干预指导。
          </p>
        </section>

        <section className="px-6 space-y-4">
          <h3 className="text-lg font-bold text-on-surface">服务项目</h3>
          <div className="space-y-3">
            {[
              { title: 'ABA 行为干预', price: '¥280 / 课时', desc: '基于应用行为分析法，提升社交与沟通能力。' },
              { title: '感统训练课程', price: '¥220 / 课时', desc: '针对触觉、前庭觉、本体觉的综合训练。' },
              { title: '言语语言治疗', price: '¥300 / 课时', desc: '专业言语师一对一指导，解决构音与理解问题。' }
            ].map((service, idx) => (
              <div key={idx} className="p-4 bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <h4 className="font-bold text-on-surface">{service.title}</h4>
                  <span className="text-primary font-bold text-sm">{service.price}</span>
                </div>
                <p className="text-on-surface-variant text-xs">{service.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="px-6 space-y-4 pb-10">
          <h3 className="text-lg font-bold text-on-surface">地理位置</h3>
          <div className="flex items-start gap-3 text-on-surface-variant text-sm">
            <ICONS.MapIcon size={18} className="shrink-0 text-primary" />
            <span>上海市静安区南京西路1234号 恒隆广场2期 5楼</span>
          </div>
          <div className="h-40 rounded-xl overflow-hidden grayscale opacity-80">
            <img src="https://picsum.photos/seed/location/600/300" alt="Map Location" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </section>
      </main>
    </div>
  );
};
