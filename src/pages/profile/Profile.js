import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCurrentUser } from '../../contexts/CurrentUserContext';
import { Link, useParams } from 'react-router-dom';
import styles from '../../styles/Profile.module.css';

const Profile = () => {
    const currentUser = useCurrentUser();
    const [profile, setProfile] = useState(null);
    const [taskStats, setTaskStats] = useState({ total: 0, completed: 0, pending: 0, inProgress: 0 });
    const { id } = useParams();

    useEffect(() => {
        const fetchProfileAndTasks = async () => {
            if (currentUser) {
                try {
                    // Fetch profile
                    const profileResponse = await axios.get(`/profiles/${currentUser.profile_id}/`);
                    setProfile(profileResponse.data);

                    // Fetch tasks and calculate stats
                    const tasksResponse = await axios.get(`/tasks`);
                    const fetchedTasks = tasksResponse.data.results || tasksResponse.data; // Adjust based on your actual API response
                    if (Array.isArray(fetchedTasks)) {
                        calculateStats(fetchedTasks);
                    } else {
                        console.error("Fetched tasks is not an array", fetchedTasks);
                    }
                } catch (error) {
                    console.error("Error fetching profile or tasks", error);
                }
            }
        };

        fetchProfileAndTasks();
    }, [currentUser]);

    // Function to calculate stats from fetched tasks
    const calculateStats = (fetchedTasks) => {
        const stats = { total: 0, completed: 0, pending: 0, inProgress: 0 };
        fetchedTasks.forEach(task => {
            stats.total++;
            if (task.status === 'done') stats.completed++;
            else if (task.status === 'pending') stats.pending++;
            else if (task.status === 'inprogress') stats.inProgress++;
        });
        setTaskStats(stats);
    };

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div className={styles.profileContainer}>
            <div className={styles.profileDetails}>
                <h1>{profile.name || currentUser.username}</h1>
                <p>{profile.content}</p>
                {profile.image && (
                    <img src={profile.image} alt="Profile" className={styles.profileImage} />
                )}
                <Link to={`/profile/${id}/edit`} className={styles.editProfileButton}>Edit Profile</Link>
                <div>
                    <h3>Tasks Summary</h3>
                    <p>Total Tasks: {taskStats.total}</p>
                    <p>Completed: {taskStats.completed}</p>
                    <p>Pending: {taskStats.pending}</p>
                    <p>In Progress: {taskStats.inProgress}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
