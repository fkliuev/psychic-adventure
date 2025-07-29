import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, FlaskConical, FileText, ChevronRight, Download, Code, BarChart3 } from 'lucide-react';
import { ImageLoader } from '../components/ImageLoader';

export const HydrogenBorrowing: React.FC = () => {
  const researchTopics = [
    {
      title: 'Reductive Amination',
      description: 'Development of efficient reductive amination protocols using sodium hypophosphite as a sustainable reducing agent for the synthesis of amines.',
      icon: Atom,
      color: 'blue',
      publications: ['JOC 2024', 'Eur. J. Org. Chem. 2023']
    },
    {
      title: 'C-C Bond Formation',
      description: 'Tandem, catalyst-free C-C synthesis of nitriles from aldehydes and methyl cyanoacetate with sodium hypophosphite.',
      icon: FlaskConical,
      color: 'green',
      publications: ['Eur. J. Org. Chem. 2023']
    },
    {
      title: 'Eschweiler-Clarke Reaction',
      description: 'Simplified version of the Eschweiler-Clarke reaction for efficient N-methylation of amines.',
      icon: FileText,
      color: 'purple',
      publications: ['JOC 2023']
    },
    {
      title: 'Substrate Scope Studies',
      description: 'Comprehensive studies on substrate scope and limitations in hydrogen borrowing reactions.',
      icon: BarChart3,
      color: 'orange',
      publications: ['JOC 2024']
    }
  ];

  const chartsAndCode = [
    {
      title: 'Substrate Scope Analysis',
      description: 'Python code and charts for analyzing substrate scope in reductive amination reactions.',
      icon: Code,
      type: 'Python Code'
    },
    {
      title: 'Reaction Optimization Data',
      description: 'Charts and data analysis for reaction optimization in hydrogen borrowing processes.',
      icon: BarChart3,
      type: 'Charts'
    },
    {
      title: 'Catalyst Performance',
      description: 'Performance analysis of different catalysts in hydrogen borrowing reactions.',
      icon: Atom,
      type: 'Analysis'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
      orange: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-900 via-blue-900 to-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Hydrogen Borrowing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our research focuses on developing innovative hydrogen borrowing methodologies 
              for efficient organic synthesis, with particular emphasis on reductive amination 
              and C-C bond formation reactions.
            </p>
          </div>
        </div>
      </section>

      {/* Research Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Research Overview
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Hydrogen borrowing reactions represent a powerful strategy for organic synthesis, 
            enabling direct functionalization of various substrates through catalytic processes 
            that avoid the need for pre-functionalized starting materials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {researchTopics.map((topic, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(topic.color)}`}>
                <topic.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {topic.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {topic.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {topic.publications.map((pub, pubIndex) => (
                  <span key={pubIndex} className="px-3 py-1 bg-violet-100 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 text-sm rounded-full">
                    {pub}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Charts and Python Code */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Charts and Python Code
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Access our research data, charts, and Python code for analyzing hydrogen borrowing reactions 
              and substrate scope studies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                              <ImageLoader
                  src="/images/jo0c00794-0011.png"
                  alt="Substrate Scope Analysis"
                  className="aspect-video"
                />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Substrate Scope Analysis
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Python code and charts for analyzing substrate scope in reductive amination reactions.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                    Python Code
                  </span>
                  <button className="inline-flex items-center text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                              <ImageLoader
                  src="/images/4.png"
                  alt="Reaction Optimization Data"
                  className="aspect-video"
                />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Reaction Optimization Data
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Charts and data analysis for reaction optimization in hydrogen borrowing processes.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                    Charts
                  </span>
                  <button className="inline-flex items-center text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
                              <ImageLoader
                  src="/images/2022-10-18_15-18-17.png"
                  alt="Catalyst Performance"
                  className="aspect-video"
                />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Catalyst Performance
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Performance analysis of different catalysts in hydrogen borrowing reactions.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                    Analysis
                  </span>
                  <button className="inline-flex items-center text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300">
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Publications */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Key Publications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our latest research on hydrogen borrowing reactions and related methodologies.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Reductive Amination Reactions Using Sodium Hypophosphite: a Guide to Substrates
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Comprehensive work about reductive amination reactions using sodium hypophosphite 
                  as a sustainable reducing agent for the synthesis of amines and related compounds.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                    Journal of Organic Chemistry
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    2024
                  </span>
                </div>
              </div>
              <Link
                to="/publications"
                className="inline-flex items-center text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300 ml-4"
              >
                Read more
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Tandem, Catalyst‐Free C‐C Synthesis of Nitriles from Aldehydes and Methyl Cyanoacetate with Sodium Hypophosphite
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Novel approach for the synthesis of nitriles through tandem C-C bond formation 
                  using sodium hypophosphite as a sustainable reagent.
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                    European Journal of Organic Chemistry
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    2023
                  </span>
                </div>
              </div>
              <Link
                to="/publications"
                className="inline-flex items-center text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300 ml-4"
              >
                Read more
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Our Research?
          </h2>
          <p className="text-xl text-violet-100 mb-8 max-w-2xl mx-auto">
            Get in touch with us to learn more about our hydrogen borrowing research, 
            collaboration opportunities, or to discuss potential partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-violet-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/publications"
              className="inline-flex items-center px-8 py-4 border-2 border-white/20 hover:border-white/40 rounded-lg font-semibold transition-colors duration-200"
            >
              View All Publications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}; 