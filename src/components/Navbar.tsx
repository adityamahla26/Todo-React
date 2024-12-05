import React from "react";

const Navbar = () => {
  return (
    <div className=" flex flex-row justify-between bg-[#FFFFFF] pb-2">
      <h2 className="text-2xl font-normal py-4 bg-[#0ACBF5] max-w-fit rounded-tr-full rounded-br-full mt-2 whitespace-nowrap flex justify-start pl-5 pr-5">
        My&nbsp;<span className="text-[#FFFFFF]"> todo</span>
      </h2>
      <button className="text-2xl font-normal py-4 bg-[#0ACBF5] max-w-fit rounded-tl-full rounded-bl-full mt-2 whitespace-nowrap flex justify-start pl-5 pr-5">
        Sign-in
      </button>
    </div>
  );
};

export default Navbar;
