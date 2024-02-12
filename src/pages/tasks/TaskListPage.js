import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Task from "./Task"; 

function TaskListPage() {
    const [tasks, setTasks] = useState([]); 
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const { data } = await axiosReq.get("/tasks/");
                setTasks(data.results); 
            } catch (err) {
                // console.log(err);
            }
        };

        fetchTasks();
    }, []);

    return (
        <Row className="h-100">
            <Col className="py-2 p-0 p-lg-2" lg={8}>
                <Container className={appStyles.Content}>
                    {tasks.length > 0 ? (
                        tasks.map((task) => (
                            <Task key={task.id} {...task} />
                        ))
                    ) : (
                        <p>No tasks found.</p>
                    )}
                </Container>
            </Col>
        </Row>
    );
}

export default TaskListPage;
