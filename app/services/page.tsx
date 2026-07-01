import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { ShieldCheck, Landmark, Key, Compass, MessageSquare, Briefcase, FileText, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    id: 'srv-visa',
    title: 'Admissions & Visa Support',
    description: 'Guaranteed support through the complex official paperwork required by the Chinese Ministry of Foreign Affairs and local embassies.',
    icon: ShieldCheck,
    color: 'text-primary bg-primary/10 border-primary/20',
    bullets: [
      'Direct procurement of official JW202 / JW201 Visa Application Forms',
      'Step-by-step guidance for Foreigner Physical Examination forms',
      'Embassy document checks and interview preparation coaching',
      'X1 (long-term) or X2 (short-term) visa application matching'
    ]
  },
  {
    id: 'srv-housing',
    title: 'Housing & Dorm Booking',
    description: 'Secure, clean, and convenient accommodation close to your campus. We handle reservations before you land.',
    icon: Key,
    color: 'text-accent bg-accent/10 border-accent/20',
    bullets: [
      'Guaranteed on-campus single or double dormitory room allocation',
      'Off-campus apartment searching with bilingual lease review services',
      'Local Police Station registration assistance (mandatory within 24 hours)',
      'Utility setup support (WiFi, mobile networks, water/electricity cards)'
    ]
  },
  {
    id: 'srv-placement',
    title: 'Internship & Career Placement',
    description: 'Launch your global career. Connect with leading MNCs and tech giants across China\'s major business hubs.',
    icon: Briefcase,
    color: 'text-secondary bg-secondary/10 border-secondary/20',
    bullets: [
      'Exclusive internship matching with partners in Shenzhen and Beijing',
      'Resume translation and tailoring for Chinese MNCs (Tencent, Alibaba)',
      'Bilingual mock interviews and networking event access',
      'Coaching on local student work permits and post-graduate transition'
    ]
  }
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Our Agency Services
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mt-2 mb-4">
              Comprehensive Support From Application to Arrival
            </h1>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              We do not just get you admitted. We ensure you are housed, legally registered, and academically positioned to thrive in China.
            </p>
          </div>

          {/* Services Cards (Grid) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {SERVICES.map((srv) => {
              const Icon = srv.icon;
              return (
                <div 
                  key={srv.id} 
                  className="bg-white rounded-3xl border border-border/60 shadow-sm p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="space-y-6">
                    {/* Icon header */}
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${srv.color} shadow-sm`}>
                      <Icon className="h-7 w-7" />
                    </div>

                    {/* Title */}
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {srv.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                        {srv.description}
                      </p>
                    </div>

                    {/* Bullets */}
                    <ul className="space-y-3.5 border-t border-slate-50 pt-5">
                      {srv.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start text-xs text-slate-700 leading-relaxed">
                          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-slate-500 mr-3 shrink-0 text-[10px] font-bold">
                            ✓
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action CTA */}
                  <div className="pt-6 border-t border-slate-50 mt-8">
                    <Link
                      href="/inquiry"
                      className="group flex items-center justify-center w-full rounded-xl bg-slate-900 py-3 text-xs font-bold text-white shadow-sm hover:bg-slate-800 transition-all text-center"
                    >
                      Inquire About This Service
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* High-Trust Credibility Bar */}
          <div className="bg-slate-900 rounded-3xl text-white p-8 sm:p-12 relative overflow-hidden border border-slate-800 shadow-xl">
            {/* Background Accent */}
            <div className="absolute right-0 top-0 -z-10 h-[300px] w-[300px] rounded-full bg-primary/10 blur-3xl" />
            
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-8 space-y-4">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
                  Emergency Support Guarantee
                </span>
                <h2 className="text-2xl font-bold tracking-tight">
                  24/7 Bilingual Ground Support in China
                </h2>
                <p className="text-xs text-slate-300 leading-relaxed max-w-xl">
                  Living in a new country can have challenges. Every student enrolled through ChinaEdu receives access to our 24-hour phone hotline. Whether you have questions at the university registrar, police department, or local hospital, our advisors are just a call away.
                </p>
              </div>
              <div className="md:col-span-4 flex justify-start md:justify-end">
                <Link
                  href="/inquiry"
                  className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-4 text-xs font-bold text-slate-900 shadow-lg hover:bg-slate-50 active:scale-[0.98] transition-all"
                >
                  <MessageSquare className="h-4.5 w-4.5 text-primary mr-2" />
                  Contact Ground Team
                </Link>
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
