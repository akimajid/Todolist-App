"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchTodoById, updateTodo } from "../../../../utils/api"; // Assumes fetchTodoById and updateTodo are defined
import moment from "moment";

const UpdateTodo = ({ params }) => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    status: "Pending",
    dueDate: "",
  });
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { id } = params;

  useEffect(() => {
    const loadTodo = async () => {
      try {
        const { data } = await fetchTodoById(id); // Fetch todo details by id
        setTodo({
          title: data.title,
          description: data.description,
          status: data.status,
          dueDate: moment(data.dueDate).format("YYYY-MM-DD"), // Format date for input
        });
      } catch (error) {
        console.error("Failed to fetch todo:", error);
      } finally {
        setLoading(false);
      }
    };

    loadTodo();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateTodo(id, todo); // Update the todo in the backend
      router.push("/todos"); // Redirect to todos list
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form
        className="bg-white p-6 rounded shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-2xl font-bold mb-4">Update Todo</h1>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="title">
            Title
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            type="text"
            id="title"
            name="title"
            value={todo.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            id="description"
            name="description"
            value={todo.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="status">
            Status
          </label>
          <select
            className="w-full border border-gray-300 p-2 rounded"
            id="status"
            name="status"
            value={todo.status}
            onChange={handleChange}
            required
          >
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="dueDate">
            Due Date
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded"
            type="date"
            id="dueDate"
            name="dueDate"
            value={todo.dueDate}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-[#02939e] hover:bg-white hover:text-[#02939e] hover:border hover:border-[#02939e] font-semibold py-2 px-4 mt-4 rounded-md transition-colors duration-300"
        >
          Update Todo
        </button>
      </form>
    </div>
  );
};

export default UpdateTodo;
