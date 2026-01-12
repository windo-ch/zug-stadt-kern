import { memo } from 'react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface ProfileBreadcrumbProps {
  items: BreadcrumbItem[];
  currentPage: string;
}

/**
 * ProfileBreadcrumb - Breadcrumb navigation component for profile pages
 * 
 * Provides consistent navigation structure across all profile pages.
 */
const ProfileBreadcrumb = memo(({ items, currentPage }: ProfileBreadcrumbProps) => {
  return (
    <nav className="mb-8 text-sm">
      <div className="flex items-center space-x-2 text-muted-foreground">
        {items.map((item, index) => (
          <span key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">&gt;</span>}
            <Link to={item.href} className="hover:text-primary transition-colors">
              {item.label}
            </Link>
          </span>
        ))}
        <span className="mx-2">&gt;</span>
        <span className="text-foreground">{currentPage}</span>
      </div>
    </nav>
  );
});

ProfileBreadcrumb.displayName = 'ProfileBreadcrumb';

export default ProfileBreadcrumb;

