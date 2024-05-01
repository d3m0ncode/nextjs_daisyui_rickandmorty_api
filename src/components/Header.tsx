import React from "react";
import Theme from "./Theme";

const Header = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">rickandmortyapi</a>
      </div>
      <div className="flex-none">
        <Theme />
      </div>
    </div>
  );
};

export default Header;
