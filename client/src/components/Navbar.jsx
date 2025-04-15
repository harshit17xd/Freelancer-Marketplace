import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const Navbar = () => {
  const { isLoggedIn, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <svg
                className="h-8 w-8 text-white group-hover:text-blue-200 transition-colors duration-200"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-2xl font-bold group-hover:text-blue-200 transition-colors duration-200">
                WorkFree
              </span>
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for projects..."
                className="w-full bg-blue-700/30 text-white placeholder-blue-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/50 border border-blue-300/50"
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-blue-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {isLoggedIn ? (
              <>
                <Link
                  to="/dashboard"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Dashboard
                </Link>
                <Link
                  to="/skill-exchange"
                  className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center gap-1"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                  Skill Exchange
                </Link>
                <Link
                  to="/profile"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-200"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  to="/login"
                  className="text-blue-100 hover:text-white transition-colors duration-200"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full transition-colors duration-200 font-medium shadow-md hover:shadow-lg"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-blue-100 hover:text-white focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {/* Search Bar - Mobile */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for projects..."
                  className="w-full bg-blue-700/30 text-white placeholder-blue-200 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-white/50 border border-blue-300/50"
                />
                <svg
                  className="absolute right-3 top-2.5 h-5 w-5 text-blue-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              {isLoggedIn ? (
                <>
                  <Link
                    to="/dashboard"
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/skill-exchange"
                    className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center gap-1"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                    Skill Exchange
                  </Link>
                  <Link
                    to="/profile"
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    Profile
                  </Link>
                  <button
                    onClick={logout}
                    className="bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-200 text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to="/"
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    Home
                  </Link>
                  <Link
                    to="/login"
                    className="text-blue-100 hover:text-white transition-colors duration-200"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full transition-colors duration-200 font-medium shadow-md hover:shadow-lg inline-block text-center"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;