import React from 'react';
import { Atom, FlaskConical, Zap, Leaf, ArrowRight, Users, Calendar, ExternalLink } from 'lucide-react';

export const Projects: React.FC = () => {
  const currentProjects = [
    {
      id: 1,
      title: 'Enantioselective C-H Functionalization',
      description: 'Development of novel chiral catalysts for selective C-H bond activation and functionalization reactions.',
      icon: Atom,
      status: 'active',
      funding: 'NSF ($850K)',
      duration: '2022-2025',
      team: ['Dr. Elena Rodriguez', 'Dr. Michael Chen', 'James Wilson', 'David Park'],
      highlights: [
        'Achieved >95% enantioselectivity in challenging substrates',
        'Published 3 high-impact papers',
        'Filed 2 provisional patents'
      ],
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Sustainable Iron Catalysis',
      description: 'Replacing precious metal catalysts with earth-abundant iron complexes for pharmaceutical synthesis.',
      icon: Leaf,
      status: 'active',
      funding: 'NIH ($1.2M)',
      duration: '2023-2026',
      team: ['Dr. Sarah Kim', 'Maria Gonzalez', 'Lisa Zhang'],
      highlights: [
        'Developed 15 new iron-based catalysts',
        'Reduced costs by 80% compared to palladium',
        'Industry collaboration with 3 pharmaceutical companies'
      ],
      image: 'https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Photocatalytic Cross-Coupling',
      description: 'Harnessing visible light to drive challenging cross-coupling reactions under mild conditions.',
      icon: Zap,
      status: 'active',
      funding: 'DOE ($650K)',
      duration: '2024-2027',
      team: ['Dr. Michael Chen', 'David Park', 'Alex Johnson'],
      highlights: [
        'Enabled reactions at room temperature',
        'Developed LED-based flow reactors',
        'Mechanistic insights via time-resolved spectroscopy'
      ],
      image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    }
  ];

  const completedProjects = [
    {
      title: 'Asymmetric Hydrogenation Platform',
      description: 'Developed a library of chiral phosphine ligands for asymmetric hydrogenation of challenging substrates.',
      duration: '2019-2022',
      outcomes: ['12 publications', '4 patents filed', '2 industrial licenses'],
      impact: 'Technology licensed by two pharmaceutical companies for commercial production.'
    },
    {
      title: 'Flow Chemistry for Natural Products',
      description: 'Continuous flow synthesis of complex natural products using cascade catalytic processes.',
      duration: '2020-2023',
      outcomes: ['8 publications', 'Best Paper Award 2022', '15 natural products synthesized'],
      impact: 'Methodology adopted by 5 research groups worldwide for natural product synthesis.'
    }
  ];

  const researchAreas = [
    {
      title: 'C-H Functionalization',
      description: 'Direct activation and functionalization of unreactive C-H bonds',
      icon: Atom,
      color: 'bg-blue-500'
    },
    {
      title: 'Asymmetric Catalysis',
      description: 'Stereoselective synthesis using chiral catalysts',
      icon: FlaskConical,
      color: 'bg-green-500'
    },
    {
      title: 'Photocatalysis',
      description: 'Light-driven chemical transformations',
      icon: Zap,
      color: 'bg-yellow-500'
    },
    {
      title: 'Green Chemistry',
      description: 'Sustainable and environmentally friendly synthetic methods',
      icon: Leaf,
      color: 'bg-emerald-500'
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Research Projects
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Advancing the frontiers of organic catalysis through innovative research projects 
          and collaborative partnerships
        </p>
      </section>

      {/* Research Areas */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Research Areas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-shadow duration-300">
              <div className={`w-16 h-16 ${area.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                <area.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Current Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Current Projects
        </h2>
        <div className="space-y-8">
          {currentProjects.map((project, index) => (
            <div key={project.id} className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className={`grid lg:grid-cols-2 gap-0`}>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-violet-100 dark:bg-violet-900/20 rounded-xl flex items-center justify-center">
                      <project.icon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {project.duration}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 rounded-full">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Funding
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">{project.funding}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        Team
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {project.team.length} members
                      </p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-violet-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="inline-flex items-center text-violet-600 dark:text-violet-400 font-medium hover:text-violet-700 dark:hover:text-violet-300">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </button>
                </div>

                <div className="relative h-64 lg:h-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Completed Projects */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Completed Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {completedProjects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-sm border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                    Completed
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {project.duration}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Outcomes
                  </h4>
                  <ul className="space-y-1">
                    {project.outcomes.map((outcome, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></div>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 bg-green-50 dark:bg-green-900/10 rounded-lg border border-green-200 dark:border-green-800">
                  <h5 className="font-medium text-green-900 dark:text-green-300 mb-1">
                    Impact
                  </h5>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    {project.impact}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Opportunities */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-violet-50 dark:bg-violet-900/10 rounded-2xl p-12 border border-violet-200 dark:border-violet-800">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Collaboration Opportunities
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            We're always interested in new collaborations with academic institutions, 
            industry partners, and funding agencies. Let's work together to advance 
            the field of catalysis.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-colors duration-200">
              Academic Partnerships
            </button>
            <button className="px-8 py-3 border-2 border-violet-600 text-violet-600 dark:text-violet-400 hover:bg-violet-600 hover:text-white rounded-lg font-medium transition-colors duration-200">
              Industry Collaboration
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};