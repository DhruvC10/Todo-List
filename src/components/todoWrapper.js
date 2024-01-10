import React, { useState } from "react";
import TodoForm from "./todoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./todo";
import TodoEdit from "./todoEdit";
uuidv4();

const TodoWrapper = () => {
  const [taskList, setTaskList] = useState([]);

  const addTaskList = (task) => {
    if (!task.length) return;
    const newTaskList = taskList.slice();

    newTaskList.push({
      id: uuidv4(),
      task: task,
      isCompleted: false,
      isEditing: false,
    });
    setTaskList(newTaskList);
  };

  const handleToggleComplete = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        } else {
          return task;
        }
      })
    );
  };

  const handleDeleteTask = (id) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const handleEditTask = (id) => {
    setTaskList(
      taskList.map((task) => {
        if (task.id === id) {
          return { ...task, isEditing: !task.isCompleted };
        } else {
          return task;
        }
      })
    );
  };

  const editTaskText = (taskText, id) => {
    setTaskList(
      taskList.map((task) =>
        task.id === id
          ? {
              ...task,
              task: taskText,
              isEditing: !task.isEditing,
            }
          : task
      )
    );
  };
  return (
    <div className="TodoWrapper">
      <h1>Tumhare Pending Kaam</h1>
      <TodoForm addTaskList={addTaskList} />
      {taskList.map((task, index) =>
        task.isEditing ? (
          <TodoEdit editTaskText={editTaskText} task={task} key={task.id} />
        ) : (
          <Todo
            task={task}
            key={task.id}
            toggleComplete={handleToggleComplete}
            deleteTask={handleDeleteTask}
            editTask={handleEditTask}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
