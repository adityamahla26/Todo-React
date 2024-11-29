import React from "react";

const Sidebar = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#FFFFFF] text-[#000000] h-screen">
        <h2 className="text-2xl font-normal py-4 bg-[#0ACBF5] w-[60%] rounded-tr-full rounded-br-full mt-2 whitespace-nowrap flex justify-start pl-5">
          my&nbsp;<span className="text-[#FFFFFF]"> todo</span>
        </h2>

        {/* Sidebar Links */}
        <ul className="mt-4 space-y-4">
          <li>
            <a
              href="#home"
              className="block px-4 py-2 hover:bg-blue-700 rounded-md"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#list-of-todos"
              className="block px-4 py-2 hover:bg-blue-700 rounded-md"
            >
              Lists of Todos
            </a>
          </li>
          <li>
            <a
              href="#pending-todos"
              className="block px-4 py-2 hover:bg-blue-700 rounded-md"
            >
              Pending Todos
            </a>
          </li>
          <li>
            <a
              href="#completed-todos"
              className="block px-4 py-2 hover:bg-blue-700 rounded-md"
            >
              Completed Todos
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-[#D2F7FF]">
        <h1 className="text-2xl font-bold">Main content</h1>
      </div>
    </div>
  );
};

export default Sidebar;
