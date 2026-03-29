import React from 'react';
import { ICONS } from '../icons';
import { motion } from 'motion/react';

export const ResourceMap: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  return (
    <div className="pb-32">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl shadow-sm flex justify-between items-center w-full px-6 py-4">
        <div className="flex items-center gap-3">
          <div 
            onClick={() => onNavigate('profile')}
            className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden cursor-pointer active:scale-95 transition-transform"
          >
            <img src="https://picsum.photos/seed/avatar2/100/100" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <h1 className="font-headline font-bold text-lg tracking-tight text-primary">康复百科</h1>
        </div>
        <button 
          onClick={() => onNavigate('messages')}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors"
        >
          <ICONS.Bell size={20} className="text-slate-500" />
        </button>
      </header>

      <main className="pt-24 px-4 max-w-5xl mx-auto space-y-6">
        <section className="space-y-4">
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <ICONS.Search size={20} className="text-outline" />
            </div>
            <input className="w-full bg-surface-container-high border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder-outline font-body transition-all" placeholder="搜索机构" type="text"/>
          </div>
          <div className="flex gap-3 overflow-x-auto hide-scrollbar pb-2">
            {['全部', '康复', '医疗', '政策'].map((cat, idx) => (
              <button key={idx} className={`flex-none px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                idx === 0 ? 'bg-primary text-on-primary shadow-sm' : 'bg-surface-container-lowest text-on-surface-variant border border-outline/10'
              }`}>
                {cat}
              </button>
            ))}
          </div>
        </section>

        <section className="relative h-48 rounded-lg overflow-hidden shadow-sm">
          <img className="w-full h-full object-cover" src="https://picsum.photos/seed/map/800/400" alt="Map" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
            <div className="flex items-center gap-2 text-white">
              <ICONS.MapIcon size={16} />
              <span className="text-sm font-medium">当前区域：上海市 静安区</span>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: '星星之家儿童康复中心', rating: 4.9, dist: '1.2 km', tags: ['自闭症干预', '语言治疗', '感统训练'] },
            { name: '爱德华综合康复医院', rating: 4.7, dist: '2.8 km', tags: ['物理治疗', '医保定点'] },
            { name: '残联政策咨询服务点', rating: 4.5, dist: '0.5 km', tags: ['补贴申请', '入学咨询'] },
            { name: '瑞金儿童脑科诊室', rating: 5.0, dist: '4.1 km', tags: ['三甲名医', '早期筛查'] }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('institution-detail')}
              className="bg-surface-container-lowest p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-outline-variant/10"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-headline font-bold text-lg text-on-surface leading-tight">{item.name}</h3>
                <div className="flex items-center gap-1 text-[#FFB800]">
                  <ICONS.Star size={14} fill="currentColor" />
                  <span className="font-bold text-sm">{item.rating}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 text-outline text-sm mb-4">
                <ICONS.Navigation size={14} />
                <span>距离 {item.dist}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                    tIdx % 3 === 0 ? 'bg-primary/10 text-primary' : tIdx % 3 === 1 ? 'bg-secondary/10 text-secondary' : 'bg-tertiary/10 text-tertiary'
                  }`}>{tag}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  );
};
