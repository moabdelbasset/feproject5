import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
import { Button, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';


function TaskDetailPage() {
  const { id } = useParams();
  const history = useHistory(); // To redirect after delete
  const [task, setTask] = useState(null);
  const [error, setError] = useState(""); // Optional: manage error state

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


         const handleDelete = async () => {
          const confirmDelete = window.confirm("Are you sure you want to delete this task?");
          if (confirmDelete) {
            try {
              await axiosReq.delete(`/tasks/${id}`);
              history.push("/tasks"); // Redirect user to the tasks list after delete
              toast.success("Task deleted successfully!");
            } catch (err) {
              console.error(err);
              setError("Failed to delete the task."); // Optional: Set error state if delete fails
              toast.error("Failed to delete the task.");
            }
          } else {
            // User clicked "Cancel", do nothing
            console.log("Task deletion canceled.");
            toast.success("Task deletion canceled.");
          }
        };
        

  if (!task) return <p>Loading...</p>;
  if (error) return <Alert variant="danger">{error}</Alert>; // Optional: Display error if any

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
      <Button variant="danger" onClick={handleDelete} className="ml-2">
        Delete Task
      </Button>
    </div>
  );
}

export default TaskDetailPage;
