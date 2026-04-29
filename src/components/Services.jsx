export default function Services() {
  const services = [
    {
      title: "AI-Powered Customer Service",
      desc: "Automate 80% of routine queries and turn your support center into a revenue driver.",
      icon: "🎧",
    },
    {
      title: "Automated Scheduling & Operations",
      desc: "Eliminate no-shows and recover thousands in lost revenue with intelligent automation.",
      icon: "📅",
    },
    {
      title: "Intelligent Inventory Management",
      desc: "Prevent stockouts and make data-driven decisions with predictive forecasting.",
      icon: "📊",
    },
    {
      title: "Micro Tools & Extensions",
      desc: "Lightweight tools powered by AI to boost productivity.",
      icon: "🛠️",
    },
  ];

  return (
    <section className="px-8 py-28 bg-white">

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-700">
          OUR SERVICES
        </h2>

        <div className="w-16 h-1 bg-indigo-600 mt-2 mb-6 rounded"></div>

        <p className="text-gray-600 mb-12">
          Solve your biggest challenges with end-to-end AI solutions.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl font-semibold text-indigo-700">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <button className="text-indigo-600 font-medium hover:underline">
            View all Services →
          </button>
        </div>

      </div>
    </section>
  );
}