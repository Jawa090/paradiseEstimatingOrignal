import React from "react";

interface ServiceHeroProps {
    title: string;
    subtitle?: string;
}

const ServiceHero = ({
    title,
    subtitle = "PARADISE ESTIMATING SERVICES COMPANY"
}: ServiceHeroProps) => {
    return (
        <div className="relative w-full h-[400px] lg:h-[500px] bg-[#f5f5f5] overflow-hidden">
            {/* Background Texture Simulation (Optional: Replace with actual texture image) */}
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="container mx-auto h-full relative px-4 lg:px-6">
                {/* Absolute Positioned Text Content */}
                <div className="absolute top-1/2 left-4 lg:left-6 -translate-y-1/2 max-w-3xl z-20">
                    <h1 className="text-4xl lg:text-7xl font-black text-black uppercase leading-[0.9] mb-6 tracking-tight">
                        {title}
                    </h1>
                    <p className="text-sm lg:text-xl font-bold text-black tracking-[0.2em] uppercase">
                        {subtitle}
                    </p>
                </div>

                {/* Right Side Graphics */}
                <div className="absolute right-0 top-0 h-full w-1/2 hidden lg:flex items-center justify-end pointer-events-none">
                    {/* Green Circle Background */}
                    <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7ED957] rounded-full" />

                    {/* Worker Image Placeholder */}
                    <img
                        src="/assets/worker-placeholder.png"
                        alt="Construction Worker"
                        className="relative z-10 h-[90%] object-contain mr-10 grayscale contrast-125 mix-blend-multiply"
                        onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default ServiceHero;
