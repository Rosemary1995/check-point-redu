import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Task from './Task';
import { filterTasks } from './actions';

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'done') return task.isDone;
    if (filter === 'not_done') return !task.isDone;
    return true;
  });

  return (
    <div>
      <div>
        <button onClick={() => dispatch(filterTasks('all'))}>All</button>
        <button onClick={() => dispatch(filterTasks('done'))}>Done</button>
        <button onClick={() => dispatch(filterTasks('not_done'))}>Not Done</button>
      </div>
      <div>
        {filteredTasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default ListTask;
