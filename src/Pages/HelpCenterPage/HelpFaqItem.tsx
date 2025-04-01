import React from "react";

interface HelpFaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    toggleOpen: () => void;
    containerClassName?: string;
    questionClassName?: string;
    answerClassName?: string;
    iconClassName?: string;
}

const HelpFaqItem: React.FC<HelpFaqItemProps> = ({
    question,
    answer,
    isOpen,
    toggleOpen,
    containerClassName = "",
    questionClassName = "",
    answerClassName = "",
    iconClassName = ""
}) => {
    return (
        <div className={`mb-3 ${containerClassName}`}>
            <button
                className={`d-flex justify-content-between align-items-center w-100 py-3 px-4 border-0 text-start ${questionClassName}`}
                onClick={toggleOpen}
                style={{ backgroundColor: "transparent" }}
            >
                <span className="fw-medium">{question}</span>
                <span className={`${iconClassName}`}>
                    {isOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
                            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                    )}
                </span>
            </button>

            {isOpen && (
                <div className={`py-3 px-4 ${answerClassName}`}>
                    <p className="mb-0">{answer}</p>
                </div>
            )}
        </div>
    );
};

export default HelpFaqItem;