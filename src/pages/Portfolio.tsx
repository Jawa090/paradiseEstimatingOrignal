import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Construction Estimating Portfolio",
    "description": "Successful project estimates across residential, commercial, and industrial sectors"
  };

  const projects = [
    {
      title: "Downtown Office Complex",
      category: "Commercial",
      description: "45-story mixed-use development with retail and office space",
      stats: { size: "850,000 sq ft", budget: "$125M", duration: "24 months" },
    },
    {
      title: "Luxury Residential Tower",
      category: "Residential",
      description: "High-end condominium with 200 units and amenities",
      stats: { size: "400,000 sq ft", budget: "$85M", duration: "18 months" },
    },
    {
      title: "Manufacturing Facility",
      category: "Industrial",
      description: "State-of-the-art production plant with automated systems",
      stats: { size: "250,000 sq ft", budget: "$65M", duration: "20 months" },
    },
    {
      title: "Shopping Center Renovation",
      category: "Commercial",
      description: "Complete modernization of existing retail space",
      stats: { size: "180,000 sq ft", budget: "$32M", duration: "12 months" },
    },
    {
      title: "Multi-Family Housing",
      category: "Residential",
      description: "Affordable housing development with 150 units",
      stats: { size: "220,000 sq ft", budget: "$45M", duration: "16 months" },
    },
    {
      title: "Warehouse Distribution Center",
      category: "Industrial",
      description: "Logistics hub with advanced inventory systems",
      stats: { size: "500,000 sq ft", budget: "$72M", duration: "15 months" },
    },
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Project Portfolio | Paradise Construction Estimating"
        description="View our successful construction estimating projects across residential, commercial, and industrial sectors. 2000+ completed projects."
        canonical="https://paradiseestimating.com/portfolio"
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
            <div className="max-w-3xl">
              <h1 className="text-3xl lg:text-5xl font-black uppercase leading-tight mb-6 text-black">
                PORTFOLIO
              </h1>

              <h2 className="text-xl lg:text-2xl font-bold tracking-wider text-black mb-6">
                PARADISE ESTIMATING SERVICE COMPANY
              </h2>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="w-full" style={{ height: '0.5px', backgroundColor: '#d1d5db' }}></div>

        {/* Portfolio Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-background rounded-lg shadow-card hover:shadow-hover transition-shadow overflow-hidden border border-border"
                >
                  {/* Project image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <span className="text-6xl">🏗️</span>
                  </div>

                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-3">
                      {project.category}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Size:</span>
                        <span className="font-medium">{project.stats.size}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Budget:</span>
                        <span className="font-medium">{project.stats.budget}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="font-medium">{project.stats.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Request a Quote for Your Project
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
