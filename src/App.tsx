import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css'

const App: React.FC = () => {
  const navLinks = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <div>
      <Navbar links={navLinks} />
      <h1>Hello, World!</h1>
    </div>
  );
};

export default App;
