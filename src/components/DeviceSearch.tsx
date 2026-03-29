import React, { useState } from 'react';
import { ICONS } from '../icons';
import { motion, useMotionValue, useTransform } from 'motion/react';

export const DeviceSearch: React.FC<{ onNavigate: (page: string) => void }> = ({ onNavigate }) => {
  const [selectedDeviceId, setSelectedDeviceId] = useState(1);
  
  const devices = [
    {
      id: 1,
      name: '这台 iPhone',
      status: '和你在一起',
      location: '当前位置',
      coords: { top: '33%', left: '50%' },
      icon: <ICONS.Smartphone className="text-primary text-3xl" />,
      bgColor: 'bg-primary/10',
      statusColor: 'bg-primary',
      textColor: 'text-primary'
    },
    {
      id: 2,
      name: "User's Apple Watch",
      status: '和你在一起',
      location: '常州市稻香路',
      coords: { top: '50%', left: '25%' },
      icon: <ICONS.Watch className="text-secondary text-3xl" />,
      bgColor: 'bg-secondary/10',
      statusColor: 'bg-primary',
      textColor: 'text-primary'
    },
    {
      id: 3,
      name: "Family Member's iPad",
      status: '距离 252 km',
      location: '淮安市淮阴区',
      coords: { top: '20%', left: '70%' },
      icon: <ICONS.Tablet className="text-outline text-3xl" />,
      bgColor: 'bg-outline/10',
      statusColor: 'text-outline',
      textColor: 'text-outline-variant',
      isDistance: true
    }
  ];

  const selectedDevice = devices.find(d => d.id === selectedDeviceId) || devices[0];

  // Draggable sheet setup
  // Using numeric values for smoother animation and reliable transform mapping
  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 800;
  const snapPoints = {
    collapsed: -windowHeight * 0.2,
    default: -windowHeight * 0.65,
    expanded: -windowHeight * 0.92,
  };

  const [sheetY, setSheetY] = useState(snapPoints.default);
  const y = useMotionValue(snapPoints.default);
  
  // Map opacity to the sheet's vertical position
  const opacity = useTransform(y, [snapPoints.expanded, snapPoints.default, snapPoints.collapsed], [1, 1, 0.4]);

  const handleDragEnd = (_: any, info: { offset: { y: number }; velocity: { y: number } }) => {
    const velocityThreshold = 500;
    const dragDistance = info.offset.y;
    
    // Determine target snap point based on velocity and position
    if (info.velocity.y > velocityThreshold) {
      setSheetY(snapPoints.collapsed);
    } else if (info.velocity.y < -velocityThreshold) {
      setSheetY(snapPoints.expanded);
    } else {
      // Snap to closest point if velocity is low
      const currentPos = sheetY + dragDistance;
      const distances = [
        { point: snapPoints.collapsed, dist: Math.abs(currentPos - snapPoints.collapsed) },
        { point: snapPoints.default, dist: Math.abs(currentPos - snapPoints.default) },
        { point: snapPoints.expanded, dist: Math.abs(currentPos - snapPoints.expanded) },
      ];
      const closest = distances.reduce((prev, curr) => (prev.dist < curr.dist ? prev : curr));
      setSheetY(closest.point);
    }
  };

  return (
    <div className="bg-background font-body text-on-surface overflow-hidden h-screen flex flex-col">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm">
        <div className="flex items-center justify-between px-6 py-4 w-full">
          <button 
            onClick={() => onNavigate('profile')}
            className="p-2 hover:bg-surface-low transition-colors rounded-full active:scale-95"
          >
            <ICONS.ArrowLeft className="text-primary" size={24} />
          </button>
          <h1 className="text-xl font-headline font-bold tracking-tight text-primary">查找我的设备</h1>
          <div className="w-10 h-10 rounded-full bg-primary-container/30 flex items-center justify-center overflow-hidden border-2 border-primary-container">
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaEJNzFX6NxdsNPI7b8bjR-Leg4gfwbHdza3uXN0BsrYidU6nqPjwgNbTwvEay7Dy8bn4pmFlOoQ0v7js6oxsB1GvqtgDbDcyvaZIujvM7FDQ3DExkgbMhbhmb1qHpwvReVMMK5jr7aid-VplVbc9IuqTq3s6iw9vYc77bNP0mMIE7ZBi_8ewxRpCxySCgCkDafo7ae6YtanYsk7JBOCC-T76fN90FavnPypln1xvp_-6JP9Vxg2q0yy6WZVbIQ3MiWvu5dAzDeOA"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </header>

      {/* Main Content Canvas: Map View */}
      <main className="relative flex-1 pt-16">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-surface-low relative">
            {/* Mock Map Background */}
            <div className="w-full h-full overflow-hidden grayscale opacity-40">
              <img 
                alt="Map" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXBupzYA1kUJTQOeKVRPnoxwisbCARJWXncSE42Oc1AMc3So5oxiteQaYWG6HJfJqPYTypJimTxrxM2tmlhsYNyY2qpE2TNQqOZv-ayiYVLOI2b9OD7Xvg4NHuQ_azSaYwzlAGTK2DpU52khLrkFOf39nsuPCSKBqnAEXeLYSLTFp0c_OOJ3HqCGPJKzZT6b4wWuqqziz3FCRtaWXj4WYAP4LcYKNdO86UHRpb_I65_thZTLgj5wUTD8CgbOswCxuC9xmLGWKLMot3I"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Map Markers */}
            {devices.map((device) => (
              <div 
                key={device.id}
                className="absolute transition-all duration-500"
                style={{ top: device.coords.top, left: device.coords.left, transform: 'translate(-50%, -50%)' }}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ 
                    scale: selectedDeviceId === device.id ? 1.2 : 0.8,
                    opacity: selectedDeviceId === device.id ? 1 : 0.6
                  }}
                  className="relative flex flex-col items-center"
                >
                  <div className={`w-12 h-12 ${device.id === 2 ? 'bg-secondary' : device.id === 3 ? 'bg-outline' : 'bg-primary'} rounded-full flex items-center justify-center shadow-lg border-2 border-white`}>
                    {device.id === 1 && <ICONS.Smartphone className="text-white" size={24} />}
                    {device.id === 2 && <ICONS.Watch className="text-white" size={24} />}
                    {device.id === 3 && <ICONS.Tablet className="text-white" size={24} />}
                  </div>
                  <div className={`w-1 h-4 ${device.id === 2 ? 'bg-secondary' : device.id === 3 ? 'bg-outline' : 'bg-primary'} rounded-full mt-[-2px]`}></div>
                  {selectedDeviceId === device.id && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full shadow-md mt-1 whitespace-nowrap"
                    >
                      <p className={`text-[10px] font-bold ${device.id === 2 ? 'text-secondary' : device.id === 3 ? 'text-outline' : 'text-primary'}`}>
                        {device.name}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Sliding Content Card (Simulated Mobile Sheet) */}
        <motion.section 
          drag="y"
          dragConstraints={{ top: snapPoints.expanded, bottom: 0 }}
          dragElastic={0.08}
          animate={{ y: sheetY }}
          onDragEnd={handleDragEnd}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 32,
            mass: 1
          }}
          style={{ y, opacity }}
          className="absolute top-full left-0 w-full z-40 h-screen"
        >
          <motion.div 
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="bg-white rounded-t-[40px] shadow-[0_-12px_40px_rgba(0,106,99,0.12)] h-full flex flex-col"
          >
            {/* Handle Bar */}
            <div className="flex justify-center py-4 cursor-grab active:cursor-grabbing">
              <div className="w-12 h-1.5 bg-surface-high rounded-full"></div>
            </div>

            {/* Selected Device Location Info */}
            <div className="px-8 pb-2">
              <motion.div 
                key={selectedDeviceId}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-primary/70 mb-2"
              >
                <ICONS.MapPin size={14} />
                <span className="text-xs font-medium">{selectedDevice.location}</span>
              </motion.div>
            </div>

            {/* Card Header */}
            <div className="px-8 pb-4 flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-headline font-extrabold text-on-surface tracking-tight">设备</h2>
                <p className="text-sm text-outline mt-1">共有 {devices.length} 个活动设备</p>
              </div>
              <button className="w-12 h-12 bg-primary-container/20 text-primary rounded-full flex items-center justify-center hover:bg-primary-container/40 transition-colors active:scale-90">
                <ICONS.Plus className="font-bold" size={24} />
              </button>
            </div>

            {/* Device List */}
            <div className="flex-1 overflow-y-auto px-6 space-y-4 hide-scrollbar pb-20">
              {devices.map((device) => (
                <div 
                  key={device.id}
                  onClick={() => setSelectedDeviceId(device.id)}
                  className={`group p-5 rounded-[20px] flex items-center gap-5 transition-all duration-300 cursor-pointer border-2 ${
                    selectedDeviceId === device.id 
                      ? 'bg-primary-container/10 border-primary/20 shadow-sm' 
                      : 'bg-surface-lowest border-transparent hover:bg-surface-low'
                  }`}
                >
                  <div className={`w-14 h-14 ${device.bgColor} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
                    {device.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-headline font-bold text-on-surface">{device.name}</h3>
                    {device.location && (
                      <p className="text-xs text-outline mt-0.5 truncate max-w-[180px]">{device.location}</p>
                    )}
                    <div className="flex items-center gap-1.5 mt-1">
                      {device.isDistance ? (
                        <ICONS.MapPin className="text-outline" size={14} />
                      ) : (
                        <span className={`w-2 h-2 ${device.statusColor} rounded-full`}></span>
                      )}
                      <p className={`text-sm ${device.textColor} font-medium`}>{device.status}</p>
                    </div>
                  </div>
                  <ICONS.ChevronRight className={`transition-colors ${selectedDeviceId === device.id ? 'text-primary' : 'text-outline group-hover:text-primary'}`} size={24} />
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
};
