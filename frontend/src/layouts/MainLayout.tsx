import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from '../components/ThemeToggle';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = !!localStorage.getItem('token');
  const [logoError, setLogoError] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/industries', label: 'Industries' },
    { path: '/services', label: 'Products & Services' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/why-choose-us', label: 'Why Choose Us' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen text-[color:var(--c-text)]">
      <header className="header fixed top-0 left-0 right-0 z-50 bg-[color:var(--c-surface)]/85 backdrop-blur-xl border-b border-[color:var(--c-border)]">
        <nav className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <Link
              to="/"
              className="flex items-center gap-3 text-2xl font-bold text-[color:var(--c-text)] hover:text-emerald-600 dark:hover:text-blue-400 transition-colors"
            >
              {!logoError ? (
                <img
                  src="/images/logo.png"
                  alt="CORTAVIA"
                  className="w-10 h-10 object-contain"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center dark:from-blue-500 dark:to-purple-600">
                  <span className="text-white text-lg font-bold">C</span>
                </div>
              )}
              <span className="text-slate-900 dark:text-white">CORTAVIA</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-2 py-2 font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-emerald-700 dark:text-blue-300'
                      : 'text-slate-700 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-blue-200'
                  }`}
                >
                  {link.label}
                  {location.pathname === link.path && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-emerald-600 dark:from-blue-500 dark:to-purple-500"></span>
                  )}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-slate-700 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-blue-200 transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-[color:var(--c-border)]">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      location.pathname === link.path
                        ? 'bg-emerald-500/12 text-emerald-800 dark:bg-blue-500/15 dark:text-blue-200'
                        : 'text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 dark:text-slate-300 dark:hover:text-blue-200 dark:hover:bg-slate-900'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-[color:var(--c-surface-2)] border-t border-[color:var(--c-border)] py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-700 to-emerald-500 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                CORTAVIA
              </h3>
              <p className="text-emerald-700 dark:text-blue-400 font-semibold mb-2">THINK beyond AI</p>
              <p className="text-slate-600 dark:text-slate-400 text-sm">Future-ready AI solutions for your business.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/services" className="text-slate-600 hover:text-emerald-700 transition-colors text-sm dark:text-slate-400 dark:hover:text-blue-400">
                    AI Solutions
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-600 hover:text-emerald-700 transition-colors text-sm dark:text-slate-400 dark:hover:text-blue-400">
                    Process Automation
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-slate-600 hover:text-emerald-700 transition-colors text-sm dark:text-slate-400 dark:hover:text-blue-400">
                    HR Intelligence
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Company</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-slate-600 hover:text-emerald-700 transition-colors text-sm dark:text-slate-400 dark:hover:text-blue-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-slate-600 hover:text-emerald-700 transition-colors text-sm dark:text-slate-400 dark:hover:text-blue-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-slate-900 dark:text-white">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:contact@cortavia.in" className="text-slate-600 hover:text-emerald-700 transition-colors text-sm dark:text-slate-400 dark:hover:text-blue-400">
                    contact@cortavia.in
                  </a>
                </li>
                <li className="text-slate-600 dark:text-slate-400 text-sm">
                  Bengaluru, Karnataka<br />
                  Sanchore, Rajasthan
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[color:var(--c-border)] pt-8 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} CORTAVIA AI Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;

