import { useState } from 'react';
import { Mail } from 'lucide-react';

interface ProtectedEmailProps {
  user: string;
  domain: string;
  className?: string;
  showIcon?: boolean;
}

const ProtectedEmail = ({ user, domain, className = "", showIcon = true }: ProtectedEmailProps) => {
  const [showEmail, setShowEmail] = useState(false);
  
  const email = `${user}@${domain}`;
  
  const handleClick = () => {
    setShowEmail(true);
    // Open mailto after a short delay to allow state update
    setTimeout(() => {
      window.location.href = `mailto:${email}`;
    }, 100);
  };

  return (
    <div className={`flex items-center ${className}`}>
      {showIcon && <Mail className="w-4 h-4 mr-2 text-muted-foreground" />}
      <button
        onClick={handleClick}
        className="text-primary hover:text-primary/80 transition-colors text-left"
        type="button"
      >
        {showEmail ? email : `${user}@${domain}`}
      </button>
    </div>
  );
};

export default ProtectedEmail;