import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FlaskConical, Atom, Award, ChevronRight, FileText, Users } from 'lucide-react';

export const Research: React.FC = () => {
  const researchAreas = [
    {
      title: 'Hydrogen Borrowing Reactions',
      description: 'Development of innovative hydrogen borrowing methodologies for efficient organic synthesis. Our research focuses on catalytic processes that enable direct functionalization of various substrates.',
      icon: Atom,
      color: 'blue',
      link: '/hydrogen-borrowing'
    },
    {
      title: 'Ruthenium Catalysis',
      description: 'Advanced ruthenium-catalyzed transformations with emphasis on halogen effects for selective organic synthesis. We investigate the influence of halogens on catalytic activity and selectivity.',
      icon: FlaskConical,
      color: 'green',
      link: '/publications'
    },
    {
      title: 'Reductive Amination',
      description: 'Development of efficient reductive amination protocols using sodium hypophosphite and other sustainable reducing agents for the synthesis of amines and related compounds.',
      icon: Award,
      color: 'purple',
      link: '/publications'
    },
    {
      title: 'Amide Synthesis',
      description: 'Direct synthesis of amides from nitroarenes and carboxylic acids via CO-mediated reduction. Novel catalytic approaches for amide bond formation.',
      icon: FileText,
      color: 'orange',
      link: '/publications'
    },
    {
      title: 'Polymerization Catalysis',
      description: 'Efficient and versatile catalysts for polymerization reactions, including ε-caprolactone polymerization using Krossing\'s acid as catalyst.',
      icon: Users,
      color: 'red',
      link: '/publications'
    },
    {
      title: 'C-C Bond Formation',
      description: 'Tandem, catalyst-free C-C synthesis of nitriles from aldehydes and methyl cyanoacetate with sodium hypophosphite for sustainable chemistry.',
      icon: Atom,
      color: 'indigo',
      link: '/publications'
    }
  ];

  const publications = [
    {
      title: 'Reductive Amination Reactions Using Sodium Hypophosphite: a Guide to Substrates',
      journal: 'Journal of Organic Chemistry',
      year: '2024',
      description: 'Comprehensive work about reductive amination reactions using sodium hypophosphite as a sustainable reducing agent.'
    },
    {
      title: 'The halogen effect in ruthenium catalysis',
      journal: 'Russian Chemical Reviews',
      year: '2024',
      description: 'Comprehensive review about the halogen effect in ruthenium catalysis (IF = 5.787).'
    },
    {
      title: 'Direct synthesis of amides from nitroarenes and carboxylic acids via CO-mediated reduction',
      journal: 'Journal of Catalysis',
      year: '2023',
      description: 'Novel work about amides production through direct synthesis from nitroarenes and carboxylic acids.'
    },
    {
      title: 'Krossing\'s acid as efficient and versatile catalyst for ε-caprolactone polymerization',
      journal: 'European Polymer Journal',
      year: '2023',
      description: 'Research on polymerization catalysis using Krossing\'s acid as an efficient catalyst.'
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
      purple: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
      orange: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
      red: 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400'
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
              Research Areas
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our laboratory focuses on developing novel catalytic processes that enable 
              efficient and sustainable chemical transformations, with particular emphasis 
              on hydrogen borrowing reactions and ruthenium catalysis.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Research Focus
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            We develop cutting-edge catalytic methodologies for sustainable synthesis, 
            pushing the boundaries of organic chemistry through innovative research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 ${getColorClasses(area.color)}`}>
                <area.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {area.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                {area.description}
              </p>
              <Link
                to={area.link}
                className="inline-flex items-center text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300"
              >
                Learn more
                <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Publications */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Recent Publications
            </h2>
            <Link
              to="/publications"
              className="inline-flex items-center text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300"
            >
              View all publications
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <article key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                    {pub.journal}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {pub.year}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {pub.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {pub.description}
                </p>
                <button className="text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300">
                  Read more
                </button>
              </article>
            ))}
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
            Get in touch with us to learn more about our research projects, 
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
              View Publications
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}; 