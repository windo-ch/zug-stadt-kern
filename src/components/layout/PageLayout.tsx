import { useEffect, ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageLayoutProps {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string; // For custom backgrounds (defaults to min-h-screen bg-background)
}

/**
 * PageLayout - Standard page wrapper component
 * 
 * Handles:
 * - Header and Footer automatically
 * - SEO meta tags (title and description)
 * - Consistent page structure
 * 
 * Usage:
 * ```tsx
 * <PageLayout title="Page Title" description="Page description">
 *   <main>...</main>
 * </PageLayout>
 * ```
 */
const PageLayout = ({ 
  title, 
  description, 
  children, 
  className = 'min-h-screen bg-background' 
}: PageLayoutProps) => {
  useEffect(() => {
    // Update existing title tag instead of just setting document.title
    let titleElement = document.querySelector('title');
    if (!titleElement) {
      titleElement = document.createElement('title');
      document.getElementsByTagName('head')[0].appendChild(titleElement);
    }
    titleElement.textContent = title;
    
    // Set meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        // Create meta description tag if it doesn't exist
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.getElementsByTagName('head')[0].appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);

  return (
    <div className={className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageLayout;

