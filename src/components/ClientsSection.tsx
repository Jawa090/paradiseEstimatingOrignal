const ClientsSection = () => {
  // Placeholder for client logos
  const clients = [
    { name: "P & M Inc" },
    { name: "FOXY" },
    { name: "JH" },
    { name: "XYZ Corp" },
    { name: "ABC Ltd" },
    { name: "Builders Pro" },
  ];

  return (
    <section className="py-8 lg:py-12 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            OUR <span className="text-[#7ED957]">2000+ TRUSTED</span>  CONSTRUCTION ESTIMATING CLIENTS
          </h2>
          <p className="text-lg text-muted-foreground">
            Proud to work with industry-leading construction companies
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-secondary rounded-lg hover:bg-secondary/70 transition-colors grayscale hover:grayscale-0"
            >
              <div className="text-2xl font-bold text-muted-foreground">
                {client.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
