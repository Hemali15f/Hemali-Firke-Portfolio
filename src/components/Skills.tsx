import {
  FaPython,
  FaJava,
  FaDatabase,
  FaCode,
  FaProjectDiagram,
  FaUsers,
  FaChalkboardTeacher,
  FaReact,
  FaNodeJs,
  FaLaptopCode
} from 'react-icons/fa';

import { SiMongodb, SiMysql } from 'react-icons/si';



export default function Skills() {
  const skillCategories = [
  {
    title: 'Programming Languages',
    icon: FaLaptopCode,
    color: 'orange',
    skills: [
      { name: 'C', icon: FaCode, color: '#A8B9CC' },
      { name: 'Java', icon: FaJava, color: 'red' },
      { name: 'Python', icon: FaPython, color: '#3776AB' },
    ]
  },
  {
    title: 'Query Languages',
    icon: FaDatabase,
    color: 'purple',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#2E86C1' },
      { name: 'PLSQL', icon: FaDatabase, color: '#A8B9CC' },
    ]
  },
  {
    title: 'Development Skills',
    icon: FaReact,
    color: 'blue',
    skills: [
      { name: 'Web Development', icon: FaLaptopCode, color: '#E34F26' }, // HTML5
      { name: 'ReactJS', icon: FaReact, color: '#61DAFB' },
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ]
  },
  {
    title: 'DSA',
    icon: FaProjectDiagram,
    color: 'emerald',
    skills: [
      { name: 'Data Structures', icon: FaProjectDiagram, color: '#4A90E2' },
      { name: 'Algorithms', icon: FaCode, color: '#F16529' },
    ]
  },
  {
    title: 'Soft Skills',
    icon: FaUsers,
    color: 'pink',
    skills: [
      { name: 'Communication', icon: FaUsers, color: '#FF6F61' },
      { name: 'Leadership', icon: FaChalkboardTeacher, color: '#2E86C1' },
      { name: 'Presentation', icon: FaChalkboardTeacher, color: '#9B59B6' },
    ]
  }
];






  
  const getIconBgClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400',
      purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400',
      indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400',
    };
    return colors[color as keyof typeof colors] || 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400';
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className= "bg-white dark:bg-gray-900 rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transition-shadow duration-300 shadow-[0_0_10px_#8b5cf6,0_0_8px_#22d3ee]"
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 rounded-lg ${getIconBgClasses(category.color)} flex items-center justify-center mr-4`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3 mt-4">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={skillIndex}
                        className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        <SkillIcon className="w-8 h-8" style={{ color: skill.color }} />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>


              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}