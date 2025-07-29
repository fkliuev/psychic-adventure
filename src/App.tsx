import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Team } from './pages/Team';
import { Publications } from './pages/Publications';
import { Research } from './pages/Research';
import { HydrogenBorrowing } from './pages/HydrogenBorrowing';
import { Blog } from './pages/Blog';
import { Media } from './pages/Media';
import { Contact } from './pages/Contact';
import { PersonnelMember } from './pages/PersonnelMember';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Router>
          <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <main>
                    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/personnel/:slug" element={<PersonnelMember />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/research" element={<Research />} />
          <Route path="/hydrogen-borrowing" element={<HydrogenBorrowing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/media" element={<Media />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
          </main>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;