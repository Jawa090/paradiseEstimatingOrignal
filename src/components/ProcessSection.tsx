const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Project Analysis",
      description:
        "Comprehensive review of project documents, plans, and requirements.",
    },
    {
      number: "2",
      title: "Detailed Takeoff",
      description:
        "Precise quantity calculations using advanced software and proven methods.",
    },
    {
      number: "3",
      title: "Cost Development",
      description:
        "Application of current market rates and comprehensive cost analysis.",
    },
    {
      number: "4",
      title: "Final Delivery",
      description:
        "Professional reports with detailed breakdowns and supporting documentation.",
    },
  ];

  return (
    <section className="py-8 lg:py-12 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-5xl font-black text-[#1A2E1A] mb-4">
            Our Proven Process
          </h2>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto">
            We follow a systematic approach to ensure accurate and reliable estimates for every project.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-8 shadow-[0_0_20px_rgba(0,0,0,0.05)] hover:shadow-[0_0_30px_rgba(0,0,0,0.1)] transition-all duration-300 border border-transparent hover:border-[#7ED957] flex flex-col items-center text-center"
            >
              {/* Number Circle */}
              <div className="w-16 h-16 rounded-full bg-[#2A3C2A] group-hover:bg-[#7ED957] transition-colors duration-300 flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-white group-hover:text-black">
                  {step.number}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#1A2E1A] mb-4">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
