import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Atom, FlaskConical, Users, FileText, Award, ChevronRight, Mail, Phone } from 'lucide-react';
import { ImageLoader } from '../components/ImageLoader';

export const Home: React.FC = () => {
  const stats = [
    { label: 'Research Projects', value: '20+', icon: FlaskConical },
    { label: 'Team Members', value: '15', icon: Users },
    { label: 'Publications', value: '100+', icon: FileText },
    { label: 'Awards', value: '12', icon: Award },
  ];

  const recentNews = [
    {
      date: '2024-01-15',
      title: 'New article about sodium hypophosphite was published in Journal of Organic Chemistry',
      excerpt: '"Reductive Amination Reactions Using Sodium Hypophosphite: a Guide to Substrates" - our new comprehensive work about reductive amination...',
    },
    {
      date: '2024-01-08',
      title: 'Our comprehensive review about the halogen effect in ruthenium catalysis was published',
      excerpt: 'The halogen effect in ruthenium catalysis - this article was successfully accepted in Russian Chemical Reviews (IF = 5.787)...',
    },
    {
      date: '2023-12-20',
      title: 'New article about synthesis of amides was published in Journal of Catalysis',
      excerpt: '"Direct synthesis of amides from nitroarenes and carboxylic acids via CO-mediated reduction" - our new work about amides production...',
    },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-violet-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center mb-4">
                <img src="/images/Logo.png" alt="Lab Logo" className="h-14 w-auto mr-4 rounded-xl shadow-lg bg-white/80 p-1" />
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-violet-600/20 rounded-full text-violet-200 text-sm font-medium">
                <Atom className="h-4 w-4 mr-2" />
                Organic Catalysis Research Laboratory
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                The Chemistry 
                <span className="text-violet-400"> for me</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                We develop cutting-edge catalytic methodologies for sustainable synthesis, 
                focusing on hydrogen borrowing reactions, ruthenium catalysis, and innovative 
                organic transformations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center px-8 py-4 bg-violet-600 hover:bg-violet-700 rounded-lg font-semibold transition-colors duration-200"
                >
                  Explore Research
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/publications"
                  className="inline-flex items-center px-8 py-4 border-2 border-white/20 hover:border-white/40 rounded-lg font-semibold transition-colors duration-200"
                >
                  Latest Publications
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-violet-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/10 overflow-hidden">
                <ImageLoader
                  src="/images/chemistry-formulas.jpg"
                  alt="Chemistry formulas and research"
                  className="absolute inset-0 opacity-20"
                  fallbackType="chemistry"
                />
                <div className="relative z-10 text-center">
                  <FlaskConical className="h-24 w-24 mx-auto text-violet-400 mb-4" />
                  <p className="text-lg text-gray-300">Advanced Synthesis Laboratory</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-violet-100 dark:bg-violet-900/20 rounded-xl mb-4">
                <stat.icon className="h-8 w-8 text-violet-600 dark:text-violet-400" />
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Research Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Research Highlights
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Our laboratory focuses on developing novel catalytic processes that enable 
            efficient and sustainable chemical transformations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center mb-6">
              <Atom className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Hydrogen Borrowing
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Development of innovative hydrogen borrowing reactions for efficient 
              organic synthesis and sustainable chemistry.
            </p>
            <Link
              to="/hydrogen-borrowing"
              className="inline-flex items-center text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300"
            >
              Learn more
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center mb-6">
              <FlaskConical className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Ruthenium Catalysis
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Advanced ruthenium-catalyzed transformations with halogen effects 
              for selective organic synthesis.
            </p>
            <Link
              to="/research"
              className="inline-flex items-center text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300"
            >
              Learn more
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center mb-6">
              <Award className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Publications
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              High-impact publications in leading journals including JOC, 
              Journal of Catalysis, and Russian Chemical Reviews.
            </p>
            <Link
              to="/publications"
              className="inline-flex items-center text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300"
            >
              Learn more
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Team
            </h2>
            <Link
              to="/team"
              className="inline-flex items-center text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300"
            >
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
              <ImageLoader
                src="/images/IMG_1704_JPG.avif"
                alt="Prof. Dr. Denis Chusov"
                className="aspect-video"
                fallbackType="user"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Prof. Dr. Denis Chusov
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Principal Investigator
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
                              <ImageLoader
                  src="/images/IMG_1710.JPG"
                  alt="Dr. Oleg Afanasyev"
                  className="aspect-video"
                  fallbackType="user"
                />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Dr. Oleg Afanasyev
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Research Associate
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
              <ImageLoader
                src="/images/Подъячева Е_С_.avif"
                alt="Dr. Evgeniya Podyacheva"
                className="aspect-video"
                fallbackType="user"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Dr. Evgeniya Podyacheva
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Research Associate
                </p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
              <ImageLoader
                src="/images/j7-c3JPqCEk (3) - Fedor Kliuev.avif"
                alt="Fedor Kliuev"
                className="aspect-video"
                fallbackType="user"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                  Fedor Kliuev
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  PhD Student
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Latest News
            </h2>
            <Link
              to="/blog"
              className="inline-flex items-center text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300"
            >
              View all
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentNews.map((news, index) => (
              <article key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
                <div className="text-sm text-violet-600 dark:text-violet-400 font-medium mb-2">
                  {new Date(news.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                <button className="text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300">
                  Read more
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-violet-50 dark:bg-violet-900/10 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Thanks for your interest in our research. Get in touch with us for any questions 
              or comments regarding our work and publications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/20 rounded-lg flex items-center justify-center mr-4">
                  <Mail className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Email</h3>
                  <p className="text-violet-600 dark:text-violet-400">Chden@ya.ru</p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/20 rounded-lg flex items-center justify-center mr-4">
                  <Phone className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Phone</h3>
                  <p className="text-violet-600 dark:text-violet-400">+7(499)1356261</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 dark:text-gray-400">
              Moscow, Russia, 119334
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};