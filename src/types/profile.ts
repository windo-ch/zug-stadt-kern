import { ReactNode } from 'react';

/**
 * Profile Data Types
 * 
 * Standardized data structure for profile pages to ensure consistency
 * and enable component reuse across all profiles.
 */

export interface PersonalData {
  name: string;
  position: string;
  born?: string;
  address?: string;
  location?: string;
  phone?: string;
  mobile?: string;
  email: string;
  maritalStatus?: string;
  profession?: string;
  children?: string;
}

export interface ProfileSection {
  title: string;
  content: ReactNode;
  variant?: 'default' | 'highlight' | 'quote';
  icon?: React.ComponentType<{ className?: string }>;
}

export interface ProfileData {
  personalData: PersonalData;
  image: string;
  quote?: string;
  biography?: string | ReactNode;
  commissions?: string[];
  positions?: string[];
  education?: string[];
  hobbies?: string[];
  clubs?: string[];
  customSections?: ProfileSection[];
  breadcrumbPath: Array<{ label: string; href: string }>;
}

