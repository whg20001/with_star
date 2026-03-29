import React from 'react';
import { ICONS } from '../icons';
import { motion } from 'motion/react';

export const Home: React.FC<{ onNavigate: (page: string, data?: any) => void }> = ({ onNavigate }) => {
  return (
    <div className="pb-32">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-xl px-6 py-4 flex justify-between items-center w-full">
        <div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => onNavigate('profile')}
        >
          <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border-2 border-white shadow-sm">
            <img 
              src="https://picsum.photos/seed/avatar/100/100" 
              alt="Avatar" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
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

      {/* Search Bar */}
      <section className="px-6 pt-6">
        <div className="relative group">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <ICONS.Search size={20} className="text-outline" />
          </div>
          <input 
            className="w-full h-14 pl-12 pr-4 bg-surface-container-high border-none rounded-xl focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline" 
            placeholder="搜索“康复百科”" 
            type="text" 
          />
        </div>
      </section>

      {/* Categories Grid */}
      <section className="px-6 mt-8">
        <div className="grid grid-cols-2 gap-4">
          <motion.div 
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('classroom')}
            className="bg-primary-container/20 rounded-lg p-5 flex flex-col justify-between h-44 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center">
              <ICONS.School size={24} />
            </div>
            <div>
              <h3 className="font-headline font-bold text-on-primary-container text-lg">照护课堂</h3>
              <p className="text-on-primary-container/70 text-sm">专业康复课程</p>
            </div>
          </motion.div>
          <motion.div 
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('volunteers')}
            className="bg-secondary-container/20 rounded-lg p-5 flex flex-col justify-between h-44 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-secondary text-on-secondary flex items-center justify-center">
              <ICONS.Users size={24} />
            </div>
            <div>
              <h3 className="font-headline font-bold text-on-secondary-container text-lg">志愿者</h3>
              <p className="text-on-secondary-container/70 text-sm">暖心社群支持</p>
            </div>
          </motion.div>
          <motion.div 
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('psychology')}
            className="bg-tertiary-container/20 rounded-lg p-5 flex flex-col justify-between h-40 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center">
              <ICONS.Brain size={24} />
            </div>
            <div>
              <h3 className="font-headline font-bold text-on-tertiary-container text-lg">心理支持</h3>
              <p className="text-on-tertiary-container/70 text-sm">情绪疏导专区</p>
            </div>
          </motion.div>
          <motion.div 
            whileTap={{ scale: 0.95 }}
            onClick={() => onNavigate('map')}
            className="bg-surface-container-highest rounded-lg p-5 flex flex-col justify-between h-40 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-full bg-on-surface-variant text-white flex items-center justify-center">
              <ICONS.MapIcon size={24} />
            </div>
            <div>
              <h3 className="font-headline font-bold text-on-surface-variant text-lg">资源地图</h3>
              <p className="text-on-surface-variant/70 text-sm">找机构不求人</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="mt-10">
        <div className="flex items-center justify-between px-6 mb-4">
          <h2 className="font-headline font-bold text-xl tracking-tight">猜你想找</h2>
          <button className="text-primary text-sm font-medium">查看更多</button>
        </div>
        <div className="flex overflow-x-auto gap-4 px-6 hide-scrollbar">
          {[
            { id: 1, tag: '自闭症专区', title: '如何在家进行感知训练？', read: '3.2k', img: 'https://picsum.photos/seed/rehab1/400/300' },
            { id: 2, tag: '家长心理', title: '接纳的第一步：正念冥想', read: '1.8k', img: 'https://picsum.photos/seed/rehab2/400/300' }
          ].map(item => (
            <motion.div 
              key={item.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('article-detail')}
              className="min-w-[280px] bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.04)] cursor-pointer"
            >
              <div className="h-40 bg-slate-200">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="p-4">
                <span className="px-2 py-0.5 bg-primary/10 text-primary text-[10px] rounded-full font-medium">{item.tag}</span>
                <h4 className="font-bold text-on-surface leading-snug mt-2">{item.title}</h4>
                <p className="text-outline text-xs mt-2">{item.read} 人已阅读</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending List */}
      <section className="mt-10 px-6">
        <h2 className="font-headline font-bold text-xl tracking-tight mb-6">热门榜单</h2>
        <div className="space-y-4">
          {[
            { rank: '01', cat: 'AUTISM', tag: '自闭症', title: '早期干预：社交阶梯训练营', color: 'text-primary-container', img: 'https://picsum.photos/seed/autism1/800/450' },
            { rank: '02', cat: 'ADHD', tag: '多动症', title: '专注力培养：21天家庭习惯养成', color: 'text-secondary-container', img: 'https://picsum.photos/seed/adhd1/800/450' },
            { rank: '03', cat: 'THERAPY', tag: '综合康复', title: '言语诱发：日常场景互动指南', color: 'text-tertiary-container', img: 'https://picsum.photos/seed/therapy1/800/450' }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate('course-detail', item)}
              className="flex items-center gap-4 bg-surface-container-low p-4 rounded-lg group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-lg bg-white flex items-center justify-center font-bold text-xl ${item.color}`}>{item.rank}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-[10px] font-bold ${item.color.replace('text-', 'text-opacity-70 text-')} tracking-widest uppercase`}>{item.cat}</span>
                  <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                  <span className="text-[10px] text-outline">{item.tag}</span>
                </div>
                <h5 className="font-bold text-on-surface">{item.title}</h5>
              </div>
              <ICONS.ChevronRight size={20} className="text-outline group-hover:text-primary transition-colors" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAB */}
      <motion.button 
        whileTap={{ scale: 0.9 }}
        className="fixed right-6 bottom-28 z-40 bg-white/80 backdrop-blur-md shadow-[0_8px_32px_rgba(109,78,162,0.2)] rounded-full px-5 py-3 flex items-center gap-2 border border-secondary/10"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-secondary to-tertiary flex items-center justify-center text-white">
          <ICONS.Mic size={16} />
        </div>
        <span className="text-secondary font-bold text-sm">减压音频</span>
      </motion.button>
    </div>
  );
};
