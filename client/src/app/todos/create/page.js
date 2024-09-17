"use client";

import { useState } from "react";
import { createTodo } from "../../../utils/api";
import { useRouter } from "next/navigation";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTodo({ title, description, dueDate });
    setTitle("");
    setDescription("");
    setDueDate("");

    router.push("/todos");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-lg p-6">
        <h1 className="text-2xl font-semibold mb-6 text-center">
          Create New Todo
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2" htmlFor="title">
              Title
            </label>
            <input
              id="title"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter title"
              required
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="mb-5">
            <label className="block text-sm font-medium mb-2" htmlFor="dueDate">
              Due Date
            </label>
            <input
              id="dueDate"
              type="date"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
            />
          </div>
          <button
            className="w-full text-white bg-[#02939e] hover:bg-white hover:text-[#02939e] hover:border hover:border-[#02939e] font-semibold py-2 px-4 mt-4 rounded-md transition-colors duration-300"
            type="submit"
          >
            Create Todo
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
