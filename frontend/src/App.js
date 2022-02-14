import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import './app.scss';

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
