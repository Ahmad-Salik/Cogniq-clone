import logo from "../assets/logo.jpg";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Cogniq AI"
            className="w-9 h-9 object-contain"
          />
          <span className="text-xl font-bold text-indigo-600">
            Cogniq AI
          </span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-600 font-medium">
          <span className="text-indigo-600">Home</span>
          <span>About Us</span>
          <span>Services</span>
          <span>Our Lab</span>
          <span>Blogs</span>
        </div>

        {/* Button */}
        <button className="px-5 py-2 rounded-lg text-white bg-gradient-to-r from-indigo-600 to-purple-600 shadow-md">
          Contact Us
        </button>

      </div>

    </nav>
  );
}