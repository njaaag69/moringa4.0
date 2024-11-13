# Project Bank System

A modern web application for managing and showcasing student projects. Built with React, Redux, and Tailwind CSS.

## Features

- **User Authentication**: Support for both student and admin roles
- **Project Management**: Create, view, and manage projects
- **Role-based Access Control**: Different permissions for students and admins
- **Responsive Design**: Works seamlessly across all devices
- **Real-time Filtering**: Search and filter projects by track and cohort

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Main navigation bar
│   ├── PrivateRoute.jsx # Route protection component
│   ├── ProjectCard.jsx  # Project preview card
│   └── ProjectFilters.jsx # Search and filter controls
├── pages/              # Main application pages
│   ├── Dashboard.jsx   # Project listing and management
│   ├── Home.jsx        # Landing page
│   ├── Login.jsx       # User login
│   ├── NewProject.jsx  # Project creation form
│   ├── ProjectDetails.jsx # Detailed project view
│   └── Register.jsx    # User registration
├── store/              # Redux state management
│   ├── slices/         # Redux toolkit slices
│   │   ├── authSlice.js    # Authentication state
│   │   ├── projectsSlice.js # Projects state
│   │   └── cohortsSlice.js  # Cohorts state
│   └── index.js        # Store configuration
└── api/                # API integration
    └── index.js        # API client and endpoints
```

## Component Details

### Core Components

1. **Navbar (`components/Navbar.jsx`)**
   - Main navigation component
   - Displays user authentication status
   - Role-specific navigation options

2. **PrivateRoute (`components/PrivateRoute.jsx`)**
   - Protects routes requiring authentication
   - Redirects unauthenticated users to login

3. **ProjectCard (`components/ProjectCard.jsx`)**
   - Displays project preview information
   - Links to detailed project view
   - Shows project metadata (track, members, etc.)

4. **ProjectFilters (`components/ProjectFilters.jsx`)**
   - Search projects by name/description
   - Filter by track and cohort
   - Real-time filtering implementation

### Pages

1. **Home (`pages/Home.jsx`)**
   - Landing page with feature showcase
   - Call-to-action for registration/login

2. **Dashboard (`pages/Dashboard.jsx`)**
   - Main project listing page
   - Project filtering and search
   - Add new project button for students

3. **ProjectDetails (`pages/ProjectDetails.jsx`)**
   - Detailed project information
   - Team member management
   - Project deletion (admin/owner only)

4. **Login/Register (`pages/Login.jsx`, `pages/Register.jsx`)**
   - User authentication forms
   - Role selection (student/admin)
   - Cohort selection for students

## State Management

- Uses Redux Toolkit for state management
- Separate slices for authentication, projects, and cohorts
- Centralized store configuration

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/project-bank-system.git
   cd project-bank-system
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Backend Setup

1. Install Python dependencies:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. Initialize the database:
   ```bash
   python init_db.py
   ```

3. Start the Flask server:
   ```bash
   python app.py
   ```

## Usage

### Student Role
- Can view all projects
- Create new projects
- Add members to owned projects
- Delete owned projects

### Admin Role
- Can view all projects
- Delete any project
- Manage system-wide settings

## Test Accounts

```
Student Account:
Email: john@example.com
Password: password123

Admin Account:
Email: admin@example.com
Password: admin123
```

## API Endpoints

- `POST /api/auth/login` - User login
- `POST /api/auth/register` - User registration
- `GET /api/projects` - List all projects
- `POST /api/projects` - Create new project
- `GET /api/projects/:id` - Get project details
- `DELETE /api/projects/:id` - Delete project
- `GET /api/cohorts` - List all cohorts

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details