import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Alert } from 'react-bootstrap';
import btnStyles from "../../styles/Button.module.css";


const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formValidation, setFormValidation] = useState({
        isValid: true,
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            setFormValidation({
                isValid: false,
                message: 'Please fill out all fields before submitting.',
            });
            return; 
        }

        try {
            await axios.post('/contacts/create/', formData);
            alert('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
            setFormValidation({
                isValid: true,
                message: '',
            });
        } catch (error) {
            console.error('Failed to send message', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            {!formValidation.isValid && <Alert variant="danger">{formValidation.message}</Alert>}
            <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Enter your name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                    type="email" 
                    placeholder="Enter your email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Subject" 
                    name="subject" 
                    value={formData.subject} 
                    onChange={handleChange} />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control 
                    as="textarea" 
                    rows={3} 
                    placeholder="Your message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} />
            </Form.Group>

            <Button className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`} variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ContactForm;
