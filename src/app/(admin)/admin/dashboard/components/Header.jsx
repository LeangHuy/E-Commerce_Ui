import { Bell } from "lucide-react";
import React from "react";
import DropdownHeader from "./DropdownHeader";

const Header = ({ tab }) => {
  return (
    <div className="header px-5 py-4 sticky top-0 bg-white z-10 border-l">
      <header className="flex justify-between items-center">
        <p className="text-2xl font-semibold text-gray-800">{tab}</p>
        <div className="flex gap-4 items-center">
          <div className="size-[35px] bg-gray-100 cursor-pointer rounded-lg flex items-center justify-center">
            <Bell className="size-[18px]" />
          </div>
          <DropdownHeader />
        </div>
      </header>
    </div>
  );
};

export default Header;
