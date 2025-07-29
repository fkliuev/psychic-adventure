import React from 'react';

interface SocialButtonsProps {
  orcid?: string;
  googleScholar?: string;
}

export const SocialButtons: React.FC<SocialButtonsProps> = ({ orcid, googleScholar }) => {
  return (
    <div className="flex items-center gap-2">
      {orcid && (
        <a
          href={orcid}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center p-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
          title="ORCID Profile"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.5 16.5h-3v-9h3v9zm-1.5-10.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5-.672 1.5-1.5 1.5-1.5-.672-1.5-1.5zm10.5 10.5h-3v-4.5c0-1.5-1.5-2.25-3-2.25s-3 .75-3 2.25v4.5h-3v-9h3v1.5c1.5-1.5 3.75-1.5 5.25 0v-1.5h3v9z"/>
          </svg>
        </a>
      )}
      {googleScholar && (
        <a
          href={googleScholar}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200"
          title="Google Scholar Profile"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
          </svg>
        </a>
      )}
    </div>
  );
}; 