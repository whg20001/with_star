import React from 'react';
import { ICONS } from '../icons';
import { motion } from 'motion/react';

export const ArticleDetail: React.FC<{ onNavigate: (page: string) => void, backTo?: string }> = ({ onNavigate, backTo = 'home' }) => {
  return (
    <div className="bg-background min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/5 backdrop-blur-[2px]">
        <div className="relative w-full h-[90vh] bg-surface rounded-t-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
          <header className="sticky top-0 z-[100] px-4 py-4 flex items-center justify-between bg-white/70 backdrop-blur-xl shadow-sm">
            <button onClick={() => onNavigate(backTo)} className="p-2 text-primary"><ICONS.X size={24} /></button>
            <h1 className="font-headline font-bold text-primary text-lg">文章详情</h1>
            <button className="p-2 text-primary"><ICONS.Share2 size={24} /></button>
          </header>

          <div className="flex-1 overflow-y-auto pt-4 pb-32 px-6">
            <div className="relative w-full h-72 rounded-[2.5rem] overflow-hidden shadow-lg mb-8">
              <img 
                src="https://picsum.photos/seed/article/800/600" 
                alt="Sensory training" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-4 py-1.5 bg-white/90 backdrop-blur-md text-primary font-semibold text-xs rounded-full">自闭症专区</span>
              </div>
            </div>

            <article>
              <h2 className="text-[1.75rem] font-extrabold leading-tight text-on-surface mb-6 tracking-tight">如何在在家进行感知训练？</h2>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-secondary">
                  <ICONS.FileText size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">专家康复委员会</p>
                  <p className="text-xs text-outline">阅读时间：6分钟 • 1285位家长已学习</p>
                </div>
              </div>

              <div className="space-y-10">
                <section>
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="w-1.5 h-6 bg-primary-container rounded-full"></span>
                    什么是感知训练？
                  </h3>
                  <p className="leading-[1.8] text-on-surface-variant font-light">
                    感知训练是指通过有目的的视觉、听觉、触觉及本体感刺激，帮助孩子更好地整合外界信息。对于有特别需要的孩子，这种训练不仅是身体的协调，更是大脑对环境的“再翻译”过程。
                  </p>
                </section>

                <section className="bg-surface-container-low p-6 rounded-[2rem] border border-white/50">
                  <h3 className="text-xl font-bold text-on-surface mb-4">家长如何参与？</h3>
                  <ul className="space-y-6">
                    {[
                      { n: 1, t: '建立安全区', d: '在工作中选择一个光线柔和、没有刺耳噪音的角落，减少不必要的背景干扰。' },
                      { n: 2, t: '趣味性引导', d: '使用孩子熟悉的玩具。例如，将触觉训练融入到寻找隐藏在沙子中的“宝藏”游戏中。' },
                      { n: 3, t: '情绪觉察', d: '关注孩子在训练中的微表情。如果出现回避，应立即停止并给予安抚，而非强迫完成。' }
                    ].map(item => (
                      <li key={item.n} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary font-bold shadow-sm">{item.n}</span>
                        <p className="text-on-surface-variant leading-relaxed pt-0.5">
                          <strong className="text-on-surface">{item.t}：</strong> {item.d}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </article>
          </div>

          <footer className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-surface via-surface/95 to-transparent flex gap-3">
            <button className="flex-1 h-14 bg-primary text-on-primary rounded-full font-bold flex items-center justify-center gap-2 shadow-lg">
              <ICONS.Bookmark size={20} /> 收藏文章
            </button>
            <button className="w-14 h-14 bg-secondary-container text-on-secondary-container rounded-full flex items-center justify-center shadow-sm">
              <ICONS.ThumbsUp size={24} />
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};
