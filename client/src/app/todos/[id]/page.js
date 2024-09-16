"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchTodoById } from "../../utils/api";

const TodoDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    if (id) {
      const loadTodo = async () => {
        const { data } = await fetchTodoById(id);
        setTodo(data);
      };

      loadTodo();
    }
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {todo ? (
        <div>
          <h1 className="text-2xl font-bold">{todo.title}</h1>
          <p>{todo.description}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TodoDetail;
