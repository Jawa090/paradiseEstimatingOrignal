import { Check } from "lucide-react";

const projects = [
    {
        title: "Metal & Wood Structures",
        subtitle: "General Contractors and Developers",
        image: "/assets/sample1.webp", // Placeholder, will use a generic one if needed
        items: [
            "Ethos Veterinary Clinic – $312K",
            "Tru by Hilton – $608K",
            "Westford South Apartments – $1.8 Million",
            "Cape Cod Savings Bank – $296K"
        ]
    },
    {
        title: "Paint & Wall-Covers",
        subtitle: "Metal Framing, Wood Framing, & Drywall",
        image: "/assets/sample2.webp",
        items: [
            "Commercial & Residential",
            "Parkway Apartments – $280K",
            "Sheridan Business Centre – $97K",
            "Autonation Ford – $151K",
            "Legions East Apartments – $1.2 Million"
        ]
    },
    {
        title: "Concrete and  Masonry",
        subtitle: "Precise takeoffs for slabs, foundations, masonry walls, rebar, and formwork.",
        image: "/assets/sample3.webp",
        items: [
            "Riverfront Parking Garage – $5.2 Million",
            "Maple Industrial Park – $2.7 Million",
            "Skyline Plaza Expansion – $8.4 Million",
        ]
    },
    {
        title: "MEP Estimating",
        subtitle: "Complete estimating support for MEP contractors and engineering teams.",
        image: "/assets/sample4.webp",
        items: [
            "Delta Logistics Warehouse – $3.5 Million",
            "Highline Office Tower – $1.9 Million",
            "Southport Medical Centre – $2.3 Million"
        ]
    },
    {
        title: "Residential & Multi-Family Projects",
        subtitle: "Complete estimating for residential, apartment, and mixed-use developments.",
        image: "/assets/sample4.webp",
        items: [
            "Oakview Residences – $4.8 Million",
            "Liberty Heights Apartments – $7.1 Million",
            "The Willows Townhomes – $2.9 Million"
        ]
    }
];

const SampleProjectsSection = () => {
    return (
        <section className="py-8 lg:py-12 bg-white">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center mb-8">
                    <h2 className="text-2xl lg:text-4xl font-bold text-black mb-4">
                        Our Work Samples with Top <span className="text-[#7ED957]">Construction Estimating </span>Companies
                    </h2>

                </div>

                {/* Horizontal Scroll Container */}
                <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="min-w-[350px] md:min-w-[400px] bg-white rounded-3xl shadow-lg overflow-hidden snap-center flex flex-col border border-gray-100"
                        >
                            {/* Image Section (Top 30%) */}
                            <div className="h-[200px] w-full relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop";
                                    }}
                                />
                            </div>

                            {/* Content Section (Bottom) */}
                            <div className="p-8 flex-1 flex flex-col">
                                <h3 className="text-2xl font-bold text-black mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-6 font-medium">
                                    {project.subtitle}
                                </p>

                                <ul className="space-y-3 mt-auto">
                                    {project.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className="mt-1 w-5 h-5 rounded-full bg-[#7ED957] flex items-center justify-center flex-shrink-0">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-gray-700 font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SampleProjectsSection;
