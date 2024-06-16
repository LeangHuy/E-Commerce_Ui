import React from "react";

const NavbarComponent = () => {
  return (
    <div className="bg-[#eef2fb] w-full h-screen ">
      <div className="bg-[#479597]">
        <nav className=" w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                <span className="text-[#d1baa8]">Game</span>
                <span className="text-[#b0c1c3]">Shop</span>
              </span>
            </a>
            <div className="flex gap-5 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button type="button" className="text-white">
                Sign Up
              </button>
              <button
                type="button"
                className="text-white bg-[#ddbeaa] hover:bg-[#ddbeaa] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-[#ddbeaa] dark:hover:bg-[#ddbeaa] dark:focus:ring-[#ddbeaa]"
              >
                Sign In
              </button>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            {/* search  */}
            <form className="max-w-lg mx-auto w-[800px]">
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
                  className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
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
                  className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
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
                    className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos, Design Templates..."
                    required
                  />
                  <button
                    type="submit"
                    className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-[#ddbeaa] rounded-e-lg border border-[#ddbeaa] hover:bg-[#ddbeaa] focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#ddbeaa] dark:hover:bg-[#ddbeaa] dark:focus:ring-[#ddbeaa]"
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
        </nav>
      </div>
      <div className=" flex justify-center gap-5 bg-[#ddbeaa] text-black py-5">
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
        <div>Home</div>
      </div>

      <div className=" container mx-auto max-w-screen-xl flex gap-5 w-full">
        <div className="w-[60%] h-[500px] bg-black"></div>
        <div className="w-[40%]">
          <div className="bg-slate-400 h-[240px] mb-5"></div>
          <div className="bg-slate-500 h-[240px] mb-5"></div>
        </div>
      </div>

      <div className=" container mx-auto max-w-screen-xl ">
        <div className="text-[26px] text-[#000] font-bold">New Product</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            <div className="bg-[#ffffff] rounded-lg">
                <img src="https://i.redd.it/worst-controler-ive-ever-bought-v0-cgzxa3jcxv9b1.jpg?width=3024&format=pjpg&auto=webp&s=2b6a92c6328f79e88ca07a02b404c9d84f023d90" className="h-[250px] w-full" alt="" />
               <div className="p-5">
               <div className="flex justify-between items-center">
                    <div className="text-black text-[22px] font-bold">Play station 5..</div>
                    <div className="text-black text-[22px] font-bold">200$</div>
                </div>
                <div className="text-black text-[16px] py-5">Lorem ipsum, dolor sit amet consectetur adipisi...</div>
                <center className=" bg-[#5ba099] text-[#fff] font-bold py-3 rounded-lg">Add To Card</center>
               </div>
            </div>

            <div className="bg-[#ffffff] rounded-lg">
                <img src="https://i.redd.it/worst-controler-ive-ever-bought-v0-cgzxa3jcxv9b1.jpg?width=3024&format=pjpg&auto=webp&s=2b6a92c6328f79e88ca07a02b404c9d84f023d90" className="h-[250px] w-full" alt="" />
               <div className="p-5">
               <div className="flex justify-between items-center">
                    <div className="text-black text-[22px] font-bold">Play station 5..</div>
                    <div className="text-black text-[22px] font-bold">200$</div>
                </div>
                <div className="text-black text-[16px] py-5">Lorem ipsum, dolor sit amet consectetur adipisi...</div>
                <center className=" bg-[#5ba099] text-[#fff] font-bold py-3 rounded-lg">Add To Card</center>
               </div>

            </div>

            <div className="bg-[#ffffff] rounded-lg">
                <img src="https://i.redd.it/worst-controler-ive-ever-bought-v0-cgzxa3jcxv9b1.jpg?width=3024&format=pjpg&auto=webp&s=2b6a92c6328f79e88ca07a02b404c9d84f023d90" className="h-[250px] w-full" alt="" />
               <div className="p-5">
               <div className="flex justify-between items-center">
                    <div className="text-black text-[22px] font-bold">Play station 5..</div>
                    <div className="text-black text-[22px] font-bold">200$</div>
                </div>
                <div className="text-black text-[16px] py-5">Lorem ipsum, dolor sit amet consectetur adipisi...</div>
                <center className=" bg-[#5ba099] text-[#fff] font-bold py-3 rounded-lg">Add To Card</center>
               </div>

            </div>

            <div className="bg-[#ffffff] rounded-lg">
                <img src="https://i.redd.it/worst-controler-ive-ever-bought-v0-cgzxa3jcxv9b1.jpg?width=3024&format=pjpg&auto=webp&s=2b6a92c6328f79e88ca07a02b404c9d84f023d90" className="h-[250px] w-full" alt="" />
               <div className="p-5">
               <div className="flex justify-between items-center">
                    <div className="text-black text-[22px] font-bold">Play station 5..</div>
                    <div className="text-black text-[22px] font-bold">200$</div>
                </div>
                <div className="text-black text-[16px] py-5">Lorem ipsum, dolor sit amet consectetur adipisi...</div>
                <center className=" bg-[#5ba099] text-[#fff] font-bold py-3 rounded-lg">Add To Card</center>
               </div>

            </div>


            <div className="bg-[#ffffff] rounded-lg">
                <img src="https://i.redd.it/worst-controler-ive-ever-bought-v0-cgzxa3jcxv9b1.jpg?width=3024&format=pjpg&auto=webp&s=2b6a92c6328f79e88ca07a02b404c9d84f023d90" className="h-[250px] w-full" alt="" />
               <div className="p-5">
               <div className="flex justify-between items-center">
                    <div className="text-black text-[22px] font-bold">Play station 5..</div>
                    <div className="text-black text-[22px] font-bold">200$</div>
                </div>
                <div className="text-black text-[16px] py-5">Lorem ipsum, dolor sit amet consectetur adipisi...</div>
                <center className=" bg-[#5ba099] text-[#fff] font-bold py-3 rounded-lg">Add To Card</center>
               </div>

            </div>



            <div className="bg-[#ffffff] rounded-lg">
                <img src="https://i.redd.it/worst-controler-ive-ever-bought-v0-cgzxa3jcxv9b1.jpg?width=3024&format=pjpg&auto=webp&s=2b6a92c6328f79e88ca07a02b404c9d84f023d90" className="h-[250px] w-full" alt="" />
               <div className="p-5">
               <div className="flex justify-between items-center">
                    <div className="text-black text-[22px] font-bold">Play station 5..</div>
                    <div className="text-black text-[22px] font-bold">200$</div>
                </div>
                <div className="text-black text-[16px] py-5">Lorem ipsum, dolor sit amet consectetur adipisi...</div>
                <center className=" bg-[#5ba099] text-[#fff] font-bold py-3 rounded-lg">Add To Card</center>
               </div>

            </div>


            <div className="bg-[#ffffff] rounded-lg">
                <img src="https://i.redd.it/worst-controler-ive-ever-bought-v0-cgzxa3jcxv9b1.jpg?width=3024&format=pjpg&auto=webp&s=2b6a92c6328f79e88ca07a02b404c9d84f023d90" className="h-[250px] w-full" alt="" />
               <div className="p-5">
               <div className="flex justify-between items-center">
                    <div className="text-black text-[22px] font-bold">Play station 5..</div>
                    <div className="text-black text-[22px] font-bold">200$</div>
                </div>
                <div className="text-black text-[16px] py-5">Lorem ipsum, dolor sit amet consectetur adipisi...</div>
                <center className=" bg-[#5ba099] text-[#fff] font-bold py-3 rounded-lg">Add To Card</center>
               </div>

            </div>


            <div className="bg-[#ffffff] rounded-lg">
                <img src="https://i.redd.it/worst-controler-ive-ever-bought-v0-cgzxa3jcxv9b1.jpg?width=3024&format=pjpg&auto=webp&s=2b6a92c6328f79e88ca07a02b404c9d84f023d90" className="h-[250px] w-full" alt="" />
               <div className="p-5">
               <div className="flex justify-between items-center">
                    <div className="text-black text-[22px] font-bold">Play station 5..</div>
                    <div className="text-black text-[22px] font-bold">200$</div>
                </div>
                <div className="text-black text-[16px] py-5">Lorem ipsum, dolor sit amet consectetur adipisi...</div>
                <center className=" bg-[#5ba099] text-[#fff] font-bold py-3 rounded-lg">Add To Card</center>
               </div>

            </div>


            <div className="bg-[#ffffff] rounded-lg">
                <img src="https://i.redd.it/worst-controler-ive-ever-bought-v0-cgzxa3jcxv9b1.jpg?width=3024&format=pjpg&auto=webp&s=2b6a92c6328f79e88ca07a02b404c9d84f023d90" className="h-[250px] w-full" alt="" />
               <div className="p-5">
               <div className="flex justify-between items-center">
                    <div className="text-black text-[22px] font-bold">Play station 5..</div>
                    <div className="text-black text-[22px] font-bold">200$</div>
                </div>
                <div className="text-black text-[16px] py-5">Lorem ipsum, dolor sit amet consectetur adipisi...</div>
                <center className=" bg-[#5ba099] text-[#fff] font-bold py-3 rounded-lg">Add To Card</center>
               </div>

            </div>

        </div>

      </div>




    </div>
  );
};

export default NavbarComponent;
