import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { axiosReq } from '../../api/axiosDefaults';
// ... import necessary components ...

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
      {/* Display more details of the task */}
    </div>
  );
}

export default TaskDetailPage;
