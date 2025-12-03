
const steps = [
    {
        title: "Project Review & Scope Understanding",
        description: "We begin projects by reviewing drawings, specifications, and project requirements to understand the scope. We check costs, limits, and materials before starting in detail. So your takeoff is accurate from the start."
    },
    {
        title: "Digital Takeoff & Quantity Measurement",
        description: "We perform right digital quantity takeoffs for all materials and trades. We use best software tools such as Bluebeam, PlanSwift, and CostX for takeoffs. This will show best results with minimal human error."
    },
    {
        title: "Cost or Prices",
        description: "Our rates and prices are flexible and are equal to location, trade type, and market rates. We use regional cost databases to see your estimate according to market conditions."
    },
    {
        title: "Review, Verification and Quality Check",
        description: "We check each estimate many times. Senior estimators verify quantities, pricing, and labor productivity in a review interview. This quality process ensures 99% accuracy and consistency."
    },
    {
        title: "Final Report",
        description: "We arrange all data into a clear, easy estimate report, broken down by CSI divisions, trade categories, and cost summaries. You receive both editable Excel files and PDF reports ready for submission or client presentation."
    },
    {
        title: "Client Review & Support",
        description: "After delivery, our estimators can help you in clarifications, revisions, or value engineering discussions. We act as your ongoing partner, ensuring your bid is complete, competitive, and ready to win."
    }
];

const ProcessEstimationSection = () => {
    return (
        <section className="py-8 lg:py-12 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center mb-8 max-w-4xl mx-auto">
                    <h2 className="text-2xl lg:text-4xl font-bold text-black mb-6">
                        Our Process of <span className="text-[#7ED957]">Construction </span>Estimation
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        We rely on construction estimation processes based on accuracy, efficiency, and clear communication.
                        We do not only guess the project. We follow a proper method for every project. That means you get accurate quantities, realistic costs, and faster turnaround times. So that you can bid with confidence.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:bg-[#7ED957] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 rounded-full bg-[#D0F0C0] flex items-center justify-center mb-6 group-hover:bg-white transition-colors">
                                <span className="text-2xl font-bold text-black group-hover:text-[#7ED957] transition-colors">
                                    {index + 1}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-black mb-4 group-hover:text-white transition-colors">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 leading-relaxed group-hover:text-white/90 transition-colors">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessEstimationSection;
