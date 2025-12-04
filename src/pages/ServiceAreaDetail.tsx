import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const ServiceAreaDetail = () => {
    const { state, city } = useParams();

    // Format the city and state names for display
    const cityName = city?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    const stateName = state?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": `Paradise Construction Estimating - ${cityName}`,
        "areaServed": {
            "@type": "City",
            "name": cityName,
            "address": {
                "@type": "PostalAddress",
                "addressRegion": stateName,
                "addressCountry": "US"
            }
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <SEOHead
                title={`Construction Estimating Services in ${cityName}, ${stateName}`}
                description={`Professional construction estimating and takeoff services in ${cityName}, ${stateName}. Accurate, reliable, and fast estimates for contractors.`}
                canonical={`https://paradiseestimating.com/service-areas/${state}/${city}`}
                structuredData={structuredData}
            />
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative w-full min-h-[350px] lg:min-h-[350px] flex items-center">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 w-full h-full z-0"
                        style={{
                            backgroundImage: "url('/assets/services.png')",
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat"
                        }}
                    />

                    {/* Content Overlay */}
                    <div className="container mx-auto px-4 lg:px-6 relative z-10">
                        <div className="max-w-4xl">
                            <h1 className="text-3xl lg:text-5xl font-black uppercase leading-tight mb-6 text-black">
                                CONSTRUCTION ESTIMATING IN {cityName}
                            </h1>

                            <h2 className="text-xl lg:text-2xl font-bold tracking-wider text-black mb-6">
                                SERVING CONTRACTORS IN {stateName?.toUpperCase()}
                            </h2>
                        </div>
                    </div>
                </section>

                {/* Divider */}
                <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

                {/* Main Content */}
                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">
                                    Premier Estimating Services in {cityName}
                                </h2>
                                <p className="text-lg text-muted-foreground mb-6">
                                    Paradise Construction Estimating provides top-tier construction estimating and takeoff services for contractors, developers, and architects in {cityName}, {stateName}. Our team of experienced estimators understands the local market dynamics and construction requirements specific to the {stateName} region.
                                </p>
                                <p className="text-lg text-muted-foreground mb-8">
                                    Whether you are bidding on a commercial complex, a residential development, or an industrial facility in {cityName}, our accurate estimates give you the competitive edge you need to win more jobs.
                                </p>
                                <Button size="lg" className="bg-[#F9A51A] text-white hover:bg-[#F9A51A]/90 text-lg px-8">
                                    Get Your Free Quote
                                </Button>
                            </div>
                            <div className="bg-secondary/30 p-8 rounded-xl border border-border">
                                <h3 className="text-xl font-bold mb-6">Why Choose Us in {cityName}?</h3>
                                <ul className="space-y-4">
                                    {[
                                        "Local Market Expertise",
                                        "99% Accuracy Guarantee",
                                        "24-48 Hour Turnaround",
                                        "Certified Estimators",
                                        "Cost-Effective Solutions",
                                        "Dedicated Support Team"
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#7ED957]" />
                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Services Grid */}
                        <div className="mb-16">
                            <h2 className="text-3xl font-bold text-center mb-12">Our Services in {cityName}</h2>
                            <div className="grid md:grid-cols-3 gap-8">
                                {[
                                    {
                                        title: "Commercial Estimating",
                                        desc: "Comprehensive estimates for office buildings, retail spaces, and commercial developments."
                                    },
                                    {
                                        title: "Residential Estimating",
                                        desc: "Detailed material takeoffs and cost estimates for single-family and multi-family projects."
                                    },
                                    {
                                        title: "Industrial Estimating",
                                        desc: "Specialized estimating for warehouses, factories, and industrial facilities."
                                    }
                                ].map((service, index) => (
                                    <div key={index} className="bg-background p-6 rounded-lg shadow-card border border-border hover:shadow-hover transition-all">
                                        <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                        <p className="text-muted-foreground mb-4">{service.desc}</p>
                                        <div className="flex items-center text-primary font-bold text-sm uppercase tracking-wide">
                                            Learn More <ArrowRight className="w-4 h-4 ml-2" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-[#008CC9] text-white rounded-2xl p-12 text-center">
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                                Ready to Start Your Project in {cityName}?
                            </h2>
                            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                                Send us your plans today and get a detailed estimate within 24-48 hours.
                                We help contractors in {stateName} win more bids.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button size="lg" className="bg-[#7ED957] text-black hover:bg-[#7ED957]/90 font-bold text-lg px-8">
                                    Upload Your Plans
                                </Button>
                                <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#008CC9] font-bold text-lg px-8">
                                    Call Us Now
                                </Button>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default ServiceAreaDetail;
