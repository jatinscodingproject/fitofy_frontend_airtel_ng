// import { useState } from "react";

const Navbar: React.FC = () => {
  // const [menuOpen, setMenuOpen] = useState(false);

  // const scrollToVideos = () => {
  //   const section = document.getElementById("videos-section");
  //   if (section) {
  //     section.scrollIntoView({ behavior: "smooth" });
  //     setMenuOpen(false);
  //   }
  // };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <div className="text-3xl font-extrabold tracking-wide">
            Fito<span className="text-orange-500">fyy</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {/* <a href="#" className="hover:text-orange-400 transition">
              Home
            </a>

            <button
              onClick={scrollToVideos}
              className="hover:text-orange-400 transition"
            >
              Videos
            </button>

            <a
              href="/faq"
              className="hover:text-orange-400 transition"
            >
              FAQ
            </a>

            <a
              href="#contact"
              className="hover:text-orange-400 transition"
            >
              Contact
            </a> */}

            {/* Subscribe Button */}
            {/* <button className="ml-4 bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full text-sm font-semibold transition transform hover:scale-105 shadow-lg">
              Subscribe
            </button> */}
          </div>

          {/* Mobile Toggle */}
          {/* <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button> */}
        </div>
      </div>

      {/* Mobile Menu */}
      {/* {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-6 space-y-4 text-sm font-medium">
          <a href="#" className="block hover:text-orange-400">
            Home
          </a>

          <button
            onClick={scrollToVideos}
            className="block hover:text-orange-400"
          >
            Videos
          </button>

          <a href="/faq" className="block hover:text-orange-400">
            FAQ
          </a>

          <a href="#contact" className="block hover:text-orange-400">
            Contact
          </a>

          <button className="w-full mt-3 bg-orange-500 hover:bg-orange-600 py-2 rounded-full font-semibold transition">
            Subscribe
          </button>
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
