// src/components/UserForm.js
import React, { useState } from 'react';
import './UserForm.css'; // Import the CSS file

const UserForm = ({ onSave, onCancel, user }) => {
  const [formData, setFormData] = useState({ ...user });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
      </label>
      <label>
        Role:
        <select name="role" value={formData.role} onChange={handleChange}>
          <option value="Administrator">Administrator</option>
          <option value="Support">Support</option>
          <option value="Assistant">Assistant</option>
        </select>
      </label>
      <label>
        Position:
        <select name="position" value={formData.position} onChange={handleChange}>
          <option value="Auditor">Auditor</option>
          <option value="Developer">Developer</option>
          <option value="Manager">Manager</option>
        </select>
      </label>
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
      <button type="button" onClick={onCancel}>
        Cancel
      </button>
    </form>
  );
};

export default UserForm;
