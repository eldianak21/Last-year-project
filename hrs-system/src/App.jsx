import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Jobs from './Components/Jobs/Jobs';
import Candidates from './Components/candidates/candidates';
import Contact from './Components/Contact/Contact';
import Login from './Components/UserAuth/Login';
import SignUp from './Components/UserAuth/SignUp';
import ForgotPassword from './Components/UserAuth/ForgotPassword';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} /> {/* Home page at root URL */}
                <Route path="/about" element={<About />} /> {/* About page */}
                <Route path="/jobs" element={<Jobs />} /> {/* About page */}
                <Route path="/candidates" element={<Candidates />} />
                <Route path="/contact" element={<Contact/>} />
                <Route path="/login" element={<Login />} /> {/* About page */}
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgetpassword" element={<ForgotPassword/>} />
            </Routes>
        </Router>
    );
};

export default App;