import React from 'react';

function BugItem({ bug, onUpdate, onDelete }) {
  const handleStatusChange = (e) => {
    onUpdate(bug._id, { status: e.target.value });
  };

  return (
    <li>
      <strong>{bug.title}</strong> - {bug.description} <br />
      Status:
      <select value={bug.status} onChange={handleStatusChange}>
        <option value="open">Open</option>
        <option value="in-progress">In Progress</option>
        <option value="resolved">Resolved</option>
      </select>
      <button onClick={() => onDelete(bug._id)}>Delete</button>
    </li>
  );
}

export default BugItem;
