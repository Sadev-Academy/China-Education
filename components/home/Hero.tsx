'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50 text-slate-900 min-h-[85vh] flex items-center pt-24 pb-16 md:pt-32 md:pb-24">
      
      {/* Background Image of Campus with trustworthy Soft Light Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center -z-20 transform scale-105"
        style={{ backgroundImage: `url('/images/campus_hero.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/98 via-slate-50/92 to-white/70 -z-10" />

      {/* Decorative Golden/Crimson Ambient Blobs */}
      <div className="absolute top-1/4 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-accent/5 blur-3xl" />
      <div className="absolute bottom-10 left-10 -z-10 h-[250px] w-[250px] rounded-full bg-primary/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text Contents */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900"
            >
              Start Your Academic<br />
              <span className="text-primary">
                Journey in China.
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl mb-8 leading-relaxed"
            >
              Personalized support for university admissions, scholarships, and cultural immersion. Simplify your transition to China's leading campuses.
            </motion.p>

            {/* Action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mb-8"
            >
              <Link
                href="/inquiry"
                id="hero-primary-cta"
                className="group inline-flex items-center justify-center rounded-xl bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/universities"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-8 py-4 text-base font-bold text-slate-800 hover:bg-slate-100 hover:text-slate-900 active:scale-[0.98] transition-all shadow-sm"
              >
                Search Universities
              </Link>
            </motion.div>

            {/* Key Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm font-semibold text-slate-700"
            >
              <div className="flex items-center">
                <CheckCircle2 className="h-4.5 w-4.5 text-secondary mr-2 shrink-0" />
                Guaranteed Scholarship Review
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4.5 w-4.5 text-secondary mr-2 shrink-0" />
                No Exam Admission Options
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4.5 w-4.5 text-secondary mr-2 shrink-0" />
                English-Medium Majors
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="h-4.5 w-4.5 text-secondary mr-2 shrink-0" />
                Full Landing Support
              </div>
            </motion.div>
          </div>

          {/* Right: Simulated steps progress card */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full max-w-sm rounded-3xl bg-white/95 backdrop-blur-md p-6 shadow-2xl relative border border-slate-200/80"
            >
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-accent text-accent-foreground font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                September 2026 Intake
              </div>

              <div className="space-y-6">
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                    Simple Admission Steps
                  </span>
                  <h3 className="text-xl font-bold mt-1 text-slate-900">
                    Apply in 3 Steps
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct paths to C9 league and double first-class Chinese universities.
                  </p>
                </div>

                <div className="space-y-4">
                  <Link href="/inquiry" className="flex items-center space-x-3 p-3 bg-slate-50/80 rounded-xl border border-slate-100 hover:bg-slate-100/60 hover:border-slate-200/80 transition-all">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-white text-[11px] font-bold">
                      1
                    </span>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-slate-800">Consultation Form</p>
                      <p className="text-[10px] text-slate-500">Complete the 3-step profile check.</p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-slate-400" />
                  </Link>

                  <div className="flex items-center space-x-3 p-3 bg-slate-50/30 rounded-xl border border-slate-100/50 opacity-60">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-[11px] font-bold text-slate-500">
                      2
                    </span>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-slate-600">University Selection</p>
                      <p className="text-[10px] text-slate-450">Select programs matched to your GPA.</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-slate-50/30 rounded-xl border border-slate-100/50 opacity-60">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-[11px] font-bold text-slate-500">
                      3
                    </span>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-slate-600">Official Visa Letter</p>
                      <p className="text-[10px] text-slate-450">Receive JW202 form for your visa interview.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500">
                  <span>Counseling Queue:</span>
                  <span className="flex items-center font-semibold text-secondary animate-pulse">
                    <span className="h-2 w-2 rounded-full bg-secondary mr-2" />
                    Advisors Available Online
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
