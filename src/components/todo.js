import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task, toggleComplete, deleteTask, editTask }) => {
  return (
    <div className="Todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.isCompleted ? "completed" : ""}`}
      >
        {task.task}
      </p>
      <div className="edit-task">
        <FontAwesomeIcon
          onClick={() => editTask(task.id)}
          icon={faPenToSquare}
        />

        <FontAwesomeIcon onClick={() => deleteTask(task.id)} icon={faTrash} />
      </div>
    </div>
  );
};

export default Todo;
