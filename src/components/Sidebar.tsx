import menuItems from "../constants/menuItems.ts";
import { NavLink } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-64 bg-[#FFFFFF] text-[#000000] h-full rounded-tr-2xl rounded-br-2xl">
      {/* Sidebar Links */}
      <ul className="mt-4 space-y-4">
        {menuItems.map((item) => (
          <li key={item.id}>
            <NavLink
              to={`/${item.id}`}
              className={({ isActive }) => {
                const activeClass = isActive
                  ? "bg-[#D2F7FF]"
                  : "hover:bg-[#F0F4F8]";
                return `px-4 py-2 flex items-center gap-2 rounded-md ${activeClass}`;
              }}
            >
              {({ isActive }) => (
                <>
                  <img
                    src={
                      isActive ? item.icons.selected : item.icons.notSelected
                    }
                  />
                  {item.label}
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
