import React, { useState } from 'react';
import { ImageOff, User, FileText, FlaskConical, Atom } from 'lucide-react';

interface ImageLoaderProps {
  src: string;
  alt: string;
  className?: string;
  fallbackType?: 'user' | 'publication' | 'research' | 'chemistry';
}

export const ImageLoader: React.FC<ImageLoaderProps> = ({ 
  src, 
  alt, 
  className = '', 
  fallbackType = 'chemistry'
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
    }
  };

  const getFallbackIcon = () => {
    switch (fallbackType) {
      case 'user':
        return <User className="h-8 w-8 mx-auto text-gray-400" />;
      case 'publication':
        return <FileText className="h-8 w-8 mx-auto text-gray-400" />;
      case 'research':
        return <FlaskConical className="h-8 w-8 mx-auto text-gray-400" />;
      case 'chemistry':
      default:
        return <Atom className="h-8 w-8 mx-auto text-gray-400" />;
    }
  };

  return (
    <div className={`relative ${className}`}>
      {!hasError ? (
        <img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover"
          onError={handleError}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-violet-100 to-blue-100 dark:from-violet-900/20 dark:to-blue-900/20 flex items-center justify-center">
          <div className="text-center">
            {getFallbackIcon()}
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}; 