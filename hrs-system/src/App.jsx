import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Jobs from './Components/Jobs/Jobs';
import Candidates from './Components/candidates/candidates';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home page at root URL */}
                <Route path="/about" element={<About />} /> {/* About page */}
                <Route path="/jobs" element={<Jobs />} /> {/* About page */}
                <Route path="/candidates" element={<Candidates />} />
            </Routes>
        </Router>
    );
};

export default App;