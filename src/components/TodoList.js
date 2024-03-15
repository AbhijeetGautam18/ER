import React, { useState } from 'react';
import './TodoList.css';

const TodoList = () => {
  // State for storing tasks and new task input
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Order raw materials', completed: false },
    { id: 2, text: 'Meeting with client at 2pm', completed: false },
    { id: 3, text: 'Team meeting 4pm', completed: false },
    { id: 4, text: 'New project discussion', completed: false }
  ]);
  const [newTask, setNewTask] = useState('');

  // Function to add a new task
  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      const newTaskItem = {
        id: tasks.length + 1,
        text: newTask,
        completed: false
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask('');
    }
  };

  // Function to handle checkbox state change
  const handleCheckboxChange = (taskId) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="todo-list-container">
      <h2>Todo List</h2>
      <div className="tasks">
        {tasks.map(task => (
          <div key={task.id} className="task">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(task.id)}
            />
            <label className={task.completed ? 'completed' : ''}>{task.text}</label>
          </div>
        ))}
      </div>
      <br />
      <div className="add-task">
        <input
          type="text"
          placeholder="Add new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TodoList;
