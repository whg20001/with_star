import React, { useState } from 'react';
import { ICONS } from '../icons';
import { motion, AnimatePresence } from 'motion/react';

export const Classroom: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [showNote, setShowNote] = useState(true);
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [showTypeSelector, setShowTypeSelector] = useState(true);
  const [showNoteModal, setShowNoteModal] = useState(false);

  const disorderTypes = [
    { id: 'asd', label: '自闭症谱系', icon: <ICONS.Brain className="text-primary" size={32} />, bgColor: 'bg-primary/10' },
    { id: 'adhd', label: '多动症 (ADHD)', icon: <ICONS.Sparkles className="text-secondary" size={32} />, bgColor: 'bg-secondary/10' },
    { id: 'sld', label: '言语发育迟缓', icon: <ICONS.Mic className="text-tertiary" size={32} />, bgColor: 'bg-tertiary/10' },
    { id: 'other', label: '其他发育障碍', icon: <ICONS.Info className="text-outline" size={32} />, bgColor: 'bg-surface-container-high' },
  ];

  const currentTypeLabel = disorderTypes.find(t => t.id === selectedType)?.label || '全部课程';

  return (
    <div className="pb-32">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl shadow-sm flex justify-between items-center w-full px-6 py-4">
        <div className="flex items-center gap-3">
          <div 
            onClick={() => onNavigate('profile')}
            className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center overflow-hidden cursor-pointer active:scale-95 transition-transform"
          >
            <img src="https://picsum.photos/seed/avatar3/100/100" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="flex flex-col">
            <h1 className="font-headline font-bold text-lg tracking-tight text-primary leading-tight">康复百科</h1>
            <button 
              onClick={() => setShowTypeSelector(true)}
              className="text-[10px] text-primary/60 font-medium flex items-center gap-0.5 hover:text-primary transition-colors"
            >
              {currentTypeLabel} <ICONS.ChevronRight size={10} />
            </button>
          </div>
        </div>
        <button 
          onClick={() => onNavigate('messages')}
          className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-colors text-primary"
        >
          <ICONS.Bell size={20} />
        </button>
      </header>

      <main className="pt-24 px-6">
        <AnimatePresence>
          {showTypeSelector && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => selectedType && setShowTypeSelector(false)}
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-sm bg-white rounded-[32px] shadow-2xl p-8 overflow-hidden"
              >
                <button 
                  onClick={() => setShowTypeSelector(false)}
                  className="absolute top-6 right-6 text-outline hover:text-primary transition-colors p-2"
                >
                  <ICONS.X size={20} />
                </button>
                
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-headline font-extrabold text-primary mb-2">选择关注领域</h2>
                  <p className="text-sm text-on-surface-variant">我们将为您定制专属的康复课程</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {disorderTypes.map(type => (
                    <motion.button
                      key={type.id}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => {
                        setSelectedType(type.id);
                        setShowTypeSelector(false);
                      }}
                      className={`flex flex-col items-center p-5 rounded-2xl border-2 transition-all ${
                        selectedType === type.id 
                          ? 'border-primary bg-primary/5 ring-4 ring-primary/10' 
                          : 'border-outline-variant/10 hover:border-primary/20 bg-surface-container-lowest'
                      }`}
                    >
                      <div className={`w-14 h-14 ${type.bgColor} rounded-xl flex items-center justify-center mb-3`}>
                        {type.icon}
                      </div>
                      <span className="text-sm font-bold text-on-surface">{type.label}</span>
                    </motion.button>
                  ))}
                </div>

                <button 
                  onClick={() => {
                    if (!selectedType) setSelectedType('all');
                    setShowTypeSelector(false);
                  }}
                  className="w-full mt-6 py-4 bg-surface-container-high text-on-surface-variant font-bold rounded-2xl hover:bg-surface-container-highest transition-colors flex items-center justify-center gap-2"
                >
                  直接进入课堂 <ICONS.ChevronRight size={18} />
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showNote && (selectedType === 'asd' || selectedType === 'all' || !selectedType) && (
            <motion.section 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="mb-8 relative bg-primary/5 rounded-2xl p-6 border border-primary/10"
            >
              <button 
                onClick={() => setShowNote(false)}
                className="absolute top-4 right-4 text-primary/40 hover:text-primary transition-colors"
              >
                <ICONS.X size={18} />
              </button>
              
              <div className="flex items-center gap-2 mb-3">
                <ICONS.Heart size={20} className="text-primary fill-primary/20" />
                <h2 className="font-headline font-bold text-primary">给家长的话</h2>
              </div>
              
              <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                自闭症不是性格孤僻，也不是您教养不当。它是一种先天的神经发育差异，您的孩子只是用不同的方式感知世界。您已经做得足够好了。
              </p>
              
              <div className="flex justify-end">
                <button 
                  onClick={() => setShowNoteModal(true)}
                  className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
                >
                  了解更多 <ICONS.ChevronRight size={14} />
                </button>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showNoteModal && (
            <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowNoteModal(false)}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col max-h-[85vh]"
              >
                <div className="p-8 border-b border-outline-variant/10 flex items-center justify-between bg-gradient-to-br from-primary/10 to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-on-primary shadow-lg shadow-primary/20">
                      <ICONS.Heart size={24} fill="currentColor" />
                    </div>
                    <h3 className="text-2xl font-headline font-extrabold text-primary">科学认知与接纳</h3>
                  </div>
                  <button 
                    onClick={() => setShowNoteModal(false)}
                    className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-outline hover:text-primary transition-colors"
                  >
                    <ICONS.X size={20} />
                  </button>
                </div>

                <div className="p-8 overflow-y-auto space-y-6 custom-scrollbar">
                  <section className="space-y-4">
                    <h4 className="text-lg font-bold text-on-surface flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-primary rounded-full"></span>
                      不是您的错
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      许多家长在得知孩子被诊断为自闭症（ASD）时，第一反应往往是自责。但科学研究已经明确证实：自闭症是一种复杂的神经发育差异，与父母的教养方式、性格或家庭环境**没有任何因果关系**。
                    </p>
                  </section>

                  <section className="space-y-4">
                    <h4 className="text-lg font-bold text-on-surface flex items-center gap-2">
                      <span className="w-1.5 h-6 bg-secondary rounded-full"></span>
                      理解“神经多样性”
                    </h4>
                    <p className="text-on-surface-variant leading-relaxed">
                      我们可以把大脑想象成不同的操作系统。大多数人运行的是“标准系统”，而自闭症孩子运行的是一套“独特的系统”。这套系统在处理社交信息时可能比较缓慢，但在处理细节、逻辑或艺术感知上，往往有着惊人的敏锐度。
                    </p>
                  </section>

                  <section className="bg-surface-container-low p-6 rounded-3xl border border-outline-variant/10">
                    <h4 className="font-bold text-primary mb-3">给您的建议：</h4>
                    <ul className="space-y-3 text-sm text-on-surface-variant">
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>接纳差异：</strong> 停止将孩子与“标准”对比，去发现他们独特的闪光点。</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>自我关怀：</strong> 照顾好您的情绪，是给孩子最好的康复环境。</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">•</span>
                        <span><strong>科学干预：</strong> 早期、持续且充满爱的干预，能显著提升孩子的生活质量。</span>
                      </li>
                    </ul>
                  </section>
                </div>

                <div className="p-8 bg-surface-container-low border-t border-outline-variant/10">
                  <button 
                    onClick={() => setShowNoteModal(false)}
                    className="w-full bg-primary text-on-primary py-4 rounded-2xl font-bold shadow-lg shadow-primary/20 active:scale-95 transition-transform"
                  >
                    我明白了，谢谢
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <section className="mb-8">
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <ICONS.Search size={20} className="text-outline" />
            </div>
            <input className="w-full bg-surface-container-high border-none rounded-xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-on-surface placeholder-outline font-body" placeholder="搜尋复健课程、专家建议..." type="text"/>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-bold mb-3 px-1 text-on-surface-variant flex items-center gap-2">
              <ICONS.Users size={18} /> 年龄分段
            </h3>
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
              {['全部', '0-3 岁', '3-6 岁', '6 岁以上'].map((age, idx) => (
                <button key={idx} className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  idx === 0 ? 'bg-primary text-on-primary shadow-sm' : 'bg-white text-on-surface-variant border border-outline/10'
                }`}>{age}</button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold mb-3 px-1 text-on-surface-variant flex items-center gap-2">
              <ICONS.Sparkles size={18} /> 发展领域
            </h3>
            <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
              {['全部领域', '语言沟通', '社交情绪', '生活自理', '感统训练'].map((domain, idx) => (
                <button key={idx} className={`px-5 py-2 rounded-full text-sm whitespace-nowrap transition-colors ${
                  idx === 1 ? 'bg-primary/10 text-primary border border-primary/20 font-medium' : 'bg-white text-on-surface-variant border border-outline/10'
                }`}>{domain}</button>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex justify-between items-end px-1">
            <h2 className="text-xl font-headline font-bold text-on-surface tracking-tight">推荐课程</h2>
            <span className="text-sm text-primary font-medium">查看更多</span>
          </div>

          {[
            { id: 1, type: 'video', tag: '3-6 岁', domain: '语言领域', title: '绘本启蒙：如何引发孩子的表达欲望', desc: '专业言语治疗师亲授，透过互动式绘本阅读技巧，精准捕捉孩子的语言黄金期。', img: 'https://picsum.photos/seed/course1/600/400' },
            { id: 2, type: 'guide', tag: '全部年龄', domain: '社交情绪', title: '情绪交通灯：处理孩子的社交挫折', desc: '建立家庭情绪管理系统，帮助孩子在日常互动中学会等待与轮流。', img: 'https://picsum.photos/seed/course2/600/400' }
          ].map(course => (
            <motion.div 
              key={course.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => onNavigate(course.type === 'guide' ? 'article-detail' : 'course-detail')}
              className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-sm group cursor-pointer border border-outline-variant/10"
            >
              <div className="relative h-48">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-primary flex items-center gap-1">
                  {course.type === 'video' ? <ICONS.Video size={14} fill="currentColor" /> : <ICONS.FileText size={14} />}
                  {course.type === 'video' ? '视频课程' : '图文指南'}
                </div>
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center text-primary shadow-sm">
                  <ICONS.Mic size={18} fill="currentColor" />
                </button>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-secondary-container/30 text-on-secondary-container text-[10px] rounded-sm font-medium">{course.tag}</span>
                  <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant text-[10px] rounded-sm font-medium">{course.domain}</span>
                </div>
                <h3 className="font-headline font-bold text-on-surface mb-2 leading-snug">{course.title}</h3>
                <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">{course.desc}</p>
              </div>
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
};
