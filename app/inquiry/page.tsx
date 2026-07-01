'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { User, Mail, Phone, Globe, ChevronLeft, ChevronRight, Send, CheckCircle, AlertCircle, GraduationCap, Award, BookOpen, Clock, Loader2 } from 'lucide-react';

const DEGREE_OPTIONS = [
  { value: 'Language Program', label: 'Chinese Language Program' },
  { value: 'Bachelors Degree', label: "Bachelor's Degree" },
  { value: 'Masters Degree', label: "Master's Degree" },
  { value: 'PhD Degree', label: "Doctorate / PhD" }
];

const PRESET_UNIVERSITIES: Record<string, string> = {
  'uni-tsinghua': 'Tsinghua University',
  'uni-peking': 'Peking University',
  'uni-fudan': 'Fudan University',
  'uni-sjtu': 'Shanghai Jiao Tong University',
  'uni-zhejiang': 'Zhejiang University',
  'uni-nanjing': 'Nanjing University',
  'uni-wuhan': 'Wuhan University',
  'uni-sysu': 'Sun Yat-sen University'
};

function InquiryFormWizard() {
  const searchParams = useSearchParams();
  const presetUniId = searchParams.get('uni');

  // Step state
  const [step, setStep] = useState(1);
  
  // Form fields state
  const [formData, setFormData] = useState({
    // Step 1: Personal
    name: '',
    email: '',
    phone: '',
    nationality: '',
    
    // Step 2: Academic
    qualification: '',
    gpa: '',
    languageLevel: '',
    
    // Step 3: Preferences
    degreeLevel: '',
    studyField: '',
    targetCity: '',
    message: ''
  });

  // Load preset university from query param
  useEffect(() => {
    if (presetUniId && PRESET_UNIVERSITIES[presetUniId]) {
      setFormData((prev) => ({
        ...prev,
        studyField: PRESET_UNIVERSITIES[presetUniId],
        degreeLevel: presetUniId.includes('master') ? 'Masters Degree' : 'Bachelors Degree'
      }));
    }
  }, [presetUniId]);

  // Submission state
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDemoMode, setIsDemoMode] = useState(false);

  // Field change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Navigations
  const nextStep = () => {
    // Validation before moving
    if (step === 1) {
      if (!formData.name.trim()) return alert('Name is required.');
      if (!formData.email.trim() || !formData.email.includes('@')) return alert('Valid email is required.');
      if (!formData.nationality.trim()) return alert('Nationality is required.');
    }
    if (step === 2) {
      if (!formData.qualification.trim()) return alert('Please enter your highest qualification.');
      if (!formData.gpa.trim()) return alert('Please enter your GPA or Grade Average.');
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

  // API Submit
  const handleSubmit = async () => {
    setStatus('loading');
    setErrorMessage('');

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        degree_level: formData.degreeLevel || 'Not Specified',
        study_field: `${formData.studyField} (${formData.qualification}, GPA: ${formData.gpa})`,
        message: `Nationality: ${formData.nationality}. Language Medium: ${formData.languageLevel}. Target City: ${formData.targetCity}. Notes: ${formData.message}`
      };

      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit the inquiry form.');
      }

      setIsDemoMode(result.demoMode);
      setStatus('success');
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-border/60 shadow-xl overflow-hidden max-w-2xl mx-auto">
      
      {/* Progress Header */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 flex items-center justify-between border-b border-slate-800">
        <div>
          <span className="text-[10px] font-bold text-accent uppercase tracking-widest">
            Admissions Qualifier
          </span>
          <h2 className="text-xl font-bold mt-0.5">China Student Inquiry Wizard</h2>
        </div>
        <span className="text-xs font-bold bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
          Step {step} of 3
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-100 h-1.5">
        <div 
          className="bg-primary h-1.5 transition-all duration-300"
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      {status === 'success' ? (
        <div className="p-8 sm:p-12 text-center space-y-5">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary mb-4">
            <CheckCircle className="h-10 w-10 animate-bounce" />
          </div>
          <h3 className="text-2xl font-bold text-foreground">Qualification Completed!</h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{formData.name}</strong>. Your profile has been sent to our China-based admissions team. We will review your GPA ({formData.gpa}) and language criteria to match you with top-funded university programs.
          </p>
          <p className="text-xs text-muted-foreground">
            Expect an official response at <strong>{formData.email}</strong> within 12 hours.
          </p>
          {isDemoMode && (
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-[11px] text-slate-500 max-w-sm mx-auto">
              <strong>Demo Notice:</strong> Mocks executed successfully. Values printed to console.
            </div>
          )}
        </div>
      ) : (
        <div className="p-6 sm:p-8 space-y-6">
          {status === 'error' && (
            <div className="flex items-center space-x-2 bg-red-50 text-red-700 border border-red-100 rounded-xl p-4 text-xs">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* STEP 1: Personal */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Step 1: Personal & Contact details</h3>
              
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">Full Name *</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border text-sm placeholder-slate-400 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">Email Address *</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. name@email.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border text-sm placeholder-slate-400 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">Phone / WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. +1 555-0100"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border text-sm placeholder-slate-400 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">Nationality *</label>
                <div className="relative">
                  <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                  <input
                    type="text"
                    name="nationality"
                    value={formData.nationality}
                    onChange={handleChange}
                    placeholder="Enter your citizenship country"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border text-sm placeholder-slate-400 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Academic */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Step 2: Academic Background</h3>
              
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">Highest Qualification Obtained *</label>
                <div className="relative">
                  <GraduationCap className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                  <input
                    type="text"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                    placeholder="e.g. High School Graduate, Bachelor Degree"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border text-sm placeholder-slate-400 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">GPA / Average Grade *</label>
                  <div className="relative">
                    <Award className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400" />
                    <input
                      type="text"
                      name="gpa"
                      value={formData.gpa}
                      onChange={handleChange}
                      placeholder="e.g. 3.6/4.0 or 85%"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border text-sm placeholder-slate-400 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">Language Proficiency</label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-slate-400 pointer-events-none" />
                    <select
                      name="languageLevel"
                      value={formData.languageLevel}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border text-sm bg-white focus:outline-none focus:border-primary appearance-none"
                    >
                      <option value="English Native/Fluent">English Native / Fluent</option>
                      <option value="English Medium Highschool">English Medium Transcript</option>
                      <option value="IELTS 6.0+ / TOEFL">IELTS / TOEFL Cert</option>
                      <option value="HSK 4+ (Chinese Fluent)">HSK 4+ (Chinese Fluent)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Study Preferences */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-2">Step 3: Study Preferences</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">Desired Degree Level</label>
                  <select
                    name="degreeLevel"
                    value={formData.degreeLevel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm bg-white focus:outline-none focus:border-primary"
                  >
                    <option value="">Select program level...</option>
                    {DEGREE_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">Subject or University Target</label>
                  <input
                    type="text"
                    name="studyField"
                    value={formData.studyField}
                    onChange={handleChange}
                    placeholder="e.g. Computer Science or Tsinghua"
                    className="w-full px-4 py-3 rounded-xl border border-border text-sm placeholder-slate-400 focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">Preferred Chinese Cities</label>
                <input
                  type="text"
                  name="targetCity"
                  value={formData.targetCity}
                  onChange={handleChange}
                  placeholder="e.g. Beijing, Shanghai, Hangzhou, Any"
                  className="w-full px-4 py-3 rounded-xl border border-border text-sm placeholder-slate-400 focus:outline-none focus:border-primary"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-foreground uppercase tracking-widest">Tell us more about your career goals</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={2}
                  placeholder="e.g. Looking for a full scholarship with stipend to study AI, want to start this September..."
                  className="w-full p-4 rounded-xl border border-border text-sm placeholder-slate-400 focus:outline-none focus:border-primary resize-none"
                />
              </div>
            </div>
          )}

          {/* Buttons Navigation */}
          <div className="flex justify-between items-center pt-4 border-t border-slate-100">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="inline-flex items-center text-xs font-bold text-slate-600 hover:text-slate-900 border border-border rounded-xl px-4 py-2.5 bg-white transition-colors"
              >
                <ChevronLeft className="h-4 w-4 mr-1.5" />
                Back
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="inline-flex items-center text-xs font-bold text-white bg-primary rounded-xl px-5 py-2.5 hover:bg-opacity-95 transition-all shadow-sm shadow-primary/10"
              >
                Next Step
                <ChevronRight className="h-4 w-4 ml-1.5" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === 'loading'}
                className="inline-flex items-center text-xs font-bold text-white bg-primary rounded-xl px-6 py-2.5 hover:bg-opacity-95 transition-all disabled:bg-opacity-60 disabled:cursor-not-allowed shadow-md shadow-primary/15"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="animate-spin h-4 w-4 mr-1.5" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-1.5" />
                    Submit Profile
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function InquiryPage() {
  return (
    <>
      <Navbar />
      
      <main className="flex-1 bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Context Left */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-center text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Secure Admissions Portal
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight leading-tight">
                Evaluate Your Eligibility in 3 Steps
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                Provide your academic parameters and study intent. Our counselor matches your profile to universities and checks if you qualify for full government or partial stipend backing.
              </p>

              <div className="border-t border-border pt-6 grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 mb-2">
                    <Clock className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold text-foreground">Takes 2 Mins</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 mb-2">
                    <Award className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold text-foreground">Guaranteed Match</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 mb-2">
                    <Globe className="h-5 w-5" />
                  </div>
                  <span className="text-[10px] font-bold text-foreground">100% Free Consultation</span>
                </div>
              </div>
            </div>

            {/* Form Wizard Right */}
            <div className="lg:col-span-7">
              <Suspense fallback={
                <div className="bg-white rounded-3xl border border-border/60 shadow-xl p-12 text-center">
                  <Loader2 className="animate-spin h-8 w-8 text-primary mx-auto mb-4" />
                  <p className="text-xs text-muted-foreground">Loading Admissions Portal...</p>
                </div>
              }>
                <InquiryFormWizard />
              </Suspense>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
