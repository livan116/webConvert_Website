import React from "react";
import HelpCenterCard from "./HelpCenterCard";

interface CardData {
    icon: React.ReactNode;
    iconBgColor: string;
    title: string;
    content: string;
}

const DisplayCards: React.FC = () => {
    // Example data - you would replace this with your actual data
    const cardsData: CardData[] = [
        {
            icon: <span className="text-success fs-3">🛍️</span>,
            iconBgColor: "bg-success bg-opacity-10",
            title: "Opening Hours",
            content: "Your global expansion partner. Remote fully owns the local entities in all our available countries."
        },
        {
            icon: <span className="text-danger fs-3">💰</span>,
            iconBgColor: "bg-danger bg-opacity-10",
            title: "How to Contact Staff",
            content: "Our fair price guarantee means no commitments, 3rd party markups, hidden fees, or upfront deposits."
        },
        {
            icon: <span className="text-primary fs-3">🌐</span>,
            iconBgColor: "bg-primary bg-opacity-10",
            title: "Return Privacy Policies",
            content: "Manage your entire global workforce in one place, including your own-entity employees, freeing up your time and money so you can grow your business."
        }
    ];

    return (
        <div className="w-100 bg-light py-5 px-4">
            <div className="container">
                <div className="row g-4">
                    {cardsData.map((card, index) => (
                        <div className="col-12 col-md-6 col-lg-4" key={index}>
                            <HelpCenterCard
                                icon={card.icon}
                                iconBgColor={card.iconBgColor}
                                title={card.title}
                                content={card.content}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DisplayCards;