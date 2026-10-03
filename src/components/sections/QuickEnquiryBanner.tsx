import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, ShieldCheck, Sparkles, Clock, Lock } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuickEnquiryBannerProps {
  onSuccess?: () => void;
}

export const QuickEnquiryBanner: React.FC<QuickEnquiryBannerProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    targetClass: '',
    state: '',
    otp: '',
    agreed: true,
  });

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSendOtp = () => {
    if (!formData.phone || formData.phone.length < 10) {
      alert('Please enter a valid 10-digit mobile number');
      return;
    }
    setOtpSent(true);
    // Simulate auto-filled OTP demo
    setTimeout(() => {
      setFormData(prev => ({ ...prev, otp: '7842' }));
    }, 800);
  };

  const handleVerifyOtp = () => {
    if (formData.otp.length >= 4) {
      setOtpVerified(true);
    } else {
      alert('Please enter a 4-digit OTP');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.targetClass || !formData.state) {
      alert('Please fill all mandatory fields to enquire');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      
      // Trigger festive celebration confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#b90124', '#c09d59', '#60bab1', '#ffffff']
      });

      if (onSuccess) onSuccess();
    }, 900);
  };

  const statesList = [
    'Uttarakhand', 'Delhi NCR', 'Uttar Pradesh', 'Punjab', 'Haryana',
    'Himachal Pradesh', 'Bihar', 'West Bengal', 'Maharashtra', 'Karnataka',
    'Rajasthan', 'Madhya Pradesh', 'Gujarat', 'Assam', 'Other / NRI'
  ];

  return (
    <section id="admissions" className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-6 z-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="rounded-3xl bg-gradient-to-br from-tis-teal-subtle via-white to-tis-teal-light/40 dark:from-slate-800 dark:via-slate-850 dark:to-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl border border-tis-teal/30 dark:border-slate-700 relative overflow-hidden"
      >
        {/* Background Accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-tis-teal/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-tis-crimson/10 rounded-full blur-3xl pointer-events-none" />

        {submitted ? (
          <div className="text-center py-12 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-slate-900 dark:text-white">
              Thank You, {formData.fullName}!
            </h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-lg">
              Your admission enquiry for <strong>{formData.targetClass} (Session 2026-27)</strong> has been successfully registered. Our Senior Admissions Dean will reach out via call/WhatsApp shortly.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-tis-teal" /> Verified Submission</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-tis-gold" /> Response within 2 hours</span>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  fullName: '',
                  email: '',
                  phone: '',
                  targetClass: '',
                  state: '',
                  otp: '',
                  agreed: true,
                });
                setOtpSent(false);
                setOtpVerified(false);
              }}
              className="mt-8 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-opacity"
            >
              Submit Another Enquiry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Value Proposition & Contact */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-tis-crimson text-white w-fit mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Admissions 2026-2027</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Begin Your Child's Transformative Journey
              </h3>
              <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                Connect with our expert Admissions Directorate to schedule an on-campus interaction, review scholarships, and experience our 22-acre modern Gurukul campus.
              </p>

              {/* Verified Trust Badges */}
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-tis-teal/20 text-tis-teal-dark dark:text-tis-teal flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>CBSE Affiliated Boarding for Boys & Girls (Class 4 - 12)</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-tis-gold/20 text-tis-gold-dark dark:text-tis-gold flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>6:1 Personalized Mentorship Ratio</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                  <div className="w-6 h-6 rounded-full bg-tis-crimson/20 text-tis-crimson flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <span>16+ Olympic Sports & Co-Curricular Academies</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Converting Interactive Form */}
            <form onSubmit={handleSubmit} className="lg:col-span-7 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl shadow-lg border border-slate-200/80 dark:border-slate-800 flex flex-col gap-4">
              <div className="border-b border-slate-100 dark:border-slate-800 pb-3 mb-1">
                <h4 className="font-serif text-xl font-bold text-slate-900 dark:text-white">
                  Express Admission Enquiry Form
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Fill in your details below for immediate admission prospectus & fee structure.
                </p>
              </div>

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Student / Parent Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-crimson/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    placeholder="e.g. parent@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-crimson/50"
                  />
                </div>
              </div>

              {/* Row 2: Mobile Number & OTP Simulation */}
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-end">
                <div className="sm:col-span-8">
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Mobile Number *
                  </label>
                  <div className="flex gap-2">
                    <span className="inline-flex items-center px-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-600 dark:text-slate-300">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-crimson/50"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <button
                    type="button"
                    onClick={handleSendOtp}
                    disabled={otpVerified || formData.phone.length < 10}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                      otpVerified
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                        : otpSent
                        ? 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
                        : 'bg-slate-900 dark:bg-slate-700 text-white hover:bg-tis-crimson'
                    }`}
                  >
                    {otpVerified ? '✓ Verified' : otpSent ? 'Resend OTP' : 'Send OTP'}
                  </button>
                </div>
              </div>

              {/* Row 2.5: OTP Verification Input when sent */}
              {otpSent && !otpVerified && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="grid grid-cols-1 sm:grid-cols-12 gap-3.5 items-end bg-tis-teal/10 p-3 rounded-xl border border-tis-teal/20"
                >
                  <div className="sm:col-span-8">
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Enter OTP (Test: 7842)
                    </label>
                    <input
                      type="text"
                      maxLength={4}
                      placeholder="Enter 4-digit OTP"
                      value={formData.otp}
                      onChange={(e) => setFormData({ ...formData, otp: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-teal"
                    />
                  </div>
                  <div className="sm:col-span-4">
                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      className="w-full py-2 px-3 rounded-lg text-xs font-bold bg-tis-teal-dark text-white hover:opacity-95"
                    >
                      Verify Code
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Row 3: Class Selection & State */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Seeking Admission For *
                  </label>
                  <select
                    required
                    value={formData.targetClass}
                    onChange={(e) => setFormData({ ...formData, targetClass: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-crimson/50"
                  >
                    <option value="">Select Grade</option>
                    <option value="Class IV">Class IV (Grade 4)</option>
                    <option value="Class V">Class V (Grade 5)</option>
                    <option value="Class VI">Class VI (Grade 6)</option>
                    <option value="Class VII">Class VII (Grade 7)</option>
                    <option value="Class VIII">Class VIII (Grade 8)</option>
                    <option value="Class IX">Class IX (Grade 9)</option>
                    <option value="Class X">Class X (Grade 10)</option>
                    <option value="Class XI (Science / PCM / PCB)">Class XI (Science PCM/PCB)</option>
                    <option value="Class XI (Commerce / Humanities)">Class XI (Commerce / Humanities)</option>
                    <option value="Class XII">Class XII (Grade 12)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Resident State / Region *
                  </label>
                  <select
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-tis-crimson/50"
                  >
                    <option value="">Select State</option>
                    {statesList.map((st) => (
                      <option key={st} value={st}>
                        {st}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="agreeConsent"
                  required
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  className="mt-1 rounded text-tis-crimson focus:ring-tis-crimson"
                />
                <label htmlFor="agreeConsent" className="text-xs text-slate-600 dark:text-slate-400 cursor-pointer leading-tight">
                  I agree to receive communications, admission brochures, and fee structure details from Tula's International School, Dehradun.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-2 w-full py-3.5 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-tis-crimson hover:bg-tis-crimson-dark shadow-lg shadow-tis-crimson/25 hover:shadow-glow-crimson transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-75"
              >
                {loading ? (
                  <span>Processing Application...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Admission Enquiry</span>
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 dark:text-slate-500">
                <Lock className="w-3 h-3 text-tis-teal" />
                <span>Your information is 100% confidential and securely handled.</span>
              </div>
            </form>

          </div>
        )}
      </motion.div>
    </section>
  );
};
