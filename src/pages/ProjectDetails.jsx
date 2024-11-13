import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Github, Calendar, Users, Trash2, UserPlus, BookMarked } from 'lucide-react';
import { deleteProject } from '../store/slices/projectsSlice';

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const project = useSelector((state) => 
    state.projects.projects.find((p) => p.id === id)
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Project not found</h2>
          <button
            onClick={() => navigate('/dashboard')}
            className="mt-4 text-indigo-600 hover:text-indigo-500"
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const isOwner = project.owners.some(owner => owner.id === user?.id);
  const isAdmin = user?.role === 'admin';
  const canModify = isOwner || isAdmin;

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      dispatch(deleteProject(project.id));
      navigate('/dashboard');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 px-6 py-8 text-white">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold">{project.name}</h1>
              <div className="mt-2 flex items-center space-x-4">
                <span className="flex items-center">
                  <BookMarked className="h-5 w-5 mr-1" />
                  {project.track}
                </span>
                <span className="flex items-center">
                  <Calendar className="h-5 w-5 mr-1" />
                  {formatDate(project.createdAt)}
                </span>
              </div>
            </div>
            {canModify && (
              <div className="flex space-x-2">
                {isOwner && (
                  <button
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-md flex items-center"
                    onClick={() => navigate(`/projects/${id}/members`)}
                  >
                    <UserPlus className="h-5 w-5 mr-2" />
                    Add Members
                  </button>
                )}
                {(isAdmin || isOwner) && (
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md flex items-center"
                  >
                    <Trash2 className="h-5 w-5 mr-2" />
                    Delete Project
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-600 whitespace-pre-line">{project.description}</p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Details</h2>
                <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Track</span>
                    <span className="font-medium">{project.track}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Cohort</span>
                    <span className="font-medium">{project.cohort}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Created</span>
                    <span className="font-medium">{formatDate(project.createdAt)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* GitHub Link */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Repository</h3>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800"
                >
                  <Github className="h-5 w-5 mr-2" />
                  View on GitHub
                </a>
              </div>

              {/* Team Members */}
              <div className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Team</h3>
                  <span className="text-sm text-gray-500">
                    {project.members.length + project.owners.length} members
                  </span>
                </div>
                
                <div className="space-y-4">
                  {/* Owners */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-2">Owners</h4>
                    {project.owners.map((owner) => (
                      <div key={owner.id} className="flex items-center space-x-2 mb-2">
                        <div className="bg-indigo-100 rounded-full p-2">
                          <Users className="h-4 w-4 text-indigo-600" />
                        </div>
                        <span className="text-gray-900">{owner.name}</span>
                      </div>
                    ))}
                  </div>

                  {/* Members */}
                  {project.members.length > 0 && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-2">Members</h4>
                      {project.members.map((member) => (
                        <div key={member.id} className="flex items-center space-x-2 mb-2">
                          <div className="bg-gray-100 rounded-full p-2">
                            <Users className="h-4 w-4 text-gray-600" />
                          </div>
                          <span className="text-gray-900">{member.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}