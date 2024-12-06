import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ListToDos from "./routes/ListToDos";
import PendingToDos from "./routes/PendingToDos";
import CompletedToDos from "./routes/CompletedToDos";
import { useState } from "react";
import { ToDoFormValues } from "./schemas/toDoSchema";
const App = () => {
  const [todos, setTodos] = useState<ToDoFormValues[]>([]);

  const addTodo = (newTodo: ToDoFormValues): void => {
    const todoWithCompleted = { ...newTodo, completed: false }; // Ensure completed is set
    setTodos((prevTodos) => [...prevTodos, todoWithCompleted]);
  };

  const editTodo = (index: number): void => {
    const updatedTodos = [...todos];
    const newTitle =
      prompt("Edit Title:", updatedTodos[index].title) ??
      updatedTodos[index].title; // Use nullish coalescing
    updatedTodos[index].title = newTitle;
    setTodos(updatedTodos);
  };

  const completeTodo = (index: number) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  return (
    <Router>
      <section className="bg-gradient-to-br from-[#EFFCFF] to-[#D2F7FF] text-black ma-regular flex flex-col h-screen overflow-hidden ">
        <Navbar />
        <section className="flex flex-row h-full w-full">
          <Sidebar />
          <main className="flex-1 py-28 px-10 overflow-auto">
            <Routes>
              <Route path="/" element={<Home addTodo={addTodo} />}></Route>
              <Route
                path="/list-of-todos"
                element={
                  <ListToDos
                    todos={todos}
                    onEdit={editTodo}
                    onComplete={completeTodo}
                  />
                }
              ></Route>
              <Route path="/pending-todos" element={<PendingToDos />}></Route>
              <Route
                path="/completed-todos"
                element={<CompletedToDos />}
              ></Route>
            </Routes>
          </main>
        </section>
      </section>
    </Router>
  );
};

export default App;
