import { useState } from 'react';
import Sidebar from './components/chat/Sidebar';
import ChatContainer from './components/chat/ChatContainer';
import About from './pages/About';

function App() {
  const [activeSection, setActiveSection] = useState('');

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    console.log('Section clicked:', section);
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
      {activeSection === 'About Me' ? <About /> : <ChatContainer />}
    </div>
  );
}

export default App;
