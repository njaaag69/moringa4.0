import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  projects: [
    {
      id: '1',
      name: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with React and Node.js, featuring real-time inventory management and secure payment processing.',
      githubUrl: 'https://github.com/example/ecommerce',
      track: 'Full Stack',
      cohort: 'MC-45',
      owners: [{ id: '1', name: 'John Doe', email: 'john@example.com', role: 'student' }],
      members: [{ id: '2', name: 'Jane Smith', email: 'jane@example.com', role: 'student' }],
      createdAt: '2024-03-10T10:00:00Z'
    },
    {
      id: '2',
      name: 'Fitness Tracker App',
      description: 'Android app for tracking workouts and nutrition with personalized workout plans and progress analytics.',
      githubUrl: 'https://github.com/example/fitness',
      track: 'Android',
      cohort: 'MC-46',
      owners: [{ id: '3', name: 'Alice Johnson', email: 'alice@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-03-15T14:30:00Z'
    },
    {
      id: '3',
      name: 'Learning Management System',
      description: 'Comprehensive LMS with video conferencing, assignment submission, and grade tracking features.',
      githubUrl: 'https://github.com/example/lms',
      track: 'Full Stack',
      cohort: 'MC-45',
      owners: [{ id: '4', name: 'Mike Wilson', email: 'mike@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-03-01T09:15:00Z'
    },
    {
      id: '4',
      name: 'Smart Home Controller',
      description: 'Android application for controlling IoT devices with automation rules and energy monitoring.',
      githubUrl: 'https://github.com/example/smart-home',
      track: 'Android',
      cohort: 'MC-46',
      owners: [{ id: '5', name: 'Sarah Lee', email: 'sarah@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-02-28T16:45:00Z'
    },
    {
      id: '5',
      name: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management with scheduling and engagement tracking.',
      githubUrl: 'https://github.com/example/social-dashboard',
      track: 'Full Stack',
      cohort: 'MC-45',
      owners: [{ id: '6', name: 'David Chen', email: 'david@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-02-25T11:20:00Z'
    },
    {
      id: '6',
      name: 'Recipe Finder',
      description: 'Mobile app for discovering recipes based on available ingredients with dietary restrictions support.',
      githubUrl: 'https://github.com/example/recipe-finder',
      track: 'Android',
      cohort: 'MC-46',
      owners: [{ id: '7', name: 'Emma Brown', email: 'emma@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-02-20T13:10:00Z'
    },
    {
      id: '7',
      name: 'Task Management System',
      description: 'Project management tool with Kanban boards, time tracking, and team collaboration features.',
      githubUrl: 'https://github.com/example/task-manager',
      track: 'Full Stack',
      cohort: 'MC-45',
      owners: [{ id: '8', name: 'Tom Harris', email: 'tom@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-02-15T10:30:00Z'
    },
    {
      id: '8',
      name: 'Weather Forecast App',
      description: 'Location-based weather app with severe weather alerts and interactive radar maps.',
      githubUrl: 'https://github.com/example/weather',
      track: 'Android',
      cohort: 'MC-46',
      owners: [{ id: '9', name: 'Lisa Wang', email: 'lisa@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-02-10T14:20:00Z'
    },
    {
      id: '9',
      name: 'Virtual Event Platform',
      description: 'Platform for hosting virtual conferences with breakout rooms and networking features.',
      githubUrl: 'https://github.com/example/virtual-events',
      track: 'Full Stack',
      cohort: 'MC-45',
      owners: [{ id: '10', name: 'James Wilson', email: 'james@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-02-05T09:45:00Z'
    },
    {
      id: '10',
      name: 'Expense Tracker',
      description: 'Personal finance app with budget planning and expense categorization.',
      githubUrl: 'https://github.com/example/expense-tracker',
      track: 'Android',
      cohort: 'MC-46',
      owners: [{ id: '11', name: 'Sophie Turner', email: 'sophie@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-02-01T15:30:00Z'
    },
    {
      id: '11',
      name: 'Online Marketplace',
      description: 'Peer-to-peer marketplace with secure transactions and user ratings.',
      githubUrl: 'https://github.com/example/marketplace',
      track: 'Full Stack',
      cohort: 'MC-45',
      owners: [{ id: '12', name: 'Ryan Martinez', email: 'ryan@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-01-28T11:15:00Z'
    },
    {
      id: '12',
      name: 'Mental Health Tracker',
      description: 'App for mood tracking and mental wellness with guided meditation features.',
      githubUrl: 'https://github.com/example/mental-health',
      track: 'Android',
      cohort: 'MC-46',
      owners: [{ id: '13', name: 'Emily White', email: 'emily@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-01-25T16:40:00Z'
    },
    {
      id: '13',
      name: 'Real Estate Platform',
      description: 'Property listing platform with virtual tours and mortgage calculator.',
      githubUrl: 'https://github.com/example/real-estate',
      track: 'Full Stack',
      cohort: 'MC-45',
      owners: [{ id: '14', name: 'Alex Thompson', email: 'alex@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-01-20T10:20:00Z'
    },
    {
      id: '14',
      name: 'Language Learning App',
      description: 'Interactive language learning app with speech recognition and progress tracking.',
      githubUrl: 'https://github.com/example/language-learn',
      track: 'Android',
      cohort: 'MC-46',
      owners: [{ id: '15', name: 'Maria Garcia', email: 'maria@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-01-15T13:50:00Z'
    },
    {
      id: '15',
      name: 'Job Board Platform',
      description: 'Job listing platform with resume parsing and applicant tracking.',
      githubUrl: 'https://github.com/example/job-board',
      track: 'Full Stack',
      cohort: 'MC-45',
      owners: [{ id: '16', name: 'Chris Anderson', email: 'chris@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-01-10T14:25:00Z'
    },
    {
      id: '16',
      name: 'Travel Companion App',
      description: 'Travel planning app with itinerary management and local recommendations.',
      githubUrl: 'https://github.com/example/travel',
      track: 'Android',
      cohort: 'MC-46',
      owners: [{ id: '17', name: 'Nina Patel', email: 'nina@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-01-05T09:30:00Z'
    },
    {
      id: '17',
      name: 'Restaurant Management System',
      description: 'Complete restaurant management solution with order tracking and inventory management.',
      githubUrl: 'https://github.com/example/restaurant',
      track: 'Full Stack',
      cohort: 'MC-45',
      owners: [{ id: '18', name: 'Kevin Lee', email: 'kevin@example.com', role: 'student' }],
      members: [],
      createdAt: '2024-01-01T11:45:00Z'
    },
    {
      id: '18',
      name: 'Music Streaming App',
      description: 'Music player with playlist management and offline listening capabilities.',
      githubUrl: 'https://github.com/example/music-stream',
      track: 'Android',
      cohort: 'MC-46',
      owners: [{ id: '19', name: 'Rachel Green', email: 'rachel@example.com', role: 'student' }],
      members: [],
      createdAt: '2023-12-28T15:20:00Z'
    },
    {
      id: '19',
      name: 'Healthcare Portal',
      description: 'Patient management system with appointment scheduling and medical records.',
      githubUrl: 'https://github.com/example/healthcare',
      track: 'Full Stack',
      cohort: 'MC-45',
      owners: [{ id: '20', name: 'Daniel Kim', email: 'daniel@example.com', role: 'student' }],
      members: [],
      createdAt: '2023-12-25T10:15:00Z'
    },
    {
      id: '20',
      name: 'Fitness Challenge App',
      description: 'Social fitness app with challenges, leaderboards, and achievement tracking.',
      githubUrl: 'https://github.com/example/fitness-challenge',
      track: 'Android',
      cohort: 'MC-46',
      owners: [{ id: '21', name: 'Olivia Davis', email: 'olivia@example.com', role: 'student' }],
      members: [],
      createdAt: '2023-12-20T14:40:00Z'
    },
    {
      id: '21',
      name: 'Event Ticketing System',
      description: 'Event management platform with QR code tickets and seat selection.',
      githubUrl: 'https://github.com/example/event-tickets',
      track: 'Full Stack',
      cohort: 'MC-45',
      owners: [{ id: '22', name: 'Lucas Martin', email: 'lucas@example.com', role: 'student' }],
      members: [],
      createdAt: '2023-12-15T11:30:00Z'
    },
    {
      id: '22',
      name: 'Plant Care App',
      description: 'Plant identification and care guide with watering reminders.',
      githubUrl: 'https://github.com/example/plant-care',
      track: 'Android',
      cohort: 'MC-46',
      owners: [{ id: '23', name: 'Isabella Rodriguez', email: 'isabella@example.com', role: 'student' }],
      members: [],
      createdAt: '2023-12-10T16:20:00Z'
    },
    {
      id: '23',
      name: 'Inventory Management System',
      description: 'Warehouse management system with barcode scanning and order fulfillment.',
      githubUrl: 'https://github.com/example/inventory',
      track: 'Full Stack',
      cohort: 'MC-45',
      owners: [{ id: '24', name: 'William Taylor', email: 'william@example.com', role: 'student' }],
      members: [],
      createdAt: '2023-12-05T09:50:00Z'
    },
    {
      id: '24',
      name: 'Study Timer App',
      description: 'Pomodoro timer with study statistics and focus mode.',
      githubUrl: 'https://github.com/example/study-timer',
      track: 'Android',
      cohort: 'MC-46',
      owners: [{ id: '25', name: 'Sophia Lee', email: 'sophia@example.com', role: 'student' }],
      members: [],
      createdAt: '2023-12-01T13:15:00Z'
    },
    {
      id: '25',
      name: 'Blog Platform',
      description: 'Content management system with markdown support and SEO optimization.',
      githubUrl: 'https://github.com/example/blog-platform',
      track: 'Full Stack',
      cohort: 'MC-45',
      owners: [{ id: '26', name: 'Benjamin Wilson', email: 'benjamin@example.com', role: 'student' }],
      members: [],
      createdAt: '2023-11-28T10:45:00Z'
    },
    {
      id: '26',
      name: 'Habit Tracker',
      description: 'Daily habit tracking app with streak counting and progress insights.',
      githubUrl: 'https://github.com/example/habit-tracker',
      track: 'Android',
      cohort: 'MC-46',
      owners: [{ id: '27', name: 'Ava Thompson', email: 'ava@example.com', role: 'student' }],
      members: [],
      createdAt: '2023-11-25T15:30:00Z'
    },
    {
      id: '27',
      name: 'Library Management System',
      description: 'Digital library system with book reservations and late fee management.',
      githubUrl: 'https://github.com/example/library',
      track: 'Full Stack',
      cohort: 'MC-45',
      owners: [{ id: '28', name: 'Mason Brown', email: 'mason@example.com', role: 'student' }],
      members: [],
      createdAt: '2023-11-20T11:20:00Z'
    },
    {
      id: '28',
      name: 'Local Guide App',
      description: 'City exploration app with augmented reality points of interest.',
      githubUrl: 'https://github.com/example/local-guide',
      track: 'Android',
      cohort: 'MC-46',
      owners: [{ id: '29', name: 'Mia Garcia', email: 'mia@example.com', role: 'student' }],
      members: [],
      createdAt: '2023-11-15T14:10:00Z'
    },
    {
      id: '29',
      name: 'Volunteer Management Platform',
      description: 'Platform for coordinating volunteers and tracking community service hours.',
      githubUrl: 'https://github.com/example/volunteer',
      track: 'Full Stack',
      cohort: 'MC-45',
      owners: [{ id: '30', name: 'Ethan Davis', email: 'ethan@example.com', role: 'student' }],
      members: [],
      createdAt: '2023-11-10T09:40:00Z'
    },
    {
      id: '30',
      name: 'Pet Care App',
      description: 'Pet health tracking app with vet appointment scheduling and medication reminders.',
      githubUrl: 'https://github.com/example/pet-care',
      track: 'Android',
      cohort: 'MC-46',
      owners: [{ id: '31', name: 'Charlotte Wilson', email: 'charlotte@example.com', role: 'student' }],
      members: [],
      createdAt: '2023-11-05T16:25:00Z'
    }
  ],
  loading: false,
  error: null,
  filters: {
    track: null,
    cohort: null,
    search: ''
  }
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
    addProject: (state, action) => {
      state.projects.push(action.payload);
    },
    updateProject: (state, action) => {
      const index = state.projects.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.projects[index] = action.payload;
      }
    },
    deleteProject: (state, action) => {
      state.projects = state.projects.filter(p => p.id !== action.payload);
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const {
  setProjects,
  addProject,
  updateProject,
  deleteProject,
  setFilters,
  setLoading,
  setError
} = projectsSlice.actions;

export default projectsSlice.reducer;