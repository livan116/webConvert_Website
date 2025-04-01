import React, { useState } from "react";
import HelpFaqItem from "./HelpFaqItem";

interface FAQ {
    question: string;
    answer: string;
}

interface HelpMainFaqProps {
    title?: string;
    titleClassName?: string;
    faqs: FAQ[];
    containerClassName?: string;
    itemClassName?: string;
    questionClassName?: string;
    answerClassName?: string;
    iconClassName?: string;
    style?: React.CSSProperties;
}

const HelpMainFaq: React.FC<HelpMainFaqProps> = ({
    title,
    titleClassName = "",
    faqs,
    containerClassName = "",
    itemClassName = "",
    questionClassName = "",
    answerClassName = "",
    iconClassName = "",
    style = {}
}) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number): void => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`w-100 py-4 px-4 ${containerClassName}`} style={style}>
            {title && (
                <h2 className={`fs-2 fw-medium textcolor1 text-center mb-4 ${titleClassName}`}>
                    {title}
                </h2>
            )}

            <div>
                {faqs.map((faq, index) => (
                    <HelpFaqItem
                        key={index}
                        question={faq.question}
                        answer={faq.answer}
                        isOpen={openIndex === index}
                        toggleOpen={() => toggleQuestion(index)}
                        containerClassName={itemClassName}
                        questionClassName={questionClassName}
                        answerClassName={answerClassName}
                        iconClassName={iconClassName}
                    />
                ))}
            </div>
        </div>
    );
};

export default HelpMainFaq;