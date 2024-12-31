//localStorage.clear()
const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "firstName": "div",
    "tasks": [
      {
        "active": 1,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Report",
        "taskDescription": "Prepare the monthly financial report.",
        "taskDate": "2024-12-31",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Client Meeting",
        "taskDescription": "Attend the meeting with client ABC.",
        "taskDate": "2024-12-29",
        "category": "Business"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "System Upgrade",
        "taskDescription": "Complete the upgrade of the internal systems.",
        "taskDate": "2024-12-28",
        "category": "IT"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "firstName": "Employee2",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Marketing Plan",
        "taskDescription": "Draft the marketing strategy for the upcoming product.",
        "taskDate": "2024-12-31",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Social Media Campaign",
        "taskDescription": "Launch the holiday social media campaign.",
        "taskDate": "2024-12-30",
        "category": "Social Media"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "firstName": "Employee3",
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Code Review",
        "taskDescription": "Review the codebase for the new feature.",
        "taskDate": "2024-12-28",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Bugs",
        "taskDescription": "Fix critical bugs in the current release.",
        "taskDate": "2024-12-31",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Documentation",
        "taskDescription": "Update the user manual for the new product.",
        "taskDate": "2024-12-29",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "firstName": "Employee4",
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Inventory Check",
        "taskDescription": "Conduct a full inventory check.",
        "taskDate": "2024-12-31",
        "category": "Logistics"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Order Supplies",
        "taskDescription": "Order necessary office supplies for Q1.",
        "taskDate": "2024-12-30",
        "category": "Procurement"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "firstName": "Employee5",
    "tasks": [
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Employee Onboarding",
        "taskDescription": "Prepare for the new employee onboarding session.",
        "taskDate": "2024-12-30",
        "category": "HR"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team Meeting",
        "taskDescription": "Facilitate the end-of-year team meeting.",
        "taskDate": "2024-12-28",
        "category": "Management"
      }
    ]
  }
]


  
  const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];
  
  export const setLocalStorage=()=>{
localStorage.setItem('employees',JSON.stringify(employees))
localStorage.setItem('admin',JSON.stringify(admin))
  }
  export const getLocalStorage=()=>{
  const employees= JSON.parse( localStorage.getItem('employees'))
  const admin= JSON.parse( localStorage.getItem('admin'))
  return {employees,admin}
  }