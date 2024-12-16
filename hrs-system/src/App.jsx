import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';

const App = () => {
  return (
    <Router>
        <Header />
        <Routes>
          {/* <Route path="/" element={<h1></h1>} /> */}
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
};

export default App;