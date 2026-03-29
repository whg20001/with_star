import React, { useState, useEffect } from 'react';
import { ICONS } from '../icons';
import { motion, AnimatePresence } from 'motion/react';

interface RegisterProps {
  onNavigate: (page: string) => void;
  onRegisterSuccess: () => void;
}

export const Register: React.FC<RegisterProps> = ({ onNavigate, onRegisterSuccess }) => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [countdown, setCountdown] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [showPhoneLogin, setShowPhoneLogin] = useState(false);
  const [modalPhone, setModalPhone] = useState('');
  const [modalCode, setModalCode] = useState('');
  const [modalCountdown, setModalCountdown] = useState(0);
  const [isSendingModalCode, setIsSendingModalCode] = useState(false);

  useEffect(() => {
    let timer: any;
    if (countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [countdown]);

  useEffect(() => {
    let timer: any;
    if (modalCountdown > 0) {
      timer = setInterval(() => {
        setModalCountdown((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [modalCountdown]);

  const handleSendCode = () => {
    if (!phone) return;
    setIsSendingCode(true);
    // Simulate API call
    setTimeout(() => {
      setIsSendingCode(false);
      setCountdown(60);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1000);
  };

  const handleSendModalCode = () => {
    if (!modalPhone) return;
    setIsSendingModalCode(true);
    // Simulate API call
    setTimeout(() => {
      setIsSendingModalCode(false);
      setModalCountdown(60);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }, 1000);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('两次输入的密码不一致');
      return;
    }
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onRegisterSuccess();
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="w-full max-w-md mx-auto space-y-8"
      >
        <header className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('login')}
            className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-primary"
          >
            <ICONS.ChevronRight size={24} className="rotate-180" />
          </button>
          <h1 className="text-2xl font-headline font-extrabold text-primary">创建新账号</h1>
        </header>

        <div className="space-y-2">
          <p className="text-on-surface-variant">加入康复百科，开启您的家庭康复之旅</p>
        </div>

        <form onSubmit={handleRegister} className="mt-8 space-y-6">
          <div className="space-y-4">
            {/* Phone Number */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                <ICONS.Phone size={20} />
              </div>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full h-14 pl-12 pr-4 bg-surface-container-high border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline outline-none" 
                placeholder="手机号码" 
                required
              />
            </div>

            {/* Verification Code */}
            <div className="flex gap-3">
              <div className="relative group flex-1">
                <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                  <ICONS.CheckCircle2 size={20} />
                </div>
                <input 
                  type="text" 
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 bg-surface-container-high border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline outline-none" 
                  placeholder="验证码" 
                  required
                />
              </div>
              <button 
                type="button"
                onClick={handleSendCode}
                disabled={!phone || countdown > 0 || isSendingCode}
                className="px-6 h-14 bg-primary/10 text-primary font-bold rounded-2xl whitespace-nowrap disabled:opacity-50 transition-all active:scale-95"
              >
                {isSendingCode ? (
                  <div className="w-5 h-5 border-2 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                ) : countdown > 0 ? (
                  `${countdown}s`
                ) : (
                  '获取验证码'
                )}
              </button>
            </div>

            {/* Password */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                <ICONS.Settings size={20} />
              </div>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-14 pl-12 pr-4 bg-surface-container-high border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline outline-none" 
                placeholder="设置密码" 
                required
              />
            </div>

            {/* Confirm Password */}
            <div className="relative group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                <ICONS.Settings size={20} />
              </div>
              <input 
                type="password" 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-14 pl-12 pr-4 bg-surface-container-high border-none rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline outline-none" 
                placeholder="确认密码" 
                required
              />
            </div>
          </div>

          <div className="flex items-start gap-3 px-2">
            <input type="checkbox" className="mt-1 w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary" required />
            <p className="text-xs text-on-surface-variant leading-relaxed">
              我已阅读并同意 <span className="text-primary font-bold">《用户协议》</span> 和 <span className="text-primary font-bold">《隐私政策》</span>
            </p>
          </div>

          <button 
            type="submit"
            disabled={isLoading}
            className="w-full h-14 bg-primary text-on-primary font-headline font-bold text-lg rounded-full shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95 transition-all disabled:opacity-70"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
            ) : (
              <>立即注册 <ICONS.ChevronRight size={20} /></>
            )}
          </button>
        </form>

        <p className="text-center text-on-surface-variant text-sm">
          已有账号？ <button onClick={() => onNavigate('login')} className="text-primary font-bold">去登录</button>
        </p>

        <div className="mt-10 text-center space-y-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-outline-variant/20"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-background text-outline">其他登录方式</span>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <button className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary/5 transition-colors">
              <ICONS.MessageCircle size={24} />
            </button>
            <button 
              onClick={() => setShowPhoneLogin(true)}
              className="w-14 h-14 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:bg-primary/5 transition-colors"
            >
              <ICONS.Phone size={24} />
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showPhoneLogin && (
          <div className="fixed inset-0 z-[300] flex items-end sm:items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setShowPhoneLogin(false)}
            />
            <motion.div 
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-md bg-white/70 backdrop-blur-2xl rounded-t-[2.5rem] sm:rounded-[2.5rem] p-8 space-y-8 shadow-2xl border border-white/20"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-headline font-extrabold text-primary">手机号登录</h2>
                <button 
                  onClick={() => setShowPhoneLogin(false)}
                  className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-outline"
                >
                  <ICONS.X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                    <ICONS.Phone size={20} />
                  </div>
                  <input 
                    type="tel" 
                    value={modalPhone}
                    onChange={(e) => setModalPhone(e.target.value)}
                    className="w-full h-14 pl-12 pr-4 bg-white/50 border border-white/30 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline outline-none" 
                    placeholder="请输入手机号" 
                  />
                </div>

                <div className="flex gap-3">
                  <div className="relative group flex-1">
                    <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-outline group-focus-within:text-primary transition-colors">
                      <ICONS.CheckCircle2 size={20} />
                    </div>
                    <input 
                      type="text" 
                      value={modalCode}
                      onChange={(e) => setModalCode(e.target.value)}
                      className="w-full h-14 pl-12 pr-4 bg-white/50 border border-white/30 rounded-2xl focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-outline outline-none" 
                      placeholder="验证码" 
                    />
                  </div>
                  <button 
                    type="button"
                    onClick={handleSendModalCode}
                    disabled={!modalPhone || modalCountdown > 0 || isSendingModalCode}
                    className="px-6 h-14 bg-primary text-on-primary font-bold rounded-2xl whitespace-nowrap active:scale-95 transition-all disabled:opacity-50"
                  >
                    {isSendingModalCode ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : modalCountdown > 0 ? (
                      `${modalCountdown}s`
                    ) : (
                      '获取验证码'
                    )}
                  </button>
                </div>

                <button 
                  onClick={() => {
                    if (!modalPhone || !modalCode) return;
                    setShowPhoneLogin(false);
                    onRegisterSuccess();
                  }}
                  className="w-full h-14 bg-primary text-on-primary font-headline font-bold text-lg rounded-full shadow-xl shadow-primary/20 flex items-center justify-center gap-3 active:scale-95 transition-all"
                >
                  登录 <ICONS.ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showToast && (
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-12 left-1/2 -translate-x-1/2 px-6 py-3 bg-primary text-on-primary rounded-full shadow-2xl flex items-center gap-2 z-[200]"
          >
            <ICONS.CheckCircle2 size={20} />
            <span className="font-bold">验证码已发送</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
