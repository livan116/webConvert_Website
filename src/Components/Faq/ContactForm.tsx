import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    // State hooks for form data
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [subject, setSubject] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    // Handle form submission
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Here you can handle form submission, e.g., send data to an API
        console.log({
            firstName,
            lastName,
            email,
            phone,
            subject,
            message,
        });
    };

    return (
        <div className="contact-inner-section-area sp1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <div className="heading2 text-center">
                            <h5>Contact Us Now</h5>
                            <h2>Not Found Your Answer? Just Ask Us!</h2>
                        </div>
                        <div className="space60 d-lg-block d-none"></div>
                        <div className="space30 d-lg-none d-md-block"></div>
                    </div>
                    <div className="col-lg-10 mx-auto">
                        <div className="contact-form-area">
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="input-area">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="First Name"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-area">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Last Name"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-area">
                                            <input
                                                type="email"
                                                className="form-control"
                                                placeholder="Email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="input-area">
                                            <input
                                                type="tel"
                                                className="form-control"
                                                placeholder="Phone"
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-area">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Subject"
                                                value={subject}
                                                onChange={(e) => setSubject(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="input-area">
                                            <textarea
                                                className="form-control"
                                                placeholder="Message"
                                                rows={4}
                                                value={message}
                                                onChange={(e) => setMessage(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="btn-area text-center mt-5"
                                    >
                                        <button className="header-btn1">
                                        Submit
                                            <span>
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
