export interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

export interface Photo {
  src: string;
  alt: string;
}

export interface NavItem {
  label: string;
  icon: React.ComponentType<{ size?: number }>;
};
