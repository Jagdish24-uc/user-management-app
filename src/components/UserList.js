// src/components/UserList.js
import React from 'react';
import './UserList.css'; // Import the CSS file

const UserList = ({ users, onDelete, onEdit }) => {
  return (
    <div>
      <h2>User List</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>{user.position}</td>
              <td>
                <button onClick={() => onEdit(user)}>Edit</button>
                <button onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
