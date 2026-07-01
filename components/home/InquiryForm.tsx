'use client';

import { useState } from 'react';
import { Mail, Phone, User, BookOpen, GraduationCap, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const DEGREE_OPTIONS = [
  { value: 'Language Program', label: 'Chinese Language Program' },
  { value: 'Bachelors Degree', label: "Bachelor's Degree (English-taught)" },
  { value: 'Masters Degree', label: "Master's Degree (Scholarship Route)" },
  { value: 'PhD Degree', label: "Doctorate / PhD (Fully Funded)" }
];

export default function InquiryForm() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    degreeLevel: '',
    studyField: '',
    message: ''
  });

  // UI Status State
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [isDemo, setIsDemo] = useState(false);

  // Field change handler
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    // Client-side validations
    if (!formData.name.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    try {
      const response = await fetch('/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          degree_level: formData.degreeLevel,
          study_field: formData.studyField,
          message: formData.message
        })
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit the inquiry.');
      }

      setIsDemo(result.demoMode);
      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        degreeLevel: '',
        studyField: '',
        message: ''
      });
    } catch (err: any) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="inquiry" className="bg-slate-50 py-16 md:py-24 scroll-mt-16 border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Inquiry Description Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">
              Instant Application
            </span>
            <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
              Start Your Journey Today
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Have questions about universities, cost, or scholarship eligibilities? Fill out our secure inquiry form. An admissions coordinator will review your profile and contact you within 12 hours.
            </p>

            <div className="border-t border-border pt-6 space-y-4">
              <div className="flex items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary mr-4 shrink-0">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Free Profile Evaluation</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">We check your eligibility for fully-funded scholarships.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mr-4 shrink-0">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">No Spam Policy</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">Your email address and phone number are kept strictly confidential.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border border-border/60 shadow-xl p-6 sm:p-8">
              
              {status === 'success' ? (
                <div className="text-center py-10 space-y-4">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary mb-4">
                    <CheckCircle className="h-10 w-10 animate-bounce" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Inquiry Submitted!</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Thank you. Your profile is being queued for review. An expert admission advisor will contact you by email or WeChat within 12 hours.
                  </p>
                  {isDemo && (
                    <div className="bg-slate-100 text-slate-600 rounded-xl p-4 text-xs max-w-sm mx-auto border border-slate-200">
                      <strong>Demo Notice:</strong> Server ran in mock mode because environment variables are not set. The payload was printed to the terminal console successfully.
                    </div>
                  )}
                  <div className="pt-6">
                    <button
                      onClick={() => setStatus('idle')}
                      className="inline-flex justify-center rounded-xl border border-border bg-white px-6 py-2.5 text-xs font-bold text-foreground hover:bg-slate-50 transition-colors"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-bold text-foreground mb-4">Admissions Evaluation Form</h3>
                  
                  {status === 'error' && (
                    <div className="flex items-center space-x-2 bg-red-50 text-red-700 border border-red-100 rounded-xl p-4 text-sm">
                      <AlertCircle className="h-5 w-5 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  {/* Name field */}
                  <div className="space-y-1">
                    <label htmlFor="inquiry-name" className="text-xs font-bold text-foreground uppercase tracking-wider">
                      Full Name <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                      <input
                        id="inquiry-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-border text-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring transition-all"
                      />
                    </div>
                  </div>

                  {/* Email & Phone grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="inquiry-email" className="text-xs font-bold text-foreground uppercase tracking-wider">
                        Email Address <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          id="inquiry-email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="johndoe@email.com"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border text-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring transition-all"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label htmlFor="inquiry-phone" className="text-xs font-bold text-foreground uppercase tracking-wider">
                        Phone / WhatsApp
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          id="inquiry-phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+1 (555) 000-0000"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border text-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Study Level & Field grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label htmlFor="inquiry-degreeLevel" className="text-xs font-bold text-foreground uppercase tracking-wider">
                        Study Program Level
                      </label>
                      <div className="relative">
                        <GraduationCap className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                        <select
                          id="inquiry-degreeLevel"
                          name="degreeLevel"
                          value={formData.degreeLevel}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border text-sm bg-white text-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring transition-all appearance-none"
                        >
                          <option value="">Select study level...</option>
                          {DEGREE_OPTIONS.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                          <span className="text-xs">▼</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="inquiry-studyField" className="text-xs font-bold text-foreground uppercase tracking-wider">
                        Preferred Field of Study
                      </label>
                      <div className="relative">
                        <BookOpen className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <input
                          id="inquiry-studyField"
                          name="studyField"
                          type="text"
                          value={formData.studyField}
                          onChange={handleChange}
                          placeholder="e.g. Computer Science, Business"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-border text-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-1">
                    <label htmlFor="inquiry-message" className="text-xs font-bold text-foreground uppercase tracking-wider">
                      Additional Message / Academic Goals
                    </label>
                    <textarea
                      id="inquiry-message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your background, GPA, or specific universities you are interested in..."
                      className="w-full p-4 rounded-xl border border-border text-sm placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-2 focus:ring-ring transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      id="inquiry-submit-btn"
                      type="submit"
                      disabled={status === 'loading'}
                      className="flex w-full items-center justify-center rounded-xl bg-primary py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 hover:bg-opacity-95 disabled:bg-opacity-50 disabled:cursor-not-allowed hover:scale-[1.01] active:scale-[0.99] transition-all"
                    >
                      {status === 'loading' ? (
                        <>
                          <Loader2 className="animate-spin h-5 w-5 mr-2" />
                          Submitting Evaluation...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Free Inquiry Request
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
