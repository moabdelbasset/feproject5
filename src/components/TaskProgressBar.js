import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from '../styles/HomePage.module.css';

const TaskProgressBar = ({ status }) => {
    // Determine the progress value based on the task status
    let progress = 0;
    switch (status) {
        case 'pending':
            progress = 25;
            break;
        case 'in_progress':
            progress = 50;
            break;
        case 'completed':
            progress = 100;
            break;
        default:
            progress = 0;
    }

    return (
        <ProgressBar className="progress-bar-text" now={progress} label={`${progress}%`} />
    );
};

export default TaskProgressBar;
