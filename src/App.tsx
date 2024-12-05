import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import ListToDos from "./routes/ListToDos";
import PendingToDos from "./routes/PendingToDos";
import CompletedToDos from "./routes/CompletedToDos";
const App = () => (
  <Router>
    <section className="bg-gradient-to-br from-[#EFFCFF] to-[#D2F7FF] text-black ma-regular flex flex-col h-screen overflow-hidden ">
      <Navbar />
      <section className="flex flex-row h-full w-full">
        <Sidebar />
        <main className="flex-1 p-20 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/list-of-todos" element={<ListToDos />}></Route>
            <Route path="/pending-todos" element={<PendingToDos />}></Route>
            <Route path="/completed-todos" element={<CompletedToDos />}></Route>
          </Routes>
        </main>
      </section>
    </section>
  </Router>
);

export default App;
