import { Link } from 'react-router-dom';

interface CircularAvatarProps {
  name: string;
  image: string;
  profileLink?: string;
  category?: string;
  role?: string;
  position?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * CircularAvatar - Reusable component for displaying people with circular avatars
 * 
 * Features:
 * - Circular avatar with green border (SVP brand color)
 * - Category badge below avatar
 * - Shine effect animation on hover
 * - Responsive sizing
 * - Optional profile link
 * 
 * Used in: PeopleSection, Vorstand page, Stadtrat page
 */
const CircularAvatar = ({
  name,
  image,
  profileLink,
  category,
  role,
  position,
  size = 'md',
  className = '',
}: CircularAvatarProps) => {
  const sizeClasses = {
    sm: 'w-24 h-24 md:w-28 md:h-28',
    md: 'w-32 h-32 md:w-40 md:h-40',
    lg: 'w-40 h-40 md:w-48 md:h-48',
  };

  const badgeSizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-xs px-3 py-1',
    lg: 'text-sm px-4 py-1.5',
  };

  const content = (
    <div className={`group flex flex-col items-center text-center p-4 hover:scale-105 transition-transform duration-300 ${className}`}>
      {/* Circular avatar with green border and shiny effects */}
      <div className="relative mb-4">
        <div className={`relative ${sizeClasses[size]} rounded-full overflow-hidden border-4 border-[hsl(var(--svp-green))] shadow-lg group-hover:shadow-xl group-hover:border-[hsl(var(--svp-green-light))] transition-all duration-300`}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          {/* Shiny effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        {/* Category badge */}
        {category && (
          <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${badgeSizeClasses[size]} bg-[hsl(var(--svp-green))] text-white font-semibold rounded-full whitespace-nowrap shadow-md group-hover:bg-[hsl(var(--svp-green-light))] transition-colors duration-300`}>
            {category}
          </div>
        )}
      </div>
      
      {/* Name */}
      <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
        {name}
      </h3>
      
      {/* Role */}
      {role && (
        <p className="text-sm font-semibold text-primary mb-1">
          {role}
        </p>
      )}
      
      {/* Position */}
      {position && (
        <p className="text-xs text-muted-foreground">
          {position}
        </p>
      )}
    </div>
  );

  if (profileLink) {
    return (
      <Link to={profileLink}>
        {content}
      </Link>
    );
  }

  return content;
};

export default CircularAvatar;

