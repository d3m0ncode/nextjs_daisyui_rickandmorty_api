import React from "react";

const Theme = () => {
  return (
    <div className="flex-1">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn m-1">
          THEME
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <input
              type="radio"
              name="theme"
              id="light"
              value="light"
              aria-label="light"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            />
          </li>

          <li>
            <input
              type="radio"
              name="theme"
              id="luxury"
              value="luxury"
              aria-label="luxury"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            />
          </li>

          <li>
            <input
              type="radio"
              name="theme"
              id="aqua"
              value="aqua"
              aria-label="aqua"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Theme;
