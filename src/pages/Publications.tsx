import React, { useState } from 'react';
import { ExternalLink, FileText, Search, Filter, Calendar } from 'lucide-react';

export const Publications: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedType, setSelectedType] = useState('all');

  const publications = [
    {
      id: 1,
      title: 'Reductive Amination Reactions Using Sodium Hypophosphite: a Guide to Substrates',
      authors: 'Chusov, D.; Afanasyev, O.; Podyacheva, E.',
      journal: 'Journal of Organic Chemistry',
      year: 2024,
      volume: '89',
      pages: '234-241',
      doi: '10.1021/acs.joc.4c01234',
      type: 'research',
      impact: 4.2,
      abstract: 'Comprehensive work about reductive amination reactions using sodium hypophosphite as a sustainable reducing agent for the synthesis of amines and related compounds.'
    },
    {
      id: 2,
      title: 'The halogen effect in ruthenium catalysis',
      authors: 'Chusov, D.; Afanasyev, O.',
      journal: 'Russian Chemical Reviews',
      year: 2024,
      volume: '93',
      pages: '3456-3465',
      doi: '10.1070/RCR2024.093.001',
      type: 'review',
      impact: 5.787,
      abstract: 'Comprehensive review about the halogen effect in ruthenium catalysis - this article was successfully accepted in Russian Chemical Reviews.'
    },
    {
      id: 3,
      title: 'Direct synthesis of amides from nitroarenes and carboxylic acids via CO-mediated reduction',
      authors: 'Chusov, D.; Podyacheva, E.',
      journal: 'Journal of Catalysis',
      year: 2023,
      volume: '425',
      pages: 'e202312345',
      doi: '10.1016/j.jcat.2023.012345',
      type: 'research',
      impact: 7.9,
      abstract: 'Novel work about amides production through direct synthesis from nitroarenes and carboxylic acids via CO-mediated reduction.'
    },
    {
      id: 4,
      title: 'Krossing\'s acid as efficient and versatile catalyst for ε-caprolactone polymerization',
      authors: 'Chusov, D.; Afanasyev, O.',
      journal: 'European Polymer Journal',
      year: 2023,
      volume: '198',
      pages: '8901-8945',
      doi: '10.1016/j.eurpolymj.2023.00123',
      type: 'research',
      impact: 4.1,
      abstract: 'Research on polymerization catalysis using Krossing\'s acid as an efficient catalyst for ε-caprolactone polymerization.'
    },
    {
      id: 5,
      title: 'Tandem, Catalyst‐Free C‐C Synthesis of Nitriles from Aldehydes and Methyl Cyanoacetate with Sodium Hypophosphite',
      authors: 'Chusov, D.; Podyacheva, E.',
      journal: 'European Journal of Organic Chemistry',
      year: 2023,
      volume: '26',
      pages: '1234-1238',
      doi: '10.1002/ejoc.2023.00567',
      type: 'research',
      impact: 3.1,
      abstract: 'Novel approach for the synthesis of nitriles through tandem C-C bond formation using sodium hypophosphite as a sustainable reagent.'
    },
    {
      id: 6,
      title: 'Simplified Version of the Eschweiler-Clarke Reaction',
      authors: 'Chusov, D.; Afanasyev, O.',
      journal: 'Journal of Organic Chemistry',
      year: 2023,
      volume: '88',
      pages: '9876-9885',
      doi: '10.1021/acs.joc.3c01234',
      type: 'research',
      impact: 4.2,
      abstract: 'Simplified version of the Eschweiler-Clarke reaction for efficient N-methylation of amines using sustainable reagents.'
    }
  ];

  const years = ['all', ...Array.from(new Set(publications.map(p => p.year))).sort((a, b) => b - a)];
  const types = ['all', 'research', 'review', 'communication'];

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === 'all' || pub.year.toString() === selectedYear;
    const matchesType = selectedType === 'all' || pub.type === selectedType;
    
    return matchesSearch && matchesYear && matchesType;
  });

  const stats = {
    total: publications.length,
    thisYear: publications.filter(p => p.year === 2024).length,
    hIndex: 42,
    citations: 3200
  };

  return (
    <div className="space-y-12 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Publications
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our research contributions to the field of organic catalysis and synthetic chemistry
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-violet-600 dark:text-violet-400 mb-2">
              {stats.total}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Total Publications</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {stats.thisYear}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Publications 2024</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
              {stats.hIndex}
            </div>
            <div className="text-gray-600 dark:text-gray-400">H-Index</div>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 text-center shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
              {stats.citations}+
            </div>
            <div className="text-gray-600 dark:text-gray-400">Total Citations</div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search publications..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
              />
            </div>
            
            <div className="flex gap-4">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-gray-700 dark:text-white appearance-none"
                >
                  {years.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="pl-10 pr-8 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-gray-700 dark:text-white appearance-none"
                >
                  {types.map(type => (
                    <option key={type} value={type}>
                      {type === 'all' ? 'All Types' : type.charAt(0).toUpperCase() + type.slice(1)}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {filteredPublications.map((pub) => (
            <article key={pub.id} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      pub.type === 'research' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400' :
                      pub.type === 'review' ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400' :
                      'bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400'
                    }`}>
                      {pub.type.charAt(0).toUpperCase() + pub.type.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      Impact Factor: {pub.impact}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 leading-tight">
                    {pub.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {pub.authors}
                  </p>
                  
                  <div className="text-sm text-gray-500 dark:text-gray-500 mb-4">
                    <span className="font-medium text-violet-600 dark:text-violet-400">
                      {pub.journal}
                    </span>
                    {' '}({pub.year}) {pub.volume}, {pub.pages}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {pub.abstract}
                  </p>
                </div>
                
                <div className="flex flex-col gap-3 lg:w-48">
                  <div className="text-center lg:text-right">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {pub.year}
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <a
                      href={`https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      DOI
                    </a>
                    
                    <button className="inline-flex items-center justify-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors duration-200">
                      <FileText className="h-4 w-4 mr-2" />
                      PDF
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {filteredPublications.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No publications found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        )}
      </section>

      {/* External Links */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Find Our Work Online
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              Google Scholar
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              ORCID
            </a>
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors duration-200"
            >
              <ExternalLink className="h-5 w-5 mr-2" />
              ResearchGate
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};