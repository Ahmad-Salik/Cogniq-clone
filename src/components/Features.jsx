export default function Features() {
  const features = [
    {
      title: "High-Trust Engineering",
      desc: "We build systems with reliability and transparency at the core.",
    },
    {
      title: "Built for Scale",
      desc: "Our solutions grow with your business seamlessly.",
    },
    {
      title: "Gen AI Expertise",
      desc: "Leverage cutting-edge AI to stay ahead of the curve.",
    },
    {
      title: "Fast Delivery",
      desc: "We move quickly without compromising on quality.",
    },
  ];

  return (
    <section className="px-8 py-28 bg-gray-50">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Us?
          </h2>

          <p className="mt-4 text-gray-600">
            We combine deep technical expertise with a product-first mindset to deliver scalable AI solutions.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="grid grid-cols-2 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              <h3 className="font-semibold text-lg">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}