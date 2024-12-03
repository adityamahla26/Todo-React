import { useState } from "react";
import menuItems from "../constants/menuItems.ts";
const Sidebar = () => {
  const [selected, setSelected] = useState("home");
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-[#FFFFFF] text-[#000000] h-screen">
        <h2 className="text-2xl font-normal py-4 bg-[#0ACBF5] w-[60%] rounded-tr-full rounded-br-full mt-2 whitespace-nowrap flex justify-start pl-5">
          My&nbsp;<span className="text-[#FFFFFF]"> todo</span>
        </h2>

        {/* Sidebar Links */}
        <ul className="mt-4 space-y-4">
          {menuItems.map((item) => (
            <li key={item.id} onClick={() => setSelected(item.id)}>
              <a
                href={`#${item.id}`}
                className="px-4 py-2 flex items-center gap-2"
              >
                <img
                  src={
                    selected === item.id
                      ? item.icons.selected
                      : item.icons.notSelected
                  }
                  alt={`${item.label} Icon`}
                />
                {item.label}
              </a>
            </li>
          ))}
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
