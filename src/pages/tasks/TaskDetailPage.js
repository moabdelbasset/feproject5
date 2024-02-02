import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { Button } from 'react-bootstrap';

function TaskDetailPage() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/${id}`);
        setTask(data);
      } catch (err) {
        console.log(err);
        // Handle errors
      }
    };

    fetchTask();
  }, [id]);

  if (!task) return <p>Loading...</p>;
  // Render task details
  return (
    <div>
      <h1>{task.title}</h1>
      <p>Description: {task.description}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Due Date: {task.due_date}</p>
      {/* Display more details of the task */}
      <Link to={`/tasks/${id}/edit`}>
        <Button variant="primary">Edit Task</Button>
      </Link>
    </div>
  );
}
 
export default TaskDetailPage;
