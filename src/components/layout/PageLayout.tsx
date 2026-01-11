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
    // Set document title
    document.title = title;
    
    // Set meta description if provided
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        // Create meta description tag if it doesn't exist
        const meta = document.createElement('meta');
        meta.name = 'description';
        meta.content = description;
        document.getElementsByTagName('head')[0].appendChild(meta);
      }
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

