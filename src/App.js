import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import Blog from './pages/Blog';

const App = () => {
  return (
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<Blog />} />
      </Routes>
    </div>
  );
};

export default App;
