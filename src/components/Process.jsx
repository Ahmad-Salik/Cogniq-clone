export default function Process() {
  const steps = [
    {
      title: "Discovery",
      desc: "Understanding your goals and challenges.",
      img: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    },
    {
      title: "Design",
      desc: "Crafting user-focused AI solutions.",
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    },
    {
      title: "Development",
      desc: "Building scalable and reliable systems.",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Launch",
      desc: "Deploying and optimizing performance.",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
    },
  ];

  return (
    <section className="px-8 py-28 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Our Process
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl overflow-hidden group"
            >
              {/* Image */}
              <img
                src={step.img}
                alt={step.title}
                className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4">
                
                {/* Step number */}
                <span className="text-white text-sm opacity-70">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className="text-white font-semibold text-lg">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-sm">
                  {step.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}