import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Play } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: "award",
      value: "20+",
      label: "Years Experience",
    },
    {
      icon: "trending-up",
      value: "99%",
      label: "Success Client Satisfaction",
    },
    {
      icon: "clock",
      value: "9-24 Hours",
      label: "Rapid Delivery",
      videoUrl: "https://www.youtube.com/embed/95Hpu9yh0Mk",
    },
    {
      icon: "check-circle",
      value: "Quality",
      label: "100% Guaranteed",
      videoUrl: "https://www.youtube.com/embed/95Hpu9yh0Mk",
    },
    {
      icon: "settings",
      value: "Advanced Tech",
      label: "Latest Software",
    },
    {
      icon: "shield",
      value: "Certified",
      label: "Expert Team",
    },
  ];

  return (
    <section className="py-8 lg:py-10 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <h2 className="text-1xl lg:text-2xl font-bold leading-relaxed">
            Get precise results with <span className="text-[#7ED957]">98% </span>accuracy in only <span className="text-[#7ED957]">9–24 hours</span>. Paradise Estimating is your trusted <span className="text-[#7ED957]">construction estimating</span> services partner.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {stats.map((stat, index) => {
            const CardContent = () => (
              <div
                className={`relative flex flex-col items-center text-center 
             p-4 bg-[#555555] rounded-xl shadow-lg 
             hover:scale-105 transition-transform duration-300
            aspect-[6/6] justify-center group overflow-hidden h-full w-full`}
              >
                {/* Background Video for specific stats */}
                {stat.videoUrl && (
                  <div className="absolute inset-0 w-full h-full z-0 opacity-40 group-hover:opacity-60 transition-opacity">
                    <iframe
                      src={`${stat.videoUrl}?autoplay=1&mute=1&loop=1&playlist=95Hpu9yh0Mk&controls=0&showinfo=0&modestbranding=1&disablekb=1&fs=0&rel=0`}
                      className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                      allow="autoplay; encrypted-media"
                      title="Background Video"
                    />
                    {/* Play Icon Overlay on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20 bg-black/30">
                      <Play className="w-12 h-12 text-white fill-white" />
                    </div>
                  </div>
                )}

                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-12 h-12 mb-4 text-[#7ED957]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-full h-full"
                    >
                      {stat.icon === "award" && <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />}
                      {stat.icon === "award" && <circle cx="12" cy="8" r="6" />}

                      {stat.icon === "trending-up" && <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />}
                      {stat.icon === "trending-up" && <polyline points="17 6 23 6 23 12" />}

                      {stat.icon === "clock" && <circle cx="12" cy="12" r="10" />}
                      {stat.icon === "clock" && <polyline points="12 6 12 12 16 14" />}

                      {stat.icon === "check-circle" && <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />}
                      {stat.icon === "check-circle" && <polyline points="22 4 12 14.01 9 11.01" />}

                      {stat.icon === "settings" && <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />}
                      {stat.icon === "settings" && <circle cx="12" cy="12" r="3" />}

                      {stat.icon === "shield" && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />}
                    </svg>
                  </div>
                  <div className="text-xl font-bold text-white mb-1 leading-tight">
                    {stat.value}
                  </div>
                  <div className="text-xs text-white/80 font-medium uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            );

            if (stat.videoUrl) {
              return (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <div className="cursor-pointer h-full">
                      <CardContent />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[800px] p-0 bg-black border-none overflow-hidden">
                    <div className="aspect-video w-full">
                      <iframe
                        src={`${stat.videoUrl}?autoplay=1&rel=0`}
                        className="w-full h-full"
                        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={stat.label}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              );
            }

            return <CardContent key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
