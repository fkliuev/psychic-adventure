import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, ExternalLink, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: ['Chden@ya.ru'],
      description: 'General inquiries and collaboration opportunities'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+7(499)1356261'],
      description: 'Office hours: Monday - Friday, 9:00 AM - 5:00 PM'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['Moscow, Russia, 119334'],
      description: 'Chemistry Department'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Friday: 9:00 AM - 5:00 PM', 'Saturday: 10:00 AM - 2:00 PM', 'Sunday: Closed'],
      description: 'Available for meetings by appointment'
    }
  ];

  const socialLinks = [
    {
      name: 'Google Scholar',
      url: '#',
      icon: ExternalLink,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      name: 'ORCID',
      url: '#',
      icon: ExternalLink,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      name: 'ResearchGate',
      url: '#',
      icon: ExternalLink,
      color: 'bg-teal-600 hover:bg-teal-700'
    },
    {
      name: 'LinkedIn',
      url: '#',
      icon: ExternalLink,
      color: 'bg-blue-700 hover:bg-blue-800'
    }
  ];

  const teamContacts = [
    {
      name: 'Prof. Dr. Denis Chusov',
      title: 'Principal Investigator',
      email: 'Chden@ya.ru',
      phone: '+7(499)1356261',
      office: 'Chemistry Department'
    },
    {
      name: 'Dr. Oleg Afanasyev',
      title: 'Research Associate',
      email: 'o.afanasyev@chemcatgroup.com',
      office: 'Chemistry Department'
    },
    {
      name: 'Dr. Evgeniya Podyacheva',
      title: 'Research Associate',
      email: 'e.podyacheva@chemcatgroup.com',
      office: 'Chemistry Department'
    }
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          Contact Us
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Get in touch with our research team for collaborations, inquiries, or opportunities to join our laboratory
        </p>
      </section>

      {/* Contact Information Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 text-center hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-violet-100 dark:bg-violet-900/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <info.icon className="h-8 w-8 text-violet-600 dark:text-violet-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {info.title}
              </h3>
              <div className="space-y-1 mb-3">
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 dark:text-gray-400">
                    {detail}
                  </p>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                {info.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-violet-600 dark:text-violet-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Send us a Message
              </h2>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                >
                  <option value="">Select a subject</option>
                  <option value="collaboration">Research Collaboration</option>
                  <option value="student">Student Opportunities</option>
                  <option value="postdoc">Postdoc Positions</option>
                  <option value="industry">Industry Partnership</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  placeholder="Please describe your inquiry or interest in detail..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Location and Additional Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-gray-100 dark:bg-gray-700 rounded-2xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 dark:text-gray-400">
                  Interactive map will be displayed here
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Department of Chemistry, Building A
                </p>
              </div>
            </div>

            {/* Key Contacts */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Key Contacts
              </h3>
              <div className="space-y-4">
                {teamContacts.map((contact, index) => (
                  <div key={index} className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-4 last:pb-0">
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {contact.name}
                    </h4>
                    <p className="text-sm text-violet-600 dark:text-violet-400 mb-2">
                      {contact.title}
                    </p>
                    <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                      <p className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        {contact.email}
                      </p>
                      {contact.phone && (
                        <p className="flex items-center">
                          <Phone className="h-4 w-4 mr-2" />
                          {contact.phone}
                        </p>
                      )}
                      <p className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {contact.office}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Find Us Online
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className={`${link.color} text-white p-4 rounded-lg text-center font-medium transition-colors duration-200 flex items-center justify-center`}
                  >
                    <link.icon className="h-5 w-5 mr-2" />
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visiting Information */}
      <section className="bg-gray-50 dark:bg-gray-800/50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Visiting Our Laboratory
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                For Academic Visitors
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Schedule visits 2-3 weeks in advance</li>
                <li>• Bring institutional ID and safety certification</li>
                <li>• Lab tours available Monday-Friday, 10 AM - 4 PM</li>
                <li>• Research presentations welcome</li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                For Industry Partners
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• Collaboration meetings by appointment</li>
                <li>• NDA agreements can be arranged</li>
                <li>• Facility tours and capability demonstrations</li>
                <li>• Technology transfer office coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};