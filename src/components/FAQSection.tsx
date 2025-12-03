import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
    {
        question: "What makes your company one of the best construction estimating services?",
        answer: "We hire expert estimators, advanced digital tools, and location-based pricing data to deliver accurate, fast, and affordable estimates. Our clients rely on us to bid confidently and win more projects."
    },
    {
        question: "What types of projects do you estimate?",
        answer: "We provide construction estimation for commercial, residential, industrial, and civil construction projects. Our construction estimators offer concrete, drywall, painting, MEP, roofing, sitework, and structural steel estimating."
    },
    {
        question: "How long does it take to deliver an estimate?",
        answer: "Most estimates are completed within 9 to 24 hours, depending on project complexity. For urgent deadlines, we also offer express delivery options."
    },
    {
        question: "Do you offer trade-specific or full-scope estimating?",
        answer: "Yes. We provide both full-scope estimates for general contractors and trade-specific estimates for subcontractors. Paradise’s estimating services include electrical, drywall, concrete, plumbing, HVAC, and more."
    },
    {
        question: "What software and tools do your construction estimators use?",
        answer: "Our estimators are skilled in PlanSwift, Bluebeam Revu, On-Screen Takeoff, CostX, RSMeans, and Trimble. These tools ensure accurate, consistent, and detailed quantity takeoffs."
    },
    {
        question: "How accurate are your estimates?",
        answer: "Our estimates maintain 98–99% accuracy, using updated material costs and labor rates."
    },
    {
        question: "How can I start with your estimating services?",
        answer: "Simply upload your project plans (PDF, CAD, or Revit) through our contact form or email. We will review your scope and send a free quote and turnaround time before starting."
    },
    {
        question: "How much do your estimating services cost?",
        answer: "Pricing depends on project size, trade, and level of detail. But we offer affordable, per-project rates with no hidden fees. Our clients save 60–70% compared to in-house estimators."
    },

    {
        question: "Do you provide preliminary or budget estimates?",
        answer: "Yes, we prepare preliminary estimates for early-stage budgeting and feasibility studies. These help developers and contractors assess project viability before final plans are ready."
    },

    {
        question: "Do you offer revisions if I need them after receiving my estimate?",
        answer: "We offer free minor revisions to align with updated drawings or scope adjustments. Major changes can be re-estimated quickly at minimal additional cost."
    },

    {
        question: "Do you handle international projects or only U.S.-based ones?",
        answer: "We primarily serve U.S. and Canadian contractors. We also work on international projects with region-specific pricing data upon request."
    },

    {
        question: "Can you provide a sample of construction estimating services before I order?",
        answer: "Yes, we can share sample estimates or past project examples (with client details removed). You can review our format, accuracy, and level of detail before getting started."
    },

    {
        question: "Why should I outsource estimating instead of hiring in-house staff?",
        answer: "Outsourcing saves time, overhead, and payroll costs. You gain access to certified estimators without hiring full-time employees. It will let you bid on more projects"
    },

];

const FAQSection = () => {
    // Split FAQs into two columns
    const leftColumnFaqs = faqs.filter((_, index) => index % 2 === 0);
    const rightColumnFaqs = faqs.filter((_, index) => index % 2 !== 0);

    const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-3 lg:py-6 bg-white">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-5xl font-bold text-black">
                        Frequently <span className="text-[#7ED957]">Asked</span> Questions
                    </h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-6 items-start">
                    {/* Left Column */}
                    <div className="flex flex-col gap-4">
                        {leftColumnFaqs.map((faq, index) => {
                            const actualIndex = index * 2;
                            const isOpen = openIndex === actualIndex;
                            return (
                                <div
                                    key={actualIndex}
                                    className={`border-2 rounded-3xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-[#7ED957]" : "border-[#7ED957]"
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(actualIndex)}
                                        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-lg font-bold text-black pr-4">
                                            {faq.question}
                                        </span>
                                        {isOpen ? (
                                            <ChevronUp className="w-6 h-6 text-black flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-black flex-shrink-0" />
                                        )}
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-4">
                        {rightColumnFaqs.map((faq, index) => {
                            const actualIndex = index * 2 + 1;
                            const isOpen = openIndex === actualIndex;
                            return (
                                <div
                                    key={actualIndex}
                                    className={`border-2 rounded-3xl overflow-hidden transition-colors duration-300 ${isOpen ? "border-[#7ED957]" : "border-[#7ED957]"
                                        }`}
                                >
                                    <button
                                        onClick={() => toggleFAQ(actualIndex)}
                                        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-lg font-bold text-black pr-4">
                                            {faq.question}
                                        </span>
                                        {isOpen ? (
                                            <ChevronUp className="w-6 h-6 text-black flex-shrink-0" />
                                        ) : (
                                            <ChevronDown className="w-6 h-6 text-black flex-shrink-0" />
                                        )}
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
