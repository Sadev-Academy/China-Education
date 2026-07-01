import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Calendar, Clock, BookOpen, User, ArrowRight } from 'lucide-react';

const POSTS = [
  {
    id: 'post-csc-tips',
    title: 'CSC Scholarship Application Guide: Tips from Evaluators',
    description: 'Learn how to construct a winning Study Plan, secure recommendation letters, and optimize your application for Chinese Government funding.',
    category: 'Scholarships',
    date: 'Jun 28, 2026',
    readTime: '6 min read',
    author: 'Chen Wei (Advisor)',
    bgGradient: 'from-purple-900/10 to-indigo-950/10'
  },
  {
    id: 'post-bank-account',
    title: 'How to Set Up Mobile Payments & Bank Accounts in China',
    description: 'A step-by-step student guide to setting up Alipay, WeChat Pay, and opening a Chinese bank account immediately after landing.',
    category: 'Life in China',
    date: 'Jun 22, 2026',
    readTime: '5 min read',
    author: 'Sarah Jenkins (Alumna)',
    bgGradient: 'from-emerald-950/10 to-slate-950/10'
  },
  {
    id: 'post-top-cities',
    title: 'Top 5 Chinese Cities for International Students in 2026',
    description: 'We compare Beijing, Shanghai, Hangzhou, Guangzhou, and Chengdu across tuition costs, student life, and local industry hubs.',
    category: 'Life in China',
    date: 'Jun 15, 2026',
    readTime: '8 min read',
    author: 'ChinaEdu Team',
    bgGradient: 'from-red-900/10 to-rose-950/10'
  },
  {
    id: 'post-x1-visa',
    title: 'Navigating the X1 Study Visa: Form JW202 Checkpoints',
    description: 'Avoid visa rejection. A comprehensive checklist of medical exams, consular forms, and registration requirements for X1 entry visas.',
    category: 'Visa Guides',
    date: 'May 30, 2026',
    readTime: '4 min read',
    author: 'Li Jun (Visa Expert)',
    bgGradient: 'from-blue-900/10 to-slate-950/10'
  }
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Student Resources
            </span>
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight mt-1 mb-2">
              Admissions Blog & Guides
            </h1>
            <p className="text-muted-foreground text-sm max-w-xl">
              Get the latest insights, visa updates, and lifestyle tips from international students and admissions officers in China.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {POSTS.map((post) => (
              <div 
                key={post.id} 
                className={`bg-gradient-to-br ${post.bgGradient} rounded-3xl border border-border/40 p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-shadow bg-white`}
              >
                <div className="space-y-4">
                  {/* Category & Time */}
                  <div className="flex items-center justify-between text-[11px] font-semibold text-slate-500">
                    <span className="bg-slate-200/60 text-slate-800 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-foreground leading-tight hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {post.description}
                  </p>
                </div>

                {/* Author Info & Link */}
                <div className="pt-6 border-t border-border/40 flex items-center justify-between mt-8 text-[11px] text-slate-500">
                  <span className="flex items-center">
                    <User className="h-3.5 w-3.5 mr-1.5 text-slate-400" />
                    {post.author} • {post.date}
                  </span>
                  
                  <Link
                    href={`/blog/${post.id}`}
                    className="group inline-flex items-center font-bold text-primary hover:underline"
                  >
                    Read Guide
                    <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Banner */}
          <div className="bg-slate-900 rounded-3xl text-white p-8 sm:p-12 relative overflow-hidden border border-slate-800 text-center space-y-6 shadow-xl">
            <span className="text-[10px] font-bold text-accent uppercase tracking-widest block">
              Direct Admissions Counseling
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold max-w-lg mx-auto leading-tight">
              Ready to Secure Your Scholarship Spot?
            </h2>
            <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
              Don't guess on your study plan. Work with experienced counselors who review hundreds of portfolios annually.
            </p>
            <div className="pt-2">
              <Link
                href="/inquiry"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-xs font-bold text-white shadow-md hover:bg-opacity-95 active:scale-[0.98] transition-all"
              >
                Begin Registration
              </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
