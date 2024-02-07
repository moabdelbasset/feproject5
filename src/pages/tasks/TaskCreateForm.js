import React, { useState } from "react";
import { useHistory } from "react-router";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../styles/TaskCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import { toast } from 'react-toastify';


function TaskCreateForm() {
    const [errors, setErrors] = useState({});
    const [postData, setPostData] = useState({
        title: "",
        description: "",
        priority: "medium",
        due_date: new Date(),
        status: "pending",
    });

    const { title, description, priority, due_date, status } = postData;
    const history = useHistory();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPostData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleDateChange = (date) => {
        setPostData((prevData) => ({
            ...prevData,
            due_date: date,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);
        formData.append("description", description);
        formData.append("due_date", due_date.toISOString());
        formData.append("priority", priority);
        formData.append("status", status);

        try {
            const { data } = await axiosReq.post("/tasks/", formData);
            toast.success("Task added successfully!");
            history.push(`/tasks/${data.id}`);
        } catch (err) {
            console.log(err);
            toast.error("Failed to perform action.");
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    const textFields = (
        <div className="text-center">
          {/* Title and Description Fields */}
            <Form.Group controlId="taskTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            />
        </Form.Group>
        {errors.title?.map((message, idx) => (
            <Alert key={idx} variant="warning">
            {message}
            </Alert>
        ))}
        <Form.Group controlId="taskDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
            as="textarea"
            rows={6}
            name="description"
            value={description}
            onChange={handleChange}
            />
        </Form.Group>
        {errors.description?.map((message, idx) => (
            <Alert key={idx} variant="warning">
            {message}
            </Alert>
        ))}

    
          {/* Priority Field */}
          <Form.Group controlId="taskPriority">
            <Form.Label>Priority</Form.Label>
            <Form.Control
              as="select"
              name="priority"
              value={priority}
              onChange={handleChange}
            >
              <option value="">Select Priority</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </Form.Control>
          </Form.Group>
    
          {/* Due Date Field */}
          <Form.Group controlId="taskDueDate">
            <Form.Label>Due Date</Form.Label>
            <DatePicker
              selected={due_date}
              onChange={(date) => setPostData({ ...postData, due_date: date })}
              className="form-control"
            />
          </Form.Group>
    
          {/* Status Field */}
          <Form.Group controlId="taskStatus">
            <Form.Label>Status</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={status}
              onChange={handleChange}
            >
              <option value="">Select Status</option>
              <option value="pending">Pending</option>
              <option value="in_progress">In Progress</option>
              <option value="completed">Completed</option>
            </Form.Control>
          </Form.Group>
    
          {/* Submit and Cancel Buttons */}
          <Button
            className={`${btnStyles.Button} ${btnStyles.Blue}`}
            onClick={() => history.goBack()}
          >
            Cancel
          </Button>
          <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
            Create
          </Button>
        </div>
      );
    
      return (
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
              <Container className={`${appStyles.Content} ${styles.Container}`}>
                {textFields}
              </Container>
            </Col>
          </Row>
        </Form>
      );
    }

export default TaskCreateForm;
