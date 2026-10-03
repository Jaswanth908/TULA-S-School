import type { StatItem, RankingItem, SportItem, GuestItem, ReviewItem, FaqItem, CollaborationItem } from '../types/tis';

export const HERO_DATA = {
  badge: "Admissions Open for Academic Year 2026-27 | CBSE Affiliated Co-Ed Boarding",
  tagline: "LET'S DO IT WITH TULA'S",
  headline: "Where Ancient Wisdom Meets Global Innovation",
  subheadline: "Ranked among India's top boarding schools, Tula's International School delivers the timeless ethos of a Modern Gurukul paired with world-class academics, 16+ Olympic sports, and boundless opportunities.",
  stats: [
    { label: "Campus Expanse", value: "22 Acres", sub: "Pollution-Free Green Valley" },
    { label: "Student-Teacher", value: "6:1", sub: "Personal Mentorship Ratio" },
    { label: "Olympic Sports", value: "16+", sub: "Specialized Coaching Academies" },
    { label: "Boarding Care", value: "24x7", sub: "Dedicated Medical & Pastoral Care" },
  ],
  bubbles: [
    { name: "Shooting", image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=600&q=80", color: "#b90124" },
    { name: "Horse Riding", image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80", color: "#c09d59" },
    { name: "Archery", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80", color: "#60bab1" },
    { name: "Swimming", image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=600&q=80", color: "#007a83" },
    { name: "Taekwondo", image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=600&q=80", color: "#b90124" },
    { name: "Performing Arts", image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=600&q=80", color: "#c09d59" }
  ]
};

export const STATS_DATA: StatItem[] = [
  {
    id: "campus",
    value: "22",
    label: "Acre Eco Campus",
    subtext: "Nestled in the lush, pollution-free foothills of Dehradun, Uttarakhand.",
    iconName: "Trees",
    color: "#60bab1"
  },
  {
    id: "sports",
    value: "16+",
    label: "Olympic Sports Facilities",
    subtext: "Professional arenas for horse riding, shooting, archery, squash, swimming, and more.",
    iconName: "Trophy",
    color: "#c09d59"
  },
  {
    id: "ratio",
    value: "6:1",
    label: "Student-Teacher Ratio",
    subtext: "Unrivaled individualized mentorship and bespoke academic support.",
    iconName: "Users",
    color: "#b90124"
  },
  {
    id: "medical",
    value: "24*7",
    label: "Medical & Safety Care",
    subtext: "Round-the-clock infirmary, resident doctors, and stringent multi-tier security.",
    iconName: "ShieldCheck",
    color: "#007a83"
  }
];

export const RANKINGS_DATA: RankingItem[] = [
  {
    rank: "#1",
    location: "In Dehradun",
    source: "Co-Educational Boarding School by Education Today",
    year: "2025-26",
    highlight: "Top Academic & Residential Benchmark"
  },
  {
    rank: "#1",
    location: "In North India",
    source: "Co-Educational Boarding School by Outlook Survey",
    year: "2025-26",
    highlight: "Highest Parent Satisfaction Score"
  },
  {
    rank: "#2",
    location: "In Uttarakhand",
    source: "Best Co-Educational Residential School by Education Today",
    year: "2025-26",
    highlight: "Holistic Infrastructure & Pedagogy"
  },
  {
    rank: "#4",
    location: "All India Ranking",
    source: "Top Co-Educational Boarding School in India by Education Today",
    year: "2025-26",
    highlight: "National Excellence in Co-Ed Boarding"
  }
];

export const PHILOSOPHY_PILLARS = [
  {
    title: "Mind — Intellectual Rigor",
    description: "CBSE curriculum enhanced with STEM labs, debate societies, robotics, and critical inquiry that fosters independent thinkers.",
    icon: "Brain",
    accent: "#b90124"
  },
  {
    title: "Body — Athletic Discipline",
    description: "16+ Olympic standard sports guided by national coaches to cultivate endurance, sportsmanship, and physical vitality.",
    icon: "Flame",
    accent: "#c09d59"
  },
  {
    title: "Soul — Modern Gurukul Ethos",
    description: "Rooted in Rishabh Educational Trust values: integrity, empathy, community leadership, and mindfulness in daily life.",
    icon: "Compass",
    accent: "#60bab1"
  },
  {
    title: "Global Vision — Boundless Horizons",
    description: "International student exchange programs, global university tie-ups, MUN summits, and cross-cultural exposure.",
    icon: "Globe",
    accent: "#007a83"
  }
];

export const SPORTS_DATA: SportItem[] = [
  {
    id: "archery",
    name: "Archery Range",
    category: "precision",
    description: "Olympic standard outdoor archery range with professional coaching, regularly training state and national medalists.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
    icon: "Target",
    tags: ["Olympic Discipline", "National Coaching", "Outdoor"]
  },
  {
    id: "horseriding",
    name: "Horse Riding Academy",
    category: "outdoor",
    description: "Dedicated equestrian arena with trained stallions, equestrian instructors, and dressage & show jumping training.",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    icon: "Crown",
    tags: ["Equestrian", "Certified Stables", "Outdoor"]
  },
  {
    id: "shooting",
    name: "10M Shooting Range",
    category: "precision",
    description: "Electronic scoring targets with air rifle and air pistol training overseen by national selectors and master shooters.",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?auto=format&fit=crop&w=800&q=80",
    icon: "Crosshair",
    tags: ["Electronic Targets", "National Level", "Indoor"]
  },
  {
    id: "swimming",
    name: "All-Weather Swimming Pool",
    category: "indoor",
    description: "Semi-Olympic sized temperature controlled swimming facility with certified lifeguards and stroke correction coaches.",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=800&q=80",
    icon: "Waves",
    tags: ["Semi-Olympic", "Temperature Controlled", "Certified Lifeguards"]
  },
  {
    id: "squash",
    name: "Squash Courts",
    category: "indoor",
    description: "Glass-backed international standard squash courts with maple wood flooring for rapid reflexes and stamina.",
    image: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=800&q=80",
    icon: "Zap",
    tags: ["Glass Backed", "Maple Flooring", "Indoor"]
  },
  {
    id: "taekwondo",
    name: "Taekwondo & Karate Dojo",
    category: "precision",
    description: "Martial arts training focusing on self-defense, discipline, belt progression, and mental resilience.",
    image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=800&q=80",
    icon: "Shield",
    tags: ["Self-Defense", "Black Belt Mentors", "Indoor Dojo"]
  },
  {
    id: "football",
    name: "FIFA Standard Football Field",
    category: "outdoor",
    description: "Full-sized natural grass football pitch with floodlights, hosting inter-school tournaments and tactical drills.",
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80",
    icon: "Activity",
    tags: ["Natural Grass", "Floodlit", "Inter-School Tournaments"]
  },
  {
    id: "lawn-tennis",
    name: "Synthetic Lawn Tennis Courts",
    category: "outdoor",
    description: "DecoTurf surface tennis courts with professional ball machines, tournament drills, and match analysis.",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80",
    icon: "CircleDot",
    tags: ["DecoTurf", "Tournament Ready", "Outdoor"]
  }
];

export const GUESTS_DATA: GuestItem[] = [
  {
    id: "sakshi-malik",
    name: "Sakshi Malik",
    title: "Rio Olympics Bronze Medalist & Padma Shri Awardee",
    category: "sports",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
    quoteOrAchievement: "First Indian female wrestler to win an Olympic medal. Rajiv Gandhi Khel Ratna 2016."
  },
  {
    id: "vishesh-bhriguvanshi",
    name: "Vishesh Bhriguvanshi",
    title: "Indian Basketball Team Captain & Arjuna Awardee",
    category: "sports",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80",
    quoteOrAchievement: "Led Team India to Gold at Asian Beach Games. Longest serving captain in modern Indian basketball."
  },
  {
    id: "prakashi-tomar",
    name: "Prakashi Tomar ('Shooter Dadi')",
    title: "Veteran National Shooting Champion & Inspiration behind 'Saand Ki Aankh'",
    category: "sports",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    quoteOrAchievement: "Winner of over 30 National Championships, proving that determination knows no age."
  },
  {
    id: "abhishek-verma",
    name: "Abhishek Verma",
    title: "Asian Games Gold Medalist & World No. 6 in Archery",
    category: "sports",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
    quoteOrAchievement: "Arjuna Awardee and World Cup Gold Medalist compound archer."
  },
  {
    id: "ramesh-pokhriyal",
    name: "Dr. Ramesh Pokhriyal 'Nishank'",
    title: "Former Union Cabinet Minister for Education & Former CM Uttarakhand",
    category: "leader",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=600&q=80",
    quoteOrAchievement: "Key architect of the National Education Policy (NEP) and distinguished author."
  },
  {
    id: "dharmendra-pradhan",
    name: "Shri Dharmendra Pradhan",
    title: "Union Minister of Education, Government of India",
    category: "leader",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    quoteOrAchievement: "Championing progressive, skill-based 21st-century education across Indian institutions."
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: "1",
    parentName: "Tashi Tsering",
    relation: "Father of",
    studentName: "Jigmet Skaldon (Class IX)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    badge: "Verified Parent",
    comment: "I would like to convey a big thanks to the Management and Teachers of Tula's International School for taking exceptional care of my son. His self-confidence and discipline have blossomed beyond our imagination."
  },
  {
    id: "2",
    parentName: "Namita Agarwal",
    relation: "Mother of",
    studentName: "Krishna Agarwal (Class VII)",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    badge: "Verified Parent",
    comment: "Tula's gives a comprehensive, loving environment for our child to grow. The blend of sports, rigorous academics, and cultural activities helped Krishna discover his true passions."
  },
  {
    id: "3",
    parentName: "Sandeep Kumar",
    relation: "Father of",
    studentName: "Aryan (Class XI)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    badge: "Verified Parent",
    comment: "Our experience is truly amazing with the school. The boarding staff is extraordinarily cooperative and supportive. Our son genuinely loves the campus community."
  },
  {
    id: "4",
    parentName: "Pinky Sharma",
    relation: "Mother of",
    studentName: "Swastik Sharma (Class V)",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    badge: "Verified Parent",
    comment: "I am extremely satisfied with the wonderful nurturing experience for my young child. The housemasters and teachers are always accessible, ensuring each child feels cherished and supported."
  },
  {
    id: "5",
    parentName: "Amit Agrawal",
    relation: "Father of",
    studentName: "Samruddhi Agrawal (Class X)",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    badge: "Verified Parent",
    comment: "Finding a boarding school that meets the highest benchmarks for security, hygiene, nutrition, academics, and character building is tough. Tula's exceeds every expectation."
  }
];

export const COLLABORATIONS_DATA: CollaborationItem[] = [
  { id: "1", name: "University of Winnipeg", logo: "UW", type: "Academic Exchange" },
  { id: "2", name: "Trinity College London", logo: "TCL", type: "Speech & Drama Certification" },
  { id: "3", name: "International Award for Young People (IAYP)", logo: "IAYP", type: "Youth Leadership" },
  { id: "4", name: "INSEEC U. Paris", logo: "INSEEC", type: "Global Business Immersion" },
  { id: "5", name: "Lions International", logo: "LIONS", type: "Community Service" },
  { id: "6", name: "Cambridge Assessment English", logo: "CAE", type: "Language Benchmarking" },
];

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    category: "Admissions",
    question: "Which classes are eligible for admission at Tula's International School?",
    answer: "Tula's International School admits boys and girls for co-educational boarding from Class IV through Class XII, affiliated with the CBSE board."
  },
  {
    id: "faq-2",
    category: "Campus & Safety",
    question: "How does TIS ensure the safety and medical well-being of boarders?",
    answer: "Our 22-acre campus features 24/7 CCTV surveillance, multi-point biometric security, resident house parents in every dorm, and a round-the-clock medical infirmary with visiting specialist doctors and dedicated ambulances."
  },
  {
    id: "faq-3",
    category: "Sports & Co-Curricular",
    question: "What sports facilities are included within the curriculum?",
    answer: "We offer 16+ Olympic standard sports including Horse Riding, Archery, 10M Indoor Shooting Range, Temperature-Controlled Swimming, Squash, Taekwondo, FIFA-size Football, Synthetic Tennis, Billiards, and Cricket Academy."
  },
  {
    id: "faq-4",
    category: "Food & Nutrition",
    question: "What kind of dining and nutrition is provided to residential students?",
    answer: "Our central dining hall serves 100% vegetarian, balanced, nutritionist-designed meals prepared in state-of-the-art hygienic kitchens with organic produce, seasonal fruits, milk bars, and multi-cuisine wholesome menus."
  },
  {
    id: "faq-5",
    category: "Academics",
    question: "What is the student-to-teacher ratio at Tula's International School?",
    answer: "We maintain an exceptional 6:1 student-to-teacher ratio. This guarantees that every student receives personalized attention, remedial guidance, and dedicated mentorship for CBSE board and competitive exams (JEE/NEET/SAT/CLAT)."
  }
];

export const CONTACT_INFO = {
  phone: "+91-9837983791",
  altPhone: "0135-2699444, 0135-2699666",
  email: "info@tis.edu.in",
  admissionEmail: "admissions@tis.edu.in",
  address: "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand), India",
  googleMapsUrl: "https://maps.app.goo.gl/maBF8syXueQkw31E6",
  virtualTourUrl: "https://tis.edu.in/virtual-tour/",
  fedenaUrl: "https://tis.fedena.com/",
  socials: {
    facebook: "https://www.facebook.com/tulasinternationalschool/",
    instagram: "https://www.instagram.com/tulasinternationalschool/",
    youtube: "https://www.youtube.com/channel/UC-eRtybnv3GvfvcWxQq93zw",
    linkedin: "https://www.linkedin.com/school/tulas-international-school/",
    twitter: "https://twitter.com/tulas_intschool"
  }
};
