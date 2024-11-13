import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Users, ArrowRight } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900">{project.name}</h3>
          <span className="px-3 py-1 text-sm rounded-full bg-indigo-100 text-indigo-800">
            {project.track}
          </span>
        </div>
        
        <p className="mt-2 text-gray-600 line-clamp-2">{project.description}</p>
        
        <div className="mt-4 flex items-center space-x-4">
          <div className="flex items-center text-gray-500">
            <Users className="h-5 w-5 mr-1" />
            <span>{(project.members?.length || 0) + (project.owners?.length || 0)} members</span>
          </div>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-500 hover:text-gray-700"
          >
            <Github className="h-5 w-5 mr-1" />
            <span>View Code</span>
          </a>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              Cohort: {project.cohort}
            </div>
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
            >
              View Details
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;