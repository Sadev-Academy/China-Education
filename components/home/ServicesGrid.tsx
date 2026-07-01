import { ShieldCheck, Landmark, Key, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HOMEPAGE_SERVICES = [
  {
    id: 'hs-matching',
    title: 'University & Scholarship Matching',
    description: 'We analyze your academic GPA and study preferences to match you with top Chinese universities and qualify you for full or partial scholarships.',
    icon: Landmark,
    color: 'text-primary bg-primary/10 border-primary/20',
  },
  {
    id: 'hs-visa',
    title: 'Visa & Documentation Support',
    description: 'Direct procurement of the critical JW202/JW201 forms. Complete physical exam coaching and embassy interview preparation to ensure 99%+ success.',
    icon: ShieldCheck,
    color: 'text-accent bg-accent/10 border-accent/20',
  },
  {
    id: 'hs-arrival',
    title: 'Housing & Post-Arrival Care',
    description: 'Guaranteed campus dormitory booking or safe off-campus leasing. Airport pickup, mobile Sim card setup, and local police registration within 24 hours.',
    icon: Key,
    color: 'text-secondary bg-secondary/10 border-secondary/20',
  }
];

export default function ServicesGrid() {
  return (
    <section className="bg-white py-16 md:py-24 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            What We Do
          </span>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight mt-2 mb-4">
            Custom Services Built for Student Success
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            From initial matching to landing in China, we stand by you at every step of your international student journey.
          </p>
        </div>

        {/* Responsive Grid: 1-col on mobile, 3-col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {HOMEPAGE_SERVICES.map((srv) => {
            const Icon = srv.icon;
            return (
              <div 
                key={srv.id}
                id={srv.id}
                className="bg-slate-50/50 rounded-3xl border border-slate-100 p-6 sm:p-8 flex flex-col justify-between hover:bg-white hover:border-slate-200 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-100/50 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${srv.color} transition-colors group-hover:scale-105 duration-350`}>
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-bold text-foreground">
                      {srv.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {srv.description}
                    </p>
                  </div>
                </div>

                {/* Learn More link */}
                <div className="pt-6 border-t border-slate-100/40 mt-8">
                  <Link 
                    href="/services"
                    className="inline-flex items-center text-xs font-bold text-primary group-hover:underline"
                  >
                    Explore Service Details
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
