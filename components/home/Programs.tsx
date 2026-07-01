'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BookOpen, GraduationCap, Award, Calendar, DollarSign, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  { id: 'lang', label: 'Language Study' },
  { id: 'bachelor', label: "Bachelor's Degree" },
  { id: 'master', label: "Master's & PhD" },
];

const PROGRAM_DETAILS: Record<string, {
  title: string;
  duration: string;
  tuition: string;
  scholarship: string;
  requirements: string[];
  description: string;
  icon: any;
}> = {
  lang: {
    title: 'Chinese Language & Culture Program',
    duration: '1 Semester or 1-2 Years',
    tuition: '8,000 - 15,000 RMB / Year',
    scholarship: 'Partial Scholarships (covers up to 50% tuition)',
    description: 'Perfect for students of all levels wanting to master Mandarin. Immersion programs in Beijing, Shanghai, and beautiful historic cities.',
    requirements: [
      'High school diploma or equivalent',
      'Age between 18 and 35',
      'No prior Chinese language knowledge required (beginners welcome)'
    ],
    icon: BookOpen
  },
  bachelor: {
    title: "English-Taught Bachelor's Degrees",
    duration: '4 Years',
    tuition: '16,000 - 30,000 RMB / Year',
    scholarship: 'Up to 100% Tuition Waiver + Free Campus Accommodation',
    description: 'Earn a globally recognized degree in Business, Engineering, Computer Science, or Medicine (MBBS) fully taught in English.',
    requirements: [
      'High school graduate with good transcripts',
      'English proficiency certificate (IELTS 5.5+, TOEFL 70+, or English medium proof)',
      'Age under 25 for full scholarship consideration'
    ],
    icon: GraduationCap
  },
  master: {
    title: "Master's & Doctoral Programs (Fully Funded)",
    duration: '2-4 Years',
    tuition: '20,000 - 45,000 RMB / Year (Usually 100% waived)',
    scholarship: 'Full CSC Scholarship: Tuition waived, free single/double dorm, and 3,000 - 3,500 RMB / Month living allowance',
    description: 'Advanced research degrees at China\'s highest-ranked universities. Accelerate your career or academic pursuits with high-value research stipends.',
    requirements: [
      'Bachelor\'s or Master\'s degree in matching field',
      'Two recommendation letters from professors/associate professors',
      'Study plan or research proposal (500+ words)'
    ],
    icon: Award
  }
};

export default function Programs() {
  const [activeTab, setActiveTab] = useState('lang');
  const details = PROGRAM_DETAILS[activeTab];
  const Icon = details.icon;

  return (
    <section id="programs" className="bg-slate-50 py-16 md:py-24 border-b border-border/40 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Curriculum Options
          </span>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight mt-2 mb-4">
            Find Your Dream Academic Path
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            We partner with leading universities to offer high-quality degree paths. Explore options tailored to your qualifications and language level.
          </p>
        </div>

        {/* Tab Controls (Mobile: horizontal scrollable, Desktop: centered bar) */}
        <div className="flex justify-start md:justify-center overflow-x-auto pb-4 mb-8 md:mb-12 scrollbar-none border-b border-border/60">
          <div className="flex space-x-1 bg-slate-200/60 p-1.5 rounded-2xl shrink-0">
            {CATEGORIES.map((cat) => {
              const isSelected = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`tab-btn-${cat.id}`}
                  onClick={() => setActiveTab(cat.id)}
                  className={`text-xs sm:text-sm font-semibold rounded-xl px-5 py-3 transition-all duration-200 shrink-0 ${
                    isSelected
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Tab Showcase Panel */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-border/60 shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                
                {/* Information Left */}
                <div className="md:col-span-7 space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {details.title}
                      </h3>
                      <p className="text-xs font-semibold text-secondary mt-0.5">
                        Guaranteed University Admission Pathways
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {details.description}
                  </p>

                  <div className="border-t border-border pt-6 grid grid-cols-2 gap-4">
                    <div className="flex items-start space-x-2">
                      <Calendar className="h-4.5 w-4.5 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">Duration</p>
                        <p className="text-xs font-bold text-foreground mt-0.5">{details.duration}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <DollarSign className="h-4.5 w-4.5 text-slate-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[10px] font-bold text-muted-foreground uppercase">Estimated Fees</p>
                        <p className="text-xs font-bold text-foreground mt-0.5">{details.tuition}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                      Scholarship Potential
                    </span>
                    <p className="text-xs font-bold text-slate-800 mt-1">
                      {details.scholarship}
                    </p>
                  </div>
                </div>

                {/* Requirements Right */}
                <div className="md:col-span-5 bg-slate-50/50 rounded-2xl p-6 border border-border/40 space-y-4">
                  <h4 className="text-xs font-bold text-foreground uppercase tracking-widest">
                    Eligibility Criteria
                  </h4>
                  <ul className="space-y-3">
                    {details.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-xs text-muted-foreground leading-relaxed">
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary/10 text-secondary mr-3 shrink-0 text-[10px] font-bold">
                          ✓
                        </span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <Link
                      href="/inquiry"
                      id={`apply-${activeTab}-btn`}
                      className="group flex w-full items-center justify-center rounded-xl bg-primary py-3 text-xs font-bold text-white shadow-md shadow-primary/10 hover:bg-opacity-95 active:scale-98 transition-all"
                    >
                      Check Eligibility
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
