import Link from 'next/link';
import { Mail, Phone, MapPin, MessageSquare, ShieldCheck, CheckCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-900">
      {/* Trust Badges Bar */}
      <div className="border-b border-slate-900 bg-slate-950/50 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-around gap-6 text-slate-400 text-xs font-medium">
            <span className="flex items-center">
              <ShieldCheck className="h-4 w-4 mr-2 text-primary" />
              ICEF Certified Agency #4102
            </span>
            <span className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2 text-accent" />
              Official Ministry of Education Partner
            </span>
            <span className="flex items-center">
              <ShieldCheck className="h-4 w-4 mr-2 text-secondary" />
              99.2% Verified Visa Success Rate
            </span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {/* Logo & About */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold shadow-md">
                中
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                ChinaEdu
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Your high-trust portal to elite education in China. We simplify university admissions, scholarship applications, and visa processing for international students.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Programs
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#programs" className="hover:text-primary transition-colors">
                  Chinese Language Programs
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-primary transition-colors">
                  Bachelor's Degrees
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-primary transition-colors">
                  Master's & PhD
                </Link>
              </li>
              <li>
                <Link href="#programs" className="hover:text-primary transition-colors">
                  Scholarships Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="#process" className="hover:text-primary transition-colors">
                  Application Timeline
                </Link>
              </li>
              <li>
                <Link href="#process" className="hover:text-primary transition-colors">
                  Document Requirements
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-primary transition-colors">
                  Student Testimonials
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-primary transition-colors">
                  Privacy Policy & Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                <span>Chaoyang District, Beijing, China</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-primary shrink-0" />
                <a href="mailto:admissions@chinaedu.org" className="hover:text-white transition-colors">
                  admissions@chinaedu.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-primary shrink-0" />
                <span>+86 10 8827 3391</span>
              </li>
              <li className="flex items-center bg-slate-900 px-3 py-2 rounded-lg border border-slate-800 text-xs">
                <MessageSquare className="h-4 w-4 mr-2 text-secondary shrink-0" />
                <span>WeChat Support: <strong>ChinaEdu_Admit</strong></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {currentYear} ChinaEdu Agency. All rights reserved.</p>
          <p className="flex items-center">
            Designed for secure, high-speed mobile and desktop admissions.
          </p>
        </div>
      </div>
    </footer>
  );
}
