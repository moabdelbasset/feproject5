import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Or your axios instance
import TaskProgressBar from '../../components/TaskProgressBar'

const HomePage = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        // Fetch tasks from your API
        const fetchTasks = async () => {
            try {
                const response = await axios.get('/tasks'); 
                console.log(response.data);
                setTasks(response.data.results);
            } catch (error) {
                console.error('Error fetching tasks', error);
            }
        };

        fetchTasks();
    }, []);

    return (
        <div>
            <h1>Task Progress</h1>
            {tasks.map(task => (
                <div key={task.id}>
                    <h2>{task.title}</h2>
                    <TaskProgressBar status={task.status} />
                </div>
            ))}
        </div>
    );
};

export default HomePage;
