import React from "react";
import { ToDoFormValues } from "../schemas/toDoSchema";
interface ListToDosProps {
  todos: ToDoFormValues[];
  onEdit: (index: number) => void;
  onComplete: (index: number) => void;
}
const ListToDos: React.FC<ListToDosProps> = ({ todos, onEdit, onComplete }) => {
  return (
    <div className="flex justify-center items-center p-3">
      <div className="bg-white px-10 py-10 rounded-xl border shadow-lg w-full max-w-6xl">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Todos</h2>
        <p className="text-gray-500 mb-6">Below lists of todos</p>
        <table className="w-full border-separate border-spacing-4">
          <thead>
            <tr>
              <th className="p-1 text-left">Title</th>
              <th className="p-1 text-left">Description</th>
              <th className="p-1 text-left">Priority</th>
              <th className="p-1 text-left">Category</th>
              <th className="p-1 text-left">Edit</th>
              <th className="p-1 text-left">Completed</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => (
              <tr key={index}>
                <td className="border border-gray-300 rounded-lg">
                  <input
                    type="text"
                    value={todo.title}
                    readOnly
                    className="w-full border-none text-start px-2"
                  />
                </td>
                <td className="border border-gray-300 p-2 rounded-lg">
                  <input
                    type="text"
                    value={todo.description}
                    readOnly
                    className="w-full border-none text-start px-2"
                  />
                </td>
                <td className="border border-gray-300 p-2 rounded-lg m-2">
                  <select
                    value={todo.priority}
                    disabled={true}
                    className="w-full border-none"
                  >
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </td>
                <td className="border border-gray-300 p-2 rounded-lg">
                  <select
                    value={todo.category}
                    disabled={true}
                    className="w-full border-none"
                  >
                    <option>Personal</option>
                    <option>Work</option>
                    <option>Study</option>
                  </select>
                </td>
                <td className="text-center">
                  <button onClick={() => onEdit(index)}>✏️</button>
                </td>
                <td className="text-center">
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onComplete(index)}
                    className="cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListToDos;
