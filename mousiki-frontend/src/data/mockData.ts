import { NewsItem, Photo, NavItem } from '@/types';
import {
  IconHome,
  IconUsers,
  IconNews,
  IconMail,
} from '@tabler/icons-react';

export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Summer Concert Series 2024",
    date: "2024-07-15",
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&h=400&fit=crop",
    excerpt: "Join us for our annual summer concert series featuring traditional Greek music and dance performances."
  },
  {
    id: 2,
    title: "New Album Release",
    date: "2024-06-20",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=400&fit=crop",
    excerpt: "We're excited to announce the release of our latest album featuring traditional songs from Macedonia."
  },
  {
    id: 3,
    title: "Cultural Festival Performance",
    date: "2024-05-30",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=400&fit=crop",
    excerpt: "Our group performed at the annual Kastoria Cultural Festival, celebrating our rich musical heritage."
  },
];

export const aboutPhotos: Photo[] = [
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
    alt: "Group performance"
  },
  {
    src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=300&fit=crop",
    alt: "Traditional instruments"
  },
  {
    src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=300&fit=crop",
    alt: "Cultural event"
  }
];

export const navItems: NavItem[] = [
  { label: 'Home', icon: IconHome },
  { label: 'About', icon: IconUsers },
  { label: 'News', icon: IconNews },
  { label: 'Contact', icon: IconMail },
];
