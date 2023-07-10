import React, { useState } from 'react';
import './style.css';

const ContactMe = () => {
    const [formValues, setFormValues] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (event) => {
        event.preventDefault();
        // Use axios or any other library to send the form data to the server
        console.log(formValues);
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return (
        <div className="container d-flex justify-content-center  vh-100">
            <div className="w-50">
                <h1 className="contact-header text-center">Contact Me</h1>
                <div className="row d-flex justify-content-evenly  align-items-center contact-info ">
                    <div className='col-md-6'>
                        <h3>Reach me out</h3>
                        <address>
                            <br />
                            Phone: <a href="tel:(646)874-6808">(646)874-6808</a>
                            <br />
                            Email:{" "}
                            <a href="mailto:/alkida.vaci@gmai.com">
                                alkida.vaci@gmai.com
                            </a>
                        </address>
                    </div>
                    <form onSubmit={handleSubmit} className="p-4 bg-light rounded-3 col-md-6">
                        <div className="form-floating form-floating mb-3">
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                id="name"
                                placeholder="Name"
                                name="name"
                                value={formValues.name}
                                onChange={handleChange}
                            />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating form-floating mb-3">
                            <input
                                type="email"
                                className="form-control form-control-sm"
                                id="email"
                                placeholder="Email"
                                name="email"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-floating form-floating mb-3">
                            <textarea
                                className="form-control form-control-sm"
                                id="message"
                                placeholder="Message"
                                name="message"
                                value={formValues.message}
                                onChange={handleChange}
                            />
                            <label htmlFor="message">Message</label>
                        </div>
                        <button type="submit" className="btn btn-dark">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
