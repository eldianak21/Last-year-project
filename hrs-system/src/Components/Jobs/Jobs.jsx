// src/Components/Job/Job.jsx

import React from 'react';
import styles from './job.module.css'; // Import your CSS module

const Jobs = () => {
    const jobListings = [
        {
            id: 1,
            title: 'Software Engineer',
            description: 'Develop and maintain software applications.',
            location: 'Remote',
            datePosted: '2024-01-10',
        },
        {
            id: 2,
            title: 'Product Manager',
            description: 'Lead product development and strategy.',
            location: 'New York, NY',
            datePosted: '2024-01-15',
        },
        {
            id: 3,
            title: 'UX Designer',
            description: 'Design user-friendly interfaces and experiences.',
            location: 'San Francisco, CA',
            datePosted: '2024-02-01',
        },
    ];

    return (
        <div className={styles.job}>
            <h1>Job Listings</h1>
            <ul className={styles.jobList}>
                {jobListings.map((job) => (
                    <li key={job.id} className={styles.jobItem}>
                        <h2>{job.title}</h2>
                        <p>{job.description}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p><strong>Date Posted:</strong> {job.datePosted}</p>
                        <button className={styles.applyButton}>Apply Now</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Jobs;