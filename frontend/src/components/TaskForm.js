import { useState } from "react";

function TaskForm({
  addTask
}) {

  const [title, setTitle] =
    useState("");

  const [description,
    setDescription] =
    useState("");

  const [dueDate,
    setDueDate] =
    useState("");

  const [priority,
    setPriority] =
    useState("Low");

  const handleSubmit =
    (e) => {

      e.preventDefault();

      addTask({
        title,
        description,
        due_date: dueDate,
        priority,
        completed: false
      });

      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("Low");
    };

  return (

    <form
      onSubmit={handleSubmit}
    >

      <input
        placeholder="Title"
        value={title}
        onChange={(e)=>
          setTitle(
            e.target.value
          )
        }
        required
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e)=>
          setDescription(
            e.target.value
          )
        }
      />

      <input
        type="date"
        value={dueDate}
        onChange={(e)=>
          setDueDate(
            e.target.value
          )
        }
      />

      <select
        value={priority}
        onChange={(e)=>
          setPriority(
            e.target.value
          )
        }
      >
        <option>
          Low
        </option>

        <option>
          Medium
        </option>

        <option>
          High
        </option>

      </select>

      <button>
        Add Task
      </button>

    </form>
  );
}

export default TaskForm;