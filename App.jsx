import React, { useState, useEffect, useContext } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashBoard from './components/Dashboard/EmployeeDashBoard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { AuthContext } from './context/Authprovider';

const App = () => {
  const [user, setUser] = useState(null); // State to manage logged-in user role
  const [loggedInUser, setLoggedInUser] = useState(null); // State to manage logged-in user data

  const authdata = useContext(AuthContext);

  useEffect(() => {
    // Check if there's a logged-in user in localStorage when the page loads
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role); // Set the user role (admin or employee)
      setLoggedInUser(userData.data); // Set the employee data (if logged in as an employee)
    }
  }, []); // Empty dependency array ensures this runs once on initial load

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      // Admin login logic
      setUser('admin');
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
      console.log('Logged in as Admin');
    } else if (authdata) {
      // Employee login logic
      const employee = authdata.employees.find(
        (e) => e.email === email && e.password === password
      );
      if (employee) {
        setUser('employee');
        setLoggedInUser(employee);
        localStorage.setItem(
          'loggedInUser',
          JSON.stringify({ role: 'employee', data: employee })
        );
        console.log('Logged in as Employee');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  const handleLogout = () => {
    // Clear user data from state and localStorage
    setUser(null);
    setLoggedInUser(null);
    localStorage.removeItem('loggedInUser');
  };

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard handleLogout={handleLogout} changeUser={setUser}/>
      ) : (
        <EmployeeDashBoard handleLogout={handleLogout} data={loggedInUser}  changeUser={setUser}/>
      )}
    </>
  );
};

export default App;
