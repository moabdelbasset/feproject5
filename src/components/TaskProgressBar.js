import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from '../styles/HomePage.module.css'; // Path to your CSS module

const TaskProgressBar = ({ status }) => {
    // Determine the progress value based on the task status
    let progress = 0;
    switch (status) {
        case 'pending':
            progress = 25;
            break;
        case 'inprogress':
            progress = 50;
            break;
        case 'done':
            progress = 100;
            break;
        default:
            progress = 0;
    }

    return (
        <div className={styles.progressBarContainer}>
            <ProgressBar now={progress} />
            <div className={styles.progressBarLabel}>{`${progress}%`}</div>
        </div>
    );
};

export default TaskProgressBar;
