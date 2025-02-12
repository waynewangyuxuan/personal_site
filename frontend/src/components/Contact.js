import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div className="contact-container">
            <h1 className="contact-header">Get in Touch</h1>
            <div className="contact-details">
                <p>
                    <strong>Email:</strong>{' '}
                    <a href="yw5954@nyu.com">
                        yw5954@nyu.edu
                    </a>
                </p>
                <p>
                    <strong>Phone:</strong>{' '}
                    <a href="tel:+19295838556">+1 (929) 583-8556</a>
                </p>
                <p>
                    <strong>LinkedIn:</strong>{' '}
                    <a
                        href="https://www.linkedin.com/in/wayne-wang-364174231/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        CLICK
                    </a>
                </p>
                <p>
                    <strong>GitHub:</strong>{' '}
                    <a
                        href="https://github.com/waynewangyuxuan"
                        target="_blank"
                        rel="noreferrer"
                    >
                        CLICK
                    </a>
                </p>
            </div>
        </div>
    );
}

export default Contact;