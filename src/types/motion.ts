export type MotionType = 'Motion' | 'Interpellation' | 'Postulat' | 'Kleine Anfrage' | 'Antrag';

export type MotionStatus = 
  | 'zur Überw.' 
  | 'Überw.' 
  | '2948 SR' 
  | 'Zur Überw.'
  | 'Abgelehnt'
  | 'Angenommen'
  | string; // Allow other status values

export type MotionCategory = 
  | 'Soziales' 
  | 'Verkehr' 
  | 'Politik' 
  | 'Kultur' 
  | 'Umwelt' 
  | 'Verwaltung'
  | string; // Allow other categories

export type ImpactLevel = 'Hoch' | 'Mittel' | 'Niedrig';

export interface Motion {
  id: string | number;
  title: string;
  type: MotionType;
  date: string;
  status: MotionStatus;
  description: string;
  author: string;
  coAuthors?: string[];
  reasoning?: string;
  goals?: string[];
  progress?: string;
  expectedImpact?: ImpactLevel;
  category?: MotionCategory;
  referenz?: string;
  recent?: boolean;
  // For completed motions
  result?: string;
  implementation?: string[];
  impact?: string;
}

