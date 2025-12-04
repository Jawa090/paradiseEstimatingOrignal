import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ServiceButtons = () => {
  return (
    <section className="py-8 lg:py-10">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-4xl mx-auto">
          <Button

            size="lg"
            className="bg-[#7ED957] text-black font-bold uppercase tracking-wide rounded-full 
                       px-6 py-6 text-xl
                       shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                       hover:translate-y-1 hover:shadow-none transition-all"
          >
            Our Premium Services
          </Button>

          <Button
            size="lg"

            className="bg-gray-700 text-white font-bold uppercase tracking-wide rounded-full 
                       px-6 py-6 text-xl
                       shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]
                       hover:bg-gray-700 hover:translate-y-1 hover:shadow-none transition-all"
          >
            Discover Our Excellence
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceButtons;
