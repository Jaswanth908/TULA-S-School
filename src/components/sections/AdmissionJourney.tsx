import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, UserCheck, FileCheck, Award, GraduationCap, ArrowRight, Check } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

interface AdmissionJourneyProps {
  onOpenEnquiry: () => void;
}

export const AdmissionJourney: React.FC<AdmissionJourneyProps> = ({ onOpenEnquiry }) => {
  const [selectedGrade, setSelectedGrade] = useState<string>('Middle School (Class 6 - 8)');

  const admissionSteps = [
    {
      step: '01',
      title: 'Online Enquiry & Registration',
      description: 'Submit basic student profile through our portal or connect directly with our admissions helpline.',
      icon: ClipboardList,
    },
    {
      step: '02',
      title: 'Campus Interaction / Virtual Meet',
      description: 'Experience a personalized guided campus tour or schedule an interactive video session with the Principal.',
      icon: UserCheck,
    },
    {
      step: '03',
      title: 'Skill Assessment & Aptitude',
      description: 'Age-appropriate assessment evaluating conceptual understanding, language readiness, and sports interest.',
      icon: FileCheck,
    },
    {
      step: '04',
      title: 'Provisional Offer & Enrolment',
      description: 'Formal letter of admission with documentation completion and house allotment in boarding dormitories.',
      icon: Award,
    },
    {
      step: '05',
      title: 'Induction & Welcome to TIS',
      description: 'Orientation session for parents and students, peer mentorship buddy matching, and boarding kit handover.',
      icon: GraduationCap,
    },
  ];

  const gradeTracks = [
    {
      category: 'Primary School (Class 4 - 5)',
      age: '9 - 11 Years',
      highlights: [
        'Foundational numeracy, literacy, and experiential play',
        'Mandatory introductory swimming, horse riding & performing arts',
        'Nurturing junior dorms with round-the-clock house mothers'
      ]
    },
    {
      category: 'Middle School (Class 6 - 8)',
      age: '11 - 14 Years',
      highlights: [
        'CBSE curriculum with specialized science and coding labs',
        'Sport specialization (Archery, Shooting, Squash, Football)',
        'Model United Nations, debate clubs, and foreign language options'
      ]
    },
    {
      category: 'Secondary School (Class 9 - 10)',
      age: '14 - 16 Years',
      highlights: [
        'Rigorous CBSE board exam prep with remedial masterclasses',
        'Career counselling and aptitude mapping for stream choice',
        'Zonal and national sports tournament representation'
      ]
    },
    {
      category: 'Senior Secondary (Class 11 - 12)',
      age: '16 - 18 Years',
      highlights: [
        'Three Streams: Science (PCM/PCB), Commerce, and Humanities',
        'Integrated coaching for JEE, NEET, SAT, CUET & CLAT',
        'University admissions portfolio & global exchange mentoring'
      ]
    }
  ];

  const activeTrack = gradeTracks.find(t => t.category === selectedGrade) || gradeTracks[1];

  return (
    <section className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
      
      {/* Header */}
      <SectionHeading
        badge="Simple 5-Step Process"
        title="Your Roadmap to Joining"
        titleHighlight="Tula's International School"
        subtitle="Transparent, seamless, and supportive admission journey designed to welcome aspiring learners into our residential family."
      />

      {/* 5-Step Admission Process Flow */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative mb-16">
        {admissionSteps.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl p-5 bg-white dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 shadow-md flex flex-col justify-between relative group hover:border-tis-crimson transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-serif font-black text-2xl text-tis-crimson dark:text-tis-gold">
                    {item.step}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-tis-crimson/10 text-tis-crimson flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <h4 className="font-serif font-bold text-base text-slate-900 dark:text-white mb-2 leading-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Grade Selector & Curriculum Guide */}
      <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Grade Track Selector (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <span className="text-xs font-bold uppercase tracking-widest text-tis-gold mb-2">
              Academic Streams & Age Eligibility
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-4">
              Find the Right Academic Level
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6">
              Select your child's upcoming grade to review tailored curriculum features, boarding support, and specialized focus areas.
            </p>

            <div className="space-y-2">
              {gradeTracks.map((track) => (
                <button
                  key={track.category}
                  onClick={() => setSelectedGrade(track.category)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center justify-between ${
                    selectedGrade === track.category
                      ? 'bg-tis-crimson text-white shadow-lg'
                      : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span>{track.category}</span>
                  <span className="text-[11px] opacity-80">{track.age}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: Active Grade Highlights (7 cols) */}
          <div className="lg:col-span-7 bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700">
                <div>
                  <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {activeTrack.category}
                  </h4>
                  <p className="text-xs text-tis-gold-light mt-0.5">
                    Age Group: {activeTrack.age} • CBSE Affiliated
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-tis-teal/20 text-tis-teal border border-tis-teal/30">
                  Admissions Open
                </span>
              </div>

              <ul className="space-y-3 mb-6">
                {activeTrack.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                    <div className="w-5 h-5 rounded-full bg-tis-gold/20 text-tis-gold flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="w-full sm:w-auto py-3 px-6 rounded-xl bg-tis-gold text-slate-950 font-bold text-sm hover:bg-tis-gold-light transition-all flex items-center justify-center gap-2 self-start"
            >
              <span>Enquire for {activeTrack.category.split('(')[0]}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>

    </section>
  );
};
