'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Globe, Home, Award, BookOpen, GraduationCap, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { id: 'nav-home', label: 'Home', href: '/', icon: Home },
  { id: 'nav-universities', label: 'Universities', href: '/universities', icon: GraduationCap },
  { id: 'nav-scholarships', label: 'Scholarships', href: '/#programs', icon: Award },
  { id: 'nav-services', label: 'Services', href: '/services', icon: Compass },
  { id: 'nav-blog', label: 'Blog/Guides', href: '/blog', icon: BookOpen },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full glass-effect border-b border-border/40 transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              id="nav-logo" 
              className="flex items-center space-x-2 group"
              onClick={closeMenu}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold shadow-md shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
                中
              </span>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-foreground leading-none group-hover:text-primary transition-colors duration-300">
                  ChinaEdu
                </span>
                <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
                  Admissions Agency
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.id}
                  id={link.id}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 relative py-1 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* CTA & Language indicator (Desktop) */}
            <div className="hidden md:flex items-center space-x-4">
              <span className="flex items-center text-xs font-semibold text-muted-foreground bg-muted py-1.5 px-3 rounded-full border border-border/60">
                <Globe className="h-3.5 w-3.5 mr-1 text-secondary" />
                English / 中文
              </span>
              <Link
                href="/inquiry"
                id="desktop-cta-btn"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:bg-opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Apply Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center space-x-3">
              <span className="flex items-center text-xs font-medium text-muted-foreground bg-muted p-1.5 rounded-lg border border-border/60">
                <Globe className="h-3.5 w-3.5 text-secondary" />
              </span>
              <button
                id="mobile-menu-toggle"
                onClick={toggleMenu}
                className="p-2 rounded-xl text-foreground hover:bg-muted focus:outline-none transition-colors"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (framer-motion) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black/60 md:hidden"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-background shadow-2xl flex flex-col px-6 py-20 border-l border-border/40"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col space-y-6">
                <div className="pb-4 border-b border-border/60">
                  <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">
                    Navigation
                  </span>
                </div>
                {NAV_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <Link
                      key={link.id}
                      id={`${link.id}-mobile`}
                      href={link.href}
                      onClick={closeMenu}
                      className="flex items-center text-base font-semibold text-foreground hover:text-primary transition-colors py-2"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-primary mr-4">
                        <Icon className="h-5 w-5" />
                      </span>
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-8 border-t border-border/60 flex flex-col space-y-4">
                  <div className="flex items-center justify-center text-xs font-semibold text-muted-foreground bg-muted py-2.5 px-4 rounded-xl border border-border/60">
                    <Globe className="h-4 w-4 mr-2 text-secondary" />
                    English / 中文 Support
                  </div>
                  <Link
                    href="/inquiry"
                    id="mobile-cta-btn"
                    onClick={closeMenu}
                    className="flex w-full items-center justify-center rounded-xl bg-primary py-3.5 text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 hover:bg-opacity-95 active:scale-98 transition-all"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>

              <div className="mt-auto text-center">
                <p className="text-xs text-muted-foreground">
                  Official University Admissions Partner
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
