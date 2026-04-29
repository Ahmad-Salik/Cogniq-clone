export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-8 py-16 mt-20">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-white font-bold text-lg">Cogniq AI</h2>
          <p className="mt-3 text-sm">
            Building intelligent AI apps that transform how you work.
          </p>
        </div>

        <div>
          <h3 className="text-white mb-3">Company</h3>
          <p>About</p>
          <p>Careers</p>
        </div>

        <div>
          <h3 className="text-white mb-3">AI Solutions</h3>
          <p>Custom AI</p>
          <p>Automation</p>
        </div>

        <div>
          <h3 className="text-white mb-3">Services</h3>
          <p>Consulting</p>
          <p>Development</p>
        </div>

      </div>

      <p className="text-center mt-10 text-sm">
        © 2026 Cogniq AI. All rights reserved.
      </p>

    </footer>
  );
}