import { Phone, Mail, User, Building2, FileText, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const FreeEstimateSection = () => {
    return (
        <section className="py-16 lg:py-10 bg-[#1A1F2C]">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Content */}
                    <div className="text-white space-y-8">
                        <div>
                            <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                                Ready to Get Your <span className="text-[#7ED957]">Free Estimate?</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
                                Get accurate construction estimates in 24-48 hours. Our expert team is ready to help you with your next project.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#7ED957] flex items-center justify-center flex-shrink-0 text-black">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-white text-lg">Call Us Now</p>
                                    <p className="text-[#7ED957] text-lg">+1 (718) 719-6171</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-[#7ED957] flex items-center justify-center flex-shrink-0 text-black">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-white text-lg">Email Us</p>
                                    <p className="text-[#7ED957] text-lg">Paradisestimating@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button className="bg-[#7ED957] hover:bg-[#6BC947] text-black font-bold text-lg px-8 py-6 rounded-lg">
                                Upload Plans
                            </Button>
                            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-lg">
                                View All Services
                            </Button>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-2xl">
                        <h3 className="text-2xl lg:text-3xl font-black text-center text-[#1A1F2C] mb-6">
                            Get Your Free Quote
                        </h3>

                        <form className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-sm font-bold text-[#1A1F2C]">
                                        <User className="w-4 h-4" /> Full Name *
                                    </label>
                                    <Input placeholder="Your full name" className="bg-gray-50 border-gray-200 h-10" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-sm font-bold text-[#1A1F2C]">
                                        <Mail className="w-4 h-4" /> Email *
                                    </label>
                                    <Input placeholder="your@email.com" className="bg-gray-50 border-gray-200 h-10" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-sm font-bold text-[#1A1F2C]">
                                        <Phone className="w-4 h-4" /> Phone
                                    </label>
                                    <Input placeholder="(555) 123-4567" className="bg-gray-50 border-gray-200 h-10" />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="flex items-center gap-2 text-sm font-bold text-[#1A1F2C]">
                                        <Building2 className="w-4 h-4" /> Company
                                    </label>
                                    <Input placeholder="Company name" className="bg-gray-50 border-gray-200 h-10" />
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-sm font-bold text-[#1A1F2C]">
                                    Service Needed
                                </label>
                                <Select>
                                    <SelectTrigger className="bg-gray-50 border-gray-200 h-10">
                                        <SelectValue placeholder="Select a service" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="takeoff">Quantity Takeoff</SelectItem>
                                        <SelectItem value="cost">Cost Estimation</SelectItem>
                                        <SelectItem value="consulting">Consulting</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-1.5">
                                <label className="flex items-center gap-2 text-sm font-bold text-[#1A1F2C]">
                                    <MessageSquare className="w-4 h-4" /> Project Details
                                </label>
                                <Textarea
                                    placeholder="Tell us about your project..."
                                    className="bg-gray-50 border-gray-200 min-h-[80px] resize-none"
                                />
                            </div>

                            <Button className="w-full bg-[#7ED957] hover:bg-[#6BC947] text-black font-black text-lg h-12 rounded-lg shadow-lg hover:shadow-xl transition-all">
                                Get Free Quote Now
                            </Button>

                            <p className="text-center text-gray-500 text-xs">
                                We'll respond within 15 minutes during business hours
                            </p>
                        </form>
                    </div>

                </div>
            </div>
            <div className="h-[0.5px] w-full bg-[#7ED957] mt-10" />
        </section>
    );
};

export default FreeEstimateSection;
