import { Motion } from '@/types/motion';

export interface VorstossJSONItem {
  business_title: string;
  start_date: string;
  status: string;
  pdf_document_links: Array<{ value: string }>;
  year: number;
}

export interface VorstoesseJSON {
  stadt_zug_results: VorstossJSONItem[];
}

/**
 * Extracts motion type from business title
 */
function extractMotionType(title: string): Motion['type'] {
  const titleLower = title.toLowerCase();
  
  if (titleLower.includes('kleine anfrage')) {
    return 'Kleine Anfrage';
  }
  if (titleLower.includes('interpellation')) {
    return 'Interpellation';
  }
  if (titleLower.includes('postulat')) {
    return 'Postulat';
  }
  if (titleLower.includes('antrag')) {
    return 'Antrag';
  }
  if (titleLower.includes('motion')) {
    return 'Motion';
  }
  
  // Default fallback
  return 'Motion';
}

/**
 * Extracts author from business title
 */
function extractAuthor(title: string): string {
  // Try to extract "SVP-Fraktion" or similar
  if (title.includes('SVP-Fraktion')) {
    return 'SVP-Fraktion';
  }
  if (title.includes('FDP- und SVP Fraktion') || title.includes('FDP- und SVP-Fraktion')) {
    return 'FDP- und SVP Fraktion';
  }
  if (title.includes('FDP, SVP')) {
    return 'FDP, SVP, SP, Die Mitte';
  }
  if (title.includes('FDP, Die Mitte und SVP')) {
    return 'FDP, Die Mitte und SVP';
  }
  if (title.includes('FDP, SVP, SP und GLP')) {
    return 'FDP, SVP, SP und GLP';
  }
  
  // Default
  return 'SVP-Fraktion';
}

/**
 * Formats date from YYYY-MM-DD to German format
 */
function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('de-CH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Creates a short description from title
 */
function createDescription(title: string): string {
  // Remove common prefixes
  const cleaned = title
    .replace(/^(Motion|Interpellation|Postulat|Kleine Anfrage|Antrag)\s+(der|von)\s+(SVP-Fraktion|FDP- und SVP Fraktion|FDP, SVP, SP, Die Mitte|FDP, Die Mitte und SVP|FDP, SVP, SP und GLP)\s+vom\s+\d+\.\s+\w+\s+\d+\s+betreffend\s+/i, '')
    .replace(/^\d+\.\s+(Lesung|Überw\.)/i, '')
    .trim();
  
  return cleaned || title;
}

/**
 * Converts JSON data to Motion format
 */
export function transformVorstoesseJSON(jsonData: VorstoesseJSON): Motion[] {
  return jsonData.stadt_zug_results.map((item, index) => {
    const type = extractMotionType(item.business_title);
    const author = extractAuthor(item.business_title);
    const date = formatDate(item.start_date);
    const description = createDescription(item.business_title);
    
    // Determine if current or completed based on status
    const isCompleted = item.status && item.status.length > 0 && 
      !item.status.toLowerCase().includes('überw');
    
    // Extract title by removing the prefix
    let title = item.business_title;
    // Remove patterns like "Motion der SVP-Fraktion vom 03. Dezember 2025 betreffend "
    title = title.replace(/^(Motion|Interpellation|Postulat|Kleine Anfrage|Antrag)\s+(der|von)\s+.+?\s+vom\s+\d+\.\s+\w+\s+\d+\s+betreffend\s+/i, '');
    title = title.trim();
    
    return {
      id: `${item.year}-${index}`,
      title: title || item.business_title,
      type,
      date,
      status: item.status || (isCompleted ? 'Beantwortet' : 'Zur Überw.'),
      description,
      author,
      recent: false, // Will be determined by date in component
      pdfLinks: item.pdf_document_links.map(link => link.value),
    } as Motion;
  });
}

/**
 * Separates motions into current and completed
 */
export function separateMotions(motions: Motion[]): {
  current: Motion[];
  completed: Motion[];
} {
  const current: Motion[] = [];
  const completed: Motion[] = [];
  
  motions.forEach(motion => {
    const statusLower = motion.status.toLowerCase();
    const isCompleted = 
      statusLower.includes('beantwortet') ||
      statusLower.includes('umgesetzt') ||
      statusLower.includes('angenommen') ||
      statusLower.includes('abgelehnt') ||
      (motion.status && motion.status.length > 0 && !statusLower.includes('überw'));
    
    if (isCompleted) {
      completed.push(motion);
    } else {
      current.push(motion);
    }
  });
  
  return { current, completed };
}

