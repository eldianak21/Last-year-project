// src/Components/ApplyNow/ApplyNow.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ApplyNow.module.css';
import interviewQuestions from '../../data/interviewQuestions';

const ApplyNow = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [experience, setExperience] = useState('');
    const [position, setPosition] = useState('');
    const [answers, setAnswers] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers({
            ...answers,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the submission logic here (e.g., send data to server)
        console.log({ name, email, experience, position, answers });
        
        // Navigate back to the job listings or a success page
        navigate('/job-listings'); // Change this to your desired route
    };

    return (
        <div className={styles.applyContainer}>
            <h1>Apply Now</h1>
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="experience">Experience:</label>
                    <textarea
                        id="experience"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="position">Position Applied For:</label>
                    <select
                        id="position"
                        value={position}
                        onChange={(e) => {
                            setPosition(e.target.value);
                            setAnswers({}); // Reset answers when position changes
                        }}
                        required
                    >
                        <option value="" disabled>Select a position</option>
                        <option value="softwareEngineer">Software Engineer</option>
                        <option value="dataAnalyst">Data Analyst</option>
                        <option value="lecturer">Lecturer</option>
                    </select>
                </div>

                {position && (
                    <>
                        <h2>Common Interview Questions</h2>
                        {interviewQuestions[position].map((question, index) => (
                            <div className={styles.formGroup} key={index}>
                                <label htmlFor={`question${index}`}>{index + 1}. {question}</label>
                                <textarea
                                    name={`question${index}`}
                                    id={`question${index}`}
                                    value={answers[`question${index}`] || ''}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        ))}
                    </>
                )}
                
                <button type="submit">Submit Application</button>
            </form>
        </div>
    );
};

export default ApplyNow;