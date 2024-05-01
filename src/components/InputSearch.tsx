import React, { useEffect, useState } from "react";

import debounce from "lodash.debounce";
import axios from "axios";
import endPoints from "@/services";
import { Result, Status } from "../interfaces/CharactersInterface";
import Card from "@/components/Card";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const InputSearch = () => {
  const [searchTerm, setsearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  ////HANDLE SEARCH INPUT
  const handleSearch = debounce(async () => {
    try {
      if (!searchTerm) {
        setSearchResults([]);
        return;
      }
      const response = await axios.get(endPoints.search(searchTerm));
      setSearchResults(response.data.results);
    } catch (error: any) {
      console.log(error.response.status);
      if (error.response.status === 404) {
        setSearchResults([]);
        return toast("sin resultados");
      }
    }
  }, 500);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  return (
    <>
      <ToastContainer />
      <div
        style={{ marginRight: "40%", marginLeft: "10%", width: "min-content" }}
      >
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setsearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-4 h-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: "10px",
          padding: "10px",
          justifyContent: "center",
          width: "100%",
          backgroundColor: "RGBA(89,156,175,0.1)",
        }}
      >
        {searchResults.length > 0 &&
          searchResults.map((result: Result) => {
            return <Card key={result.id} {...result} />;
          })}
      </div>
    </>
  );
};

export default InputSearch;
