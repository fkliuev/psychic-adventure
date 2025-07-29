import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Calendar, User, ChevronRight, Image, Video, FileText } from 'lucide-react';
import { ImageLoader } from '../components/ImageLoader';

export const Media: React.FC = () => {
  const mediaItems = [
    {
      title: 'Interview with Denis Chusov about The Nobel Prize in chemistry in 2021',
      description: '"Meduza" interviewed Denis Chusov about asymmetric reactions and catalysis, which was The Nobel Prize in chemistry about.',
      type: 'Interview',
      date: '2024-01-15',
      author: 'Denis Chusov',
      image: '/images/1.jpg',
      link: '#'
    },
    {
      title: 'Interview with Denis Chusov (gazeta.ru in Russian)',
      description: 'About the advantages of working at homeland and not only.',
      type: 'Interview',
      date: '2024-01-10',
      author: 'Denis Chusov',
      image: '/images/2.png',
      link: '#'
    },
    {
      title: 'Our student took 3rd place in the contest of scientific-research works of students HSE',
      description: 'Congrats to 1st year student chemistry department HSE Fedor Kliuev with 3rd place in the contest of scientific-research works of students HSE. This is the first time in the history of the university when 1st year student won in the competition!',
      type: 'News',
      date: '2023-12-20',
      author: 'ChemCatGroup',
      image: '/images/3.jpg',
      link: '#'
    },
    {
      title: 'On the web page of Nature you can find highlight about our paper',
      description: 'Add a News Article with a short summary and a link. You can also add a video for extra engagement. Be detailed and thorough to interest your readers, and include links to the original story online.',
      type: 'Publication Highlight',
      date: '2023-12-15',
      author: 'ChemCatGroup',
      image: '/images/12.png',
      link: '#'
    },
    {
      title: 'New article about sodium hypophosphite was published in Journal of Organic Chemistry',
      description: '"Reductive Amination Reactions Using Sodium Hypophosphite: a Guide to Substrates" - our new comprehensive work about reductive amination...',
      type: 'Publication',
      date: '2023-12-10',
      author: 'ChemCatGroup',
      image: '/images/H2-free.png',
      link: '#'
    },
    {
      title: 'Our comprehensive review about the halogen effect in ruthenium catalysis was published',
      description: 'The halogen effect in ruthenium catalysis - this article was successfully accepted in Russian Chemical Reviews (IF = 5.787) on 26...',
      type: 'Publication',
      date: '2023-12-05',
      author: 'ChemCatGroup',
      image: '/images/Table-ACSCat2016.png',
      link: '#'
    }
  ];

  const mediaTypes = [
    { name: 'All', count: mediaItems.length, icon: Image },
    { name: 'Interviews', count: 2, icon: Video },
    { name: 'Publications', count: 2, icon: FileText },
    { name: 'News', count: 1, icon: Calendar },
    { name: 'Publication Highlight', count: 1, icon: FileText }
  ];

  const featuredMedia = [
    {
      title: 'Interview with Denis Chusov about The Nobel Prize in chemistry in 2021',
      description: '"Meduza" interviewed Denis Chusov about asymmetric reactions and catalysis, which was The Nobel Prize in chemistry about.',
      type: 'Featured Interview',
      image: '/images/IMG_1704_JPG.avif'
    },
    {
      title: 'Our student took 3rd place in the contest of scientific-research works of students HSE',
      description: 'Congrats to 1st year student chemistry department HSE Fedor Kliuev with 3rd place in the contest of scientific-research works of students HSE.',
      type: 'Featured News',
      image: '/images/j7-c3JPqCEk (3) - Fedor Kliuev.avif'
    }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-900 via-blue-900 to-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Media
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest interviews, publications, news, and media coverage 
              highlighting our research in organic catalysis and hydrogen borrowing reactions.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Media */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Media
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Highlighted interviews, news, and publications featuring our research and team members.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredMedia.map((item, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <div className="aspect-video relative">
                <ImageLoader
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-violet-600 text-white text-sm rounded-full">
                    {item.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {item.description}
                </p>
                <button className="inline-flex items-center text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300">
                  Read more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Media Types */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Browse by Type
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Explore our media content organized by type - interviews, publications, news, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mediaTypes.map((type, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <type.icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {type.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {type.count} items
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Media */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            All Media
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Complete collection of our interviews, publications, news, and media coverage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <article key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="aspect-video relative">
                <ImageLoader
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-1 bg-violet-600 text-white text-xs rounded-full">
                    {item.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(item.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {item.author}
                    </span>
                  </div>
                  
                  <button className="inline-flex items-center text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300">
                    Read more
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </button>
                </div>
              </div>
            </article>
          ))}
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