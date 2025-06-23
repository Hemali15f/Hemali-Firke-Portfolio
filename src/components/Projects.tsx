// import React from 'react';
import {  Github, Star } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Secure E-Voting System with Facial Recognition using AI',
      description: [' Developed a full-stack web app combining React.js frontend with a Python based backend.',' Implemented real-time webcam imag capture using Python for potential facial recognition features.'],
      image: 'https://thvnext.bing.com/th/id/OIP.vMpf93alH6857hTMkfkdgQHaEB?w=313&h=180&c=7&r=0&o=7&cb=thvnext&dpr=1.3&pid=1.7&rm=3',
      technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Python', 'Node.js'],
      github: 'https://github.com/Hemali15f/Secure-E-Voting-with-Facial-Recognition-with-AI',
      featured: true
    },
    {
      title: 'BookNest',
      description: [' BookNest is a full-stack AI-powered online bookstore that allows users to browse, search, filter, and purchase books, while also offering an admin panel to manage the book inventory.'],
      image: 'https://thumbs.dreamstime.com/z/bookstore-shop-exterior-books-shop-brick-building-education-library-market-books-shop-window-shelves-street-shop-mall-159900632.jpg',
      technologies: [ 'React + TypeScript', 'Tailwind CSS', 'Vite', 'Node.js' + 'Express', 'SQLite'],
      github: 'https://github.com/Hemali15f/BookNest',
      featured: true
    },
    {
      title: 'Online Project Submission System ',
      description: ' Built responsive web interface using HTML, CSS, JS with secure file uploads. Ensured cross-device compatibility with mobile-friendly design',
      image: 'https://thvnext.bing.com/th/id/OIP.I_ZFLP562Kejh9GtzfFukQHaFQ?cb=thvnext&pid=ImgDet&w=184&h=130&c=7&dpr=1.3',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Hemali15f/Online-Project-Submission-System',
    
      featured: true
    },
    {
      title: 'Cultural Heritage Management system',
      description: 'A Java-based system for managing cultural heritage sites, visitors, events, and donations using a MySQL database.',
      image: 'https://thvnext.bing.com/th/id/OIP.Qgil7DpWKVGq3MtE8nbjawHaC8?w=344&h=139&c=7&r=0&o=7&cb=thvnext&dpr=1.3&pid=1.7&rm=3',
      technologies: ['Java', 'JDBC','MySQL'],
      github: 'https://github.com/Hemali15f/Cultural-Heritage-Management-System',
      
      featured: true
    },
    {
      title: 'Hotel Reviews Analysis Using AI',
      description: 'Created Flask backend with Pandas for review filtering. Designed responsive front-end for optimal user experience ',
      image: 'https://assets-global.website-files.com/60fd4503684b46390cc0d337/63df80851b4c08fe9d4e8088_Studio-Blog-DashboardBased.png',
      technologies: ['Python', 'HTML', 'CSS', 'Javascript'],
      github: 'https://github.com/Hemali15f/Hotel-Reviews-Analysis-Using-AI',
      
      featured: true
    },
    {
      title: 'ATM Interface',
      description: 'Created Flask backend with Pandas for review filtering. Designed responsive front-end for optimal user experience.',
      image: 'https://thvnext.bing.com/th/id/OIP.Unh24hfy07YDIFkZZCmeGgHaEL?w=284&h=180&c=7&r=0&o=7&cb=thvnext&dpr=1.3&pid=1.7&rm=3',
      technologies: ['Python'],
      github: 'https://github.com/Hemali15f/ATM-Interface',
      
      featured: true
    },
    
    
  ];

  const featuredProjects = projects.filter(p => p.featured);
  // const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-700 via-blue-500 to-cyan-400 bg-clip-text text-transparent ">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent work and academic projects.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className=" shadow-[0_0_10px_#8b5cf6,0_0_8px_#22d3ee] group bg-white dark:bg-gray-800 rounded-xl  overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className=" w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full flex items-center gap-1 text-xs font-medium">
                      <Star className="h-3 w-3" />
                      Featured
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-200"
                    >
                      <Github className="h-4 w-4" />
                      <span className="text-sm font-medium">Code</span>
                    </a>
                    
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
