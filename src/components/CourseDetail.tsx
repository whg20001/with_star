import React from 'react';
import { ICONS } from '../icons';
import { motion } from 'motion/react';

export const CourseDetail: React.FC<{ onNavigate: (page: string, data?: any) => void; backTo?: string; courseData?: any }> = ({ onNavigate, backTo = 'classroom', courseData }) => {
  const [activeLesson, setActiveLesson] = React.useState(0);

  const lessons = [
    { id: 0, title: `Ep. 1 - ${courseData?.title || '接纳不完美：家长的自我和解'}`, duration: '10:24', views: '1.2万', img: courseData?.img || 'https://picsum.photos/seed/emo1/800/450', description: '通过系统的拆解动作，帮助家长学会接纳现状，缓解焦虑，建立积极的心理防线。' },
    { id: 1, title: 'Ep. 2 - 情绪急救箱：快速平复心情的技巧', duration: '08:12', views: '4.5k', img: 'https://picsum.photos/seed/emo2/300/200', description: '学习几种简单有效的呼吸法和正念技巧，在压力巨大的时刻找回内心的平静。' },
    { id: 2, title: 'Ep. 3 - 建立你的心理避风港', duration: '12:45', views: '8.9k', img: 'https://picsum.photos/seed/self1/300/200', description: '在繁忙的生活中，为自己开辟一个精神角落，让心灵得到真正的休息。' },
    { id: 3, title: 'Ep. 4 - 拒绝内耗：高效的时间管理', duration: '15:30', views: '3.1k', img: 'https://picsum.photos/seed/self2/400/300', description: '平衡家庭与个人生活，学会优先级排序，告别无谓的自我消耗。' },
  ];

  const currentLesson = lessons[activeLesson];

  return (
    <div className="bg-surface min-h-screen pb-12">
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl flex justify-between items-center px-6 h-16 shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => onNavigate(backTo)} className="p-2 text-primary hover:bg-primary/5 rounded-full"><ICONS.ArrowLeft size={24} /></button>
          <h1 className="text-primary font-headline font-bold text-lg">课程详情</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 text-primary"><ICONS.Bookmark size={24} /></button>
          <button className="p-2 text-primary"><ICONS.Share2 size={24} /></button>
        </div>
      </header>

      <main className="pt-16">
        <section className="relative aspect-video w-full bg-black overflow-hidden">
          <img src={currentLesson.img} alt="Video" className="w-full h-full object-cover opacity-90" referrerPolicy="no-referrer" />
          <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/60 via-transparent to-black/20">
            <div className="flex justify-end">
              <span className="bg-black/40 backdrop-blur-md text-white text-xs px-2 py-1 rounded-md">{currentLesson.duration}</span>
            </div>
            <div className="flex items-center justify-center">
              <button className="w-16 h-16 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg active:scale-90 transition-transform">
                <ICONS.Play size={32} fill="currentColor" className="ml-1" />
              </button>
            </div>
            <div className="space-y-2">
              <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-1/3 rounded-full"></div>
              </div>
              <div className="flex justify-between items-center text-white/90 text-xs">
                <div className="flex items-center gap-4">
                  <ICONS.Video size={14} />
                  <span>03:45 / {currentLesson.duration}</span>
                </div>
                <ICONS.MoreHorizontal size={14} />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-6 bg-surface-container-lowest rounded-b-[2rem] shadow-sm">
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-block px-3 py-1 bg-primary-container/30 text-primary text-[10px] font-bold rounded-full uppercase tracking-wider">
                {courseData?.cat || 'HEALTH'}
              </span>
              {courseData?.tag && (
                <span className="text-[10px] text-outline font-medium">#{courseData.tag}</span>
              )}
            </div>
            <h2 className="text-xl font-bold font-headline text-on-surface leading-tight">{currentLesson.title}</h2>
            <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">{currentLesson.description}</p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary-container overflow-hidden">
                <img src="https://picsum.photos/seed/doc/100/100" alt="林医生" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="text-sm font-bold text-on-surface">林医生康复中心</p>
                <p className="text-[11px] text-slate-500">{currentLesson.views} 订阅者</p>
              </div>
            </div>
            <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-md">关注</button>
          </div>

          <div className="flex items-center gap-6 mt-6 pt-6 border-t border-outline-variant/15">
            <button className="flex items-center gap-2 text-on-surface-variant"><ICONS.ThumbsUp size={20} /><span className="text-xs font-medium">2.4k</span></button>
            <button className="flex items-center gap-2 text-on-surface-variant"><ICONS.MessageCircle size={20} /><span className="text-xs font-medium">128</span></button>
            <button className="flex items-center gap-2 text-on-surface-variant"><ICONS.Star size={20} /><span className="text-xs font-medium">收藏</span></button>
            <div className="flex-1"></div>
            <button className="flex items-center gap-1 text-primary font-bold"><ICONS.Download size={20} /><span className="text-xs">下载</span></button>
          </div>
        </section>

        <nav className="flex px-6 mt-4 border-b border-outline-variant/10">
          <button className="relative py-4 px-2 text-primary font-bold text-sm">
            课程列表
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full"></span>
          </button>
          <button className="py-4 px-8 text-slate-400 font-medium text-sm">评论 (128)</button>
        </nav>

        <section className="px-6 py-8">
          <div className="space-y-6">
            {lessons.map((item, index) => (
              <div 
                key={item.id} 
                onClick={() => setActiveLesson(index)}
                className={`flex gap-4 group cursor-pointer p-2 rounded-2xl transition-all ${activeLesson === index ? 'bg-primary/5 border border-primary/20' : 'hover:bg-black/5'}`}
              >
                <div className="relative w-36 h-24 flex-shrink-0 overflow-hidden rounded-xl">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <span className="absolute bottom-1.5 right-1.5 bg-black/70 text-white text-[10px] px-1.5 py-0.5 rounded">{item.duration}</span>
                  {activeLesson === index && (
                    <div className="absolute inset-0 bg-primary/40 flex items-center justify-center">
                      <ICONS.Play size={24} className="text-white fill-white" />
                    </div>
                  )}
                </div>
                <div className="flex flex-col justify-center">
                  <h4 className={`text-sm font-bold line-clamp-2 leading-snug ${activeLesson === index ? 'text-primary' : 'text-on-surface'}`}>{item.title}</h4>
                  <p className="text-[11px] text-slate-500 mt-2">林医生康复中心 • {item.views} 观看</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};
