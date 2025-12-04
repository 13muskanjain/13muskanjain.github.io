import { useState } from 'react';
import Sidebar from './components/chat/Sidebar';
import ChatContainer from './components/chat/ChatContainer';
import About from './pages/About';

function App() {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionClick = (section: string) => {
    const sectionMap: { [key: string]: string } = {
      'About Me': 'about',
      'Education': 'education',
      'Experience': 'experience',
      'Skills': 'skills',
      'Certifications': 'certifications',
      'Projects': 'projects',
      'Contact': 'contact',
    };
    
    const sectionId = sectionMap[section];
    setActiveSection(section);
    
    // Scroll to section within About page
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleNewChat = () => {
    setActiveSection('');
    window.location.reload();
  };

  return (
    <div className="flex h-screen bg-[#0F0F0F] text-white overflow-hidden">
      <Sidebar
        onSectionClick={handleSectionClick}
        onNewChat={handleNewChat}
        activeSection={activeSection}
      />
      {activeSection && activeSection !== '' ? <About activeSection={activeSection} onSectionChange={setActiveSection} /> : <ChatContainer />}
    </div>
  );
}

export default App;
