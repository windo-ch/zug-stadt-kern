export interface Election {
  id?: string | number;
  icon?: any; // React component/icon
  title: string;
  date: string;
  description: string;
  level: 'kantonal' | 'national';
  status: string;
  priority: 'high' | 'medium' | 'low';
  link?: string | null;
}

