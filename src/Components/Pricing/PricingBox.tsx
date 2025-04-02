import React from 'react';

interface PricingBoxProps {
    title: string;
    price: number;
    description: string;
    services: string[];
    active?: boolean;
}

const PricingBox: React.FC<PricingBoxProps> = ({
    title,
    price,
    description,
    services,
    active = false
}) => {
    return (
        <div className={`pricing-boxarea ${active ? 'active' : ''}`}>
            <h4>{title}</h4>
            <p>
                Our SEO and Digital Marketing agency <br className="d-lg-block d-none" />
                offers a range of pricing plans tailored
            </p>
            <h1>${price} <span>/monthly</span></h1>

            <div className="space32"></div>
            <div className="list-area">
                <h5>Service Include:</h5>
                <ul>
                    {services.map((service, index) => (
                        <li key={index}>
                            <img
                                src="../assets/img/icons/check4.svg"
                                alt=""
                                className="check2"
                            />
                            <img
                                src="../assets/img/icons/check5.svg"
                                alt=""
                                className="check3"
                            />
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="space24"></div>
            <p className="pera">{description}</p>
        </div>
    );
};

export default PricingBox;
