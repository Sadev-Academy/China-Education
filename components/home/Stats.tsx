import { Landmark, Users, GraduationCap, Award } from 'lucide-react';

const STATS = [
  {
    id: 'stat-universities',
    value: '150+',
    label: 'Partner Universities',
    description: 'Top-tier C9 League & double first-class institutions',
    icon: Landmark,
    color: 'text-primary bg-primary/10'
  },
  {
    id: 'stat-scholarships',
    value: '99.2%',
    label: 'Scholarship Success',
    description: 'CSC, Provincial, and University scholarships secured',
    icon: Award,
    color: 'text-accent bg-accent/10'
  },
  {
    id: 'stat-students',
    value: '5,000+',
    label: 'Students Placed',
    description: 'From 120+ countries worldwide since 2018',
    icon: Users,
    color: 'text-secondary bg-secondary/10'
  },
  {
    id: 'stat-programs',
    value: '800+',
    label: 'English-Taught Courses',
    description: 'No prior Chinese language background required',
    icon: GraduationCap,
    color: 'text-blue-600 bg-blue-50'
  }
];

export default function Stats() {
  return (
    <section className="bg-white py-12 md:py-16 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id} 
                className="flex flex-col items-center text-center p-4 rounded-2xl transition-all duration-300 hover:shadow-md hover:shadow-slate-100"
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${stat.color} mb-4`}>
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-foreground mb-1">
                  {stat.label}
                </span>
                <span className="text-xs text-muted-foreground max-w-[180px] leading-relaxed">
                  {stat.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
