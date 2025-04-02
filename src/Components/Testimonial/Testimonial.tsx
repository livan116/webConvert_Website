// src/components/TestimonialSlider.tsx

import React from 'react';
import TestimonialCard from './TestimonialCard';

// Define types for testimonial data
interface Testimonial {
    id: number;
    text: string;
    author: string;
    rating: number;
    quitoImageSrc: string
    googleLogoSrc: string
}

// Sample data
const testimonials: Testimonial[] = [
    {
        id: 1,
        text: "Working with SEOC has been a game-changer for our business. Their strategic approach to SEO digital marketing has significantly increased our online visibility and lead generation.",
        author: "Sarah L.",
        rating: 5,
        quitoImageSrc: "../assets/img/icons/quito4.svg",
        googleLogoSrc: "../assets/img/icons/google1.svg"
    },
    {
        id: 2,
        text: "We've been partnering with SEOC for over a year now, and the results speak for themselves. Their comprehensive digital marketing solutions have helped us achieve in website",
        author: "David M.",
        rating: 5,
        quitoImageSrc: "../assets/img/icons/quito4.svg",
        googleLogoSrc: "../assets/img/icons/google1.svg"
    },
    {
        id: 3,
        text: "As a startup, we needed a digital marketing partner that could understand our unique needs and deliver cost-effective solutions. SEOC has been that partner for us.",
        author: "Emily R.",
        rating: 5,
        quitoImageSrc: "../assets/img/icons/quito4.svg",
        googleLogoSrc: "../assets/img/icons/google1.svg"
    },
    {
        id: 4,
        text: "I can't recommend SEOC enough. Their team is not only highly skilled and knowledgeable but also incredibly responsive and easy to work with. They truly go above and beyond to deliver exceptional results.",
        author: "Clark Borer",
        rating: 5,
        quitoImageSrc: "../assets/img/icons/quito4.svg",
        googleLogoSrc: "../assets/img/icons/google1.svg"
    },
    {
        id: 5,
        text: "Partnering with SEOC has been a transformative experience for our business. Their comprehensive approach to digital marketing has not only boosted our online presence but also streamlined our marketing efforts across multiple channels.",
        author: "Orlando Schulist",
        rating: 5,
        quitoImageSrc: "../assets/img/icons/quito4.svg",
        googleLogoSrc: "../assets/img/icons/google1.svg"
    },
    {
        id: 6,
        text: "We've had the pleasure of working with SEOC for several years now, and they have consistently exceeded our expectations in every aspect. From the initial consultation to ongoing support, they are truly exceptional.",
        author: "Ms. Timmy Harvey",
        rating: 5,
        quitoImageSrc: "../assets/img/icons/quito4.svg",
        googleLogoSrc: "../assets/img/icons/google1.svg"
    },
    {
        id: 7,
        text: "I love it here! I was looking for a place back in 2020 to touch up my braids from a different stylist, which was very hard because a lot of places don’t touch other stylist’s work. They have me in a chokehold.",
        author: "Jessica Young",
        rating: 5,
        quitoImageSrc: "../assets/img/icons/quito4.svg",
        googleLogoSrc: "../assets/img/icons/google1.svg"
    },
    {
        id: 8,
        text: "We've had the pleasure of working with SEOC for several years now, and they have consistently exceeded our expectations in every aspect. From the initial consultation to ongoing support, they are truly exceptional.",
        author: "John Doe",
        rating: 5,
        quitoImageSrc: "../assets/img/icons/quito4.svg",
        googleLogoSrc: "../assets/img/icons/google1.svg"
    },
    {
        id: 9,
        text: "I can't recommend SEOC enough. Their team is not only highly skilled and knowledgeable but also incredibly responsive and easy to work with. They truly go above and beyond to deliver exceptional results.",
        author: "Jane Smith",
        rating: 5,
        quitoImageSrc: "../assets/img/icons/quito4.svg",
        googleLogoSrc: "../assets/img/icons/google1.svg"
    }
];

const TestimonialSlider: React.FC = () => {
    return (
        <div className="testimonial4-section-area sp1" style={{ background: 'none' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="testimonial4-slider-area1">
                            <div className="row">
                                {testimonials.map((testimonial) => (
                                    <TestimonialCard
                                        key={testimonial.id}
                                        text={testimonial.text}
                                        author={testimonial.author}
                                        rating={testimonial.rating}
                                        quitoImageSrc={testimonial.quitoImageSrc}
                                        googleLogoSrc={testimonial.googleLogoSrc}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="pagination-area">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination justify-content-center">
                                <li className="page-item">
                                    <a className="page-link" href="#"><i className="fa-solid fa-angle-left"></i></a>
                                </li>
                                <li className="page-item"><a className="page-link active" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item">
                                    <a className="page-link" href="#"><i className="fa-solid fa-angle-right"></i></a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
