export interface StatItem {
  id: string;
  value: string;
  label: string;
  subtext: string;
  iconName: string;
  color: string;
}

export interface RankingItem {
  rank: string;
  location: string;
  source: string;
  year: string;
  highlight?: string;
}

export interface SportItem {
  id: string;
  name: string;
  category: 'outdoor' | 'indoor' | 'precision' | 'arts';
  description: string;
  image: string;
  icon: string;
  tags: string[];
}

export interface GuestItem {
  id: string;
  name: string;
  title: string;
  category: 'sports' | 'leader' | 'cultural';
  image: string;
  quoteOrAchievement: string;
}

export interface ReviewItem {
  id: string;
  parentName: string;
  relation: string;
  studentName: string;
  avatar: string;
  rating: number;
  comment: string;
  badge?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface CollaborationItem {
  id: string;
  name: string;
  logo: string;
  type: string;
}
