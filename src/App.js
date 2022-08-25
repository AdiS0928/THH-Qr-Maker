import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reg from './pages/registration'
import Qr from './pages/qr';
import React from 'react';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Reg />} />
            
          <Route path="/qr" element={<Qr />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
