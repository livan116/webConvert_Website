import React from 'react';

interface HelpCenterCardProps {
    icon?: React.ReactNode;
    iconBgColor?: string;
    iconColor?: string;
    title?: string;
    content?: string | React.ReactNode;
    className?: string;
}

// Reusable Card Component that accepts props
const HelpCenterCard: React.FC<HelpCenterCardProps> = ({
    icon, // React element or component
    iconBgColor = "bg-primary bg-opacity-10", // Default background color
    // Default icon color
    title,
    content,
    className = "" // Additional custom classes
}) => {
    return (
        <div className={`card border h-100 p-3 ${className}`}>
            {/* Icon container */}
            {icon && (
                <div className={`${iconBgColor} d-flex align-items-center justify-content-center mb-4`} style={{ width: "4rem", height: "4rem", borderRadius: "0.5rem" }}>
                    {icon}
                </div>
            )}

            {/* Card title */}
            {title && <h3 className="fs-5 heading2 textcolor1 fw-medium mb-3">{title}</h3>}

            {/* Card content */}
            {content && (
                typeof content === 'string'
                    ? <p className="text-secondary para1">{content}</p>
                    : content
            )}
        </div>
    );
};

export default HelpCenterCard;