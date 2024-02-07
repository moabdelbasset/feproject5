import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form } from 'react-bootstrap'; // If you're using React Bootstrap

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/contacts/create/', formData);
            alert('Message sent successfully!');
            // Optionally clear the form after submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            console.error('Failed to send message', error);
            // Handle error
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
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

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default ContactForm;
