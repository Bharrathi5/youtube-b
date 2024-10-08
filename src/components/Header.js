import React, { useEffect, useState } from "react";
import youtube_logo from "../images/youtube_logo.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../utils/sidebarSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { IoIosSearch } from "react-icons/io";
import { cacheResult } from "../utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggestion] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const dispatch = useDispatch();

  const cacheSuggestion = useSelector((store) => store.search);

  const toggleMenu = () => {
    dispatch(toggleSidebar());
  };

  const handlesuggestion = (s) => {
    setSearchQuery(s);
    setShowSuggestion(false);
  };

  const getSearchSuggestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const result = await data.json();
    setSuggestion(result[1]);
    dispatch(cacheResult({ [searchQuery]: result[1] }));
  };

  useEffect(() => {
    const apiTimer = setTimeout(() => {
      if (cacheSuggestion[searchQuery]) {
        setSuggestion(cacheSuggestion[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 300);

    return () => clearTimeout(apiTimer);
  }, [searchQuery]);

  return (
    <div className="flex my-3 px-2 h-9 z-20 justify-between items-center">
      <div className="flex gap-4 ml-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 hover:cursor-pointer"
          onClick={() => toggleMenu()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <a href="/">
          <img
            className="w-24 hover:cursor-pointer"
            src={youtube_logo}
            alt="logo"
          />
        </a>
      </div>
      <div className="flex">
        <div>
          <div className="flex">
            <div className="flex border-2 w-96 border-slate-300 rounded-l-full p-1 active:border-sky-600">
              <IoIosSearch className="ml-2 size-6" />
              <input
                type="text"
                placeholder=" Search"
                value={searchQuery}
                className="outline-none w-full bg-transparent text-black ml-2 items-center"
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestion(true)}
                onBlur={() => setShowSuggestion(false)}
              />
            </div>
            <div>
              <div className="flex items-end justify-center border-2 border-slate-300 border-l-0 rounded-r-full p-1 w-14">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {showSuggestion && (
            <div className="w-[438px] fixed  bg-white  shadow-md h-auto rounded-xl ">
              {suggestion.map((s) => (
                <p
                  key={s}
                  className="py-1 px-2 flex gap-2 hover:bg-slate-100 hover:rounded-md"
                  onClick={() => handlesuggestion(s)}
                >
                  <IoIosSearch className="size-5 mt-1 ml-2" />
                  {s}
                </p>
              ))}
            </div>
          )}
        </div>

        <div className="flex h-9 justify-center border-2 border-none bg-neutral-200 rounded-full p-1 ml-5 w-9">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 hover:cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z"
            />
          </svg>
        </div>
      </div>

      <div className="flex gap-10 mr-5 justify-center  items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 hover:cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 hover:cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
