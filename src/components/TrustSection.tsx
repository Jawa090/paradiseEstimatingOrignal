import { CheckCircle } from "lucide-react";

const TrustSection = () => {
  return (
    <section className="py-8 bg-gray-700 text-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center gap-2 justify-center">
          <CheckCircle className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-bold">Trusted by <span className="text-[#7ED957]">2000+ Construction</span> Estimating Projects</h3>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-center mt-3 lg: text-center">
          <p className="text-background/80 max-w-2xl">
            We have  20years of industry experience in construction estimating services. Our Construction estimators use modern estimation tools, Bluebeam, PlanSwift, Trimble Accubid On-Screen Takeoff (OST) and Stack Takeoff to deliver highly accurate, and reliable estimates. Get proven process, confidence, and smarter decisions to win bids by our estimators.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
