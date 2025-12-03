import { LucideIcon } from "lucide-react";

export interface ServiceItem {
    title: string;

}

export interface CardItem {
    title: string;
    image: string;
    desc: string;
    points: string[];
}

export interface ToolItem {
    name: string;
    image?: string;
    iconName?: string;
}

export interface FAQItem {
    question: string;
    answer: string;
}

export interface ProcessStep {
    title: string;
    description?: string;
}

export interface StatePageData {
    stateName: string;
    hero: {
        title: string;
        description: string[]; // Array of paragraphs
        image: string;
    };
    uniqueApproach: {
        heading: string;
        description: string[];
        points: string[];
        turnaroundTime: string;
    };
    reliableServices: {
        heading: string;
        description: string[];
        services: ServiceItem[];
    };
    estimatesAndTakeoff: {
        heading: string;
        description: string;
        cards: CardItem[];
    };
    detailedServices: {
        heading: string;
        description: string[];
        trades: string[];
    };
    ourClients: {
        heading: string;
        description: string[];
        clients: string[];
    };
    process: {
        heading: string;
        description: string;
        steps: (string | ProcessStep)[];
    };
    tools: {
        heading: string;
        description: string[];
        bidWinRatio: string;
        toolsList: ToolItem[];
    };
    expertLocalService: {
        heading: string;
        description: string[];
        image: string;
    };
    faq: {

        items: FAQItem[];
    };
    cta: {
        heading: string;
    };
    portfolio: {
        heading: string;
        description: string[];
        items: {
            heading: string;
            answer: string;
        }[];
    };
    areaNearMe: {
        heading: string;
        description: string[];
    };
}

export const stateData: Record<string, StatePageData> = {
    "california": {
        stateName: "California",
        hero: {
            title: "California Construction Estimation Service",
            description: [
                "Are you looking for a reliable construction estimating service in California? Or in need of the best local construction estimators in California? You are at the right place. Choosing right is very crucial to getting better results. We are a one-stop company for various estimation services in California. Our company is providing the best local construction estimating service in California at very competitive rates.",
                "With 20 years of experience, we deliver appropriate services to our clients. Our construction estimators ensure successful bid-winning results. The Paradise Estimating team assists clients with precise estimation to win bids for every kind of project. Customer satisfaction is our topmost priority; our expert team always satisfies its clients with accurate estimations."
            ],
            image: "/assets/services.png"
        },
        uniqueApproach: {
            heading: "Unique Approach of California Construction Estimating Service",
            description: [
                "Choosing right is crucial to getting rid of unwanted problems. A reliable, precise, and accurate construction estimation is as important as any successful construction project. Inaccurate estimations are dangerous to the budget and force scope and reduce quality. We are one of the top-rated construction estimation companies in California.",
                "With 20 years of experience and a professional team, we are the best construction estimating company in California. With us, you get an accurate and reliable construction estimate service at very reasonable rates. We are a well-known estimating company that provides accurate, thorough, and effective estimations and consultancies."
            ],
            points: [
                "Accuracy and trust",
                "Pocket-friendly service",
                "Licensed expert team",
                "Meet the deadlines",
                "Customized solutions",
                "Availability 24/7"
            ],
            turnaroundTime: "9-24 Hours"
        },
        reliableServices: {
            heading: "Reliable California Construction Estimating & Takeoff Services",
            description: [
                "If you want to get tight profit margins, you need experienced & professional companies to maintain your reputation and handle your profit margins. Paradise Estimating's mission is to level up the construction industry by providing accurate and comprehensive estimation and consultations to empower our clients with reliable data.",
                "Our estimation has a deep understanding of the construction industry. We provide customized solutions that meet the needs of your project and maximize profitability and accuracy. We are delivering exceptional service, maintaining availability, and are committed to excellence. We are an exceptional construction cost estimation and material takeoff company in California. The services we provide are:"
            ],
            services: [
                { title: "Cost Estimation service" },
                { title: "Material Takeoff service" },
                { title: "Preliminary Estimation" },
                { title: "Commercial Estimation" },
                { title: "Residential Estimation" },
                { title: "Industrial Estimation" },
                { title: "Bid estimates" },
                { title: "Project leading" },
                { title: "Sub-contractors marketing" },
                { title: "Outsourcing Estimation" },
                { title: "Consultation" },
                { title: "Proper guidelines to smartly fill the bid" },

            ]
        },
        estimatesAndTakeoff: {
            heading: "Residential, Commercial, Industrial Estimating & Takeoff services in California",
            description: "Paradise Estimating is your trusted partner, providing the best services in California; our commercial estimating service and takeoff service are backed by proven results. We have a history of delivering accurate, reliable estimates and have earned the confidence and trust of our customers on every kind of project.",
            cards: [
                {
                    title: "Residential Estimating",
                    image: "/assets/building.webp",
                    desc: "If you are building the house and in need of precise residential estimates, contact us for your residential estimation. Our construction cost estimation company is one of the top-rated companies in California.",
                    points: ["Home renovation", "Kitchen remodels", "Bathroom renovations", "Roofing and siding", "Outdoor living spaces", "Multi-family projects", "Single-family projects", "Custom projects"]

                },
                {
                    title: "Commercial Estimating",
                    image: "/assets/choose.webp",
                    desc: "Our estimation team delivered accurate estimates and material takeoff service for various projects. With accuracy and competitive pricing, our aim is to deliver reliable and accurate estimations.",
                    points: ["Libraries", "Shopping Malls", "Hostels", "Retail shops", "Restaurants", "Warehouses", "Hospital projects", "Schools", "Universities"]


                },
                {
                    title: "Industrial Estimating",
                    image: "/assets/governmental.webp",
                    desc: "We assure you flawless progress with accuracy at a very competitive price. With our help, you get ultimate success in industrial building projects. We are a local company with expert team members to solve your problems.",
                    points: ["Warehouses and factories", "Oil and gas facilities", "Utilities", "Power plants", "Roads", "Bridges", "Public works", "Industrial builds"]



                },
                {
                    title: "Material Takeoff",
                    image: "/assets/takeoff.webp",
                    desc: "Paradise Estimating team provides up-to-date cost estimates and material takeoff service in California. We cover all the trades in the material takeoff process. Services we provide are:",
                    points: ["Electric", "Masonry", "MEP", "Plumbing", "Mechanical", "Concrete", "Drywall", "Lumber takeoff", "Flooring",]



                }
            ]
        },
        detailedServices: {
            heading: "Our Trade-Specific Services in California",
            description: [
                "Paradise Estimating ensures your project starts with clarity and with 98-99% accuracy at a very competitive price. We especially focus on local market awareness, so you always understand where numbers come from and why they are important. We’re here to support your project anywhere in California. Our expertise covers a wide range of trades in California:",
                "The fluctuation in the prices of construction materials highlighted the importance of an accurate construction estimation. With 20 years of experience, our estimation can take you out of economic uncertainties and unwanted budget problems. With the passage of time, the complexity of design required a properly skilled cost estimator to handle the projects with precision."
            ],
            trades: [
                "Electrical", "Masonry", "MEP", "Plumbing", "Mechanical", "Concrete", "Framing", "Drywall", "Painting", "Flooring", "Lumber", "Sitework", "Earthwork", "HVAC", "Metals", "Doors & Windows", "Finishes", "Painting", "Drywall", "Flooring", "Roofing", "Wood/Plastic", "Lumber", "Waterproofing", "Fireproofing", "Landscaping"
            ]
        },
        ourClients: {
            heading: "Our Clients in California",
            description: [
                "Are you worrying about the cost of your project? Our estimating company is the best local service provider in California. With the help of our professional estimators, you get a precise and comprehensive cost estimation for your project. General contractors' and subcontractors' daily routine with extraordinary workloads means they don’t have time for estimations and takeoffs.",
                "Our company assists:"
            ],
            clients: [
                "General contractors", "Subcontractors", "Developers", "Homeowners", "Builders", "Architects", "Engineers", "Retailers", "Vendors"
            ]
        },
        process: {
            heading: "How Our California Construction Estimation Process Helps You",
            description: "With 20 years of experience, we deliver appropriate services to our clients. Our construction estimators ensure successful bid-winning results. You can trust our company services because we start with deep project analysis, client budget, timelines, and understanding of the project. The Paradise Estimating team assists clients with precise estimation to win bids for every kind of project. Customer satisfaction is our topmost priority; our expert team always satisfies its clients with accurate estimations.",
            steps: [
                "Review the plans carefully",
                "Measure quantities and materials",
                "Calculate material and labor costs",
                "Prepare estimate",
                "Double-check everything for accuracy",
                "Revision"
            ]
        },
        tools: {
            heading: "Software and Tools Used for Construction Estimation",
            description: [
                "Customer satisfaction is our topmost priority, and to ensure that, our reliable estimators help you meet deadlines. We offer our accurate estimations and takeoff service at a very competitive cost. We provide the best construction estimation services at very affordable rates, and our experts ensure bid-winning results.",
                "Our bid win ratio is more than 98%. We handle all CSI trades of every size, type, and complexity. Our professionals are well-trained and equipped to utilise multiple software applications."
            ],
            bidWinRatio: "98%",
            toolsList: [
                { name: "Bluebeam", image: "/assets/logos/blue.jpg" },
                { name: "Planswift", image: "/assets/logos/plan.jpg" },
                { name: "RS Means", image: "/assets/logos/rs.jpg" },
                { name: "Cost-X", image: "/assets/logos/cost.jpg" },
                { name: "FastWRAP", image: "/assets/logos/fast.jpg" },
                { name: "Cost-work", image: "/assets/logos/Coststimator_logo.jpg" },
                { name: "Quest Estimating", image: "/assets/logos/quest.jpg" }
            ]
        },
        expertLocalService: {
            heading: "Expert Local Estimating Service, Unbeatable price in California",
            description: [
                "If you want to get tight profit margins, you need experienced & professional companies to maintain your reputation and handle your profit margins. Paradise Estimating’s mission is to level up the construction industry by providing accurate and comprehensive estimation and consultations to empower our clients with reliable data and affordable costs. Contractors & subcontractors often cause failure in projects due to their lack of knowledge about fluctuating prices and expertise in cost estimation and time. We are a local construction estimating company in California with professional estimators. Optimise your budget and timelines to get rid of unwanted problems.",
                "Our estimators have a deep understanding of the construction industry; we provide customised solutions that meet the needs of your project and maximise profitability and accuracy. We are delivering exceptional service, maintaining availability, and are committed to excellence. We are an exceptional construction cost estimation and material takeoff company in California. Paradise Estimating assures you flawless progress with 98-99% accuracy at a very competitive price. With the help of our estimators, you get ultimate success in industrial building projects."
            ],
            image: "/assets/aboutus.webp"
        },
        faq: {

            items: [
                {
                    question: "Do construction costs vary across different cities in California?",
                    answer: "Yes, absolutely. Material cost, labor availability, labor wages, and even climate conditions can vary from city to city."
                },
                {
                    question: "Can you still provide an accurate estimate if my plans aren’t finalized yet?",
                    answer: "Yes. We can develop preliminary estimates based on your design. As your drawings evolve, our estimate will be refined to match new details."
                },
                {
                    question: "How long does it take to receive a construction estimate in California?",
                    answer: "Our turnaround time for an estimation is about 9-24 hours, but it totally depends on project size and details. If you have any deadlines, just let us know; we always aim to adjust reasonable timelines."
                },
                {
                    question: "Can you work with both contractors and property owners?",
                    answer: "Definitely. We are here for you; we assist general contractors, subcontractors, developers, and homeowners."
                },
                {
                    question: "What kind of software do you use for construction cost estimation?",
                    answer: "We use different software for takeoff services, such as Bluebeam, Planswift, RS Means, Cost-X, Cost-work, Quest Estimating, etc."
                },
                {
                    question: "What is your accuracy rate for the construction estimation service?",
                    answer: "We are the best local construction cost estimation service provider in California; our estimates are designed with precision, and our cost estimates are accurate and based on the project’s zip code. That's why our accuracy rate is more than 98-99%."
                },
                {
                    question: "What kind of software and tools did we use for our services?",
                    answer: "Our team is equipped with digital software like Bluebeam, Planswift, RS Means, Cost-X, FastWRAP, Cost-work, and Quest Estimating for accurate estimations."
                }
            ]
        },
        cta: {
            heading: "Get accurate, fast, and reliable construction estimates in California. Save time, avoid surprises, and confidently request your free quote today!"
        },
        portfolio: {
            heading: "Our Portfolio",
            description: [
                "We are delivering exceptional service, maintaining availability, and are committed to excellence. Our company has a thorough understanding of the construction industry; we provide customised solutions that meet the needs of your project and maximise profitability and accuracy.",
                "Services we offer in California include plumbing estimating, MEP estimating, piping estimating, lumber takeoff service, drywall estimating services, residential estimating services, mechanical estimating, roofing estimating services, HVAC estimating services, framing estimating, commercial estimating, and electrical estimating services."
            ],
            items: [
                {
                    heading: "Lumber Takeoff Service in Los Angeles, California",
                    answer: "Our estimators precisely estimate lumber takeoff for contractors, subcontractors, home builders, homeowners, and commercial builders. Our lumber takeoff service provides a comprehensive list of materials for projects, as well as their quantities required for the project."
                },
                {
                    heading: "Our MEP estimation service in San Francisco, California",
                    answer: "Our professional team provides MEP (Mechanical, Electrical, Plumbing) estimation services in San Francisco, California. Our MEP services include HVAC (heating, ventilation, and air conditioning) estimation, drainage, water supply, power distribution, and lighting. Our accurate services make your place comfortable, livable, and functional."
                },
                {
                    heading: "Estimation Service in San Jose, California",
                    answer: "We are professional concrete estimators with more than 98-99% accuracy in San Jose, California. We provide thorough estimates and precise takeoff service. Our concrete estimation service is specifically designed so that contractors and subcontractors get accurate estimations about cost and quantity related to concrete construction."
                }
            ]
        },
        areaNearMe: {
            heading: "California Construction Estimating Service Near Me",
            description: [
                "We stand out from competitors due to our precise, accurate, and reliable estimation and takeoff services. Our accurate and thorough analysis and specific attention to details ensure the proper calculations and reduce the risk of unwanted delays and expenses. Our expert construction estimators possess leading qualifications, ensuring that our estimators hold the highest industry standards.",
                "We are a California-based construction estimation company providing accurate and transparent services for residential, commercial, and industrial projects in California. Whether you’re building a modern house, planning house improvements, expanding commercial property, refreshing an office space, building new retail, or preparing a new project. We offer construction estimating & takeoff services in Los Angeles, CA; San Diego, California; San Jose, CA; San Francisco; Long Beach, CA; Sacramento; Fresno; Oakland, California; Santa Ana, CA; Anaheim; Riverside; and Bakersfield in California."
            ]
        }
    },
    "new-york": {
        stateName: "New York",
        hero: {
            title: "New York Construction Estimating Service",
            description: [
                "Are you building a house in New York? You need a good estimating service. A new home costs about $350,000 to $395,000. The price is $200 to $300 per square foot for homes and commercial buildings. Paradise Estimating is a top local estimator in New York. Paradise Estimating is the best local construction estimator in New York. We are your trusted partners in New York. Costs vary based on location.",
                "New York needs a specialized estimating service. Because construction in New York is not very expensive, it's different. Our team is dealing with all the challenges you face while constructing a building. It can be site handling, labour issues, or productivity problems. We also deal with material delivery delays and specialised inspections. Our expert construction estimators in New York provide accurate estimates to clients. We deal with all the challenges."
            ],
            image: "/assets/services.png"
        },
        uniqueApproach: {
            heading: "Why Choose Our New York Construction Estimating Service?",
            description: [
                "Paradise Estimating is the most trusted construction estimating company in New York. We are providing the best consultancy and material takeoff services. Our reliable estimators and comprehensive services provide accurate take-offs and local pricing estimates. With 20 years of experience, we have built a solid reputation. We are delivering accurate estimates about residential, commercial, industrial, and material takeoff services. We are different from others:",
                "Our estimates are accurate and reliable. This helps us stand out from competitors. Our team checks every detail carefully. We look for problems early to avoid delays and extra costs. Our licensed estimators meet top industry standards. Our team at Paradise Estimating pays specialised attention to trouble-making factors. It reduces the risk of unwanted delays and expenses. Our licensed estimators have leading qualifications. We ensure that our estimators hold the highest industry standards."
            ],
            points: [
                "Trustworthy and accurate",
                "Competitive pricing",
                "Licensed professional team",
                "Meet the deadlines",
                "24/7 Customer Support",
                "Customized solutions"
            ],
            turnaroundTime: "Fast turnaround time is 9-12 hours"
        },
        reliableServices: {
            heading: "Top New York Construction Estimating & Takeoff Services We Offer",
            description: [
                "Paradise Estimating provides consultation, cost estimation, and material takeoff services in New York. The prices of construction materials fluctuate every time. That shows the importance of an expert and local construction estimation company. We have been working in New York for 20 years. Our estimation can take you out of economic uncertainties and unwanted budget problems. With each passing year, the complexity of design required a skilled cost estimator. We handle your projects with precision. The services we provide are",
                ""
            ],
            services: [
                { title: "Cost Estimation" },
                { title: "Quantity takeoff service" },
                { title: "Commercial Estimation" },
                { title: "Residential Estimation" },
                { title: "Industrial Estimation" },
                { title: "Material Takeoff service" },
                { title: "Preliminary Estimation" },
                { title: "Outsourcing Estimation" },
                { title: "Lead Generation" },
                { title: "Marketing for subcontractors" },
                { title: "Consultation" },
                { title: "Proper guidelines to smartly fill the bid" },
            ]
        },
        estimatesAndTakeoff: {
            heading: "Our Residential, Commercial & Industrial Estimating services in New York",
            description: "Paradise Estimating is your reliable partner, providing the best services in New York. We offer the best commercial, residential, and industrial estimating service in New York. Paradise Estimating has a history of delivering accurate and reliable estimates. We have earned the confidence and trust of our customers in every kind of project.",
            cards: [
                {
                    title: "Residential Estimating",
                    image: "/assets/building.webp",
                    desc: "Whether you’re building your dream home or want to renovate your home, we help homeowners and builders achieve the clarity for their projects they need. We provide services for:",

                    points: ["Single-family homes", "Custom builds", "Multi-family apartments", "Townhouses", "Home renovation", "Apartment", "Roofing & siding", "Basement finishes"]


                },
                {
                    title: "Commercial Estimating",
                    image: "/assets/choose.webp",
                    desc: "New York land is very diverse. That's why reliable cost estimation is essential for staying on budget. We offer estimation services for:",

                    points: ["Retail stores", "shopping centers", "Restaurants ", "Office buildings", "Medical clinics", "Hotels", "Schools", "Universities", "Libraries"]


                },
                {
                    title: "Industrial Estimating",
                    image: "/assets/governmental.webp",
                    desc: "We provide precise industrial construction estimating services that help clients plan projects with accurate budgets, timelines, and resource requirements. We provide services for:",
                    points: ["Warehouses", "Factories", "Oil and gas facilities", "Utilities and power plants", "Roads & bridges", "Public works", "Public works", "Water plants"]


                },
                {
                    title: "Material Takeoff",
                    image: "/assets/takeoff.webp",
                    desc: "Accurate takeoffs services save time, reduce waste, and prevent expensive reorders. We create detailed quantity takeoffs, including:",
                    points: ["Concrete", "Masonry", "Sitework", "Earthwork", "Mechanical", "Electrical", "Plumbing", "HVAC", "Metals",]


                }
            ]
        },
        detailedServices: {
            heading: "Our Trade for New York Construction Estimating Service",
            description: [
                "Paradise Estimating facilitates contractors and subcontractors with their trade-specific services. We always deliver services with accuracy. Contractors & subcontractors are busy doing their jobs. So they don't pay much attention to estimation. And losses of thousands of dollars. Their lack of knowledge about site handling and labor issues causes productivity problems. Many factors cause failure. Problems can occur when materials arrive late or when inspections require specialists. Changing prices and inaccurate cost estimates also cause issues. We provide the best construction estimation services. The services we offer are at very affordable rates.",
                ""
            ],
            trades: [
                "Concrete", "Masonry", "Sitework", "Earthwork", "Mechanical", "Electrical", "Plumbing", "HVAC", "Metals", "Doors & Windows", "Finishes", "Painting", "Drywall", "Flooring", "Roofing", "Wood/Plastic", "Lumber", "Waterproofing", "Fireproofing", "Landscaping", "Thermal & moisture protection",
            ]




        },
        ourClients: {
            heading: "Clients we deal with in New York",
            description: [
                "We offer our accurate estimations and takeoff service at a very competitive cost. Our estimation service is the ideal option if you are starting a new project in New York. Our skilled team members have 20 years of experience and are able to give you an accurate estimate. We also offer thorough building estimates and quantity takeoffs. Our experts ensure 99% bid-winning results. Our company assists ",
                ""
            ],
            clients: [
                "General contractors", "Subcontractors", "Developers", "Homeowners", "Builders", "Architects", "Engineers", "Retailers", "Vendors"
            ]


        },
        process: {
            heading: "What Process Do We Follow to Help Our Clients in New York?",
            description: "We give accurate construction estimates in New York that help clients win bids. You can trust us because we study the project, budget, and timeline before we begin.  We start with customer satisfaction as our topmost priority. Our expert team always satisfies its clients with accurate estimations. With years of experience, we deliver appropriate services to our clients. Our construction estimators ensure successful bid-winning results. Our process works as follows:",
            steps: [
                "Information gathering",
                "Review the scope of the project.",
                "Takeoff Service for material and quantity",
                "Pricing and adjustment",
                "Quality review and delivery",
                "Revision"
            ]
        },
        tools: {
            heading: "Software We Use for New York Construction Estimating Service",
            description: [
                "Our industrial estimators use advanced tools and software to meet your needs. We are giving you accurate cost estimation and take-off service in New York. Paradise Estimating in New York assists clients with accurate estimation. Our estimator helps to win bids for every kind of project. Customer satisfaction is our priority. Our expert construction estimators in NYC always satisfy their clients with accurate estimations. We handle all CSI trades of every size, type, and complexity.",
                "Our professionals are well-trained and equipped to utilise multiple software applications like"
            ],
            bidWinRatio: "98%",
            toolsList: [
                { name: "Bluebeam", image: "/assets/logos/blue.jpg" },
                { name: "Planswift", image: "/assets/logos/plan.jpg" },
                { name: "RS Means", image: "/assets/logos/rs.jpg" },
                { name: "Cost-X", image: "/assets/logos/cost.jpg" },
                { name: "FastWRAP", image: "/assets/logos/fast.jpg" },
                { name: "Cost-work", image: "/assets/logos/Coststimator_logo.jpg" },
                { name: "Quest Estimating", image: "/assets/logos/quest.jpg" }
            ]
        },
        expertLocalService: {
            heading: "On-Budget, On-Time, Competitive service in New York",
            description: [
                "We understand the importance of precision and accuracy in estimating. We are a local company with expert team members to solve your problems and become partners for the long term. Paradise Estimating assures you flawless progress with accuracy at a very competitive price. With the help of our estimators, you achieve success in industrial building projects.",
                "With every passing year, industrial advancement creates a space for more developments. But contractors and subcontractors can’t go parallel. Paradise Estimating is the best local estimation service firm in New York. We are delivering construction cost estimation services in New York. Our professional estimators give you precise and comprehensive cost estimation for your project."
            ],
            image: "/assets/aboutus.webp"
        },
        faq: {
            items: [
                {
                    question: "How long does an estimate take?",
                    answer: "Typical turnaround takes 9-24 hours, but it all depends on the scope of your project. Larger multi-trade projects may need more time."
                },
                {
                    question: "Can I request revisions if the scope changes?",
                    answer: "Yes. We provide revision updates with a little cost adjustment."
                },
                {
                    question: "Do you work with subcontractors as well as general contractors?",
                    answer: "Yes, we work with contractors, subcontractors, developers, home builders, and homeowners. We prepare trade-specific takeoffs like concrete, drywall, electrical, HVAC, flooring, and framing."
                },
                {
                    question: "Do you handle estimates for both residential and commercial projects?",
                    answer: "We work on all kinds of projects in New York. From homes, restaurants, and office buildings to large developments."
                },
                {
                    question: "What do I need to give you to get started?",
                    answer: "We need your project plans. It could be blueprints or handmade drawings. You can send your files by email or through our website."
                },
                {
                    question: "What kind of software and tools did we use for our services?",
                    answer: "We use tools like Bluebeam, PlanSwift, RSMeans, and Cost-X to provide accurate estimates."
                },
                {
                    question: "How accurate is our estimation service?",
                    answer: "Paradise Estimating provides cost estimation and takeoff services with 98-99% accuracy."
                },
                {
                    question: "How many types of estimating services do we offer?",
                    answer: "Our estimators have been providing estimating services in New York for 20 years. Paradising Estimating offers residential, commercial, and industrial estimation and material takeoff services. We offer services to general contractors, subcontractors, and developers. We also offer services to homeowners, builders, architects, engineers, retailers, and vendors."
                }
            ]
        },
        cta: {
            heading: "Upload Your Plans and Receive Detailed Estimates in 24 Hours. Use our data driven estimates to quote. Get the best estimating service in New York."
        },
        portfolio: {
            heading: "Our Portfolio",
            description: [
                "We are delivering exceptional service, maintaining availability, and are committed to excellence. Our company has a thorough understanding of the construction industry.  We provide customized solutions that meet the needs of your project. It maximizes profitability and accuracy.",
                "Services we offer in New York include plumbing estimating, MEP estimating, and piping. We also offer lumber takeoff service, drywall estimating services, and residential estimating services. Our specialized services also include mechanical estimating, roofing estimating services, and HVAC estimating. Framing, commercial, and electrical estimating services are also handled by our estimators."
            ],
            items: [
                {
                    heading: "Masonry Estimation Service in Rochester, New York",
                    answer: "Our estimators know the value of precise estimations for any kind of project. Whether it's an interior or exterior finish in construction projects. Masonry estimations include the cost of material (stone, bricks) and labor costs. It also includes overhead (equipment, permit, waste, and profit)."
                },
                {
                    heading: "Metal Estimating Service in Buffalo, New York",
                    answer: "Our construction estimators in Buffalo are providing the best metal estimating service. Metal estimating services include takeoff plans. We also quantify the material (steel, rebar, and architectural metal), railing, joists, and casting. We provide service by reducing waste and delivering an accurate amount of material. Contact us for a metal estimating service with more than 98-99% accuracy."
                },
                {
                    heading: "Thermal & Moisture Estimating Service in Albany, New York",
                    answer: "Our estimators offer accurate construction cost estimation services for waterproofing, roofing, and insulation. We provide many services, such as material takeoff, labour cost, and bid proposals. Our team uses digital software for estimation services; that’s why our accuracy rate is more than 98-99%. Choose us for your project. Get a precise cost estimation for thermal & moisture service in Albany, New York"
                }
            ]
        },
        areaNearMe: {
            heading: "New York Construction Estimating Service Near Me",
            description: [
                "We are a New York-based construction estimation company. We are providing accurate and transparent services in residential, commercial, and industrial projects. Our experience spans across New York City, Buffalo, Rochester, Syracuse, Albany, and Columbia. We also serve Staten Island, Queens, Westchester, and Manhattan. We also deal in Brooklyn, Rockland, Dutchess, Orleans, and the Bronx.",
                "There, we’ve supported contractors, developers, architects, and property owners. We help them prepare reliable bids and informed project budgets. From small renovations to large-scale developments, we help our clients build smarter. It reduces risk, and they move forward with reliable numbers they can trust."
            ]
        }
    },
    "texas": {
        stateName: "Texas",
        hero: {
            title: "Texas Construction Estimating Service",
            description: [
                "When you are planning a construction project in Texas, one of the biggest challenges is figuring out the real cost before breaking ground. At Paradise Estimating, we help builders, contractors, subcontractors, and homeowners in Texas to turn their blueprints into a clear and accurate reality.",
                "No guessing, no surprises, just honest, detailed construction estimates you can count on before the first nail is ever hammered. Whether you are building a new home, renovating a commercial space, or developing a large industrial project, accurate construction estimating can make or break your budget. Paradise Estimating is the right choice for accurate and reliable material takeoff & cost estimating service."
            ],
            image: "/assets/services.png"
        },
        uniqueApproach: {
            heading: "Why Choose Our Texas Construction Estimating Services",
            description: [
                "We have been in the Texas construction industry for 20 years and have established a reliable history of providing accurate quantity takeoffs and cost estimates. At Paradise Estimating, we offer reliable and detailed construction estimation services across Texas designed to help contractors, builders, homeowners, and developers plan smarter, bid confidently, and avoid costly surprises. We are the best construction estimation company with 98-99% accuracy and reliability in Texas.",
                "Our expert construction estimators help in planning and understanding the real cost of construction projects. Our team offers different types of estimating services to fit your needs and budget. We offer material listing, bid estimating, budget estimating, preliminary estimation, cost management, lead generation, subcontractor marketing, and consultation on bidding. Benefits you get with us:"
            ],
            points: [
                "98-99% accuracy with Trust",
                "Pocket-Friendly pricing",
                "Licensed Team",
                "Meet the deadlines",
                "Deliver customised solutions.",
                "24/7 availability"
            ],
            turnaroundTime: "Turnaround time is 9-24 hours"
        },
        reliableServices: {
            heading: "Texas Construction Estimating & Takeoff Services We Offer",
            description: [
                "Whether it is residential, commercial, or industrial construction estimation, accurate estimation is an essential and compulsory step for all kinds of projects. Paradise Estimation has an expert and skilled team with years of experience in consultation & construction cost estimation service, enhancing the efficiency and accuracy of your projects. Paradise Estimation leads a team of professional estimators, analyses deeply, and delivers proper solutions specific to the project. Our team is equipped with updated software tools. We’ve worked on almost every type of construction project in North Carolina.",
                ""
            ],
            services: [
                { title: "Commercial Estimation" },
                { title: "Residential Estimation" },
                { title: "Industrial Estimation" },
                { title: "Cost Estimation" },
                { title: "Material Takeoff service" },
                { title: "Quantity takeoff service" },
                { title: "Preliminary Estimation Service" },
                { title: "Lead Generation" },
                { title: "Marketing for subcontractor" },
                { title: "Project Lead" },
                { title: "Consultation" },
                { title: "Bid Estimate" }
            ]
        },
        estimatesAndTakeoff: {
            heading: "Commercial Estimation service in texas",
            description: "Paradise Estimating has vast experience in commercial construction cost estimation services and provides tailored solutions",
            cards: [
                {
                    title: "Residential Estimation service in texas",
                    image: "/assets/building.webp",
                    desc: "We provide reliable residential estimates for every project to prevent unexpected loss. Customer satisfaction is our priority. On the residential level, we deal with",
                    points: ["Single-family homes", "Custom builds", "Multi-family apartments", "Townhouses", "Old home Renovations", "Outdoor space", "Bathroom Remodelling"]
                },
                {
                    title: "Commercial Estimation service in texas",
                    image: "/assets/choose.webp",
                    desc: "Paradise Estimating has vast experience in commercial construction cost estimation services and provides tailored solutions to",
                    points: ["Retail stores", "Shopping centers", "Restaurants", "Office buildings", "Medical clinics", "Hotels", "Schools & Universities", "Libraries"]
                },
                {
                    title: "Industrial Estimation service in texas",
                    image: "/assets/governmental.webp",
                    desc: "Our estimation company is one of the best companies in Texas because of its professional staff, tailored solutions, and accurate construction cost estimation service.",
                    points: ["Warehouses and factories", "Oil and gas facilities", "Utilities and power plants", "Roads & bridges", "Public works", "Water plants", "Industrial builds"]
                },
                {
                    title: "Material Takeoff services",
                    image: "/assets/takeoff.webp",
                    desc: "Our construction estimators deliver takeoffs that save time, reduce waste, and prevent expensive reorders. We create detailed quantity takeoffs:",
                    points: ["Concrete", "Lumber", "Drywall", "Masonry", "Framing", "Roofing", "Plumbing", "Electrical", "Finishes"]
                }
            ]
        },
        detailedServices: {
            heading: "Trades We Offer for Texas Construction Estimating Service",
            description: [
                "Paradise Estimating has an expert and skilled team with 20 years of experience in consultation & construction cost estimating service. It is enhancing the efficiency and accuracy of your projects. Paradise Estimating leads a team of professional estimators, analyses deeply, and delivers proper solutions specific to the project. Getting an accurate construction estimate is complicated, but with Paradise Estimating, it isn’t. Whether you need an estimate for a small house or a multi-million-dollar development, we’ll deliver the clarity and confidence you need to move forward. Trades we offer in Texas are",
                ""
            ],
            trades: [
                "Concrete", "Masonry", "Sitework", "Earthwork", "Mechanical", "Electrical", "Plumbing", "HVAC", "Metals", "Doors & Windows", "Finishes", "Painting", "Drywall", "Flooring", "Roofing", "Wood/Plastic", "Lumber", "Waterproofing", "Fireproofing", "Landscaping"
            ]







        },
        ourClients: {
            heading: "Clients We Serve in Texas",
            description: [
                "Whether your project is big or small, residential, commercial, or industrial, our estimation team is always there for you in Texas. Paradise Estimating proudly serves a wide range of clients in Texas.",
                ""
            ],
            clients: [
                "Contractors", "Subcontractors", "Home Builders", "Developers", "Homeowners", "Architect", "Engineer", "Vendor", "Retailers"
            ]




        },
        process: {
            heading: "Our Simple and Straightforward Estimating Process in Texas",
            description: "Paradise Estimating aims to save your money and time. We are a reliable, accurate, and trustworthy company with expert construction cost estimators in Texas. With 98-99% accuracy, a detailed analysis, proper calculation, and specialised attention to trouble-making factors reduce the risk of unwanted delays and expenses. Our licensed estimators possess leading qualifications, ensuring that our estimators hold the highest industry standards. The process we follow:",
            steps:


                [
                    {
                        title: "Send Your Plans",
                        description: "Send your project drawings in PDF or even hand-drawn format."
                    },
                    {
                        title: "Review & Discuss",
                        description: "Our estimators understand your project, address any particulars, and provide your scope and estimate for your project."
                    },
                    {
                        title: "Prepare the Estimate",
                        description: "After proper review and discussion, our team prepares estimates according to the local market prices and your project needs."
                    },
                    {
                        title: "Receive the report",
                        description: "You will receive a detailed list of the materials, labour, and all machinery for your bid and budget."
                    },
                    {
                        title: "Availability",
                        description: "Customer satisfaction is our priority, so we provide 24/7 customer support and a quick turnaround time. Our bit hit ratio is more than 98%."
                    },
                    {
                        title: "Revision",
                        description: "If you need revision for your project plan. We will provide it. Whether it is for labour, cost or material. We revise estimates for your project whenever you need."
                    },
                    // Can mix both formats
                ]
        },
        tools: {
            heading: "Software & Tools Our Estimators Utilize in Texas",
            description: [
                "We provide the best construction estimation services at very affordable rates, and our experts ensure bid-winning results. We outrank our competitors due to our precise, accurate, and reliable estimation and takeoff services.",
                "Our professionals are well-trained and equipped to utilize multiple software programs like"
            ],
            bidWinRatio: "98%",
            toolsList: [
                { name: "Bluebeam", image: "/assets/logos/blue.jpg" },
                { name: "Planswift", image: "/assets/logos/plan.jpg" },
                { name: "RS Means", image: "/assets/logos/rs.jpg" },
                { name: "Cost-X", image: "/assets/logos/cost.jpg" },
                { name: "FastWRAP", image: "/assets/logos/fast.jpg" },
                { name: "Cost-work", image: "/assets/logos/Coststimator_logo.jpg" },
                { name: "Quest Estimating", image: "/assets/logos/quest.jpg" }
            ]
        },
        expertLocalService: {
            heading: "Our Economical & Local Texas Construction Estimating Service",
            description: [
                "Are you searching for accurate estimations and takeoff service at a very competitive cost in Texas? Paradise Estimating is the ideal option if you're starting a new project in Texas. Our professional team members have years of experience and are able to give you precise and thorough building estimates and quantity takeoffs.",
                "Paradise Estimating provides cost estimation and consultation services for construction and takeoff services. We facilitate the contractors and subcontractors with our trade-specific services. These trades are mechanical estimating service, plumbing estimating service, MEP estimating service, piping estimating service, electrical estimating, residential estimating, drywall estimation, and commercial estimation services in Texas. We always deliver pocket-friendly services with accuracy."
            ],
            image: "/assets/aboutus.webp"
        },
        faq: {
            items: [
                {
                    question: "What does a construction estimator do?",
                    answer: "Estimators analyse materials, labour, and equipment. Our team takes your blueprints or plans and breaks down every cost so you know exactly what to expect. No guessing, no surprises later on."
                },
                {
                    question: "How long does it take to get an estimate?",
                    answer: "It depends on the size and complexity of your project. Most of our clients receive their estimates within 9-12 hours."
                },
                {
                    question: "Do you handle estimates for both residential and commercial projects?",
                    answer: "We work on all kinds of projects in Texas, from homes, restaurants, and office buildings to large industrial developments."
                },
                {
                    question: "What do I need to give you to get started?",
                    answer: "We need your project plans, which could be blueprints or handmade drawings. You can send your files by email or through our website."
                },
                {
                    question: "How much do your estimating services cost?",
                    answer: "Our pricing depends on the size and complexity of the project, but we always keep our rates fair and pocket-friendly. Once we look over your plans, we’ll give you a clear quote: no hidden fees, no surprises."
                },

            ]
        },
        cta: {
            heading: "Build smarter in Texas with precise, affordable construction estimates. Save time, cut costs, and plan confidently. Get your free quote today!"
        },
        portfolio: {
            heading: "Our Portfolio",
            description: [
                "The Paradise Estimating team analyzes each component of construction, whether it is material, labor, equipment, or cost. Our estimators help the contractors and subcontractors to avoid unwanted problems and make accurate estimations.",
                "We offer a full range of construction estimating and takeoff services for projects throughout Texas. Our portfolio is diverse, and we provide accurate takeoffs and estimates to contractors, subcontractors, developers, and homeowners."
            ],
            items: [
                {
                    heading: "Texas sitework estimating service in Houston",
                    answer: "Our estimators offer accurate sitework estimating service in Houston, Texas. We offer all kinds of services, including labor takeoff, price estimates, labor availability, bid proposals, and land analysis. We deal with contractors and subcontractors and developers for efficient sitework estimates."
                },
                {
                    heading: "Lumber Estimating Service in San Antonio, Texas",
                    answer: "We are the #1 lumber estimation company in Texas. We provide estimates on wood as well as plastic, including sheathing & siding, framing, finishing, hardware, and roofing. Our precise lumber estimates help the contractors and subcontractors ensure that wood is used with minimum waste."
                },
                {
                    heading: "Estimating service for steel in Austin, Texas",
                    answer: "We are the most trustworthy steel estimating service in Austin, Texas. We offer highly effective services, including various kinds of steel, such as structural steel. Our detailed service is to help contractors, steel manufacturers, fabricators, installers, and distributors. Our estimation service includes cost, labor, welders, equipment, transportation, etc."
                }
            ]
        },
        areaNearMe: {
            heading: "Texas Construction Estimating Service Near Me",
            description: [
                "Our reliable estimators and comprehensive services provide accurate takeoffs and local pricing estimates. With years of experience, we have built a solid reputation for delivering accurate estimates about residential, commercial, industrial, and material takeoff services. Texas provides customised and accurate construction estimating services in different areas of Texas that include Houston, Carrollton, Round Rock, Odessa, Abilene, San Antonio, Dallas, Austin, San Angelo, Fort Worth, El Paso, Tyler, Frisco, Corpus Christi, Plano, Laredo, Lubbock, Garland, Irving, Amarillo, Grand Prairie, McKinney, League City, Richardson, Sugar Land, Beaumont, The Woodlands, Lewisville, Wichita Falls, Allen, and Edinburg.",
                ""
            ]
        }
    },
    "florida": {
        stateName: "Florida",
        hero: {
            title: "Florida Construction Estimating Services",
            description: [
                "When it comes to building in Florida, one thing every project has in common, whether it’s a home, a commercial building, or a remodelling of a project. You need a professional construction estimating service in Florida. Knowing the true cost of your project before you break ground helps you plan smarter, avoid surprises, and stay on budget.",
                "Our company specializes in accurate, detailed, and focused construction estimating services. Are you looking for a reliable construction estimating service in Florida? We help homeowners, contractors, and developers to make confident financial decisions for their construction projects."
            ],
            image: "/assets/services.png"
        },
        uniqueApproach: {
            heading: "Why Choose Florida Construction Estimating Service?",
            description: [
                "Florida is a constantly growing state; new housing communities, beachfront properties, high-rise buildings, and infrastructure projects are going up every day.  Florida has unique factors such as unique framing or foundations, special insulation, or moisture protection. Material prices and cost of labor change on a daily basis; to overcome these problems, projects in Florida require local experience and attention to detail.",
                "Our estimators with 20 years of local experience estimate it accurately. Because construction bids often have deadlines, many Florida estimating services aim for quick turnarounds. Some promise 8-12 hours or up to 24-48 hours, depending on project size and complexity. Our turnaround time for a normal-sized project is 9-24 hours. We also offer updates if drawings change. We are different from others because of:"
            ],
            points: [
                "Local Knowledge",
                "Accuracy You Can Trust",
                "Fast Turnaround",
                "Transparent & Easy Process",
                "Experienced Team",
                "Personalized Support"
            ],
            turnaroundTime: "24/7 availability"
        },
        reliableServices: {
            heading: "Accurate Florida Construction Estimating & Takeoff Services ",
            description: [
                "Our licensed estimators possess leading qualifications, ensuring that our estimators hold the highest industry standards. We are the best estimating company in Florida; with accuracy, a detailed analysis, proper calculation, and specialised attention to trouble-making factors, the risk of unwanted delays and expenses is reduced. Our estimators provide you with bid-winning estimations. Bid winning isn’t just about the lowest price; it's about accuracy. An accurate estimate helps you to make a profit and avoid unexpected expenses during construction.",
                ""
            ],
            services: [
                { title: "Commercial Estimation" },
                { title: "Residential Estimation" },
                { title: "Industrial Estimation" },
                { title: "Cost Estimation" },
                { title: "Material Takeoff" },
                { title: "Quantity takeoff" },
                { title: "Preliminary Estimation" },
                { title: "Lead Generation" },
                { title: "Marketing for Subcontractors" },
                { title: "Consultation" },
                { title: "Outsourcing Estimation" },

            ]



        },
        estimatesAndTakeoff: {
            heading: "Florida Residential, Commercial, Industrial Estimating and Takeoff Services",
            description: "",
            cards: [
                {
                    title: "Residential Construction Estimates",
                    image: "/assets/building.webp",
                    desc: "Building or remodelling a home is a big investment. Our residential estimating services help you understand every cost from foundation to finishes. We make precise estimates so you know exactly where your money is going. We cover",
                    points: ["New home construction", "Home additions", "Kitchen renovation", "Bathroom remodelling", "Roofing & Siding", "Windows & doors", "Flooring", "Basement & Finishes work", "Outdoor space estimation"]



                },
                {
                    title: "Commercial Construction Estimates",
                    image: "/assets/choose.webp",
                    desc: "Commercial construction estimation is different from residential construction’s estimation. We provide detailed takeoffs and cost breakdowns that help you prepare competitive bids and realistic budgets. Whether you’re working",
                    points: ["Office building", "Retail stores", "Restaurants", "Cafés", "Pharmacy", "Warehouses", "Light industrial", "Shopping centres", "Tenant improvements"]




                },
                {
                    title: "Industrial Construction Estimates",
                    image: "/assets/governmental.webp",
                    desc: "Paradise Estimating provides numbers with accuracy at a very competitive price. With our help, you get ultimate success in industrial building projects. We are a local company with expert team members to solve your problems.",
                    points: ["Warehouses and factories", "Oil and gas facilities", "Utilities ", "Power plants", "Roads ", "Bridges", "Public works", "Industrial builds", "Water plant"]




                },
                {
                    title: "Material Takeoffs in Florida",
                    image: "/assets/takeoff.webp",
                    desc: "Accurate quantity takeoffs are the foundation of any good estimate. We offer a full range of construction estimating and takeoff services for projects throughout Florida. We provide accurate takeoffs and estimates to contractors, subcontractors, developers, and homeowners. Takeoff services we offer",
                    points: ["Concrete ", "Masonry takeoffs", "Lumber takeoff ", "Drywall ", "Roofing ", "Electrical takeoff", "Plumbing ", "HVAC takeoffs",]



                }
            ]
        },
        detailedServices: {
            heading: "Trades We Offer In Florida",
            description: [
                "We are the best construction estimating company in Florida. Our estimators are professional, expert, and experienced. Florida has unique factors such as unique framing or foundations, special insulation, or moisture protection. Our estimators with years of local experience estimate it accurately. A small mistake in the estimate can cause a lot of problems. Paradise Estimating has years of experience working with Florida’s unique conditions. We provide detailed numbers about cost, material and labour. With us you get accurate numbers you can rely on. Whether you are building a new home or renovating an old building. Reliable estimates are a lifesaver. Our professional estimators provide services in all cities of Florida. We work on all types of trades in Florida.",
                ""
            ],
            trades: [
                "Concrete", "Masonry", "Sitework", "Earthwork", "Mechanical", "Electrical", "Plumbing", "HVAC", "Metals", "Doors & Windows", "Finishes", "Painting", "Drywall", "Flooring", "Roofing", "Wood/Plastic", "Lumber", "Waterproofing", "Fireproofing", "Landscaping"
            ]






        },
        ourClients: {
            heading: "Our Clients For Florida Construction Estimating Service",
            description: [
                "Paradise Estimating Company is the #1 construction estimator and proudly serves a wide range of clients in Florida. Our construction estimators ensure successful bid-winning results. Our team assists clients with precise estimation to win bids for every kind of project. Customer satisfaction is our topmost priority; our expert team always satisfies its clients with accurate estimates. We provide professional estimating services for a wide range of construction projects.",
                ""
            ],
            clients: [
                "Contractors", "Subcontractors", "Home Builders", "Developers", "Homeowners", "Architects", "Engineer", "Vendor", "Retailers"
            ]


        },



        process: {
            heading: "Our Process for Construction Estimation in Florida?",
            description: "Paradise Estimating is a professional construction cost estimating service provider in Florida. Our team has years of experience in construction cost estimation and takeoff services. We follow a simple process. We aim to save your money and time.",
            steps: [
                "Review the scope of the project and plan takeoff",
                "Quantities and material listing",
                "Labour and material cost estimation",
                "Local factors adjustments",
                "Turnaround time & revisions",
                "Deliver the final report"
            ]
        },
        tools: {
            heading: "Software & Tools We Used in Florida Construction Estimating Service",
            description: [
                "We outrank our competitors due to our precise, accurate, and reliable estimation and takeoff services. Our estimators use multiple software programs like",
                ""
            ],
            bidWinRatio: "",
            toolsList: [
                { name: "Bluebeam", image: "/assets/logos/blue.jpg" },
                { name: "Planswift", image: "/assets/logos/plan.jpg" },
                { name: "RS Means", image: "/assets/logos/rs.jpg" },
                { name: "Cost-X", image: "/assets/logos/cost.jpg" },
                { name: "FastWRAP", image: "/assets/logos/fast.jpg" },
                { name: "Cost-work", image: "/assets/logos/Coststimator_logo.jpg" },
                { name: "Quest Estimating", image: "/assets/logos/quest.jpg" }
            ]
        },
        expertLocalService: {
            heading: "Accurate Project Budgeting & Local Florida Construction Estimating Services",
            description: [
                "The fluctuation in the prices of construction materials highlighted the importance of an accurate construction estimate. With years of experience, Paradise Estimating can take you out of these economic uncertainties and unwanted budget problems. Imagine you are working on a small project in Florida, and you start it without a realistic cost estimation. Then, you find that materials cost more than expected, labor takes longer, or daily requirements push the budget higher. ",
                "Without a good estimating process, you would wind up with budget overruns, delays, or worse, bidding and losing money. We provide expert estimating services in Florida. A small mistake in the estimate can cause a lot of problems. Paradise Estimating has years of experience working with Florida’s unique conditions, from weather impacts to pricing variations. We provide estimates that are realistic, reliable, and fully customized to your project."
            ],
            image: "/assets/aboutus.webp"
        },
        faq: {
            items: [
                {
                    question: "How much time does an estimate take?",
                    answer: "Our turnaround takes 9–24 hours, but it all depends on the size and complexity of the project. Larger multi-trade projects may require more time."
                },
                {
                    question: "Do you offer revisions if my plan changes?",
                    answer: "Yes. We provide revision updates with a little cost adjustment."
                },
                {
                    question: "Who are your clients in Florida?",
                    answer: "Our clients are contractors, subcontractors, developers, home builders, and homeowners."
                },
                {
                    question: "What kinds of trades do we offer to our clients?",
                    answer: "We frequently prepare trade-specific takeoffs like concrete, drywall, electrical, HVAC, flooring, and framing."
                },
                {
                    question: "Do you handle estimates for both residential and commercial projects?",
                    answer: "We work on all kinds of projects in Florida, from homes, restaurants, and office buildings to large industrial developments."
                },

            ]
        },
        cta: {
            heading: "For winning more bids, contact us. Get a quote, upload your plans, and receive detailed estimates in 24 hours. Get the best estimating service in Florida."
        },
        portfolio: {
            heading: "Our Portfolio",
            description: [
                "Our team analyses each component of construction, whether it is material, labor, equipment, or cost. Our estimators help the contractors and subcontractors to avoid unwanted problems and make accurate estimations. We offer a full range of construction estimating and takeoff services for projects throughout Florida. We provide accurate takeoffs and estimates to contractors, subcontractors, developers, and homeowners.",
                "Our estimating team offers various kinds of services, including Mechanical Estimating Services Florida, MEP Estimating Services Florida, Electrical Estimating Services Florida, Roofing Estimating Services in Florida, Lumber Takeoff Services, Piping Estimating Services Florida, Plumbing Estimating Services Florida, Framing Estimating Services, Residential & Commercial Estimating Services, Estimating Services Florida, Drywall Estimating Services Florida, and HVAC Estimating Services Florida."
            ],
            items: [
                {
                    heading: "HVAC Estimating Service in Bradford, Florida",
                    answer: "For HVAC, the subcontractor in Bradford handles the installation of ductwork, air conditioning units, and heating units. Paradise Estimating offers HVAC estimation services to subcontractors in Florida. Contact us and get your results with 98-99% accuracy."
                },
                {
                    heading: "Interior & exterior finishes in Calhoun, Florida",
                    answer: "Estimating for paintings, drywall, plaster, stucco, and decorative coatings will be carried out by contractors & subcontractors based in Calhoun. Being expert estimators with 20 years of experience, we deliver interior & exterior finishing services for contractors, subcontractors, homeowners, builders, and developers."
                },
                {
                    heading: "Masonry Estimating Service in Columbia, Florida",
                    answer: "Masonry, which will be handled by a subcontractor in Columbia, involves estimating for bricks, blocks, and stonework. Our estimators provide accurate material takeoff and cost estimation in Florida."
                },
                {
                    heading: "Metal Estimating Service in Hamilton, Florida",
                    answer: "We provide estimation and takeoff services to Hamilton-based contractors, subcontractors, builders, developers, and homeowners. In our estimation, we deal with steel, beams, girders, rebar, and other metal trades."
                }
            ]
        },
        areaNearMe: {
            heading: "Florida Construction Estimating Service Near Me",
            description: [
                "Our professional construction estimators in Florida provide their services in all cities of Florida. With years of local experience in construction estimation, we offer our services in Columbia, DeSoto, Mort Myer, Duval, Escambia, Lafayette, Alachua, Cape Coral, Bradford, Calhoun, Boca Raton, Gadsden, Hamilton, Hillsborough, Clearwater,  and Miami-Dade.",
                ""
            ]
        }
    },
    "pennsylvania": {
        stateName: "Pennsylvania",
        hero: {
            title: "Pennsylvania Construction Estimating Services",
            description: [
                "Are you planning to build a project in Pennsylvania? We are the best construction estimator in Pennsylvania. The first and most important step before starting any project is to get an accurate cost estimate. Whether you’re building a home, renovating a property, or working on a large project, an accurate cost estimate can save you from unwanted surprises.",
                "We a specialize in providing the best construction estimating services in Pennsylvania. We designed our service specifically for contractors, builders, homeowners, and developers. Being local estimators, we understand the local market, material prices, and labor rates. Our goal is to help you make confident, informed decisions before you start your build. We have 20 years of experience in Pennsylvania. We offer 99% accuracy and a bid win ratio."
            ],
            image: "/assets/services.png"
        },
        uniqueApproach: {
            heading: "Why Choose Our Pennsylvania Construction Estimating Service?",
            description: [
                "Choosing an estimator is kind of like choosing someone your construction Partner . Someone who knows what they are doing and someone who won’t leave you wondering what really happened. Here’s why people keep coming back to us:",
                "Good estimating shouldn’t cost a fortune. Our pricing is reasonable and flexible. It totally depends on the size and complexity of your project."
            ],
            points: [
                "Local Expertise",
                "Experienced Estimators",
                "Accurate, Transparent Results",
                "Fast Turnaround",
                "Personalized Service",
                "Affordable Pricing"
            ],
            turnaroundTime: "9-24 hours"
        },
        reliableServices: {
            heading: "Pennsylvania Construction Estimating & Takeoff Services We Offer",
            description: [
                "Paradise Estimation is your reliable partner, providing the best services in Pennsylvania. We have 20 years of experience in construction estimating and material takeoff services. Being an expert team, we analyse your drawings. Get the best commercial, residential, and industrial estimating service. We also provide material takeoff service in Pennsylvania. We deliver accurate and reliable estimates for every kind of project.",
                ""
            ],
            services: [
                { title: "Cost Estimation service" },
                { title: "Material takeoff service" },
                { title: "Preliminary Estimation" },
                { title: "Commercial Estimation" },
                { title: "Residential Estimation" },
                { title: "Industrial Estimation" },
                { title: "Material Takeoff service" },
                { title: "Bid estimates" },
                { title: "Proper guidelines to smartly fill the bid" },
                { title: "Project leading" },
                { title: "Sub-contractors marketing" },
                { title: "Outsourcing Estimation" },
                { title: "Consultation" }
            ]


        },
        estimatesAndTakeoff: {
            heading: "Residential, Commercial, Industrial Estimating & Takeoff service in Pennsylvania",
            description: "",
            cards: [
                {
                    title: "Residential Estimation Service",
                    image: "/assets/building.webp",
                    desc: "We provide tailored residential estimates for every project at very affordable prices and a quick turnaround time. We always want long-term relations with our customers. Customer satisfaction is our priority. That's why we deliver accurate construction and takeoff services in Pennsylvania. At the residential level, we work for",
                    points: [" Single-family homes", "Custom builds", "Multi-family apartments", "Townhouses", "New home construction", "Home additions & remodels", "Apartment buildings"]



                },
                {
                    title: "Commercial Estimation Service",
                    image: "/assets/choose.webp",
                    desc: "We provide tailored commercial estimates to every project owner who avoids unwanted surprises. We always want long-term relations with our customers. Customer satisfaction is our priority, and we deliver accurate construction and takeoff services. We provide tailored solutions to",
                    points: ["Restaurants", "Office buildings", "Retail spaces", "Office interior build-outs", "Restaurants", "Hospitality projects", "Schools and educational facilities"]



                },
                {
                    title: "Industrial Estimation Service",
                    image: "/assets/governmental.webp",
                    desc: "Our estimation company is one of the best companies in Pennsylvania. Because of our expert team, customized solutions, and reliable construction cost estimation service.",
                    points: ["Warehouses and factories", "Oil and gas facilities", "Utilities and power plants", "Roads, bridges", "Public works", "Laboratories", "Pharmaceutical company", "Waste management plants", "Production Houses"]

                },
                {
                    title: "Material Takeoff Services in Pennsylvania",
                    image: "/assets/takeoff.webp",
                    desc: "Providing you with an accurate list of materials and quantities you need for your project. We offer customised estimation solutions for every kind of project in Pennsylvania.",
                    points: ["Electric", "Masonry", "MEP", "Plumbing", "Concrete", "Mechanical", "Drywall", "Lumber takeoff", "Flooring", "Painting",]




                }
            ]
        },
        detailedServices: {
            heading: "Trades We Handle in Pennsylvania",
            description: [
                "We deal with a wide range of trades across Pennsylvania. Construction in this state wants every type of material and skill you can imagine. From concrete foundations to the final strokes of paint. We are involved in the gritty details that most people don’t even think about until something goes wrong. With 20 years of experience, our estimates can take you out of economic uncertainties and unwanted budget problems. We account for local building codes, market trends, and the way material prices shift from one region to the next. In the end, the goal is pretty simple. We keep the project on track and on budget. We provide trades in all cities in Pennsylvania.",
                ""
            ],
            trades: [
                "Concrete", "Masonry", "Sitework", "Earthwork", "Mechanical", "Electrical", "Plumbing", "HVAC", "Metals", "Doors & Windows", "Finishes", "Painting", "Drywall", "Flooring", "Roofing", "Wood/Plastic", "Lumber", "Waterproofing", "Fireproofing", "Landscaping", "Thermal/Moisture Protection"
            ]




        },
        ourClients: {
            heading: "Who We Work With in Pennsylvania",
            description: [
                "A good estimate gives you a roadmap. It helps you budget and secure the materials you need and sidestep delays that can derail a project. When the estimate is wrong, everything that follows tends to fall apart. When it’s right, the whole job just flows. We work with pretty much everyone involved in construction",
                "We want clients to feel informed, not overwhelmed. A solid estimate gives you clarity, and clarity takes the fear out of the unknown. Our professional team provides accurate and reliable estimation services. It includes materials takeoff, labour cost, and equipment cost. We proudly work with all types of clients across Pennsylvania, including"
            ],
            clients: [
                "General contractors", "Subcontractors", "Developers", "Homeowners", "Builders", "Architects", "Engineers", "Retailers", "Vendors"
            ]
        },
        process: {
            heading: "Our Simple & Clear Pennsylvania Construction Estimating Service",
            description: "Pennsylvania is one of those states where the construction environment shifts like the weather. In cities, older buildings mean you need precise numbers to avoid surprises. Meanwhile, in rural areas, material delivery costs can be higher than expected if you don’t plan for them. Our estimators take care of everything. The process we follow for estimation is",
            steps:


                [
                    {
                        title: "Send Your Plans",
                        description: "You send us your drawings in PDFs, CAD files, and sketches. We provide accurate estimates according to your plan."
                    },
                    {
                        title: "Review & Proposal",
                        description: "We look everything over and tell you what the service will cost. No pressure, no hidden fees."
                    },
                    {
                        title: "Detailed Estimate Preparation",
                        description: "We measure quantities and apply real Pennsylvania pricing. Account for everything from material waste to equipment needs."
                    },
                    {
                        title: "Quality Check",
                        description: "Every estimate gets a second set of eyes. Mistakes happen in construction, but not in our final reports."
                    },
                    {
                        title: "Delivery",
                        description: "You get your estimate in whatever format works best for you. Excel, PDF, or both."
                    },
                    {
                        title: "Ongoing Support",
                        description: "If you need revisions, clarifications, or help adjusting the numbers later on. We are available for you. Our estimators fully support you throughout your project."
                    },
                    // Can mix both formats
                ]
        },
        tools: {
            heading: "Software & Tools Our Estimators Utilize in Pennsylvania",
            description: [
                "Our estimators use advanced tools for estimation. That's why our estimates are reliable and accurate. The accuracy level we offer is 99%. It is due to the advanced tools and software we used. We provide the best construction estimation services at very affordable rates. Our experts ensure bid-winning results. Our professionals are well-trained and equipped to utilize multiple software programs like",
                ""
            ],
            bidWinRatio: "",
            toolsList: [
                { name: "Bluebeam", image: "/assets/logos/blue.jpg" },
                { name: "Planswift", image: "/assets/logos/plan.jpg" },
                { name: "RS Means", image: "/assets/logos/rs.jpg" },
                { name: "Cost-X", image: "/assets/logos/cost.jpg" },
                { name: "FastWRAP", image: "/assets/logos/fast.jpg" },
                { name: "Cost-work", image: "/assets/logos/Coststimator_logo.jpg" },
                { name: "Quest Estimating", image: "/assets/logos/quest.jpg" }
            ]
        },
        expertLocalService: {
            heading: "Local & Budget-friendly Pennsylvania Construction Estimating Service",
            description: [
                "Pennsylvania is one of those states where the construction environment shifts as quickly as the weather. You need precise numbers to avoid surprises. Meanwhile, in rural areas, material delivery costs can be higher than expected if you don’t plan for them. A good estimate gives you a roadmap. It helps you budget properly, secure the materials you need, and sidestep delays that can derail a project.",
                "When the estimate is wrong, everything that follows tends to fall apart. When it’s right, the whole job just goes in flow. Paradise Estimating is providing the best estimating service in Pennsylvania. We are a local company in Pennsylvania. Our team know local building codes. That's why our estimates are accurate and always on point. With us you get precise numbers at a competitive cost."
            ],
            image: "/assets/aboutus.webp"
        },
        faq: {
            items: [
                {
                    question: "How much time does an estimate take?",
                    answer: "Our turnaround takes 9-24 hours, but it all depends on the size and complexity of the project. Larger multi-trade projects may require more time."
                },
                {
                    question: "Do you offer revisions if my plan changes?",
                    answer: "Yes. We provide revision updates with a few cost adjustments."
                },
                {
                    question: "Who are your clients in Florida?",
                    answer: "Our clients are contractors, subcontractors, developers, home builders, and homeowners."
                },
                {
                    question: "What kinds of trades do we offer to our clients?",
                    answer: "We frequently prepare trade-specific takeoffs like concrete, drywall, electrical, HVAC, flooring, and framing."
                },
                {
                    question: "Do you handle estimates for both residential and commercial projects?",
                    answer: "We work on all kinds of projects in Florida. From homes, restaurants, and office buildings to large industrial developments."
                },

            ]
        },
        cta: {
            heading: "Use our estimates to quote confidently. Get the best estimating service in Florida. Upload Your Plans and Receive Detailed Estimates in 24 Hours."
        },
        portfolio: {
            heading: "Our Portfolio",
            description: [
                "We have worked on all sorts of projects here in Pennsylvania. Houses, apartments, offices, warehouses. Every project is different, so we make sure our estimates match what’s really needed. The goal is to help builders and homeowners plan better, avoid surprises, and stay on budget. When you look at our work. You are seeing projects we have helped bring to life with numbers that actually make sense.",
                "Paradise Estimating Service has become a trusted partner for successful construction projects.  We offer services, which are HVAC estimating service, plumbing estimating, and MEP estimating. Residential estimating, piping estimating, and drywall and lumber takeoff services. Mechanical, roofing, and framing estimating services are also dealt with by our estimators. We also offer commercial estimating and electrical estimating services in Pennsylvania."
            ],
            items: [
                {
                    heading: "Multi-Unit Renovation Cost Estimate in Philadelphia, Pennsylvania",
                    answer: "In Philly, we recently worked on a four-unit rowhome renovation in Fishtown. The building was old. So the estimate needed to include all those hidden headaches. We broke down everything from framing repairs to upgraded electrical service. We have been providing estimating services for 20 years. Our estimators ensure 99% accuracy."
                },
                {
                    heading: "Restaurant Build-Out Estimate in Pittsburgh, Pennsylvania",
                    answer: "A small restaurant owner in Pittsburgh came to us completely overwhelmed. He had a vision, a leased space, and zero idea how much the build-out would cost. We created a full takeoff. It includes kitchen equipment, ventilation, finishes, plumbing, the works. We are providing precision with 99% accuracy."
                },
                {
                    heading: "New Home Construction Estimate in Lancaster, Pennsylvania",
                    answer: "In Lancaster, we helped a family estimate the cost of building their forever home. They’d been collecting Pinterest boards and magazine clippings for years. But had no idea what it would all add up to. We gave them a detailed breakdown of materials, labour, finishes, and even landscaping. If you need such an estimation. Contact us today and get your estimate."
                }
            ]
        },
        areaNearMe: {
            heading: "Pennsylvania Construction Estimating Service Near Me",
            description: [
                "Construction estimation in Pennsylvania isn’t about giving them numbers. It's about helping people make smart decisions before they spend a single dollar. We offer accurate estimation in Pennsylvania. The accuracy rate we deliver is 99%. Our job is to look at the plans and break everything down into real-world costs. We make sure nothing surprises you halfway through the project. We offer a 98% bid win ratio.",
                "Paradise Estimating works with clients across the entire state, including Philadelphia, Pittsburgh, and Harrisburg. We also offer services in Allentown, Lancaster, Erie, Scranton, Reading, York, and Bethlehem. Our estimator offers estimations in State College, Wilkes-Barre, and towns and counties. If it’s in Pennsylvania, chances are we’ve estimated something nearby."
            ]
        }
    },
    "ohio": {
        stateName: "Ohio",
        hero: {
            title: "Ohio Construction Estimating Service",
            description: [
                "The construction market size of Ohio is about 63.19 billion dollars in 2024 and is estimated to grow to more than 200 million dollars in the next few years. Contractors and subcontractors have a chance to avail themselves and grow further. Building a project is not a small action. Getting the numbers right is just as important as getting the design right. Whether you are a contractor, developer, or homeowner, we provide detailed, reliable, and accurate construction estimating services to help you stay on budget and on schedule.",
                "With 20 years of experience serving Ohio, Paradise Estimating knows the ins and outs of local construction costs and market trends. Choosing right is very crucial to getting better results. We are a one-stop company for various estimation services in Ohio. We are providing the best local construction estimating service in Ohio at very affordable prices."
            ],
            image: "/assets/services.png"
        },
        uniqueApproach: {
            heading: "Choosing the Right Ohio Construction Estimating Service",
            description: [
                "Choosing right is crucial to getting rid of unwanted problems. We are the #1 construction estimating service provider in Ohio. A reliable, precise, and accurate construction estimation is as important as any successful construction project. Inaccurate estimations are dangerous to the budget and reduce quality. We offer 99% accuracy and a 98% bid win ratio.",
                "With years of experience and a professional team, we are the best construction estimating company in Ohio. With the help of our expert estimators, you get accurate and reliable construction estimating service at very reasonable rates. We are an expert estimation and consultation company in Ohio, which provides accurate, thorough, and effective estimations and consultations."

            ],
            points: [
                "Trustworthy and accurate",
                "Budget-friendly service",
                "Licensed expert team",
                " Meet the deadlines",
                "Tailored solutions",
                "24/7 available"
            ],
            turnaroundTime: "Quick turnaround time"
        },
        reliableServices: {
            heading: "Accurate Construction Estimating and Takeoff Service in Ohio",
            description: [
                "We offer construction estimating and takeoff services in Ohio to make your building projects easier and more stress-free. We carefully break down all the costs, from materials and labor to equipment and permits, so you always know exactly where your money is going. The takeoff service we deliver helps you figure out the right amount of materials, saving you time and money.",
                "We stand out from competitors due to our precise, accurate, and reliable estimation and takeoff services. Our accurate and thorough analysis and specific attention to details ensure the proper calculations and reduce the risk of unwanted delays and expenses. Being expert construction estimators, we possess leading qualifications, ensuring that our estimators hold the highest industry standards."
            ],
            services: [
                { title: "Cost Estimation" },
                { title: "Commercial Estimation" },
                { title: "Residential Estimation" },
                { title: "Industrial Estimation" },
                { title: "Material Takeoff service" },
                { title: "Preliminary Estimation" },
                { title: "Bid estimates" },
                { title: "Project leading" },
                { title: "Sub-contractors marketing" },
                { title: "Labour takeoff service" },
                { title: "Outsourcing Estimation" },
                { title: "Lead Generation" }
            ]



        },
        estimatesAndTakeoff: {
            heading: "Commercial, Industrial, Residential Estimating & Takeoff Service in Ohio",
            description: "",
            cards: [
                {
                    title: "Residential Construction Estimation Service",
                    image: "/assets/building.webp",
                    desc: "Paradise Estimating Company is one of the top-rated companies in Ohio. We truly understand the importance of precision, perfection, and accuracy in estimating the construction cost of a house. When you are building a house and in need of precise residential estimates, accurate estimation is as important as the completion of the project.",
                    points: ["New custom homes", "Kitchen remodels", "Roofing and siding", "Outdoor living spaces", "Multi-family projects", "Single-family projects"]
                },

                {
                    title: "Commercial Construction Estimation Service",
                    image: "/assets/choose.webp",
                    desc: "We are the #1 company in Ohio with accuracy and competitive pricing. We aim to deliver expert and accurate estimations. The estimation team of my team delivered accurate estimates and material takeoff service for various projects. Whether it is a restaurant, airport, warehouse, or hospital, we are the best construction estimation company in Ohio.",
                    points: ["Office buildings", "Retail shops", "Restaurants", "Warehouses", "Hospitals", "Industrial builds"]
                },

                {
                    title: "Industrial Construction Estimation Service",
                    image: "/assets/governmental.webp",
                    desc: "Our skilled construction estimators assure you of flawless progress with accuracy at a very competitive price. With the help of our estimators, you get ultimate success in industrial building projects. We are a local company with expert team members to solve your problems and become partners for the long term.",
                    points: ["Factories", "Warehouses", "Roads & Bridges", "Public work", "Water plants", "Industrial builds"]
                },

                {
                    title: "Material Takeoff Services",
                    image: "/assets/takeoff.webp",
                    desc: "In Ohio, we offer a variety of services and trades to meet the needs of both individuals and businesses. Our goal is to provide reliable services that make life easier for everyone. With years of experience and a deep understanding of the construction industry, we provide customized solutions that meet your needs.",
                    points: ["Concrete", "Lumber", "Drywall", "Masonry", "Framing", "Roofing", "Plumbing", "Electrical", "Finishes"]










                }
            ]
        },
        detailedServices: {
            heading: "Trades we offer in Ohio",
            description: [
                "We offer our services and trades with 98-99% accuracy in our construction estimating services. Our company is the best estimating company and has professional, expert, and experienced construction estimators in Ohio. The estimating team of our company offers various kinds of services in Ohio",
                "Paradise Estimating has a history of delivering accurate and reliable estimates. We are your trusted partner, providing the best services in Ohio and earning the confidence and trust of our customers in every kind of project. Whether you are working on a new home, a renovation, or a big commercial project anywhere in Ohio, we use the latest software & tools and local experience to give you clear, accurate numbers you can trust. With our friendly and reliable team, you can plan better, bid with confidence, and keep your project running smoothly from start to finish."
            ],
            trades: [
                "Concrete", "Masonry", "Sitework", "Earthwork", "Mechanical", "Electrical", "Plumbing", "HVAC", "Metals", "Doors & Windows", "Finishes", "Painting", "Drywall", "Flooring", "Roofing", "Wood/Plastic", "Lumber", "Waterproofing", "Fireproofing", "Landscaping"
            ]




        },
        ourClients: {
            heading: "Our Clients for Ohio Construction Estimation Service",
            description: [
                "From homeowners planning their dream renovations to contractors, developers, and business owners managing large-scale commercial builds. We have built long-lasting relationships based on trust and results, helping our clients save time, control costs, and move forward with confidence. Our staff of skilled building estimators has years of experience. We are able to give you accurate and thorough building estimates and quantity takeoffs because of our knowledge. Additionally, we offer our clients consultation.",
                ""
            ],
            clients: [
                "General contractors", "Subcontractors", "Developers", "Owners", "Home Builders", "Homeowners", "Architects", "Engineers"
            ]


        },
        process: {
            heading: "Procedure to Contact Us for Ohio Construction Estimating Service",
            description: "With 20 years of experience, we deliver appropriate services to our clients. Our construction estimators ensure successful bid-winning results. Paradise Estimating assists clients with precise estimation to win bids for every kind of project. Customer satisfaction is our topmost priority; our expert team always satisfies its clients with accurate estimations.",
            steps:


                [
                    {
                        title: "Upload Your Plans",
                        description: "Send your drawing plans, and our estimators will prepare a quote, including invoice, delivery, and turnaround time. We accept both PDF and Dropbox links. Contact us."
                    },
                    {
                        title: "Get a quote",
                        description: "Our expert estimators review your plans and prepare a detailed quantity takeoff. Pay for our services, and we’ll immediately start working on your project. We accept both card and cash payments"
                    },
                    {
                        title: "Get your estimate",
                        description: "After we analyse the data, you’ll get complete details.  It includes labour, materials, equipment, and pricing."
                    },

                    // Can mix both formats
                ]
        },
        tools: {
            heading: "Software we use in Ohio Construction Estimating Service",
            description: [
                "We offer reliable and accurate construction estimation services at a very affordable rate. We provide the best construction estimation services at very affordable rates, and our experts ensure 98% bid-winning results. Professionals of our company are well-trained and equipped to utilise multiple software applications. Those advanced tools help us to give accurate and reliable estimates. Our estimates are 99% accurate. Contractors & subcontractors rely on our numbers.",
                ""
            ],
            bidWinRatio: "",
            toolsList: [
                { name: "Bluebeam", image: "/assets/logos/blue.jpg" },
                { name: "Planswift", image: "/assets/logos/plan.jpg" },
                { name: "RS Means", image: "/assets/logos/rs.jpg" },
                { name: "Cost-X", image: "/assets/logos/cost.jpg" },
                { name: "FastWRAP", image: "/assets/logos/fast.jpg" },
                { name: "Cost-work", image: "/assets/logos/Coststimator_logo.jpg" },
                { name: "Quest Estimating", image: "/assets/logos/quest.jpg" }
            ]
        },
        expertLocalService: {
            heading: "Cost-Effective Local Ohio Construction Estimating Service",
            description: [
                "Are you worrying about the cost estimation of your project? Or in need of proper consultation for takeoff service? You are at the right place. Our estimating company is the best local company in Ohio, leading in Ohio and leading the estimation service firm. With the help of our professional estimators, you get a precise and comprehensive cost estimation for your project.",
                "When it comes to construction in Ohio, every detail matters, especially when it comes to meeting local building codes and regulations. That's why our expert and professional estimates are built with a deep understanding of Ohio’s standards, so you can trust that your project will meet all the right requirements from the start. We stay up to date on state and city guidelines to make sure your costs reflect exactly what’s needed for permits, materials, and compliance. "
            ],
            image: "/assets/aboutus.webp"
        },
        faq: {
            items: [
                {
                    question: "Do construction costs remain the same in different cities?",
                    answer: "Yes, absolutely. Material cost, labor availability, labor wages, and even climate conditions can vary from city to city."
                },
                {
                    question: "My plans aren’t finalised yet; can you still provide me with an accurate estimate?",
                    answer: "Yes. We can develop preliminary estimates based on your design. As your drawings evolve, our estimate will be refined to match new details."
                },
                {
                    question: "How much time does it take to receive a construction estimate in Ohio?",
                    answer: "It totally depends on the project size and details. If you have a deadline, just let us know; we always aim to adjust reasonable timelines."
                },
                {
                    question: "Who are your clients in Ohio?",
                    answer: "We assist general contractors, subcontractors, developers, and homeowners."
                },
                {
                    question: "What is your construction estimation service accuracy rate?",
                    answer: "Our estimates are designed with precision; our cost estimates are accurate and based on the project’s zip code. That's why our accuracy rate is more than 98-99%."
                },

            ]
        },
        cta: {
            heading: "Get accurate, fast, and reliable construction estimates. Save time, avoid surprises, and confidently request your free quote today! Upload your plan and get a quote."
        },
        portfolio: {
            heading: "Our Portfolio",
            description: [
                "Starting your construction project in Ohio? One of the first and most crucial steps is an expert cost estimating service. It’s like laying a solid foundation before you build the house. A good cost estimate gives you a clear idea of what your project will truly cost, helping you avoid surprises down the road. In Ohio, where material prices, labor rates, and local codes can vary, working with an experienced estimator who knows the ins and outs of the area can make a world of difference.",
                "They’ll not only help you budget wisely but also give you a realistic view of what’s possible within your budget. Getting that expert input early on ensures that your dream build doesn’t turn into a financial nightmare. With years of experience, we have built a solid reputation for delivering accurate estimates about residential, commercial, industrial, and material takeoff services"
            ],
            items: [
                {
                    heading: "Our MEP Estimation Service in Columbus, Ohio",
                    answer: "Our expert team provides MEP (Mechanical, Electrical, Plumbing) estimation services. Our MEP services include HVAC (heating, ventilation, and air conditioning) estimation, drainage, water supply, power distribution, and lighting. Our accurate services make your place comfortable, liveable, and functional."
                },
                {
                    heading: "Our Concrete Estimation Service in Canton, Ohio",
                    answer: "We are professional concrete estimators with more than 98-99% accuracy in We provide thorough estimates and precise takeoff service. Our concrete estimation service is specifically designed so that contractors and subcontractors get accurate estimations about cost and quantity related to concrete construction."
                },
                {
                    heading: "Lumber Takeoff Service in Hamilton, Ohio",
                    answer: "Our estimators precisely estimate lumber takeoff for contractors, subcontractors, home builders, homeowners, and commercial builders. Our lumber takeoff service provides a comprehensive list of materials for projects, as well as their quantities required for the project."
                }
            ]
        },
        areaNearMe: {
            heading: "Ohio Construction Estimating Service Near Me",
            description: [
                "The Paradise Estimating team is the most reliable and affordable Ohio construction estimating service provider in the following areas: Columbus, Cleveland, Cincinnati, Toledo, Akron, Dayton, Canton, Youngstown, Lorain, Parma, Hamilton, Springfield, Kettering, Elyria, Lakewood, Cuyahoga Falls, Middletown, Newark, Mansfield, Mentor, Westerville, Dublin, Strongsville, Beavercreek, Fairfield, Reynoldsburg, Grove City, Findlay, Lancaster, Lima, Huber Heights, Marion, Westlake, Delaware, Gahanna, Brunswick, Stow, Massillon, North Olmsted, and Sandusky. Our expertise covers a wide range of trades in Ohio.",
                ""
            ]
        }
    },
    "georgia": {
        stateName: "Georgia",
        hero: {
            title: "Georgia Construction Estimating Services",
            description: [
                "When you are planning a construction project in Georgia, whether it’s a new home in Savannah, a commercial build in Atlanta, or a renovation in a small rural town, one thing matters the most, and that is knowing your numbers before you start. Construction is exciting, but it’s also a big emotional and financial commitment.",
                "That’s why reliable construction estimation services play such an important role in helping owners, contractors, and developers to make smart and confident decisions. Our construction estimating services in Georgia are designed to give you the clarity and accuracy you need to move forward without stress or surprises. We help create estimates that you can trust, budgets you can rely on, and timelines that actually make sense."
            ],
            image: "/assets/services.png"
        },
        uniqueApproach: {
            heading: "Why Accurate Georgia Construction Estimating Service Matters?",
            description: [
                "Georgia is one of the fastest-growing states in the U.S. Due to its rapid growth, unique challenges certainly arise. Because real estate prices vary from region to region. Labour rates change depending on the county. Material costs are constantly changing. Weather conditions can affect timelines. Local codes and permitting requirements differ between cities. All these factors can impact your project’s final cost. If one detail is off, even by a little, the entire project could go over budget.",
                "A precise estimate gives you peace of mind. It gives you protection against overspending money. We help eliminate the guesswork so your project stays on track from day one. Georgia is unique. Costs of labor and materials are not the same in every city in Georgia. Labour availability in urban areas doesn’t match that of rural areas. We stay informed about regional price differences. Our estimating company offers personal support with clear communication, friendly guidance, and reliable help at every step, ensuring you feel confident, understood, and fully supported. We deliver estimates quickly in 9-24 hours without sacrificing accuracy. We have a proven history of delivering the estimating service in Georgia."
            ],
            points: [
                "Trustworthy and accurate",
                "Local Knowledge Matters",
                "Fast Turnaround Times",
                "Personal Support",
                "Detailed and Transparent",
                "We Care About Your Project"
            ],
            turnaroundTime: "24/7 Customer Support"
        },
        reliableServices: {
            heading: "Our Reliable Georgia Construction Estimating & Takeoff Services",
            description: [
                "There is a moment in almost every project where someone says, How much is that going to cost? And honestly, that’s exactly why estimating matters so much in Georgia. We try to be your trusted partner who’s got your back, who knows the ground you’re building on, and who can help you avoid the kind of mistakes that drain money, time, and patience. Our goal is to help you plan with confidence and avoid the financial stress that often brings unwanted surprises.",
                ""
            ],
            services: [
                { title: "Cost Estimation" },
                { title: "Commercial Estimation" },
                { title: "Residential Estimation" },
                { title: "Industrial Estimation" },
                { title: "Material Takeoff service" },
                { title: "Preliminary Estimation" },
                { title: "Bid estimates" },
                { title: "Project leading" },
                { title: "Sub-contractors marketing" },
                { title: "Labour takeoff service" },
                { title: "Outsourcing Estimation" },
                { title: "Lead Generation" }
            ]
        },
        estimatesAndTakeoff: {
            heading: "Our Residential, commercial, industrial Estimating & Takeoff Service",
            description: "Paradise Estimating has 20 years of experience in providing estimating services. Our estimates are precise and based on local knowledge. With us you get estimates that are 99% accurate. Our numbers are realistic. We deliver no fancy words with long spreadsheets.",
            cards: [
                {
                    title: "Residential Construction Estimating",
                    image: "/assets/building.webp",
                    desc: "Whether you’re building your dream home or want to renovate your home, we help homeowners and builders achieve the clarity for their projects that they need. We provide estimates for",
                    points: ["New home", "Home additions projects", "Kitchen remodelling", "Bathroom renovations", "Roofing and siding estimation", "Outdoor living spaces", "Multi-family home", "Single-family home"]




                },
                {
                    title: "Commercial Construction Estimating",
                    image: "/assets/choose.webp",
                    desc: "Georgia’s commercial landscape is very diverse. That's why reliable cost estimation is essential for staying on budget. We offer estimation services for:",
                    points: ["Office buildings", "Retail centers & stores", "Restaurants", "Warehouses", "Hospital projects", "Medical facilities", "Industrial builds", "Tenant improvements"]



                },
                {
                    title: "Industrial Estimation Service",
                    image: "/assets/governmental.webp",
                    desc: "Accurate takeoffs save time, reduce waste, and prevent expensive reorders. We create detailed quantity takeoffs, including:",
                    points: ["Warehouses", "Factories", "Oil and gas facilities", "Utilities and power plants ", "Roads", "Bridges", "Public Projects", "Public works projects"]


                },
                {
                    title: "Material Takeoffs Services",
                    image: "/assets/takeoff.webp",
                    desc: "We offer accurate industrial estimating in Georgia that helps the client with an accurate budget, timeline, and resources. We offer estimates to:",
                    points: ["Concrete", "Lumber", "Drywall", "Rebar", "Masonry", "Framing", "Roofing", "Plumbing materials", "Electrical components",]

                }
            ]
        },
        detailedServices: {
            heading: "Our Trade-Specific Services in Georgia",
            description: [
                "A solid estimate becomes the anchor for the whole job. It helps people avoid those awful mid-project surprises, like realizing the plumbing reroute is way more complicated or the roofing material you wanted has a six-week lead time. We try to be the steady voice in all that noise, giving clients the clarity they need to breathe a little easier and make decisions without feeling like they are walking blindfolded into a storm. Paradise Estimating offers the contractors and subcontractors their trade-specific services. We always provide services with 98-99% accuracy at very affordable prices.",
                ""
            ],
            trades: [
                "Concrete", "Masonry", "Sitework", "Earthwork", "Mechanical", "Electrical", "Plumbing", "HVAC", "Metals", "Doors & Windows", "Finishes", "Painting", "Drywall", "Flooring", "Roofing", "Wood/Plastic", "Lumber", "Waterproofing", "Fireproofing", "Landscaping"
            ]



        },
        ourClients: {
            heading: "Our Estimation Customers in Georgia",
            description: [
                "Building or renovating a home can be incredibly emotional. We help homeowners feel confident and supported by giving them clear financial direction. Contractors & subcontractors already have enough on their plates. We handle the estimating so you can focus on managing crews, winning jobs, and keeping your business running smoothly. Georgia’s developmental land is very competitive. We help make sure your project is financially feasible before you invest. Accurate estimates help you design within budget, avoid revisions, and keep your clients happy. We provide estimates for: ",
                ""
            ],
            clients: [
                "General contractors", "Subcontractors", "Developers", "Homeowners", "Builders", "Architects", "Engineers", "Retailers", "Vendors"
            ]


        },
        process: {
            heading: "Our Simple and Stress-Free Procedure for Georgia Construction Estimating Service",
            description: "When it comes to construction projects in Georgia, having a transparent and detailed estimating service is absolutely key to ensuring everything runs smoothly. We are expert construction estimators that break down the costs in a clear and organised manner. Giving clients honest details. No-surprises breakdown of materials, labour, permits, and any additional expenses. Whether you are planning a small renovation or a large commercial build, our estimators provide accurate pricing so you feel confident about the entire process from start to finish.",
            steps:


                [
                    {
                        title: "Send Us Your Plans",
                        description: "Send your project plan in PDFs, sketches, blueprints, or whatever you have; we’ll work with it. Our construction estimators provide customised solutions Itemised, accurate, and tailored to Georgia pricing."
                    },
                    {
                        title: "Get a quote",
                        description: "We examine every detail, such as materials, measurements, labor needs, and project scope. You move forward with confidence. Our reliable and accurate estimate becomes your road map."
                    },
                    {
                        title: "Get your Estimate",
                        description: "After analyzing your data, you get an accurate estimate. Our estimates are based on real numbers. We walk you through everything in plain, friendly language."
                    },

                    // Can mix both formats
                ]
        },
        tools: {
            heading: "Software & tools our estimators are equipped",
            description: [
                "We use advanced tools and software to give you accurate cost estimation and take-off service. Paradise Estimating in Georgia assists clients with accurate estimation to win bids for every kind of project. Customer trust and satisfaction are our topmost priority. We built strong relationships with our customers and always satisfied them with accurate estimations. We handle all CSI trades of every size, type, and complexity.",
                "Our professionals are equipped with multiple software programs like"
            ],
            bidWinRatio: "",
            toolsList: [
                { name: "Bluebeam", image: "/assets/logos/blue.jpg" },
                { name: "Planswift", image: "/assets/logos/plan.jpg" },
                { name: "RS Means", image: "/assets/logos/rs.jpg" },
                { name: "Cost-X", image: "/assets/logos/cost.jpg" },
                { name: "FastWRAP", image: "/assets/logos/fast.jpg" },
                { name: "Cost-work", image: "/assets/logos/Coststimator_logo.jpg" },
                { name: "Quest Estimating", image: "/assets/logos/quest.jpg" }
            ]
        },
        expertLocalService: {
            heading: "The Real Value of Having a Local Georgia Estimator on Your Side ",
            description: [
                "Georgia is a beautiful land. Paradise Estimating is your trustworthy and reliable partner in Georgia. Being a local company, we understand which materials hold up in Georgia’s heat, which subcontractor is reliable, and which parts of the state tend to throw unexpected costs into the mix. Paradise Estimating is your local best estimation partner in Georgia. We are offering construction estimation and takeoff services with more than 98% accuracy. So, contractors & subcontractors can bid easily.",
                "Construction is more than materials; it’s your goals and future. We keep that in mind with every estimate. We help you start confidently, avoid budget surprises, and make informed decisions. We’re here to support your planning and bring your project to life, caring about your experience every step of the way."
            ],
            image: "/assets/aboutus.webp"
        },
        faq: {
            items: [
                {
                    question: "Why is construction estimation important in Georgia?",
                    answer: "It keeps your project from drifting into chaos. Costs shift by region, so a grounded estimate keeps surprises from wrecking your budget."
                },
                {
                    question: "How long does an estimate usually take?",
                    answer: "Honestly, it depends. Small jobs move fast, but bigger builds need patience, plans, and revisions, and Georgia’s quirks slow things down sometimes."
                },
                {
                    question: "What affects pricing the most?",
                    answer: "Materials, labor, and timing. Georgia weather sneaks in too much rain, heat, and delays. Even tiny design changes can nudge numbers higher before anyone notices."
                },
                {
                    question: "Can I estimate things myself?",
                    answer: "Sure, for rough guesses. But Georgia projects have quirks, and a pro catches details you’d probably skim past when you’re rushing through plans."
                },
                {
                    question: "Are estimates perfect?",
                    answer: "Our estimates are not perfect, but they stay close."
                },

            ]
        },
        cta: {
            heading: "Contact our team and get the best construction estimating service in Georgia. Upload your plan and get a quote in the next 5-10 mins."
        },
        portfolio: {
            heading: "Our Portfolio",
            description: [
                "We offer reliable and exceptional service with 98-99% accuracy. With the help of a thorough understanding of the construction industry, we provide customised solutions for your projects and maintain availability. We have 20 years of experience with a proven 98% bid-winning result history. When it comes to construction projects, having a transparent and detailed estimating service is absolutely key to ensuring everything runs smoothly. We are expert construction estimators that break down the costs in a clear and organised manner, giving clients honest details and a no-surprises breakdown of materials, labour, permits, and any additional expenses.",
                "Services we offer in Georgia include HVAC estimating service in Georgia, plumbing estimating, MEP estimating in Georgia, residential estimating services, piping estimating, lumber takeoff service, drywall estimating services, mechanical estimating, roofing estimating services, framing estimating, commercial estimating in Georgia, and electrical estimating services in Georgia."
            ],
            items: [
                {
                    heading: "Atlanta, Georgia Full-Scope Construction Cost Estimating",
                    answer: "In Atlanta, projects move fast, and honestly, the numbers can feel like they are doing cartwheels some days. That’s where we step in. We dig into the plans, the materials, and the details and pull together a realistic cost estimate that won’t leave you clutching your head later. It’s thorough, but not in a cold spreadsheet-only way; we try to translate the chaos into something that actually makes sense."
                },
                {
                    heading: "Savannah, Georgia Historic Renovation & Restoration Estimates",
                    answer: "Savannah has this charm that makes you want to whisper when you walk by certain buildings. Renovating here is not just construction; it’s like stepping into a story. Our estimation work in the city leans into that. We account for the quirks of older structures, the surprises behind the walls, the delicate materials, and the stuff no one wants to talk about until it pops up mid-project. The goal is to give you a number that respects the history and keeps your budget from spiraling into the unknown."
                },
                {
                    heading: "Macon, Georgia Residential Build & Remodel Takeoffs",
                    answer: "In Macon, we do a lot of straightforward estimating for homeowners and builders who just want clarity without the headache. Lumber counts, finish selections, and that sudden change. The estimates feel practical, almost conversational, like sitting down with someone who actually listens instead of rattling off technical jargon just to sound smart."
                }
            ]
        },
        areaNearMe: {
            heading: "Georgia Construction Estimating Service Near Me",
            description: [
                "Paradise Estimating is providing every kind of estimating service in Georgia. Every region has its own construction culture, cost trends, and permitting rules. We stay educated on these local differences so your project receives an estimate that reflects your area, not someone else’s. We proudly serve clients across the entire state, including Atlanta, Georgia; Savannah; Macon; Augusta; Albany; Athens; Valdosta; Columbus; Sandy Springs; Roswell; Warner Robins; Johns Creek; Alpharetta; Marietta; Valdosta; Smyrna; Dalton; Athens; Redan; Statesboro; East Point; Lagrange; Woodstock; Dunwoody; and Kennesaw.",
                ""
            ]
        }
    },
    "illinois": {
        stateName: "Illinois",
        hero: {
            title: "",
            description: [
                "",
                ""
            ],
            image: "/assets/services.png"
        },
        uniqueApproach: {
            heading: "",
            description: [
                "",
                ""
            ],
            points: [
                "",
                "",
                "",
                "",
                "",
                ""
            ],
            turnaroundTime: ""
        },
        reliableServices: {
            heading: "",
            description: [
                "",
                ""
            ],
            services: [
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" }
            ]
        },
        estimatesAndTakeoff: {
            heading: "",
            description: "",
            cards: [
                {
                    title: "",
                    image: "/assets/building.webp",
                    desc: "",
                    points: ["", "", "", "", "", "", "", ""]
                },
                {
                    title: "",
                    image: "/assets/choose.webp",
                    desc: "",
                    points: ["", "", "", "", "", "", "", "", ""]
                },
                {
                    title: "",
                    image: "/assets/governmental.webp",
                    desc: "",
                    points: ["", "", "", "", "", "", "", ""]
                },
                {
                    title: "",
                    image: "/assets/takeoff.webp",
                    desc: "",
                    points: ["", "", "", "", "", "", "", "", ""]
                }
            ]
        },
        detailedServices: {
            heading: "",
            description: [
                "",
                ""
            ],
            trades: [
                "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
            ]
        },
        ourClients: {
            heading: "",
            description: [
                "",
                ""
            ],
            clients: [
                "", "", "", "", "", "", "", "", ""
            ]
        },
        process: {
            heading: "",
            description: "",
            steps: [
                "",
                "",
                "",
                "",
                "",
                ""
            ]
        },
        tools: {
            heading: "",
            description: [
                "",
                ""
            ],
            bidWinRatio: "",
            toolsList: [
                { name: "Bluebeam", image: "/assets/logos/blue.jpg" },
                { name: "Planswift", image: "/assets/logos/plan.jpg" },
                { name: "RS Means", image: "/assets/logos/rs.jpg" },
                { name: "Cost-X", image: "/assets/logos/cost.jpg" },
                { name: "FastWRAP", image: "/assets/logos/fast.jpg" },
                { name: "Cost-work", image: "/assets/logos/Coststimator_logo.jpg" },
                { name: "Quest Estimating", image: "/assets/logos/quest.jpg" }
            ]
        },
        expertLocalService: {
            heading: "",
            description: [
                "",
                ""
            ],
            image: "/assets/aboutus.webp"
        },
        faq: {
            items: [
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                }
            ]
        },
        cta: {
            heading: ""
        },
        portfolio: {
            heading: "",
            description: [
                "",
                ""
            ],
            items: [
                {
                    heading: "",
                    answer: ""
                },
                {
                    heading: "",
                    answer: ""
                },
                {
                    heading: "",
                    answer: ""
                }
            ]
        },
        areaNearMe: {
            heading: "",
            description: [
                "",
                ""
            ]
        }
    },
    "arizona": {
        stateName: "Arizona",
        hero: {
            title: "",
            description: [
                "",
                ""
            ],
            image: "/assets/services.png"
        },
        uniqueApproach: {
            heading: "",
            description: [
                "",
                ""
            ],
            points: [
                "",
                "",
                "",
                "",
                "",
                ""
            ],
            turnaroundTime: ""
        },
        reliableServices: {
            heading: "",
            description: [
                "",
                ""
            ],
            services: [
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" }
            ]
        },
        estimatesAndTakeoff: {
            heading: "",
            description: "",
            cards: [
                {
                    title: "",
                    image: "/assets/building.webp",
                    desc: "",
                    points: ["", "", "", "", "", "", "", ""]
                },
                {
                    title: "",
                    image: "/assets/choose.webp",
                    desc: "",
                    points: ["", "", "", "", "", "", "", "", ""]
                },
                {
                    title: "",
                    image: "/assets/governmental.webp",
                    desc: "",
                    points: ["", "", "", "", "", "", "", ""]
                },
                {
                    title: "",
                    image: "/assets/takeoff.webp",
                    desc: "",
                    points: ["", "", "", "", "", "", "", "", ""]
                }
            ]
        },
        detailedServices: {
            heading: "",
            description: [
                "",
                ""
            ],
            trades: [
                "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
            ]
        },
        ourClients: {
            heading: "",
            description: [
                "",
                ""
            ],
            clients: [
                "", "", "", "", "", "", "", "", ""
            ]
        },
        process: {
            heading: "",
            description: "",
            steps: [
                "",
                "",
                "",
                "",
                "",
                ""
            ]
        },
        tools: {
            heading: "",
            description: [
                "",
                ""
            ],
            bidWinRatio: "",
            toolsList: [
                { name: "Bluebeam", image: "/assets/logos/blue.jpg" },
                { name: "Planswift", image: "/assets/logos/plan.jpg" },
                { name: "RS Means", image: "/assets/logos/rs.jpg" },
                { name: "Cost-X", image: "/assets/logos/cost.jpg" },
                { name: "FastWRAP", image: "/assets/logos/fast.jpg" },
                { name: "Cost-work", image: "/assets/logos/Coststimator_logo.jpg" },
                { name: "Quest Estimating", image: "/assets/logos/quest.jpg" }
            ]
        },
        expertLocalService: {
            heading: "",
            description: [
                "",
                ""
            ],
            image: "/assets/aboutus.webp"
        },
        faq: {
            items: [
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                }
            ]
        },
        cta: {
            heading: ""
        },
        portfolio: {
            heading: "",
            description: [
                "",
                ""
            ],
            items: [
                {
                    heading: "",
                    answer: ""
                },
                {
                    heading: "",
                    answer: ""
                },
                {
                    heading: "",
                    answer: ""
                }
            ]
        },
        areaNearMe: {
            heading: "",
            description: [
                "",
                ""
            ]
        }
    },
    "north-carolina": {
        stateName: "North Carolina",
        hero: {
            title: "",
            description: [
                "",
                ""
            ],
            image: "/assets/services.png"
        },
        uniqueApproach: {
            heading: "",
            description: [
                "",
                ""
            ],
            points: [
                "",
                "",
                "",
                "",
                "",
                ""
            ],
            turnaroundTime: ""
        },
        reliableServices: {
            heading: "",
            description: [
                "",
                ""
            ],
            services: [
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" },
                { title: "" }
            ]
        },
        estimatesAndTakeoff: {
            heading: "",
            description: "",
            cards: [
                {
                    title: "",
                    image: "/assets/building.webp",
                    desc: "",
                    points: ["", "", "", "", "", "", "", ""]
                },
                {
                    title: "",
                    image: "/assets/choose.webp",
                    desc: "",
                    points: ["", "", "", "", "", "", "", "", ""]
                },
                {
                    title: "",
                    image: "/assets/governmental.webp",
                    desc: "",
                    points: ["", "", "", "", "", "", "", ""]
                },
                {
                    title: "",
                    image: "/assets/takeoff.webp",
                    desc: "",
                    points: ["", "", "", "", "", "", "", "", ""]
                }
            ]
        },
        detailedServices: {
            heading: "",
            description: [
                "",
                ""
            ],
            trades: [
                "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""
            ]
        },
        ourClients: {
            heading: "",
            description: [
                "",
                ""
            ],
            clients: [
                "", "", "", "", "", "", "", "", ""
            ]
        },
        process: {
            heading: "",
            description: "",
            steps: [
                "",
                "",
                "",
                "",
                "",
                ""
            ]
        },
        tools: {
            heading: "",
            description: [
                "",
                ""
            ],
            bidWinRatio: "",
            toolsList: [
                { name: "Bluebeam", image: "/assets/logos/blue.jpg" },
                { name: "Planswift", image: "/assets/logos/plan.jpg" },
                { name: "RS Means", image: "/assets/logos/rs.jpg" },
                { name: "Cost-X", image: "/assets/logos/cost.jpg" },
                { name: "FastWRAP", image: "/assets/logos/fast.jpg" },
                { name: "Cost-work", image: "/assets/logos/Coststimator_logo.jpg" },
                { name: "Quest Estimating", image: "/assets/logos/quest.jpg" }
            ]
        },
        expertLocalService: {
            heading: "",
            description: [
                "",
                ""
            ],
            image: "/assets/aboutus.webp"
        },
        faq: {
            items: [
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                },
                {
                    question: "",
                    answer: ""
                }
            ]
        },
        cta: {
            heading: ""
        },
        portfolio: {
            heading: "",
            description: [
                "",
                ""
            ],
            items: [
                {
                    heading: "",
                    answer: ""
                },
                {
                    heading: "",
                    answer: ""
                },
                {
                    heading: "",
                    answer: ""
                }
            ]
        },
        areaNearMe: {
            heading: "",
            description: [
                "",
                ""
            ]
        }
    }
};
