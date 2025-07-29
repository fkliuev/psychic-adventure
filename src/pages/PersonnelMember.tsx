import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Mail, ExternalLink, GraduationCap, Award, MapPin } from 'lucide-react';
import { ImageLoader } from '../components/ImageLoader';

export const PersonnelMember: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Данные о членах команды
  const teamMembers = {
    'denis-chusov': {
      name: 'Denis Chusov',
      title: 'Principal Investigator',
      position: 'Associate Professor',
      image: '/images/IMG_1704_JPG.avif',
      email: 'chden@ya.ru',
      bio: 'Denis Chusov leads the ChemCatGroup with extensive experience in organic catalysis and hydrogen borrowing reactions. His research focuses on developing innovative catalytic methodologies for sustainable synthesis.',
      education: ['Nesmeyanov Institute of Organoelement Compounds (Moscow)', 'Moscow Chemical Lyceum', 'Higher Chemical College of the Russian Academy of Sciences'],
      awards: ['Nobel Prize Interview (2021)', 'Russian Chemical Reviews Publications', 'Multiple JOC Publications'],
      research: 'Organic catalysis, hydrogen borrowing reactions, sustainable synthesis',
      location: 'Moscow, Russia, 119334'
    },
    'oleg-afanasyev': {
      name: 'Dr. Oleg Afanasyev',
      title: 'Research Associate',
      position: 'Research Associate',
      image: '/images/IMG_1710.JPG',
      email: 'o.afanasyev@chemcatgroup.com',
      bio: 'Dr. Oleg Afanasyev specializes in ruthenium catalysis and halogen effects in organic synthesis.',
      education: ['PhD Chemistry, Moscow State University'],
      awards: ['Russian Chemical Reviews Publications'],
      research: 'Ruthenium catalysis and halogen effects in organic synthesis',
      location: 'Moscow, Russia, 119334'
    },
    'evgeniya-podyacheva': {
      name: 'Dr. Evgeniya Podyacheva',
      title: 'Research Associate',
      position: 'Research Associate',
      image: '/images/Подъячева Е_С_.avif',
      email: 'e.podyacheva@chemcatgroup.com',
      bio: 'Dr. Evgeniya Podyacheva focuses on hydrogen borrowing reactions and reductive amination.',
      education: ['PhD Chemistry, Moscow State University'],
      awards: ['Multiple JOC Publications'],
      research: 'Hydrogen borrowing reactions and reductive amination',
      location: 'Moscow, Russia, 119334'
    },
    'artemy-fatkulin': {
      name: 'Dr. Artemy Fatkulin',
      title: 'Ph.D. Student',
      position: 'Research Student',
      image: '/images/VUYUejZuAdU (2) - Артемий Фаткулин.avif',
      email: 'a.fatkulin@chemcatgroup.com',
      bio: 'Artyom develops tandem, catalyst-free C-C synthesis methodologies for nitrile production.',
      education: ['MSc Chemistry, Moscow State University'],
      awards: ['European Journal of Organic Chemistry publication'],
      research: 'C-C bond formation and organic synthesis',
      location: 'Moscow, Russia, 119334'
    },
    'andrey-kozlov': {
      name: 'Andrey Kozlov',
      title: 'Ph.D. Student',
      position: 'Research Student',
      image: '/images/Цветное фото (2) - Andrey Kozlov.avif',
      email: 'a.kozlov@chemcatgroup.com',
      bio: 'Andrey works on asymmetric catalysis for the synthesis of chiral compounds.',
      education: ['MSc Chemistry, Moscow State University'],
      awards: ['Asymmetric catalysis studies'],
      research: 'Asymmetric catalysis and chiral synthesis',
      location: 'Moscow, Russia, 119334'
    },
    'alexandra-balalaeva': {
      name: 'Alexandra Balalaeva',
      title: 'Ph.D. Student',
      position: 'Research Student',
      image: '/images/5DE51D14-207C-4E00-A1C8-396CF44FA223 - Александра Балалаева.avif',
      email: 'a.balalaeva@chemcatgroup.com',
      bio: 'Alexandra develops new catalytic methodologies for organic transformations.',
      education: ['MSc Chemistry, Moscow State University'],
      awards: ['Methodology development'],
      research: 'Catalytic transformations and methodology development',
      location: 'Moscow, Russia, 119334'
    },
    'alexander-modin': {
      name: 'Alexander Modin',
      title: 'Administrator',
      position: 'Research Administrator',
      image: '/images/Modin Alexander - 131223 - 2 - Alexander Modin.avif',
      email: 'a.modin@chemcatgroup.com',
      bio: 'Alexander works on direct synthesis of amides from nitroarenes and carboxylic acids via CO-mediated reduction.',
      education: ['MSc Chemistry, Moscow State University'],
      awards: ['Journal of Catalysis publication'],
      research: 'Amide synthesis and polymerization catalysis',
      location: 'Moscow, Russia, 119334'
    },
    'klim-birukov': {
      name: 'Klim Birukov',
      title: 'Ph.D. Student',
      position: 'Research Student',
      image: '/images/235918378_14880.avif',
      email: 'k.birukov@chemcatgroup.com',
      bio: 'Klim combines computational methods with experimental catalysis research.',
      education: ['MSc Chemistry, Moscow State University'],
      awards: ['Computational catalysis studies'],
      research: 'Computational chemistry and catalysis',
      location: 'Moscow, Russia, 119334'
    },
    'fedor-kluev': {
      name: 'Fedor Kluev',
      title: 'Student',
      position: 'Research Student',
      image: '/images/j7-c3JPqCEk (3) - Fedor Kliuev.avif',
      email: 'f.kluev@chemcatgroup.com',
      bio: 'Fedor focuses on developing sustainable methodologies for reductive amination using sodium hypophosphite as a reducing agent.',
      education: ['BSc Chemistry, HSE University'],
      awards: ['3rd place in HSE scientific research contest (2023)'],
      research: 'Hydrogen borrowing reactions and reductive amination',
      location: 'Moscow, Russia, 119334'
    },
    'olesya-zvereva': {
      name: 'Olesya Zvereva',
      title: 'Student',
      position: 'Research Student',
      image: '/images/000044460021 - Olesya Zvereva.avif',
      email: 'o.zvereva@chemcatgroup.com',
      bio: 'Olesya specializes in the synthesis and detailed characterization of catalytic systems.',
      education: ['BSc Chemistry, Moscow State University'],
      awards: ['Catalyst characterization studies'],
      research: 'Synthesis and characterization of catalysts',
      location: 'Moscow, Russia, 119334'
    },
    'max-shandybo': {
      name: 'Max Shandybo',
      title: 'Student',
      position: 'Research Student',
      image: '/images/768B0A59-A5DB-47DA-9A18-476358F46C01 - Максим Шандыбо.avif',
      email: 'm.shandybo@chemcatgroup.com',
      bio: 'Max develops environmentally friendly catalytic processes for organic synthesis.',
      education: ['BSc Chemistry, Moscow State University'],
      awards: ['Green chemistry methodologies'],
      research: 'Green chemistry and sustainable synthesis',
      location: 'Moscow, Russia, 119334'
    },
    'ivan-smirnov': {
      name: 'Ivan Smirnov',
      title: 'Student',
      position: 'Research Student',
      image: '/images/IMG20210601152027 - Mr_ Racer.avif',
      email: 'i.smirnov@chemcatgroup.com',
      bio: 'Ivan works on catalyst screening and optimization for organic transformations.',
      education: ['BSc Chemistry, HSE University'],
      awards: ['Undergraduate research award'],
      research: 'Catalyst screening and optimization',
      location: 'Moscow, Russia, 119334'
    },
    'natalya-lebedeva': {
      name: 'Natalya Lebedeva',
      title: 'Student',
      position: 'Research Student',
      image: '/images/IMG_20230408_151840_575 - Natalia Lebedeva.avif',
      email: 'n.lebedeva@chemcatgroup.com',
      bio: 'Natalya investigates the halogen effect in ruthenium catalysis for organic transformations.',
      education: ['BSc Chemistry, Moscow State University'],
      awards: ['Russian Chemical Reviews publication'],
      research: 'Ruthenium catalysis and halogen effects',
      location: 'Moscow, Russia, 119334'
    },
    'mikhail-losev': {
      name: 'Mikhail Losev',
      title: 'Student',
      position: 'Research Student',
      image: '/images/IMG_20241010_185949_013_JPG.avif',
      email: 'm.losev@chemcatgroup.com',
      bio: 'Mikhail focuses on polymerization catalysis using Krossing\'s acid as efficient catalyst.',
      education: ['BSc Chemistry, Moscow State University'],
      awards: ['European Polymer Journal publication'],
      research: 'Catalyst development and optimization',
      location: 'Moscow, Russia, 119334'
    },
    'alexander-boldyrev': {
      name: 'Alexander Boldyrev',
      title: 'Student',
      position: 'Research Student',
      image: '/images/62328E57-F0EE-48F3-9B4E-E32864D1F8AA - Александр Болдырев.avif',
      email: 'a.boldyrev@chemcatgroup.com',
      bio: 'Alexander combines computational methods with experimental catalysis research.',
      education: ['BSc Chemistry, Moscow State University'],
      awards: ['Computational catalysis studies'],
      research: 'Computational chemistry and catalysis',
      location: 'Moscow, Russia, 119334'
    },
    'vasilii-korochancev': {
      name: 'Vasilii Korochancev',
      title: 'Student',
      position: 'Research Student',
      image: '/images/kKliWZ4rwU4 - Вася Корочанцев_edited.avif',
      email: 'v.korochancev@chemcatgroup.com',
      bio: 'Vasilii focuses on polymerization catalysis using Krossing\'s acid as efficient catalyst.',
      education: ['BSc Chemistry, Moscow State University'],
      awards: ['European Polymer Journal publication'],
      research: 'Catalyst development and optimization',
      location: 'Moscow, Russia, 119334'
    },
    'danil-rakitianskii': {
      name: 'Danil Rakitianskii',
      title: 'Student',
      position: 'Research Student',
      image: '/images/photo_2024-09-24_21-31-02 - Данил Ракитянский.avif',
      email: 'd.rakitianskii@chemcatgroup.com',
      bio: 'Danil investigates reaction mechanisms and develops new catalytic methodologies.',
      education: ['BSc Chemistry, Moscow State University'],
      awards: ['Mechanistic studies in catalysis'],
      research: 'Organic catalysis and reaction mechanisms',
      location: 'Moscow, Russia, 119334'
    }
  };

  const member = teamMembers[slug as keyof typeof teamMembers];

  if (!member) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Member Not Found
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              The requested team member could not be found.
            </p>
            <Link
              to="/team"
              className="inline-flex items-center px-6 py-3 bg-violet-600 text-white rounded-lg font-medium hover:bg-violet-700 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Team
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/team"
            className="inline-flex items-center text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Team
          </Link>
        </div>

        {/* Member Profile */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              <div className="text-center">
                <ImageLoader
                  src={member.image}
                  alt={member.name}
                  className="w-56 h-56 rounded-full mx-auto mb-6 border-4 border-violet-200 dark:border-violet-800"
                  fallbackType="user"
                />
                <div className="space-y-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white rounded-lg font-medium transition-colors duration-200"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </a>
                </div>
              </div>
              
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {member.name}
                  </h1>
                  <p className="text-xl text-violet-600 dark:text-violet-400 font-medium">
                    {member.title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.position}
                  </p>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                  {member.bio}
                </p>

                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="h-5 w-5 mr-2" />
                  {member.location}
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <GraduationCap className="h-5 w-5 mr-2 text-violet-600 dark:text-violet-400" />
                      Education
                    </h4>
                    <ul className="space-y-2">
                      {member.education.map((edu, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-400">
                          {edu}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-violet-600 dark:text-violet-400" />
                      Awards & Achievements
                    </h4>
                    <ul className="space-y-2">
                      {member.awards.map((award, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-400">
                          {award}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                    Research Focus
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.research}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 