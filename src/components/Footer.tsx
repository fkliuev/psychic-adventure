import React from 'react';
import { Mail, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Laboratory Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">ChemCatGroup</h3>
            <p className="text-gray-300 mb-4">
              Leading research in organic catalysis and hydrogen borrowing reactions, developing innovative 
              catalytic methodologies for sustainable synthesis with focus on ruthenium catalysis.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/publications" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  Latest Publications <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </li>
              <li>
                <a href="/research" className="text-gray-300 hover:text-white transition-colors">
                  Research Areas
                </a>
              </li>
              <li>
                <a href="/team" className="text-gray-300 hover:text-white transition-colors">
                  Join Our Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center">
                  Google Scholar <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-violet-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Chden@ya.ru</p>
                  <p className="text-gray-400 text-sm">General inquiries</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-violet-400 mt-0.5" />
                <div>
                  <p className="text-gray-300">Moscow, Russia, 119334</p>
                  <p className="text-gray-400 text-sm">Chemistry Department</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} ChemCatGroup. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};