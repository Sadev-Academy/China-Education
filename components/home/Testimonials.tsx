'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ALUMNI_TESTIMONIALS = [
  {
    id: 'test-amina',
    name: 'Amina Omondi',
    country: 'Kenya 🇰🇪',
    program: 'Master of Software Engineering',
    university: 'Tsinghua University',
    scholarship: 'CSC Full Scholarship',
    quote: 'Applying with ChinaEdu was the best choice I made because they secured my full CSC scholarship. Now I am studying Software Engineering at Tsinghua and living in Beijing has been incredibly eye-opening.',
    image: '/images/amina.png'
  },
  {
    id: 'test-carlos',
    name: 'Carlos Mendez',
    country: 'Colombia 🇨🇴',
    program: 'Chinese Language Program',
    university: 'Fudan University',
    scholarship: 'Confucius Scholarship',
    quote: 'The bilingual visa and housing support made my transition to Fudan University completely stress-free. Learning Mandarin in the heart of Shanghai is an academic adventure I highly recommend.',
    image: '/images/carlos.png'
  },
  {
    id: 'test-maria',
    name: 'Maria Petrova',
    country: 'Kazakhstan 🇰🇿',
    program: 'Bachelor of International Trade',
    university: 'Zhejiang University',
    scholarship: 'Zhejiang Provincial Scholarship',
    quote: 'I received honest counseling regarding my GPA and was matched with Zhejiang University. My accommodation and visa JW202 paperwork arrived early, and the ground support is superb.',
    image: '/images/maria.png'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ALUMNI_TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ALUMNI_TESTIMONIALS.length) % ALUMNI_TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="bg-slate-50 py-16 md:py-24 border-b border-border/40 scroll-mt-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Student Success
          </span>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight mt-2 mb-4">
            Alumni Success Stories
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Real experiences from students who launched their academic dreams in China with our guidance.
          </p>
        </div>

        {/* Testimonials Slider (Mobile view slider, Desktop view carousel/grid) */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Desktop Layout (3-Column Carousel Grid) */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {ALUMNI_TESTIMONIALS.map((alumnus) => (
              <div 
                key={alumnus.id} 
                className="bg-white rounded-3xl border border-border/40 p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 relative group"
              >
                {/* Quote decoration */}
                <div className="absolute top-6 right-6 text-slate-100 pointer-events-none">
                  <Quote className="h-10 w-10 transform scale-x-[-1]" />
                </div>

                <div className="space-y-4">
                  {/* Photo & Stars */}
                  <div className="flex items-center space-x-4">
                    <div className="relative h-14 w-14 rounded-2xl overflow-hidden border border-border shrink-0 shadow-sm">
                      <Image
                        src={alumnus.image}
                        alt={alumnus.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground leading-none">{alumnus.name}</h4>
                      <span className="text-[10px] text-muted-foreground block mt-1">{alumnus.country}</span>
                      <div className="flex space-x-0.5 mt-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 2-Sentence Quote */}
                  <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed pt-2">
                    "{alumnus.quote}"
                  </p>
                </div>

                {/* Subtitle credentials */}
                <div className="border-t border-slate-50 pt-4 mt-6">
                  <p className="text-[11px] font-semibold text-primary">{alumnus.program}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">
                    {alumnus.university} • <strong className="text-secondary">{alumnus.scholarship}</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Layout (Interactive single-slide with slider controls) */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-3xl border border-border/50 p-6 flex flex-col justify-between relative shadow-md"
              >
                {/* Quote decoration */}
                <div className="absolute top-6 right-6 text-slate-100 pointer-events-none">
                  <Quote className="h-8 w-8 transform scale-x-[-1]" />
                </div>

                <div className="space-y-4">
                  {/* Photo, Stars, Name */}
                  <div className="flex items-center space-x-4">
                    <div className="relative h-14 w-14 rounded-2xl overflow-hidden border border-border shrink-0 shadow-sm">
                      <Image
                        src={ALUMNI_TESTIMONIALS[currentIndex].image}
                        alt={ALUMNI_TESTIMONIALS[currentIndex].name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-foreground leading-none">
                        {ALUMNI_TESTIMONIALS[currentIndex].name}
                      </h4>
                      <span className="text-[10px] text-muted-foreground block mt-1">
                        {ALUMNI_TESTIMONIALS[currentIndex].country}
                      </span>
                      <div className="flex space-x-0.5 mt-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 2-Sentence Quote */}
                  <p className="text-xs text-slate-700 italic leading-relaxed pt-2">
                    "{ALUMNI_TESTIMONIALS[currentIndex].quote}"
                  </p>
                </div>

                {/* Subtitle details */}
                <div className="border-t border-slate-50 pt-4 mt-6">
                  <p className="text-[11px] font-semibold text-primary">
                    {ALUMNI_TESTIMONIALS[currentIndex].program}
                  </p>
                  <p className="text-[10px] text-muted-foreground mt-0.5 font-medium">
                    {ALUMNI_TESTIMONIALS[currentIndex].university} &bull; <strong className="text-secondary">{ALUMNI_TESTIMONIALS[currentIndex].scholarship}</strong>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Navigation controls (Mobile only) */}
            <div className="flex items-center justify-between mt-6 px-4">
              <button
                onClick={handlePrev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground hover:bg-slate-50 active:scale-95 transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Indicator dots */}
              <div className="flex space-x-1.5">
                {ALUMNI_TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIndex === idx ? 'w-6 bg-primary' : 'w-2 bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-foreground hover:bg-slate-50 active:scale-95 transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
