import React from "react";

const TopNavbarComponent = () => {
  return (
    <div className="bg-[#479597]">
      <div className="container mx-auto flex justify-between items-center py-5">
        <div>LOGO</div>
        <div>
          <div className="w-[768px]">
            <form className="mx-auto">
              <div className="flex">
                <label
                  for="search-dropdown"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Your Email
                </label>
                <button
                  id="dropdown-button"
                  data-dropdown-toggle="dropdown"
                  className="flex-shrink-0 z-10 inline-flex items-center bg-[#fffc] py-2.5 px-4 text-sm font-medium text-center text-gray-900  border focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
                  type="button"
                >
                  All categories{" "}
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                <div
                  id="dropdown"
                  className="z-10 hidden bg-[#fffc] divide-y  rounded-lg shadow w-44 dark:bg-gray-700"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Mockups
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Templates
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Design
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Logos
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="relative w-full">
                  <input
                    type="search"
                    id="search-dropdown"
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-[#fffc] rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos, Design Templates..."
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 px-[20px] py-[10px] text-sm font-medium h-full text-white bg-[#ddbeaa] rounded-e-lg border"
                  >
                    <svg
                      className="w-4 h-4"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="text-[#fff] text-[16px]  px-[20px] py-[10px] ">Sign Up</div>
          <div className="text-[#fff] text-[16px] bg-[#ddbeaa] px-[20px] py-[10px] rounded-lg ">Sign in</div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbarComponent;
