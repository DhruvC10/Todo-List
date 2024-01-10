import React, { useState } from "react";

const TodoEdit = ({ editTaskText, task }) => {
  const [taskText, setTaskText] = useState(task.task);

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    editTaskText(taskText, task.id);

    setTaskText("");
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Kaam Karlo Ab !!"
        value={taskText}
        onChange={handleChange}
      />
      <button type="submit" className="todo-btn">
        Add task
      </button>
    </form>
  );
};

export default TodoEdit;
