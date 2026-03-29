import React, { useState } from 'react';
import { ICONS } from '../icons';
import { motion, AnimatePresence } from 'motion/react';

export const StatusSelection: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [step, setStep] = useState(1);
  const [identity, setIdentity] = useState<string | null>(null);
  const [condition, setCondition] = useState<string | null>(null);

  const identities = [
    { id: 'mom', label: '妈妈', sub: '温柔的守护者', img: 'https://picsum.photos/seed/mom/200/200' },
    { id: 'dad', label: '爸爸', sub: '坚实的后盾', img: 'https://picsum.photos/seed/dad/200/200' },
    { id: 'grandparents', label: '爷爷/奶奶', sub: '慈爱的长辈', img: 'https://picsum.photos/seed/grandparents/200/200' },
    { id: 'other', label: '其他', sub: '专业人士或亲友', img: 'https://picsum.photos/seed/other_identity/200/200' },
  ];

  const conditions = [
    { id: 'asd', label: '自闭症谱系', sub: '社交与沟通支持', img: 'https://picsum.photos/seed/asd/200/200' },
    { id: 'adhd', label: '多动症', sub: '专注力与行为管理', img: 'https://picsum.photos/seed/adhd/200/200' },
    { id: 'sld', label: '言语发育迟缓', sub: '语言表达与理解', img: 'https://picsum.photos/seed/sld/200/200' },
    { id: 'other', label: '其他', sub: '综合康复建议', img: 'https://picsum.photos/seed/other_condition/200/200' },
  ];

  const handleNext = () => {
    if (step === 1 && identity) {
      setStep(2);
    } else if (step === 2 && condition) {
      onNavigate('home');
    }
  };

  const handleBack = () => {
    if (step === 2) {
      setStep(1);
    } else {
      onNavigate('login');
    }
  };

  return (
    <div className="pt-24 pb-32 px-6 min-h-screen bg-background">
      <header className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-xl shadow-sm px-6 py-4 flex justify-between items-center">
        <button onClick={handleBack} className="text-primary active:scale-90 transition-transform">
          <ICONS.ArrowLeft size={24} />
        </button>
        <h1 className="font-headline font-bold text-lg text-primary">康复百科</h1>
        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container/20">
          <img src="https://picsum.photos/seed/avatar/100/100" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
      </header>

      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <div className={`h-1.5 transition-all duration-300 rounded-full ${step >= 1 ? 'w-16 bg-primary' : 'w-8 bg-surface-container-highest'}`}></div>
          <div className={`h-1.5 transition-all duration-300 rounded-full ${step >= 2 ? 'w-16 bg-primary' : 'w-8 bg-surface-container-highest'}`}></div>
          <div className={`h-1.5 transition-all duration-300 rounded-full ${step >= 3 ? 'w-16 bg-primary' : 'w-8 bg-surface-container-highest'}`}></div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="font-headline font-extrabold text-[1.75rem] leading-tight text-on-surface">
              {step === 1 ? '您的身份是？' : '孩子目前的情况是？'}
            </h2>
            <p className="text-on-surface-variant mt-2">
              {step === 1 
                ? '了解您的身份，能让我们为您提供更具针对性的心理支持与建议。' 
                : '我们将根据孩子的具体情况，为您推荐最适合的康复课程与资源。'}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {(step === 1 ? identities : conditions).map(item => (
          <motion.div 
            key={item.id}
            whileTap={{ scale: 0.95 }}
            onClick={() => step === 1 ? setIdentity(item.id) : setCondition(item.id)}
            className={`bg-surface-container-lowest p-5 rounded-2xl shadow-sm border flex flex-col items-center text-center relative transition-all cursor-pointer ${
              (step === 1 ? identity === item.id : condition === item.id) 
                ? 'border-primary ring-2 ring-primary/20 bg-primary/5' 
                : 'border-outline-variant/10 hover:border-primary/30'
            }`}
          >
            {(step === 1 ? identity === item.id : condition === item.id) && (
              <div className="absolute top-3 right-3 text-primary">
                <ICONS.CheckCircle2 size={20} />
              </div>
            )}
            <div className="w-20 h-20 bg-primary-container/10 rounded-2xl flex items-center justify-center mb-4 overflow-hidden">
              <img src={item.img} alt={item.label} className="w-full h-full object-cover opacity-80" referrerPolicy="no-referrer" />
            </div>
            <span className="font-headline font-bold text-on-surface">{item.label}</span>
            <span className="text-[0.75rem] text-outline mt-1 leading-tight">{item.sub}</span>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 pt-6 border-t border-outline-variant/10">
        <button 
          onClick={handleNext}
          disabled={step === 1 ? !identity : !condition}
          className={`w-full h-14 font-headline font-bold text-lg rounded-full shadow-xl flex items-center justify-center gap-2 active:scale-95 transition-all ${
            (step === 1 ? identity : condition)
              ? 'bg-primary text-on-primary shadow-primary/20'
              : 'bg-surface-container-highest text-outline cursor-not-allowed'
          }`}
        >
          {step === 1 ? '下一步' : '完成并进入首页'} <ICONS.ChevronRight size={20} />
        </button>
        <p className="text-center text-[10px] text-outline mt-4">您可以随时在个人中心更改这些信息</p>
      </div>
    </div>
  );
};

