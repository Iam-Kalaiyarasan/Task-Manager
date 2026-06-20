function TaskList({
  tasks,
  toggleTask,
  deleteTask
}) {

  return (

    <div>

      {tasks.map((task) => (

        <div
          className="task-card"
          key={task.id}
        >

          <div>

            <h3>
              {task.title}
            </h3>

            <p>
              {task.description}
            </p>

            <p>
              Due:
              {task.due_date || "No Date"}
            </p>

            <p>
              Priority:
              {task.priority}
            </p>

          </div>

          <div>

            <button
              onClick={() =>
                toggleTask(task)
              }
            >
              {
                task.completed
                  ? "Undo"
                  : "Done"
              }
            </button>

            <button
              onClick={() =>
                deleteTask(task.id)
              }
            >
              Delete
            </button>

          </div>

        </div>

      ))}

    </div>

  );
}

export default TaskList;