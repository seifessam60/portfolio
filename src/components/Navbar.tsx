import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId : string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false); // Close menu after clicking
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name with Badge */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-blue-500 cursor-pointer"
            >
              Seif Essam
            </button>
            {/* Small Available Badge */}
            <span className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-medium rounded-full border border-green-500/30">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              Available for Hire
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? (
              // X icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700">
          <div className="px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-300 hover:text-white transition-colors py-2"
            >
              Contact
            </button>
            
            {/* Available badge in mobile menu */}
            <div className="pt-3 border-t border-gray-700">
              <div className="flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 text-sm rounded-lg border border-green-500/30 justify-center">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Available for Hire
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar