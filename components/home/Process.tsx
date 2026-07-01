import { MessageCircle, FileCheck, Landmark, Compass, Plane } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    title: 'Consultation & Review',
    description: 'Submit your profile and academic goals. We match you with an admissions counselor within 12 hours.',
    icon: MessageCircle,
    color: 'bg-primary/10 text-primary border-primary/20'
  },
  {
    number: '02',
    title: 'University Match',
    description: 'Receive 3 tailored university programs + guaranteed scholarship options matching your profile.',
    icon: Compass,
    color: 'bg-accent/10 text-accent border-accent/20'
  },
  {
    number: '03',
    title: 'Admission & JW202',
    description: 'We compile and submit your application. Track progress until your official JW202 Visa form is issued.',
    icon: Landmark,
    color: 'bg-secondary/10 text-secondary border-secondary/20'
  },
  {
    number: '04',
    title: 'Visa & Preparation',
    description: 'Receive interview coaching and step-by-step guidance for the JW202 physical and consular review.',
    icon: FileCheck,
    color: 'bg-blue-50 text-blue-600 border-blue-100'
  },
  {
    number: '05',
    title: 'China Arrival Support',
    description: 'Airport pickup, dorm check-in assistance, and police registration support to ensure a smooth transition.',
    icon: Plane,
    color: 'bg-green-50 text-green-600 border-green-100'
  }
];

export default function Process() {
  return (
    <section id="process" className="bg-white py-16 md:py-24 border-b border-border/40 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-primary">
            Step-by-Step Roadmap
          </span>
          <h2 className="text-3xl font-extrabold text-foreground tracking-tight mt-2 mb-4">
            How It Works: Our Application Process
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Applying abroad can be daunting. We break down the process into 5 simple, high-trust phases so you always know what comes next.
          </p>
        </div>

        {/* Process Roadmap List */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical progress line (Desktop only) */}
          <div className="absolute left-[39px] top-4 bottom-4 w-0.5 bg-slate-100 hidden md:block" />

          <div className="space-y-12">
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index} 
                  className="flex flex-col md:flex-row items-start md:space-x-8 relative group"
                >
                  {/* Step Icon & Number */}
                  <div className="flex items-center justify-between w-full md:w-auto mb-4 md:mb-0">
                    <div className={`flex h-20 w-20 items-center justify-center rounded-2xl border ${step.color} shrink-0 shadow-sm relative z-10 bg-white group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="h-9 w-9" />
                      <span className="absolute -bottom-2 -right-2 bg-slate-900 text-white text-[10px] font-bold h-6 w-6 rounded-full flex items-center justify-center border-2 border-white">
                        {step.number}
                      </span>
                    </div>
                    {/* Display index count on mobile when lines are hidden */}
                    <span className="md:hidden text-2xl font-black text-slate-200">
                      Step {step.number}
                    </span>
                  </div>

                  {/* Step Description */}
                  <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-5 md:p-6 flex-1 hover:border-slate-200 hover:bg-slate-50 transition-all duration-300">
                    <h3 className="text-base sm:text-lg font-bold text-foreground mb-2 flex items-center">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
