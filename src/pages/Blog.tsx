import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, ChevronRight } from 'lucide-react';
import { ImageLoader } from '../components/ImageLoader';

export const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: 'Interview with Denis Chusov about The Nobel Prize in chemistry in 2021',
      excerpt: '"Meduza" interviewed Denis Chusov about asymmetric reactions and catalysis, which was The Nobel Prize in chemistry about.',
      author: 'Denis Chusov',
      date: '2024-01-15',
      category: 'Interviews',
      image: '/images/IMG_1704_JPG.avif'
    },
    {
      title: 'Interview with Denis Chusov (gazeta.ru in Russian)',
      excerpt: 'About the advantages of working at homeland and not only.',
      author: 'Denis Chusov',
      date: '2024-01-10',
      category: 'Interviews',
      image: '/images/1.jpg'
    },
    {
      title: 'Our student took 3rd place in the contest of scientific-research works of students HSE',
      excerpt: 'Congrats to 1st year student chemistry department HSE Fedor Kliuev with 3rd place in the contest of scientific-research works of students HSE. This is the first time in the history of the university when 1st year student won in the competition!',
      author: 'ChemCatGroup',
      date: '2023-12-20',
      category: 'Awards',
      image: '/images/compressed_file.jpeg'
    },
    {
      title: 'On the web page of Nature you can find highlight about our paper',
      excerpt: 'Add a News Article with a short summary and a link. You can also add a video for extra engagement. Be detailed and thorough to interest your readers, and include links to the original story online.',
      author: 'ChemCatGroup',
      date: '2023-12-15',
      category: 'Publications',
      image: '/images/12.png'
    },
    {
      title: 'New article about sodium hypophosphite was published in Journal of Organic Chemistry',
      excerpt: '"Reductive Amination Reactions Using Sodium Hypophosphite: a Guide to Substrates" - our new comprehensive work about reductive amination...',
      author: 'ChemCatGroup',
      date: '2023-12-10',
      category: 'Publications',
      image: '/images/H2-free.png'
    },
    {
      title: 'Our comprehensive review about the halogen effect in ruthenium catalysis was published',
      excerpt: 'The halogen effect in ruthenium catalysis - this article was successfully accepted in Russian Chemical Reviews (IF = 5.787) on 26...',
      author: 'ChemCatGroup',
      date: '2023-12-05',
      category: 'Publications',
      image: '/images/Table-ACSCat2016.png'
    }
  ];

  const categories = [
    { name: 'All', count: blogPosts.length },
    { name: 'Interviews', count: 2 },
    { name: 'Publications', count: 3 },
    { name: 'Awards', count: 1 }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-violet-900 via-blue-900 to-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with our latest research news, interviews, publications, 
              and achievements in the field of organic catalysis and hydrogen borrowing reactions.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-3 bg-violet-100 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 rounded-lg font-medium hover:bg-violet-200 dark:hover:bg-violet-900/30 transition-colors duration-200"
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="aspect-video">
                <ImageLoader
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 bg-violet-100 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400 text-sm rounded-full">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.author}
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

      {/* Newsletter */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Subscribe to our newsletter to receive the latest updates about our research, 
            publications, and news directly in your inbox.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
            <button className="px-6 py-3 bg-violet-600 text-white rounded-lg font-semibold hover:bg-violet-700 transition-colors duration-200">
              Subscribe
            </button>
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