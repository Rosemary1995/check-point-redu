import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, toggleTask } from './actions';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newDescription, setNewDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEditTask = () => {
    if (newDescription.trim()) {
      dispatch(editTask(task.id, newDescription));
      setIsEditing(false);
    }
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEditTask}>Save</button>
        </div>
      ) : (
        <div>
          <span
            style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}
            onClick={() => dispatch(toggleTask(task.id))}
          >
            {task.description}
          </span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Task;
