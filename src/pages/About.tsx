import React from 'react';
import { Target, Users, Globe, Award, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pushing the boundaries of catalytic science through creative problem-solving and cutting-edge research methodologies.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Fostering interdisciplinary partnerships and mentoring the next generation of catalysis researchers.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Developing environmentally responsible synthetic methods that minimize waste and energy consumption.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Maintaining the highest standards in research quality, methodology, and scientific integrity.'
    }
  ];

  const milestones = [
    { year: '2015', event: 'Laboratory established', description: 'ChemCatGroup founded with focus on asymmetric catalysis' },
    { year: '2017', event: 'First major publication', description: 'Breakthrough in C-H functionalization published in Nature Chemistry' },
    { year: '2019', event: 'International recognition', description: 'Received Excellence in Catalysis Research Award' },
    { year: '2021', event: 'Expansion', description: 'Laboratory expanded to include green chemistry initiatives' },
    { year: '2023', event: 'Major grant awarded', description: 'Secured $2M NSF grant for sustainable synthesis research' }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About ChemCatGroup
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
            We are a dynamic research laboratory dedicated to advancing the field of organic catalysis 
            through innovative synthetic methodologies and sustainable chemical processes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              To develop novel catalytic transformations that enable efficient, selective, and sustainable 
              synthesis of complex organic molecules. We strive to bridge the gap between fundamental 
              organometallic chemistry and practical synthetic applications.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              Our interdisciplinary approach combines mechanistic understanding, computational modeling, 
              and synthetic creativity to tackle challenging problems in chemical synthesis.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-colors duration-200">
              Join Our Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          
          <div className="bg-gradient-to-br from-violet-100 to-blue-100 dark:from-violet-900/20 dark:to-blue-900/20 rounded-2xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-violet-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-12 w-12 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">8+ Years</h3>
              <p className="text-gray-600 dark:text-gray-400">of Research Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              These principles guide our research philosophy and shape our collaborative culture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-violet-600 dark:text-violet-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              Research Philosophy
            </h2>
            <div className="space-y-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                Our research is driven by curiosity-driven fundamental investigations that have 
                the potential to transform synthetic chemistry. We believe that understanding 
                reaction mechanisms at the molecular level is crucial for developing more 
                efficient and selective catalytic processes.
              </p>
              <p>
                We emphasize the importance of sustainability in chemical synthesis, developing 
                methods that minimize waste, reduce energy consumption, and utilize renewable 
                feedstocks. Our green chemistry initiatives focus on atom-economical transformations 
                and the use of earth-abundant metals as catalysts.
              </p>
              <p>
                Collaboration is at the heart of our approach. We work closely with computational 
                chemists, materials scientists, and industry partners to accelerate the translation 
                of our discoveries from the laboratory to practical applications.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Research Areas
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                  C-H Functionalization
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                  Asymmetric Catalysis
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                  Cross-Coupling Reactions
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                  Green Chemistry
                </li>
                <li className="flex items-center text-gray-600 dark:text-gray-400">
                  <div className="w-2 h-2 bg-violet-600 rounded-full mr-3"></div>
                  Photocatalysis
                </li>
              </ul>
            </div>

            <div className="bg-violet-50 dark:bg-violet-900/10 rounded-xl p-6 border border-violet-200 dark:border-violet-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Lab Statistics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Publications</span>
                  <span className="font-semibold text-gray-900 dark:text-white">85+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">H-index</span>
                  <span className="font-semibold text-gray-900 dark:text-white">42</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Citations</span>
                  <span className="font-semibold text-gray-900 dark:text-white">3,200+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Patents</span>
                  <span className="font-semibold text-gray-900 dark:text-white">12</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Key milestones in the development of ChemCatGroup
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gray-300 dark:bg-gray-600"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                      <div className="text-sm font-medium text-violet-600 dark:text-violet-400 mb-1">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {milestone.event}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-violet-600 rounded-full border-4 border-white dark:border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};