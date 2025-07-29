import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, ExternalLink, GraduationCap, Award } from 'lucide-react';
import { ImageLoader } from '../components/ImageLoader';
import { SocialButtons } from '../components/SocialButtons';

export const Team: React.FC = () => {
  const principalInvestigator = {
    name: 'Denis Chusov',
    title: 'Principal Investigator',
    position: 'Associate Professor',
    image: '/images/IMG_1704_JPG.avif',
    email: 'chden@ya.ru',
    bio: 'Denis Chusov leads the ChemCatGroup with extensive experience in organic catalysis and hydrogen borrowing reactions. His research focuses on developing innovative catalytic methodologies for sustainable synthesis.',
    education: ['Nesmeyanov Institute of Organoelement Compounds (Moscow)', 'Moscow Chemical Lyceum', 'Higher Chemical College of the Russian Academy of Sciences'],
    awards: ['Nobel Prize Interview (2021)', 'Russian Chemical Reviews Publications', 'Multiple JOC Publications'],
    slug: 'denis-chusov',
    orcid: 'https://orcid.org/0000-0002-1234-5678',
    googleScholar: 'https://scholar.google.com/citations?user=example123'
  };

  const postdocs = [
    {
      name: 'Dr. Oleg Afanasyev',
      title: 'Research Associate',
      image: '/images/IMG_1710.JPG',
      email: 'o.afanasyev@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'oleg-afanasyev',
      orcid: 'https://orcid.org/0000-0002-2345-6789',
      googleScholar: 'https://scholar.google.com/citations?user=example456'
    },
    {
      name: 'Dr. Evgeniya Podyacheva',
      title: 'Research Associate',
      image: '/images/Подъячева Е_С_.avif',
      email: 'e.podyacheva@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'evgeniya-podyacheva',
      orcid: 'https://orcid.org/0000-0002-3456-7890',
      googleScholar: 'https://scholar.google.com/citations?user=example789'
    }
  ];

  const gradStudents = [
    {
      name: 'Dr. Artemy Fatkulin',
      year: 'Ph.D. Student',
      image: '/images/VUYUejZuAdU (2) - Артемий Фаткулин.avif',
      email: 'a.fatkulin@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'artemy-fatkulin',
      orcid: 'https://orcid.org/0000-0002-4567-8901',
      googleScholar: 'https://scholar.google.com/citations?user=example101'
    },
    {
      name: 'Andrey Kozlov',
      year: 'Ph.D. Student',
      image: '/images/Цветное фото (2) - Andrey Kozlov.avif',
      email: 'a.kozlov@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'andrey-kozlov',
      orcid: 'https://orcid.org/0000-0002-5678-9012',
      googleScholar: 'https://scholar.google.com/citations?user=example202'
    },
    {
      name: 'Alexandra Balalaeva',
      year: 'Ph.D. Student',
      image: '/images/5DE51D14-207C-4E00-A1C8-396CF44FA223 - Александра Балалаева.avif',
      email: 'a.balalaeva@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'alexandra-balalaeva',
      orcid: 'https://orcid.org/0000-0002-6789-0123',
      googleScholar: 'https://scholar.google.com/citations?user=example303'
    },
    {
      name: 'Alexander Modin',
      year: 'Administrator',
      image: '/images/Modin Alexander - 131223 - 2 - Alexander Modin.avif',
      email: 'a.modin@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'alexander-modin',
      orcid: 'https://orcid.org/0000-0002-7890-1234',
      googleScholar: 'https://scholar.google.com/citations?user=example404'
    },
    {
      name: 'Klim Birukov',
      year: 'Ph.D. Student',
      image: '/images/235918378_14880.avif',
      email: 'k.birukov@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'klim-birukov',
      orcid: 'https://orcid.org/0000-0002-8901-2345',
      googleScholar: 'https://scholar.google.com/citations?user=example505'
    }
  ];

  const undergrads = [
    {
      name: 'Fedor Kluev',
      year: 'Student',
      image: '/images/j7-c3JPqCEk (3) - Fedor Kliuev.avif',
      email: 'f.kluev@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'fedor-kluev',
      orcid: 'https://orcid.org/0000-0002-9012-3456',
      googleScholar: 'https://scholar.google.com/citations?user=example606'
    },
    {
      name: 'Olesya Zvereva',
      year: 'Student',
      image: '/images/000044460021 - Olesya Zvereva.avif',
      email: 'o.zvereva@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'olesya-zvereva',
      orcid: 'https://orcid.org/0000-0002-0123-4567',
      googleScholar: 'https://scholar.google.com/citations?user=example707'
    },
    {
      name: 'Max Shandybo',
      year: 'Student',
      image: '/images/768B0A59-A5DB-47DA-9A18-476358F46C01 - Максим Шандыбо.avif',
      email: 'm.shandybo@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'max-shandybo',
      orcid: 'https://orcid.org/0000-0002-1234-5678',
      googleScholar: 'https://scholar.google.com/citations?user=example808'
    },
    {
      name: 'Ivan Smirnov',
      year: 'Student',
      image: '/images/IMG20210601152027 - Mr_ Racer.avif',
      email: 'i.smirnov@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'ivan-smirnov',
      orcid: 'https://orcid.org/0000-0002-2345-6789',
      googleScholar: 'https://scholar.google.com/citations?user=example909'
    },
    {
      name: 'Natalya Lebedeva',
      year: 'Student',
      image: '/images/IMG_20230408_151840_575 - Natalia Lebedeva.avif',
      email: 'n.lebedeva@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'natalya-lebedeva',
      orcid: 'https://orcid.org/0000-0002-3456-7890',
      googleScholar: 'https://scholar.google.com/citations?user=example1010'
    },
    {
      name: 'Mikhail Losev',
      year: 'Student',
      image: '/images/IMG_20241010_185949_013_JPG.avif',
      email: 'm.losev@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'mikhail-losev',
      orcid: 'https://orcid.org/0000-0002-4567-8901',
      googleScholar: 'https://scholar.google.com/citations?user=example1111'
    },
    {
      name: 'Alexander Boldyrev',
      year: 'Student',
      image: '/images/62328E57-F0EE-48F3-9B4E-E32864D1F8AA - Александр Болдырев.avif',
      email: 'a.boldyrev@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'alexander-boldyrev',
      orcid: 'https://orcid.org/0000-0002-5678-9012',
      googleScholar: 'https://scholar.google.com/citations?user=example1212'
    },
    {
      name: 'Vasilii Korochancev',
      year: 'Student',
      image: '/images/kKliWZ4rwU4 - Вася Корочанцев_edited.avif',
      email: 'v.korochancev@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'vasilii-korochancev',
      orcid: 'https://orcid.org/0000-0002-6789-0123',
      googleScholar: 'https://scholar.google.com/citations?user=example1313'
    },
    {
      name: 'Danil Rakitianskii',
      year: 'Student',
      image: '/images/photo_2024-09-24_21-31-02 - Данил Ракитянский.avif',
      email: 'd.rakitianskii@chemcatgroup.com',
      education: 'MSc Chemistry, Moscow State University 2025',
      slug: 'danil-rakitianskii',
      orcid: 'https://orcid.org/0000-0002-7890-1234',
      googleScholar: 'https://scholar.google.com/citations?user=example1414'
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Our Team
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Meet the dedicated researchers advancing the frontiers of organic catalysis
        </p>
      </section>

      {/* Principal Investigator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Principal Investigator
        </h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="text-center">
                <ImageLoader
                  src={principalInvestigator.image}
                  alt={principalInvestigator.name}
                  className="w-56 h-56 rounded-full mx-auto mb-6 border-4 border-violet-200 dark:border-violet-800"
                  fallbackType="user"
                />
                <div className="space-y-3">
                  <a
                    href={`mailto:${principalInvestigator.email}`}
                    className="inline-flex items-center px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </a>
                  <div className="flex justify-center space-x-3">
                    <Link
                      to={`/personnel/${principalInvestigator.slug}`}
                      className="inline-flex items-center px-4 py-2 border-2 border-violet-600 text-violet-600 dark:text-violet-400 hover:bg-violet-600 hover:text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      More
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                  <SocialButtons 
                    orcid={principalInvestigator.orcid}
                    googleScholar={principalInvestigator.googleScholar}
                  />
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {principalInvestigator.name}
                  </h3>
                  <p className="text-lg text-violet-600 dark:text-violet-400 font-medium">
                    {principalInvestigator.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {principalInvestigator.position}
                  </p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {principalInvestigator.bio}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-violet-600 dark:text-violet-400" />
                      Education
                    </h4>
                    <ul className="space-y-2">
                      {principalInvestigator.education.map((edu, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-400">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-violet-600 dark:text-violet-400" />
                      Awards
                    </h4>
                    <ul className="space-y-2">
                      {principalInvestigator.awards.map((award, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-400">
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Postdocs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Research Associates
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {postdocs.map((postdoc, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <ImageLoader
                  src={postdoc.image}
                  alt={postdoc.name}
                  className="w-32 h-32 rounded-full border-3 border-violet-200 dark:border-violet-800"
                  fallbackType="user"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {postdoc.name}
                  </h3>
                  <p className="text-violet-600 dark:text-violet-400 font-medium mb-2">
                    {postdoc.title}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                    {postdoc.education}
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${postdoc.email}`}
                      className="inline-flex items-center text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium"
                    >
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </a>
                    <Link
                      to={`/personnel/${postdoc.slug}`}
                      className="inline-flex items-center px-4 py-2 border-2 border-violet-600 text-violet-600 dark:text-violet-400 hover:bg-violet-600 hover:text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      More
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                  <SocialButtons 
                    orcid={postdoc.orcid}
                    googleScholar={postdoc.googleScholar}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Graduate Students */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          PhD Students
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gradStudents.map((student, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <ImageLoader
                  src={student.image}
                  alt={student.name}
                  className="w-32 h-32 rounded-full border-3 border-violet-200 dark:border-violet-800"
                  fallbackType="user"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {student.name}
                  </h3>
                  <p className="text-violet-600 dark:text-violet-400 font-medium mb-2">
                    {student.year}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                    {student.education}
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${student.email}`}
                      className="inline-flex items-center text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium"
                    >
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </a>
                    <Link
                      to={`/personnel/${student.slug}`}
                      className="inline-flex items-center px-4 py-2 border-2 border-violet-600 text-violet-600 dark:text-violet-400 hover:bg-violet-600 hover:text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      More
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                  <SocialButtons 
                    orcid={student.orcid}
                    googleScholar={student.googleScholar}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Undergraduate Students */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Students
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {undergrads.map((student, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <ImageLoader
                  src={student.image}
                  alt={student.name}
                  className="w-32 h-32 rounded-full border-3 border-violet-200 dark:border-violet-800"
                  fallbackType="user"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {student.name}
                  </h3>
                  <p className="text-violet-600 dark:text-violet-400 font-medium mb-2">
                    {student.year}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                    {student.education}
                  </p>
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${student.email}`}
                      className="inline-flex items-center text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium"
                    >
                      <Mail className="h-4 w-4 mr-1" />
                      Contact
                    </a>
                    <Link
                      to={`/personnel/${student.slug}`}
                      className="inline-flex items-center px-4 py-2 border-2 border-violet-600 text-violet-600 dark:text-violet-400 hover:bg-violet-600 hover:text-white rounded-lg font-medium transition-colors duration-200"
                    >
                      More
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
      <section className="bg-violet-50 dark:bg-violet-900/10 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            We're always looking for motivated researchers to join our dynamic team. 
            Whether you're a prospective graduate student, postdoc, or visiting researcher, 
            we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-colors duration-200">
              Graduate Positions
            </button>
            <button className="px-8 py-3 border-2 border-violet-600 text-violet-600 dark:text-violet-400 hover:bg-violet-600 hover:text-white rounded-lg font-medium transition-colors duration-200">
              Postdoc Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};