// src/Components/Candidates/Candidates.jsx

import React from 'react';
import styles from './candidates.module.css'; // Import your CSS module

const Candidates = () => {
    const candidatesList = [
        {
            id: 1,
            name: 'John Doe',
            position: 'Software Engineer',
            status: 'Interview Scheduled',
            dateApplied: '2024-01-10',
        },
        {
            id: 2,
            name: 'Jane Smith',
            position: 'Product Manager',
            status: 'Application Reviewed',
            dateApplied: '2024-01-15',
        },
        {
            id: 3,
            name: 'Emily Johnson',
            position: 'UX Designer',
            status: 'Offer Extended',
            dateApplied: '2024-02-01',
        },
    ];

    return (
        <div className={styles.candidates}>
            <h1>Candidates List</h1>
            <ul className={styles.candidateList}>
                {candidatesList.map((candidate) => (
                    <li key={candidate.id} className={styles.candidateItem}>
                        <h2>{candidate.name}</h2>
                        <p><strong>Position:</strong> {candidate.position}</p>
                        <p><strong>Status:</strong> {candidate.status}</p>
                        <p><strong>Date Applied:</strong> {candidate.dateApplied}</p>
                        <button className={styles.viewButton}>View Details</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Candidates;