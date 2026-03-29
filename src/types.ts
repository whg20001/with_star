import { LucideIcon } from 'lucide-react';

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  colorClass: string;
  textColorClass: string;
}

export interface Article {
  id: string;
  title: string;
  tag: string;
  readCount: string;
  imageUrl: string;
}

export interface TrendingItem {
  id: string;
  rank: string;
  category: string;
  tag: string;
  title: string;
  colorClass: string;
}

export interface Volunteer {
  id: string;
  name: string;
  rating: number;
  serviceCount: number;
  tags: string[];
  description: string;
  avatarUrl: string;
}

export interface Institution {
  id: string;
  name: string;
  rating: number;
  distance: string;
  tags: string[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  type: 'video' | 'guide';
  ageTag: string;
  domainTag: string;
  imageUrl: string;
  duration?: string;
}
