"use client"

import { useState } from "react";
import { createTodo } from "../../../utils/api";

const CreateTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTodo({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Create New Todo</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block">Title</label>
          <input
            className="w-full p-2 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Description</label>
          <textarea
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <button className="bg-blue-500 text-white p-2 rounded" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
