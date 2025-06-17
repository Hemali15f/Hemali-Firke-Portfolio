// import React from 'react';
import { Calendar, MapPin, ChevronRight } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Btech in Computer Engineering',
      company: 'R. C. Patel Institute Of Technology',
      location: 'Shirpur, Dhule, Maharashtra',
      period: '2022 - 2026',
      achievements: ['1st Runner-up at National Level Converges 2025 competition SQUID_MAZE (Coding, Debugging, brainly activities']
    },
    {
      title: 'Employbility Skill Develeopment',
      company: 'RPG Foundation and Zensar Technologies',
      location: 'RCPIT',
      period: 'Jan 2025 - Jan 2025',
      description: 'Worked on various projects to gain practical experience in modern technologies and frameworks.',
      achievements: [
        'Gain company based interview knowledge and improve soft skills'],
      technologies: ['Java', 'SQL', 'Python']
    },
    {
      title: 'Python Programming Intern',
      company: 'Octanet Private Limited',
      location: 'Remote',
      period: 'May 2024 - May 2024',
      description: 'Collaborated on Python-based applications, focusing on API integration to enhance functionality and user experience. Created documentation for Python code and workflows to improve clarity and usability. ',

      technologies: ['Python']
    },
    {
      title: 'Infosys Springboard Pragati Path: Cohort 5',
      company: 'Infosys Springboard',
      location: 'Remote',
      period: 'Apr 2024 - Jul 2024',
      description: 'Collaborated on Python-based applications, focusing on API integration to enhance functionality and user experience. Created documentation for Python code and workflows to improve clarity and usability. ',

      technologies: ['Python']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 via-blue-500 to-cyan-400 bg-clip-text text-transparent ">
            Experience & Education
          </h2>

          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My journey of learning, building, and growing in the field of technology.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-violet-700 via-blue-500 to-cyan-200"></div>


          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className=" relative">
                {/* Timeline dot */}
                <div className=" shadow-[0_0_10px_#8b5cf6,0_0_8px_#22d3ee] hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-800 z-10"></div>

                <div className={`md:grid md:grid-cols-2 md:gap-8 ${index % 2 === 0 ? '' : 'md:grid-flow-col-dense'}`}>
                  <div className={`${index % 2 === 0 ? 'shadow-[0_0_10px_#8b5cf6,0_0_8px_#22d3ee]' :'shadow-[0_0_10px_#8b5cf6,0_0_8px_#22d3ee]   md:text-left md:col-start-2'}`}>
                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                      <div className=" flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{exp.title}</h3>

                      <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300 mb-4">
                        <span className="font-medium">{exp.company}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                      <div className="mb-4">
                        {/* <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Achievements:</h4> */}
                        <ul className="space-y-1">
                          {Array.isArray(exp.achievements) &&
                            exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                                <ChevronRight className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}

                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {Array.isArray(exp.technologies) &&
                          exp.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}