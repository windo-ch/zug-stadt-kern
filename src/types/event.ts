import { ClubEvent } from '@/data/1000erClubEvents';

// Extended event interface for general events (WasAnsteht, etc.)
export interface Event {
  id: string | number;
  title: string;
  date: string;
  time?: string;
  location: string;
  type: string; // Flexible to allow capitalized values like "Vortrag", "Anlass", etc.
  description: string;
  priority?: 'high' | 'medium' | 'low';
  link?: string;
}

// Re-export ClubEvent for 1000er Club events
export type { ClubEvent };

