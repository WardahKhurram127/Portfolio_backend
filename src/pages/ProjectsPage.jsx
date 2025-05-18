import React, { useEffect, useState } from 'react';
import { getProjects } from '../api/projectApi'; // adjust if folder structure differs

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (err) {
        console.error('Failed to fetch projects:', err);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="h-[100%] w-[100%] bg-gray-900 text-white py-12 px-4 md:px-12 2xl:ml-32 min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 pt-20 group relative inline-block">
        <span className="relative hover:text-[#FF4D4D] ">
          PROJECTS
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 "></span>
        </span>
      </h2>
      <hr className="border-red-500 w-32 mx-auto mb-12 opacity-70" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-red-500/20 transition-all duration-500"
          >
            <div className="h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="p-6 bg-gray-800/90 group-hover:bg-gray-800 transition-all duration-300">
              <h3 className="text-xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-red-400 mb-2">{project.tech}</p>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
