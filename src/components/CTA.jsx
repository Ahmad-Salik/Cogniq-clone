export default function CTA() {
  return (
    <section className="px-8 py-32">
      <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden relative">

        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          className="w-full h-64 object-cover"
        />

        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center text-white px-6">
          <h2 className="text-3xl font-bold">
            Ready to transform Your Workflow?
          </h2>

          <p className="mt-4 text-gray-200">
            Let's build a clear roadmap to solve your biggest challenges.
          </p>

          <button className="mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg">
            Book a Strategy Call →
          </button>
        </div>

      </div>
    </section>
  );
}