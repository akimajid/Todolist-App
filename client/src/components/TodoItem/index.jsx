import { useEffect, useState } from "react";
import moment from "moment";
import { useRouter } from "next/navigation";

const TodoItem = ({ todo, onDelete }) => {
  const [timeLeft, setTimeLeft] = useState("");
  const router = useRouter();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = moment();
      const due = moment(todo.dueDate);
      const diff = due.diff(now, "days");
      setTimeLeft(diff > 0 ? `${diff} days left` : "Past due");
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 60000); // Update countdown every minute
    return () => clearInterval(interval);
  }, [todo.dueDate]);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "text-green-500";
      case "In Progress":
        return "text-yellow-500";
      case "Pending":
        return "text-gray-500";
      default:
        return "text-red-500";
    }
  };

  const handleUpdate = () => {
    router.push(`/todos/${todo.id}/update`); // Redirect to update page
  };

  return (
    <div className="bg-white shadow p-3 rounded-lg mb-3 text-sm">
      <h2 className="text-lg font-semibold">{todo.title}</h2>
      <p className="text-gray-600 truncate">{todo.description}</p>
      <p className={`mt-1 ${getStatusColor(todo.status)}`}>
        Status: {todo.status}
      </p>
      <p className="mt-1 text-blue-500">Due: {timeLeft}</p>
      <div className="mt-2 flex space-x-2">
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
        <button
          className="bg-[#02939e] text-white px-3 py-1 rounded"
          onClick={handleUpdate}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
