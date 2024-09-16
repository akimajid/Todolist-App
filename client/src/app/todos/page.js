"use client"

import { useEffect, useState } from "react";
import { fetchTodos, deleteTodo } from "../../utils/api";
import Footer from "../../components/Footer";
import TodoItem from "../../components/TodoItem";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const loadTodos = async () => {
      const { data } = await fetchTodos();
      setTodos(data);
    };

    loadTodos();
  }, []);

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Todos List</h1>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Todos;
