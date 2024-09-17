"use client";

import { useEffect, useState } from "react";
import { fetchTodos, deleteTodo } from "../../utils/api";
import TodoItem from "../../components/TodoItem";
import { useRouter } from "next/navigation";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const loadTodos = async () => {
      try {
        const { data } = await fetchTodos();
        setTodos(data);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
        router.push("/auth/login");
      } finally {
        setLoading(false);
      }
    };

    loadTodos();
  }, [router]);

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
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
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold my-6">Todos List</h1>
        {todos.length === 0 ? (
          <div className="flex justify-center items-center h-full py-20">
            <p className="text-gray-500 text-lg italic">No todos available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Todos;
