import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './components/chat/Sidebar';
import ChatContainer from './components/chat/ChatContainer';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';

function AppContent() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionClick = (section: string) => {
    const routes: { [key: string]: string } = {
      'About Me': '/about',
      'Experience': '/experience',
      'Projects': '/projects',
      'Education': '/education',
      'Certifications': '/certifications',
      'Skills': '/skills',
      'Contact': '/contact',
    };

    if (routes[section]) {
      navigate(routes[section]);
    }
  };

  const handleNewChat = () => {
    navigate('/');
  };

  const getActiveSection = () => {
    const pathMap: { [key: string]: string } = {
      '/about': 'About Me',
      '/experience': 'Experience',
      '/projects': 'Projects',
      '/education': 'Education',
      '/certifications': 'Certifications',
      '/skills': 'Skills',
      '/contact': 'Contact',
    };
    return pathMap[location.pathname] || '';
  };

  return (
    <div className="flex h-screen bg-[#0F0F0F] text-white overflow-hidden">
      <Sidebar
        onSectionClick={handleSectionClick}
        onNewChat={handleNewChat}
        activeSection={getActiveSection()}
      />
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<ChatContainer />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<ChatContainer />} />
          <Route path="/education" element={<ChatContainer />} />
          <Route path="/certifications" element={<ChatContainer />} />
          <Route path="/skills" element={<ChatContainer />} />
          <Route path="/contact" element={<ChatContainer />} />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
