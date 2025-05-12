const employees ={
  "admin": {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  },
  "employees": [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Submit Report",
          "description": "Submit the weekly performance report to the manager.",
          "date": "2025-05-10",
          "category": "Reporting",
          "active": true,
          "newtask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Code Review",
          "description": "Review code submitted by the junior developer.",
          "date": "2025-05-11",
          "category": "Development",
          "active": false,
          "newtask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Team Meeting",
          "description": "Participate in the sprint planning meeting.",
          "date": "2025-05-12",
          "category": "Meeting",
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Database Backup",
          "description": "Perform a full backup of the project database.",
          "date": "2025-05-09",
          "category": "Maintenance",
          "active": false,
          "newtask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Deploy Feature",
          "description": "Deploy the new login feature to production.",
          "date": "2025-05-10",
          "category": "Deployment",
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Bug Fixing",
          "description": "Fix urgent bugs in the billing module.",
          "date": "2025-05-11",
          "category": "Bugfix",
          "active": true,
          "newtask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Code Optimization",
          "description": "Optimize API response time.",
          "date": "2025-05-12",
          "category": "Development",
          "active": false,
          "newtask": false,
          "completed": true,
          "failed": false
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Client Presentation",
          "description": "Prepare a presentation for the new client demo.",
          "date": "2025-05-08",
          "category": "Presentation",
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Survey Analysis",
          "description": "Analyze feedback survey data.",
          "date": "2025-05-07",
          "category": "Analysis",
          "active": false,
          "newtask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Update Docs",
          "description": "Update API documentation for the finance module.",
          "date": "2025-05-06",
          "category": "Documentation",
          "active": false,
          "newtask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "Security Audit",
          "description": "Conduct internal security audit.",
          "date": "2025-05-12",
          "category": "Security",
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Mentorship",
          "description": "Mentor two interns on project workflows.",
          "date": "2025-05-10",
          "category": "HR",
          "active": false,
          "newtask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Testing",
          "description": "Run automated test suite for the current release.",
          "date": "2025-05-09",
          "category": "Testing",
          "active": true,
          "newtask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "Onboarding",
          "description": "Help onboard a new team member.",
          "date": "2025-05-11",
          "category": "HR",
          "active": false,
          "newtask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "title": "UI Design",
          "description": "Create mockups for the new dashboard.",
          "date": "2025-05-10",
          "category": "Design",
          "active": true,
          "newtask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Accessibility Check",
          "description": "Ensure accessibility compliance on homepage.",
          "date": "2025-05-09",
          "category": "Compliance",
          "active": false,
          "newtask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Refactoring",
          "description": "Refactor legacy components for better performance.",
          "date": "2025-05-08",
          "category": "Development",
          "active": true,
          "newtask": false,
          "completed": false,
          "failed": false
        },
        {
          "title": "KPI Setup",
          "description": "Set up KPIs for Q2 objectives.",
          "date": "2025-05-07",
          "category": "Management",
          "active": false,
          "newtask": false,
          "completed": false,
          "failed": true
        },
        {
          "title": "Weekly Report",
          "description": "Send team performance report to the admin.",
          "date": "2025-05-06",
          "category": "Reporting",
          "active": false,
          "newtask": false,
          "completed": true,
          "failed": false
        }
      ]
    }
  ]
}

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees= JSON.parse(localStorage.getItem('employees'))
    const admin= JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
}

