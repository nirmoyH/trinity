import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './sections/Home';
import Games from './sections/Games';
import Blog from './sections/Blog';
import About from './sections/About';
import Contact from './sections/Contact';
import GameDetails from './components/GameDetails';
import { Menu } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setSidebarCollapsed(true);
      }
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle scroll to section
  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setSidebarCollapsed(true);
    }
  };

  // Handle game selection
  const handleGameSelect = (game) => {
    setSelectedGame(game);
  };

  // Handle blog selection
  const handleBlogSelect = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    
    <div className="flex min-h-screen transition-all duration-300 bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900 text-white">


      {/* Mobile Header */}
      {isMobile && (
  <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-md p-4 flex justify-between items-center border-b border-purple-500/30 w-full overflow-hidden">

          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Trinity Game World" className="h-8 w-8" />
            <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Trinity Game World
            </h1>
          </div>
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="hidden md:block p-2 rounded-full bg-purple-900/50 text-blue-400 hover:bg-purple-800/50 transition-all"
          >
            <Menu size={20} />
          </button>
        </div>
      )}

      {/* Sidebar */}
      <Sidebar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        collapsed={sidebarCollapsed}
        setCollapsed={setSidebarCollapsed}
        isMobile={isMobile}
      />

      {/* Main Content */}
      <main
   className={`transition-all duration-300 w-full px-4 sm:px-8 ${
     isMobile ? 'ml-0' : sidebarCollapsed ? 'ml-16' : 'ml-64'
   }`}
   style={{ maxWidth: "1200px", margin: "0 auto" }}
>



<div className="container mx-auto px-4 py-8 w-full max-w-[1200px]">

          <section id="home" className="min-h-screen py-16">
            <Home onGameSelect={handleGameSelect} />
          </section>

          <section id="games" className="min-h-screen py-16">
            <Games onGameSelect={handleGameSelect} />
          </section>

          <section id="blog" className="min-h-screen py-16">
            <Blog onBlogSelect={handleBlogSelect} />
          </section>

          <section id="about" className="min-h-screen py-16">
            <About />
          </section>

          <section id="contact" className="min-h-screen py-16">
            <Contact />
          </section>
        </div>
      </main>

      {/* Game Details Side Panel */}
      {selectedGame && (
        <GameDetails game={selectedGame} onClose={() => setSelectedGame(null)} isMobile={isMobile} />
      )}

      {/* Blog Details Side Panel */}
      {selectedBlog && (
        <div
          className={`fixed top-0 right-0 h-full ${
            isMobile ? 'w-full' : 'w-1/3'
          } bg-gray-900/95 backdrop-blur-md shadow-2xl z-50 transform transition-transform duration-300 overflow-y-auto`}
        >
          <div className="p-6">
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-purple-900/50 text-blue-400 hover:bg-purple-800/50 transition-all"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4 text-blue-400">{selectedBlog.title}</h2>
            <p className="text-sm text-purple-300 mb-4">{selectedBlog.date} • {selectedBlog.author}</p>
            <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-48 object-cover rounded-lg mb-6" />
            <div className="prose prose-invert max-w-none">
              <p className="mb-4">{selectedBlog.content}</p>
              <p className="mb-4">
                Gaming has evolved significantly over the past decade, with mobile gaming taking center stage in the industry's growth. 
                The accessibility of smartphones has democratized gaming, allowing people from all walks of life to enjoy immersive experiences.
              </p>
              <p className="mb-4">
                At Trinity Game World, we're committed to pushing the boundaries of what's possible in mobile gaming. 
                Our team of passionate developers and designers work tirelessly to create experiences that captivate and inspire.
              </p>
              <p>
                Stay tuned for more updates on our upcoming releases and behind-the-scenes looks at our development process.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      {isMobile && (
  <nav className="fixed bottom-0 left-0 right-0 w-full overflow-hidden bg-gray-900/90 backdrop-blur-md border-t border-purple-500/30 z-40">

          <div className="flex justify-around items-center p-3">
            {['home', 'games', 'blog', 'about', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`p-2 rounded-full ${
                  activeSection === section
                    ? 'text-blue-400 bg-purple-900/50'
                    : 'text-gray-400 hover:text-blue-400'
                }`}
              >
                <span className="capitalize text-xs">{section}</span>
              </button>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}

export default App;