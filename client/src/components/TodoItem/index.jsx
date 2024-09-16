const TodoItem = ({ todo, onDelete }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-4">
      <h2 className="text-xl font-bold">{todo.title}</h2>
      <p>{todo.description}</p>
      <div className="mt-2">
        <button
          className="bg-red-500 text-white p-2 rounded"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
