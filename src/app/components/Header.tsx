'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const { data: session } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Set initial scroll state
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/about', label: 'About' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/blog', label: 'Blog' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-sm ${
        isScrolled ? 'border-b border-gray-200' : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link href="/" className="relative flex items-center">
            <div className="relative w-48 h-12">
              <Image
                src="/logo-color.png"
                alt="AlterMindAI Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="sr-only">AlterMindAI</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors text-sm font-medium text-gray-600 hover:text-gray-900 ${
                  pathname === link.href ? 'text-indigo-600' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            {session?.user?.role === 'admin' && (
              <Link
                href="/admin/blog"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Blog Management
              </Link>
            )}
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-medium transition-colors bg-indigo-600 text-white hover:bg-indigo-700"
            >
              Book a Demo
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors text-sm font-medium text-gray-600 hover:text-gray-900 ${
                    pathname === link.href ? 'text-indigo-600' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {session?.user?.role === 'admin' && (
                <Link
                  href="/admin/blog"
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog Management
                </Link>
              )}
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-lg text-sm font-medium transition-colors text-center bg-indigo-600 text-white hover:bg-indigo-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
} 