import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Construction Estimating Services",
    "provider": {
      "@type": "ProfessionalService",
      "name": "Paradise Construction Estimating"
    },
    "areaServed": "US",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Construction Estimating Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Construction Estimating"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Material Take-Off Service"
          }
        }
      ]
    }
  };

  const services = [
    {
      title: "Construction Estimating",
      description:
        "Comprehensive cost analysis and detailed estimates for all types of construction projects, from ground-up builds to renovations.",
      features: [
        "Detailed cost breakdowns",
        "Labor and material estimates",
        "Equipment cost analysis",
        "Contingency planning",
      ],
    },
    {
      title: "Material Take-Off Service",
      description:
        "Accurate quantity takeoffs for materials, labor, and equipment using industry-leading tools like Bluebeam and PlanSwift.",
      features: [
        "Digital takeoff services",
        "Quantity calculations",
        "Material specifications",
        "Assembly cost analysis",
      ],
    },
    {
      title: "Residential Estimating",
      description:
        "Specialized estimates for residential projects including single-family homes, townhouses, and multi-unit developments.",
      features: [
        "New construction estimates",
        "Remodeling & additions",
        "Custom home builds",
        "Multi-family projects",
      ],
    },
    {
      title: "Commercial Estimating",
      description:
        "Expert commercial project estimates for offices, retail spaces, warehouses, and industrial facilities.",
      features: [
        "Office buildings",
        "Retail spaces",
        "Warehouses",
        "Mixed-use developments",
      ],
    },
    {
      title: "Industrial Estimating",
      description:
        "Complex industrial project estimates with focus on specialized systems, heavy equipment, and unique requirements.",
      features: [
        "Manufacturing facilities",
        "Processing plants",
        "Heavy industrial",
        "Specialized systems",
      ],
    },
    {
      title: "Preliminary Estimates",
      description:
        "Quick, accurate preliminary estimates to help you evaluate project feasibility and develop initial budgets.",
      features: [
        "Conceptual estimates",
        "Budget planning",
        "Feasibility analysis",
        "Fast turnaround",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Construction Estimating Services | Paradise Estimating"
        description="Expert construction estimating services including material take-offs, residential, commercial, and industrial estimates. Fast, accurate, and reliable."
        canonical="https://yoursite.lovable.app/services"
        structuredData={structuredData}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
              Professional construction estimating services tailored to your project needs
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="p-8 bg-background rounded-lg shadow-card hover:shadow-hover transition-shadow border border-border"
                >
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get a Free Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
