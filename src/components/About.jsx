export default function About() {
  return (
    <section className="px-6 md:px-12 py-32 bg-[#F7F8FC]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="relative">

          {/* Purple vertical bar */}
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-2 h-40 bg-gradient-to-b from-indigo-600 to-purple-600 rounded-full"></div>

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995"
            alt="AI"
            className="w-full h-[320px] object-cover rounded-2xl shadow-md"
          />

        </div>

        {/* RIGHT SIDE */}
        <div>

          {/* Tag */}
          <span className="text-xs px-4 py-1 bg-purple-100 text-indigo-600 rounded-full font-medium">
            ABOUT US
          </span>

          {/* Heading */}
          <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
            Engineering Trust.{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Delivering Intelligence.
            </span>
          </h2>

          {/* Sub heading */}
          <h3 className="mt-6 text-2xl font-semibold">
            At Cogniq AI
          </h3>

          {/* Paragraph */}
          <p className="mt-4 text-gray-600 leading-relaxed max-w-lg">
            We don’t just develop features, we build full-scale AI systems designed 
            for clarity, transparency, and long-term growth. From startups to enterprises, 
            we partner with teams that want to innovate without compromising on quality.
          </p>

          {/* Button */}
          <button className="mt-6 px-6 py-3 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md hover:opacity-90 transition">
            Know more about us →
          </button>

        </div>
      </div>
    </section>
  );
}