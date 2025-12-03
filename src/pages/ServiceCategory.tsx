import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

interface ServiceCategoryProps {
    categoryName?: string;
    categoryDescription?: string;
}

const ServiceCategory = ({
    categoryName = "Category 1",
    categoryDescription = "Professional construction estimating services tailored to your needs"
}: ServiceCategoryProps) => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": `${categoryName} - Paradise Construction Estimating`,
        "description": categoryDescription,
        "provider": {
            "@type": "Organization",
            "name": "Paradise Construction Estimating"
        }
    };

    return (
        <div className="min-h-screen">
            <SEOHead
                title={`${categoryName} | Paradise Construction Estimating Services`}
                description={categoryDescription}
                canonical={`https://yoursite.lovable.app/services/${categoryName.toLowerCase().replace(/\s+/g, '-')}`}
                structuredData={structuredData}
            />
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative w-full min-h-[500px] lg:min-h-[600px] flex items-center">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 w-full h-full z-0"
                        style={{
                            backgroundImage: "url('/assets/aboutus.webp')",
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}
                    />

                    {/* Content Overlay */}
                    <div className="container mx-auto px-4 lg:px-6 relative z-10">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl lg:text-6xl font-black uppercase leading-tight mb-6 text-black">
                                {categoryName}
                            </h1>
                            <p className="text-xl lg:text-2xl font-medium text-black/80 leading-relaxed mb-8">
                                {categoryDescription}
                            </p>
                            <Button className="bg-[#82E658] hover:bg-[#72d648] text-black font-bold text-lg px-8 py-6 h-auto rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all border-2 border-black">
                                Get a Free Quote
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Content Section - You can add more sections here */}
                <section className="py-16 lg:py-24 bg-white">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-black">
                                What We Offer
                            </h2>
                            <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                Our {categoryName.toLowerCase()} services provide comprehensive solutions for your construction projects.
                                We deliver accurate, detailed estimates that help you make informed decisions and stay within budget.
                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mt-12">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-3 text-black">Accurate Estimates</h3>
                                    <p className="text-gray-600">
                                        Precision-driven estimates using industry-leading software and experienced professionals.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-3 text-black">Fast Turnaround</h3>
                                    <p className="text-gray-600">
                                        Quick delivery without compromising on quality or accuracy of your project estimates.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-3 text-black">Detailed Reports</h3>
                                    <p className="text-gray-600">
                                        Comprehensive documentation with itemized breakdowns for complete transparency.
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="text-xl font-bold mb-3 text-black">Expert Support</h3>
                                    <p className="text-gray-600">
                                        Dedicated support team available to answer questions and provide guidance.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 lg:py-24 bg-[#333333]">
                    <div className="container mx-auto px-4 lg:px-6 text-center">
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Contact us today for a free consultation and discover how our {categoryName.toLowerCase()} services can benefit your project.
                        </p>
                        <Button className="bg-[#82E658] hover:bg-[#72d648] text-black font-bold text-lg px-8 py-6 h-auto rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,0.3)] transition-all border-2 border-black">
                            Get a Free Quote
                        </Button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ServiceCategory;
