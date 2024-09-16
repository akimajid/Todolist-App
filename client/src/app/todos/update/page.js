import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { fetchTodoById, updateTodo } from "../../utils/api";

const UpdateTodo = () => {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (id) {
      const loadTodo = async () => {
        const { data } = await fetchTodoById(id);
        setTitle(data.title);
        setDescription(data.description);
      };

      loadTodo();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTodo(id, { title, description });
    router.push("/todos");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Update Todo</h1>
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
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateTodo;
