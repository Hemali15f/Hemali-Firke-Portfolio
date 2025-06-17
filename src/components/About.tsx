// import React from 'react';
// import { User, Heart, Target, Award } from 'lucide-react';

export default function About() {
  // const stats = [
  //   { label: 'Years Learning', value: '4+', icon: Award },
  //   { label: 'Projects Built', value: '15+', icon: Target },
  //   { label: 'Technologies', value: '12+', icon: User },
  //   { label: 'Certifications', value: '5+', icon: Heart },
  // ];

  return (
    <section id="about" >
      <div className=" mx-auto px-0 sm:px-0 lg:px-0">
        {/* <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A passionate Computer Science student with a drive for creating innovative web solutions.
          </p>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-0 items-center">
          {/* Content */}
          <div>
            {/* <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Building Tomorrow's Digital Experiences
            </h3> */}
            {/* <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                I'm currently pursuing my Bachelor's in Computer Science Engineering at Pimpri Chinchwad 
                College of Engineering, where I've maintained a strong academic record with a CGPA of 8.5. 
                My journey in technology is driven by curiosity and a passion for solving real-world problems.
              </p>
              <p>
                With expertise in full-stack development, I specialize in creating responsive web applications 
                using React, Node.js, and modern frameworks. I've worked on diverse projects ranging from 
                e-commerce platforms to data visualization tools, always focusing on user experience and 
                performance optimization.
              </p>
              <p>
                Beyond coding, I'm actively involved in competitive programming and have participated in 
                various hackathons. I believe in continuous learning and staying updated with the latest 
                technologies to deliver cutting-edge solutions.
              </p>
            </div> */}

            {/* Skills Overview */}
            <div className="mt-8">
              {/* <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Core Technologies</h4> */}
              {/* <div className="flex flex-wrap gap-3">
                {['React', 'Node.js', 'JavaScript', 'Python', 'MongoDB', 'Express.js'].map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div> */}
            </div>
          </div>

          {/* Stats */}
          {/* <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-lg mb-4">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div> */}
        </div>
      </div>
    </section>
  );
}