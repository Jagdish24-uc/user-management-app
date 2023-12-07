// src/App.js
import React, { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import User from './models/User';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  const handleSave = (formData) => {
    if (editingUser) {
      // Edit existing user
      setUsers((prevUsers) =>
        prevUsers.map((user) => (user.id === editingUser.id ? { ...user, ...formData } : user))
      );
      setEditingUser(null);
    } else {
      // Create new user
      setUsers((prevUsers) => [...prevUsers, new User(Date.now(), ...Object.values(formData))]);
    }
  };

  const handleDelete = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  const handleCancelEdit = () => {
    setEditingUser(null);
  };

  return (
    <div>
      <UserForm onSave={handleSave} onCancel={handleCancelEdit} user={editingUser || {}} />
      <UserList users={users} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default App;
