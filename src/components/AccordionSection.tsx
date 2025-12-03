import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionSection = () => {
  const items = [

    {
      title: "SAVE TIME & MONEY",
      content:
        "Money and time are the two most valuable resources for any contractor. Outsourcing your estimating to Paradise Estimating helps you save both money and time. Instead of hiring full-time staff, you should only pay per project and save 70% cost.",
    },
    {
      title: "Reliable 24/7 Customer Support",
      content:
        "At Paradise Estimation, your satisfaction comes first. Our friendly support team is available 24/7 to answer your questions and solve issues. We are here to guide you through every step of the construction cost estimating process.  We are always here to help you to grow your business.",
    },
    {
      title: "Fast Turnaround",
      content:
        "We understand bid deadline issues and construction bid estimating services. That is why we deliver quick estimates within 24–48 hours and maintain your scope. We are suitable partners if you are handling a single project or leading multiple projects.",
    },
    {
      title: "Confidential & Secure Partnership",
      content:
        "Your project data remains safe in our hands. We maintain strict agreements (NDAs) to safe your data. We shares file using safe places.That keep every estimate private, professional, and safe.",
    },
    {
      title: "Estimators Experience",
      content:
        "With large experience, our expert estimators understand every trade and its management. From concrete and drywall to electrical, MEP, and civil works, we have expertise. You will get real report that gives real cost accuracy and smarter bidding strategies.",
    },
    {
      title: "Best Negotiating Tools",
      content:
        "Our takeoff and estimate reports give you the facts that are important for youe estimation.  You can negotiate properly with clear, data-backed insights, suppliers and subcontractors. You can secure stronger margins with clear quantities, labor breakdowns, and cost insights.",
    },
    {
      title: "Digital Takeoff Technology",
      content:
        "We use advanced software tools, Bluebeam, Planswift, and CostX for fast digital takeoffs. It  gives fast turnaround times. Its error ratio is very  low. It provides a proper workflows. So you can focus on winning bids, not manual calculations.",
    },
    {
      title: "Construction estimating and takeoff for Confident Bidding",
      content:
        "Our team delivers clear quantity takeoffs that ensure you bid competitively and profitably. We take every measurement twice for accuracy. It gives our customers full confidence when they price materials and labor.",
    },

  ];

  return (
    <section className="py-0 lg:py-0 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">

          {/* Left Column */}
          <div className="flex flex-col items-center text-center lg:items-center">
            {/* Top Image - Why Choose */}
            <div className="mb-8 w-full max-w-md">
              <img
                src="/assets/choose.webp"
                alt="Why Choose Paradise Estimating"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            {/* Text */}


            {/* Bottom Image - Building Sketch */}
            <div className="w-full max-w-md mt-auto">
              <img
                src="/assets/building.webp"
                alt="Building Sketch"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="w-full">
            <Accordion type="single" collapsible defaultValue="item-0" className="space-y-4">
              {items.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-[#82E658] rounded-md overflow-hidden bg-white"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-secondary/10 transition-colors data-[state=open]:bg-transparent">
                    <span className="text-base font-bold text-black uppercase text-left">
                      {item.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-0 text-muted-foreground leading-relaxed">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
      <div className="h-[0.5px] w-full bg-black opacity-25 mt-10" />
    </section>
  );
};

export default AccordionSection;
