import React from "react";
import HelpMainFaq from "./HelpMainFaq";

interface FAQ {
    question: string;
    answer: string;
}

interface FAQCategory {
    title: string;
    faqs: FAQ[];
}

const HelpFaqSection: React.FC = () => {
    // Organized FAQ data by categories
    const faqCategories: FAQCategory[] = [
        {
            title: "Orders & Shipping",
            faqs: [
                {
                    question: "How to Track Your Order ?",
                    answer: "Once your order has been shipped, you'll receive a tracking number via email or SMS. Use this tracking number on our Order Tracking Page to check the delivery status. If you haven't received a tracking number or have issues tracking your order, contact us here."
                },
                {
                    question: "Estimated Delivery Times & Shipping Costs?",
                    answer: "Delivery times vary by location. Domestic orders typically arrive within 3-5 business days, while international shipments may take 7-14 business days. Shipping costs are calculated at checkout based on weight, dimensions, and destination."
                },
                {
                    question: "International Shipping Policies ?",
                    answer: "We ship to most countries worldwide. International customers are responsible for all duties, import taxes, and customs fees. Delivery times for international orders typically range from 7-21 business days, depending on the destination and customs processing."
                },
                {
                    question: "Local Pickup Information ?",
                    answer: "Local pickup is available at our warehouse Monday through Friday, 9AM to 5PM. Select 'Local Pickup' at checkout and you'll receive an email when your order is ready for collection. Please bring your order confirmation and a valid ID."
                }
            ]
        },
        {
            title: "Returns & Refunds",
            faqs: [
                {
                    question: "What is your Return Policy ?",
                    answer: "We accept returns within 30 days of delivery. Items must be in original condition with all tags and packaging. To initiate a return, please visit our Returns Portal and follow the instructions."
                },
                {
                    question: "How Long Do Refunds Take ?",
                    answer: "Once we receive your return, refunds typically process within 5-7 business days. The timing of when it appears in your account depends on your payment method and financial institution."
                },
                {
                    question: "Can I Exchange Instead of Return ?",
                    answer: "Yes, exchanges are available for size and color changes. Visit our Returns Portal and select 'Exchange' instead of 'Return'. The new item will ship once we receive your original purchase."
                }
            ]
        },
        {
            title: "Product Information",
            faqs: [
                {
                    question: "How to Find Product Specifications ?",
                    answer: "Detailed product specifications can be found on each product page. Scroll down to the 'Specifications' tab for comprehensive information including dimensions, materials, and compatibility details."
                },
                {
                    question: "Are Your Products Eco-Friendly ?",
                    answer: "Many of our products are designed with sustainability in mind. Look for the 'Eco-Friendly' badge on product pages. We're committed to increasing our eco-friendly options and improving sustainable practices."
                }
            ]
        }
    ];

    return (
        <div className="py-2">
            {faqCategories.map((category, index) => (
                <div key={index} className="mb-1">
                    <HelpMainFaq
                        title={category.title}
                        titleClassName="text-dark fw-medium"
                        faqs={category.faqs}
                        containerClassName="mx-auto"
                        itemClassName="bg-light rounded overflow-hidden"
                        questionClassName="text-dark"
                        answerClassName="text-secondary"
                        iconClassName="text-warning"
                        style={{ maxWidth: "40rem" }}
                    />
                </div>
            ))}
        </div>
    );
};

export default HelpFaqSection;