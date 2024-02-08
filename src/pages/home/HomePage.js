import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import TaskProgressBar from '../../components/TaskProgressBar';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import styles from '../../styles/HomePage.module.css';

const isPastDue = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    return due < today;
};

const isDueSoon = (dueDate) => {
    const today = new Date();
    const due = new Date(dueDate);
    const dayDifference = (due - today) / (1000 * 3600 * 24);
    return dayDifference <= 3 && dayDifference >= 0;
};


const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
};

const HomePage = () => {
    const currentUser = useCurrentUser();
    const [tasks, setTasks] = useState([]);
    const [taskStats, setTaskStats] = useState({ total: 0, completed: 0, pending: 0, inProgress: 0 });

    useEffect(() => {
        if (currentUser) {
            const fetchTasks = async () => {
                try {
                    const response = await axios.get('/tasks'); 
                    const fetchedTasks = response.data.results;
                    setTasks(fetchedTasks);
                } catch (error) {
                    console.error('Error fetching tasks', error);
                }
            };
            fetchTasks();
        }
    }, [currentUser]);


    return (
        <div className={styles.homeContainer}>
            {currentUser ? (
                <>
                    <h1>{getGreeting()}, {currentUser.username}!</h1>
                    <h1>Task Progress</h1>
                    {tasks.map(task => (
                        <div key={task.id} className={styles.taskCard}>
                            <h2 className={styles.taskTitle}>Task title:{task.title}</h2>
                            <p className={styles.taskTitle}>Due date: {task.due_date}</p>
                            {isPastDue(task.due_date) && task.status !== 'completed' && (
                                <div className="alert alert-danger">
                                    This task is past due!
                                </div>
                            )}
                            {isDueSoon(task.due_date) && task.status !== 'completed' && (
                                <div className="alert alert-warning">
                                    This task is due soon!
                                </div>
                            )}
                            <TaskProgressBar status={task.status} />
                        </div>
                    ))}
                </>
            ): (
                // Logged-out user view
                <div>
                    <h1 className={styles.welcomeMessage}>Welcome to TaskWave!</h1>
                    <p className={styles.welcomeText}>
                        Manage your tasks efficiently. Please 
                        <a href="/signin" className={styles.signInSignUpLinks}> sign in</a> or 
                        <a href="/signup" className={styles.signInSignUpLinks}> sign up</a> to get started.
                    </p>
                </div>
            )}
        </div>
    );
};

export default HomePage;
