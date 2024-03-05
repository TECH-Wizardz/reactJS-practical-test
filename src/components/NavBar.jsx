import React from "react";
import { Link } from "react-router-dom";
import ButtonLg from "./UI/ButtonLg";

function NavBar() {
  return (
    <div className="w-full bg-blue-color py-2">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <p className="font-bold px-3 text-lg text-white">Hobby Tracker</p>

        <div className="flex gap-4">
          <Link to="/users">
            <ButtonLg title="Users" />
          </Link>
          <Link to="/hobbies">
            <ButtonLg title="Hobbies" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
