import React, { useState } from 'react';
import './Contact.css';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Message sent successfully!');
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="section">
            <h2>Contact</h2>
            <div className="contact-content">
                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
                <div className="contact-links">
                    <a href="mailto:gshlok.is24@rvce.edu.in" className="contact-link">
                        <img src="/images/email.png" alt="Email" />
                    </a>
                    <a href="https://in.linkedin.com/in/shlok-g" className="contact-link">
                        <img src="/images/linkedin.png" alt="LinkedIn" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;