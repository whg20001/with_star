import React, { useState } from 'react';
import { Home } from './components/Home';
import { Classroom } from './components/Classroom';
import { VolunteerCenter } from './components/VolunteerCenter';
import { Psychology } from './components/Psychology';
import { ResourceMap } from './components/ResourceMap';
import { ArticleDetail } from './components/ArticleDetail';
import { CourseDetail } from './components/CourseDetail';
import { StatusSelection } from './components/StatusSelection';
import { Assessment } from './components/Assessment';
import { VolunteerRegistration } from './components/VolunteerRegistration';
import { VolunteerApplication } from './components/VolunteerApplication';
import { InstitutionDetail } from './components/InstitutionDetail';
import { BookingDetail } from './components/BookingDetail';
import { DeviceSearch } from './components/DeviceSearch';
import { Messages } from './components/Messages';
import { Chat } from './components/Chat';
import { Profile } from './components/Profile';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { BottomNav } from './components/BottomNav';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [lastMainPage, setLastMainPage] = useState('home');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [activePsychologyTab, setActivePsychologyTab] = useState<'circle' | 'classroom' | 'consultation'>('circle');
  const [psychologyCategory, setPsychologyCategory] = useState<string | null>(null);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentPage('status-selection');
  };

  const navigate = (page: string, data?: any) => {
    if (['home', 'classroom', 'volunteers', 'psychology', 'map'].includes(currentPage)) {
      setLastMainPage(currentPage);
    }
    if (data) {
      if (page === 'course-detail') setSelectedCourse(data);
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    if (!isAuthenticated && currentPage === 'login') {
      return <Login onLogin={handleLogin} onNavigate={navigate} />;
    }

    if (!isAuthenticated && currentPage === 'register') {
      return <Register onNavigate={navigate} onRegisterSuccess={handleLogin} />;
    }

    switch (currentPage) {
      case 'home':
        return <Home onNavigate={navigate} />;
      case 'classroom':
        return <Classroom onNavigate={navigate} />;
      case 'volunteers':
        return <VolunteerCenter onNavigate={navigate} />;
      case 'psychology':
        return (
          <Psychology 
            onNavigate={navigate} 
            activeTab={activePsychologyTab} 
            onTabChange={setActivePsychologyTab}
            selectedCategory={psychologyCategory}
            onCategoryChange={setPsychologyCategory}
          />
        );
      case 'map':
        return <ResourceMap onNavigate={navigate} />;
      case 'article-detail':
        return <ArticleDetail onNavigate={navigate} backTo={lastMainPage} />;
      case 'course-detail':
        return <CourseDetail onNavigate={navigate} backTo={lastMainPage} courseData={selectedCourse} />;
      case 'status-selection':
        return <StatusSelection onNavigate={navigate} />;
      case 'assessment':
        return <Assessment onNavigate={navigate} />;
      case 'volunteer-registration':
        return <VolunteerRegistration onNavigate={navigate} />;
      case 'volunteer-application':
        return <VolunteerApplication onNavigate={navigate} />;
      case 'institution-detail':
        return <InstitutionDetail onNavigate={navigate} />;
      case 'booking-detail':
        return <BookingDetail onNavigate={navigate} />;
      case 'device-search':
        return <DeviceSearch onNavigate={navigate} />;
      case 'messages':
        return <Messages onNavigate={navigate} />;
      case 'chat':
        return <Chat onNavigate={navigate} />;
      case 'profile':
        return <Profile onNavigate={navigate} />;
      case 'login':
        return <Login onLogin={handleLogin} onNavigate={navigate} />;
      case 'register':
        return <Register onNavigate={navigate} onRegisterSuccess={handleLogin} />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  const showBottomNav = isAuthenticated && ['home', 'classroom', 'volunteers', 'psychology', 'map'].includes(currentPage);

  return (
    <div className="min-h-screen bg-background font-sans text-on-surface selection:bg-primary/20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          {renderPage()}
        </motion.div>
      </AnimatePresence>

      {showBottomNav && (
        <BottomNav 
          activeTab={currentPage} 
          onTabChange={navigate} 
        />
      )}
    </div>
  );
}
