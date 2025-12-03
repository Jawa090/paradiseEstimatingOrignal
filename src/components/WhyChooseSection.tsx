import { Calculator, Monitor, Users } from "lucide-react";

const WhyChooseSection = () => {
    const features = [
        {
            icon: Calculator,
            title: "Precision & Accuracy",
            description:
                "Our detailed approach and advanced software ensure accurate quantity takeoffs and cost estimates.",
        },
        {
            icon: Monitor,
            title: "Advanced Technology",
            description:
                "We utilize industry-leading software and digital tools for efficient and precise estimating.",
        },
        {
            icon: Users,
            title: "Expert Team",
            description:
                "Our experienced estimators bring deep industry knowledge and professional expertise.",
        },
    ];

    return (
        <section className="py-8 lg:py-12 bg-white">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center mb-8">
                    <h2 className="text-3xl lg:text-5xl font-black text-black mb-6">
                        Why Choose Paradise Estimating
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Our expertise, technology, and commitment to accuracy make us the
                        preferred choice for construction estimating.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 rounded-full bg-[#7ED957] flex items-center justify-center mb-8 shadow-lg">
                                <feature.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                            </div>
                            <h3 className="text-2xl font-bold text-[#1A2E1A] mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
