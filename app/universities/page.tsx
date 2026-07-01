'use client';

import { useState, useMemo } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import { Search, MapPin, Award, BookOpen, GraduationCap, SlidersHorizontal, X } from 'lucide-react';

// Sample Universities Data
const UNIVERSITIES = [
  {
    id: 'uni-tsinghua',
    name: 'Tsinghua University',
    chineseName: '清华大学',
    city: 'Beijing',
    tier: 'C9 League / Double First Class',
    programTypes: ['English-Taught', 'Chinese-Taught'],
    scholarship: 'Full CSC',
    popularMajors: ['Computer Science', 'Engineering', 'Global Business'],
    worldRanking: '#16 globally',
    tuitionRange: '30,000 - 40,000 RMB/yr',
    bgGradient: 'from-purple-900 to-indigo-950'
  },
  {
    id: 'uni-peking',
    name: 'Peking University',
    chineseName: '北京大学',
    city: 'Beijing',
    tier: 'C9 League / Double First Class',
    programTypes: ['English-Taught', 'Chinese-Taught'],
    scholarship: 'Full CSC',
    popularMajors: ['International Relations', 'Chinese Philosophy', 'Economics'],
    worldRanking: '#17 globally',
    tuitionRange: '26,000 - 32,000 RMB/yr',
    bgGradient: 'from-red-900 to-rose-950'
  },
  {
    id: 'uni-fudan',
    name: 'Fudan University',
    chineseName: '复旦大学',
    city: 'Shanghai',
    tier: 'C9 League / Project 211',
    programTypes: ['English-Taught', 'Chinese-Taught'],
    scholarship: 'Full CSC',
    popularMajors: ['MBA', 'Finance', 'Chinese Language'],
    worldRanking: '#34 globally',
    tuitionRange: '23,000 - 35,000 RMB/yr',
    bgGradient: 'from-blue-900 to-slate-950'
  },
  {
    id: 'uni-sjtu',
    name: 'Shanghai Jiao Tong University',
    chineseName: '上海交通大学',
    city: 'Shanghai',
    tier: 'C9 League / Project 985',
    programTypes: ['English-Taught'],
    scholarship: 'Partial Scholarship',
    popularMajors: ['Mechanical Engineering', 'Information Technology', 'Management'],
    worldRanking: '#47 globally',
    tuitionRange: '28,000 - 35,000 RMB/yr',
    bgGradient: 'from-cyan-900 to-teal-950'
  },
  {
    id: 'uni-zhejiang',
    name: 'Zhejiang University',
    chineseName: '浙江大学',
    city: 'Hangzhou',
    tier: 'C9 League / Double First Class',
    programTypes: ['English-Taught', 'Chinese-Taught'],
    scholarship: 'Full CSC',
    popularMajors: ['Agriculture', 'Civil Engineering', 'Computer Science'],
    worldRanking: '#44 globally',
    tuitionRange: '19,800 - 28,800 RMB/yr',
    bgGradient: 'from-emerald-900 to-slate-950'
  },
  {
    id: 'uni-nanjing',
    name: 'Nanjing University',
    chineseName: '南京大学',
    city: 'Nanjing',
    tier: 'Project 985 / Double First Class',
    programTypes: ['Chinese-Taught'],
    scholarship: 'Partial Scholarship',
    popularMajors: ['Environmental Science', 'Physics', 'Chinese Literature'],
    worldRanking: '#73 globally',
    tuitionRange: '19,000 - 24,000 RMB/yr',
    bgGradient: 'from-amber-900 to-orange-950'
  },
  {
    id: 'uni-wuhan',
    name: 'Wuhan University',
    chineseName: '武汉大学',
    city: 'Wuhan',
    tier: 'Project 985 / Top-Tier Research',
    programTypes: ['English-Taught', 'Chinese-Taught'],
    scholarship: 'None',
    popularMajors: ['Medicine (MBBS)', 'Software Engineering', 'Law'],
    worldRanking: '#150 globally',
    tuitionRange: '20,000 - 32,000 RMB/yr',
    bgGradient: 'from-green-900 to-emerald-950'
  },
  {
    id: 'uni-sysu',
    name: 'Sun Yat-sen University',
    chineseName: '中山大学',
    city: 'Guangzhou',
    tier: 'Double First Class / Top South China',
    programTypes: ['English-Taught'],
    scholarship: 'Partial Scholarship',
    popularMajors: ['Clinical Medicine', 'Chemistry', 'Business Studies'],
    worldRanking: '#120 globally',
    tuitionRange: '22,000 - 30,000 RMB/yr',
    bgGradient: 'from-purple-950 to-pink-950'
  }
];

const CITIES = ['All', 'Beijing', 'Shanghai', 'Hangzhou', 'Nanjing', 'Wuhan', 'Guangzhou'];
const PROGRAM_TYPES = ['All', 'English-Taught', 'Chinese-Taught'];
const SCHOLARSHIPS = ['All', 'Full CSC', 'Partial Scholarship', 'None'];

export default function UniversitySearch() {
  // Filters State
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('All');
  const [selectedProgram, setSelectedProgram] = useState('All');
  const [selectedScholarship, setSelectedScholarship] = useState('All');
  
  // Mobile Filters Panel State
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Clear all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCity('All');
    setSelectedProgram('All');
    setSelectedScholarship('All');
  };

  // Memoized Filtered List
  const filteredUniversities = useMemo(() => {
    return UNIVERSITIES.filter((uni) => {
      const matchesSearch = uni.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            uni.chineseName.includes(searchTerm) ||
                            uni.popularMajors.some(m => m.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCity = selectedCity === 'All' || uni.city === selectedCity;
      
      const matchesProgram = selectedProgram === 'All' || uni.programTypes.includes(selectedProgram);
      
      const matchesScholarship = selectedScholarship === 'All' || uni.scholarship === selectedScholarship;
      
      return matchesSearch && matchesCity && matchesProgram && matchesScholarship;
    });
  }, [searchTerm, selectedCity, selectedProgram, selectedScholarship]);

  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-slate-50 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              University Finder
            </span>
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight mt-1 mb-2">
              Explore Partner Universities in China
            </h1>
            <p className="text-muted-foreground text-sm max-w-2xl">
              Search and filter through elite tier-1 institutions. Discover scholarship eligibilities and degrees that match your academic profile.
            </p>
          </div>

          {/* Search bar & Mobile filter button */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by university name, major, or Chinese character..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-border bg-white text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring transition-all"
              />
            </div>
            
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setShowMobileFilters(true)}
              className="sm:hidden flex items-center justify-center space-x-2 bg-white border border-border rounded-2xl px-5 py-3 text-sm font-semibold text-foreground hover:bg-slate-50"
            >
              <SlidersHorizontal className="h-4.5 w-4.5" />
              <span>Filters</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Desktop Filter Sidebar (Hidden on Mobile) */}
            <aside className="hidden lg:block lg:col-span-3 bg-white border border-border/60 rounded-3xl p-6 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-sm font-bold text-foreground">Filter Options</span>
                <button 
                  onClick={resetFilters}
                  className="text-xs font-semibold text-primary hover:underline"
                >
                  Reset All
                </button>
              </div>

              {/* City filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider">City</label>
                <div className="flex flex-wrap gap-1.5">
                  {CITIES.map((city) => (
                    <button
                      key={city}
                      onClick={() => setSelectedCity(city)}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-semibold transition-all ${
                        selectedCity === city
                          ? 'bg-primary text-white border-primary'
                          : 'bg-slate-50 text-slate-600 border-border hover:bg-slate-100'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              {/* Program type filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider">Language Medium</label>
                <div className="flex flex-col space-y-1.5">
                  {PROGRAM_TYPES.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedProgram(type)}
                      className={`text-left text-xs px-3 py-2.5 rounded-lg border font-semibold transition-all ${
                        selectedProgram === type
                          ? 'bg-primary text-white border-primary'
                          : 'bg-slate-50 text-slate-600 border-border hover:bg-slate-100'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scholarship level filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider">Scholarship Type</label>
                <div className="flex flex-col space-y-1.5">
                  {SCHOLARSHIPS.map((schol) => (
                    <button
                      key={schol}
                      onClick={() => setSelectedScholarship(schol)}
                      className={`text-left text-xs px-3 py-2.5 rounded-lg border font-semibold transition-all ${
                        selectedScholarship === schol
                          ? 'bg-primary text-white border-primary'
                          : 'bg-slate-50 text-slate-600 border-border hover:bg-slate-100'
                      }`}
                    >
                      {schol === 'All' ? 'All Scholarships' : schol}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Universities Grid */}
            <div className="lg:col-span-9 space-y-6">
              
              {/* Filter Indicators & Results Count */}
              <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-semibold text-muted-foreground bg-white border border-border/40 rounded-2xl px-5 py-4">
                <span>Showing {filteredUniversities.length} Universities</span>
                {(selectedCity !== 'All' || selectedProgram !== 'All' || selectedScholarship !== 'All' || searchTerm) && (
                  <button 
                    onClick={resetFilters}
                    className="text-primary hover:underline flex items-center space-x-1"
                  >
                    <span>Clear Active Filters</span>
                  </button>
                )}
              </div>

              {filteredUniversities.length === 0 ? (
                <div className="bg-white rounded-3xl border border-border/60 p-12 text-center space-y-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-2">
                    <SlidersHorizontal className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">No universities match your search</h3>
                  <p className="text-xs text-muted-foreground max-w-sm mx-auto leading-relaxed">
                    Try broadening your search term or clearing filters like city or scholarship criteria.
                  </p>
                  <button
                    onClick={resetFilters}
                    className="inline-flex justify-center rounded-xl bg-primary px-5 py-2.5 text-xs font-bold text-white shadow-md shadow-primary/10 hover:bg-opacity-95"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredUniversities.map((uni) => (
                    <div 
                      key={uni.id} 
                      className="bg-white rounded-3xl border border-border/50 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow"
                    >
                      {/* Card Header (Colored/Gradients) */}
                      <div className={`bg-gradient-to-br ${uni.bgGradient} p-5 text-white flex justify-between items-start`}>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-accent-light">
                            {uni.tier}
                          </span>
                          <h3 className="text-lg font-bold mt-0.5">{uni.name}</h3>
                          <p className="text-xs text-slate-300 font-medium">{uni.chineseName}</p>
                        </div>
                        <span className="text-[10px] font-black bg-white/20 px-2 py-0.5 rounded uppercase tracking-wider">
                          {uni.worldRanking}
                        </span>
                      </div>

                      {/* Card Body */}
                      <div className="p-5 flex-1 space-y-4 text-xs">
                        <div className="grid grid-cols-2 gap-3 pb-3 border-b border-border/60">
                          <span className="flex items-center text-slate-600">
                            <MapPin className="h-3.5 w-3.5 text-primary mr-1.5 shrink-0" />
                            {uni.city}, China
                          </span>
                          <span className="flex items-center text-slate-600 font-bold">
                            <Award className="h-3.5 w-3.5 text-secondary mr-1.5 shrink-0" />
                            {uni.scholarship}
                          </span>
                        </div>

                        {/* Program types */}
                        <div className="flex flex-wrap gap-1.5">
                          {uni.programTypes.map(p => (
                            <span key={p} className="bg-slate-100 text-slate-700 font-semibold px-2 py-1 rounded">
                              {p}
                            </span>
                          ))}
                          <span className="bg-slate-50 text-slate-500 px-2 py-1 rounded border border-slate-100 font-medium">
                            Est. {uni.tuitionRange}
                          </span>
                        </div>

                        {/* Popular Majors */}
                        <div className="space-y-1.5">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                            Popular Majors Offered:
                          </span>
                          <div className="flex flex-wrap gap-1 text-slate-600 font-medium">
                            {uni.popularMajors.map((major, idx) => (
                              <span key={major}>
                                {major}{idx < uni.popularMajors.length - 1 ? ' • ' : ''}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Card Actions */}
                      <div className="p-5 pt-0 border-t border-slate-50 mt-auto">
                        <Link
                          href={`/inquiry?uni=${uni.id}`}
                          className="flex w-full items-center justify-center rounded-xl bg-slate-900 py-3 text-xs font-bold text-white shadow-sm hover:bg-slate-800 transition-all text-center"
                        >
                          Check Admission Chances
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </main>

      {/* Mobile Drawer Filter Menu (Collapsible overlay) */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 bg-black/60 md:hidden flex justify-end">
          <div className="w-4/5 max-w-sm bg-white h-full p-6 flex flex-col justify-between overflow-y-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border">
                <span className="text-base font-bold text-foreground">Filter Universities</span>
                <button
                  onClick={() => setShowMobileFilters(false)}
                  className="p-1 rounded hover:bg-muted"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* City filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider block">City</label>
                <div className="flex flex-wrap gap-1.5">
                  {CITIES.map((city) => (
                    <button
                      key={city}
                      onClick={() => setSelectedCity(city)}
                      className={`text-xs px-3 py-1.5 rounded-lg border font-semibold ${
                        selectedCity === city
                          ? 'bg-primary text-white border-primary'
                          : 'bg-slate-50 text-slate-600 border-border'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              {/* Program medium filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider block">Language Medium</label>
                <div className="flex flex-col space-y-1.5">
                  {PROGRAM_TYPES.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedProgram(type)}
                      className={`text-left text-xs px-3 py-2 rounded-lg border font-semibold ${
                        selectedProgram === type
                          ? 'bg-primary text-white border-primary'
                          : 'bg-slate-50 text-slate-600 border-border'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scholarship level filter */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-foreground uppercase tracking-wider block">Scholarship Type</label>
                <div className="flex flex-col space-y-1.5">
                  {SCHOLARSHIPS.map((schol) => (
                    <button
                      key={schol}
                      onClick={() => setSelectedScholarship(schol)}
                      className={`text-left text-xs px-3 py-2 rounded-lg border font-semibold ${
                        selectedScholarship === schol
                          ? 'bg-primary text-white border-primary'
                          : 'bg-slate-50 text-slate-600 border-border'
                      }`}
                    >
                      {schol}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border mt-8 flex space-x-3">
              <button
                onClick={() => {
                  resetFilters();
                  setShowMobileFilters(false);
                }}
                className="flex-1 text-xs font-bold text-slate-600 py-3 border border-border rounded-xl hover:bg-slate-50"
              >
                Reset
              </button>
              <button
                onClick={() => setShowMobileFilters(false)}
                className="flex-1 text-xs font-bold text-white bg-primary py-3 rounded-xl hover:bg-opacity-95"
              >
                Apply Filters
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
