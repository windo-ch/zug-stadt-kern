export interface PersonContact {
  email?: string;
  phone?: string;
  mobile?: string;
  address?: string;
}

export interface Person {
  name: string;
  position: string;
  roles?: string[];
  description?: string;
  image: string;
  address?: string; // Address can be directly on person (Vorstand) or in contact (Stadtrat)
  contact?: PersonContact;
  profileLink?: string;
  // Additional fields for profile pages
  born?: string;
  location?: string;
  maritalStatus?: string;
  profession?: string;
  children?: string;
  // For PeopleSection carousel variant
  role?: string; // Used in carousel for subtitle
  category?: 'Vorstand' | 'Stadtrat' | 'GGR-Fraktion';
  // For Stadtrat specific
  isFraktionschef?: boolean;
  isPresident?: boolean;
}

