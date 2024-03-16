import React from "react";
import styles from "../../styles/Task.module.css";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Task = ({ id, title, description, status, priority, created_at, updated_at }) => {
    return (
      <Card className={styles.Task}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            Description: {description}
          </Card.Text>
          <div>
            <strong>Status:</strong> {status} | <strong>Priority:</strong> {priority}
          </div>
          <div>
            <small>Created at: {new Date(created_at).toLocaleDateString()}</small>
            <br />
            <small>Updated at: {new Date(updated_at).toLocaleDateString()}</small>
          </div>
        </Card.Body>
        <Card.Footer>
          <Link to={`/tasks/${id}`} className="btn btn-primary">
            View Details
          </Link>
        </Card.Footer>
      </Card>
    );
};

export default Task;
