import { useState,
         useEffect } from "react";

import axios from "axios";

import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {

  const [tasks,
    setTasks] =
    useState([]);

  const [statusFilter,
    setStatusFilter] =
    useState("All");

  const [priorityFilter,
    setPriorityFilter] =
    useState("All");

  useEffect(() => {

    fetchTasks();

  }, []);

  const fetchTasks =
    async () => {

      const response =
        await axios.get(
          "http://127.0.0.1:8000/api/tasks/"
        );

      setTasks(
        response.data
      );
    };

  const addTask =
    async (task) => {

      await axios.post(
        "http://127.0.0.1:8000/api/tasks/",
        task
      );

      fetchTasks();
    };

  const toggleTask =
    async (task) => {

      await axios.put(
        `http://127.0.0.1:8000/api/tasks/${task.id}/`,
        {

          ...task,
          completed:
            !task.completed
        }
      );

      fetchTasks();
    };

  const deleteTask =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this task?"
        );

      if (!confirmDelete)
        return;

      await axios.delete(
        `http://127.0.0.1:8000/api/tasks/${id}/`
      );

      fetchTasks();
    };

  const filteredTasks =
    tasks.filter(task => {

      let statusMatch =
        true;

      let priorityMatch =
        true;

      if (
        statusFilter ===
        "Pending"
      ) {

        statusMatch =
          !task.completed;
      }

      if (
        statusFilter ===
        "Done"
      ) {

        statusMatch =
          task.completed;
      }

      if (
        priorityFilter !==
        "All"
      ) {

        priorityMatch =
          task.priority ===
          priorityFilter;
      }

      return (
        statusMatch &&
        priorityMatch
      );
    });

  const pendingCount =
    tasks.filter(
      t => !t.completed
    ).length;

  const doneCount =
    tasks.filter(
      t => t.completed
    ).length;

  return (

    <div>

      <Navbar />

      <Dashboard
        pendingCount={pendingCount}
        doneCount={doneCount}
      />

      <TaskForm
        addTask={addTask}
      />

      <div
        className="filters"
      >

        <select
          onChange={(e)=>
            setStatusFilter(
              e.target.value
            )
          }
        >

          <option>
            All
          </option>

          <option>
            Pending
          </option>

          <option>
            Done
          </option>

        </select>

        <select
          onChange={(e)=>
            setPriorityFilter(
              e.target.value
            )
          }
        >

          <option>
            All
          </option>

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

      </div>

      <TaskList
        tasks={filteredTasks}
        toggleTask={
          toggleTask
        }
        deleteTask={
          deleteTask
        }
      />

    </div>

  );
}

export default App;