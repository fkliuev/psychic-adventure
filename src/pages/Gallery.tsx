import React, { useState } from 'react';
import { Camera, Users, Award, FlaskConical, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Photos', icon: Camera },
    { id: 'lab', name: 'Laboratory', icon: FlaskConical },
    { id: 'team', name: 'Team Events', icon: Users },
    { id: 'conferences', name: 'Conferences', icon: Award }
  ];

  const photos = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Advanced synthesis setup',
      category: 'lab',
      caption: 'Advanced synthesis setup in our main laboratory'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Team meeting',
      category: 'team',
      caption: 'Weekly group meeting discussing latest research results'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Spectroscopic analysis',
      category: 'lab',
      caption: 'NMR spectroscopic analysis of novel catalysts'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Conference presentation',
      category: 'conferences',
      caption: 'Dr. Rodriguez presenting at ACS National Meeting 2024'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Laboratory work',
      category: 'lab',
      caption: 'Graduate students working on catalyst synthesis'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Team celebration',
      category: 'team',
      caption: 'Celebrating James Wilson\'s successful thesis defense'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Award ceremony',
      category: 'conferences',
      caption: 'NSF CAREER Award ceremony recognition'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/954583/pexels-photo-954583.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Laboratory equipment',
      category: 'lab',
      caption: 'High-performance liquid chromatography setup'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'International conference',
      category: 'conferences',
      caption: 'International Symposium on Organometallic Chemistry'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Research collaboration',
      category: 'team',
      caption: 'Collaborative research session with visiting scholars'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Crystallography work',
      category: 'lab',
      caption: 'X-ray crystallography analysis of metal complexes'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
      alt: 'Lab social event',
      category: 'team',
      caption: 'Annual laboratory barbecue and team building event'
    }
  ];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="space-y-12 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Laboratory Life
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          A glimpse into our daily research activities, team events, and scientific achievements
        </p>
      </section>

      {/* Category Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-violet-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700'
              }`}
            >
              <category.icon className="h-5 w-5 mr-2" />
              {category.name}
            </button>
          ))}
        </div>
      </section>

      {/* Photo Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-square rounded-xl overflow-hidden bg-gray-200 dark:bg-gray-700 cursor-pointer"
              onClick={() => setSelectedImage(photo.src)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                    {photo.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredPhotos.length === 0 && (
          <div className="text-center py-12">
            <Camera className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No photos found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try selecting a different category.
            </p>
          </div>
        )}
      </section>

      {/* Lab Statistics */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Laboratory Highlights
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-violet-600 dark:text-violet-400 mb-2">
                8+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Years of Research</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                12
              </div>
              <div className="text-gray-600 dark:text-gray-400">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
                25+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Conferences Attended</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 dark:text-red-400 mb-2">
                50+
              </div>
              <div className="text-gray-600 dark:text-gray-400">Collaborative Projects</div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Events */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Recent Events
        </h2>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  ACS Fall Meeting 2024
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Our team presented 4 talks and 3 posters at the ACS Fall Meeting in Denver. 
                  Dr. Rodriguez gave a keynote lecture on sustainable catalysis.
                </p>
                <span className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                  August 2024
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-lg flex items-center justify-center">
                <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Lab Retreat 2024
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Annual laboratory retreat featuring research presentations, team building activities, 
                  and strategic planning for future directions.
                </p>
                <span className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                  June 2024
                </span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                <FlaskConical className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  New Equipment Installation
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Installation of new high-resolution mass spectrometer and automated synthesis platform, 
                  expanding our analytical and synthetic capabilities.
                </p>
                <span className="text-sm text-violet-600 dark:text-violet-400 font-medium">
                  May 2024
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal for enlarged images */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};