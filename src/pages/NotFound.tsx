import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowLeft, Construction } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <Header />

      <main className="flex-grow flex items-center justify-center relative overflow-hidden py-20">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#7ED957] rounded-full blur-[150px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#7ED957] rounded-full blur-[150px]" />
        </div>

        <div className="container px-4 md:px-6 text-center z-10">
          <div className="max-w-3xl mx-auto space-y-8">

            {/* Icon */}
            <div className="flex justify-center mb-8">
              <div className="bg-[#7ED957]/10 p-6 rounded-full ring-1 ring-[#7ED957]/30">
                <Construction className="w-16 h-16 text-[#7ED957]" />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground">
              Coming <span className="text-[#7ED957]">Soon</span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We're building something amazing! This page is currently under construction.
              Please check back later or explore our other services.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
              <Button
                asChild
                className="bg-[#7ED957] text-black font-bold text-lg px-8 py-6 rounded-full shadow-[0px_4px_15px_rgba(126,217,87,0.4)] hover:bg-[#6BC945] hover:shadow-[0px_6px_20px_rgba(126,217,87,0.6)] transition-all duration-300"
              >
                <a href="/">
                  <ArrowLeft className="mr-2 h-5 w-5" />
                  Back to Home
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="border-2 border-foreground/10 text-foreground font-bold text-lg px-8 py-6 rounded-full hover:bg-foreground/5 transition-all duration-300"
              >
                <a href="/contact">
                  Contact Us
                </a>
              </Button>
            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NotFound;
