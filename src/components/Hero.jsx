export default function Hero() {
  return (
    <section className="relative text-center py-32 px-6 overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50 to-transparent"></div>
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(#e5e7eb_1px,transparent_1px),linear-gradient(to_right,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Building{" "}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
            Intelligent
          </span>
          , scalable AI solutions for the{" "}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-500 bg-clip-text text-transparent">
            Next
          </span>{" "}
          Generation
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
          Your premier AI & Software engineering partner — transforming ideas
          into reliable, high-performance products.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
          
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 transition">
            Explore our services
          </button>

          <button className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 transition">
            Book a Strategy Call
          </button>

        </div>
      </div>
    </section>
  );
}