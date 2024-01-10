import React, { useState } from "react";

const TodoForm = ({addTaskList}) => {
  const [taskText, setTaskText] = useState("");

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addTaskList(taskText);

    setTaskText("");


  }

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

export default TodoForm;
