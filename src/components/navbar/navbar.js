import React, { useState } from "react";

// Import Components
import Brand from './subcomponents/brand'
// import ToogleButton from './subcomponents/toogleButton' 
// import Navigation from "./subcomponents/navigation"
import menus from "../../data/navigationMenus";
import logo from "../../images/logo-inifity.svg";

function NavBar() {
  const [isExpanded, toggleExpansion] = useState(false);
  // const toogleButton = () => {
  //   console.log("Button clicked")
  //   toggleExpansion(!isExpanded)
  // }
  return (
    <>
    <div className="fixed w-full shadow-sm bg-white " style={{ zIndex: "1" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
        <div className="flex justify-between items-center  py-6 lg:justify-start  md:space-x-10 ">
          {/* <div className="lg:w-0 lg:flex-1">
            <a href="#" className="flex">
              <img
                className="h-8 w-auto sm:h-10"
                src={logo}
                alt="Workflow"
              ></img>
              <span className="inline-flex items-center justify-center ml-3 text-xl leading-6 font-bold text-gray-700">
                {" "}
                INFINITY
              </span>
            </a>
          </div> */}
<Brand />
          <div className="-mr-2 -my-2 lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out  "
              onClick={() => toggleExpansion(true)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden pl-2 lg:flex space-x-10">
            {menus.map((menu) => (
              <a
                key={menu.title}
                href={menu.route}
                className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
              >
                {menu.title}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
            <span className="inline-flex rounded-md shadow-sm">
              <a
                href="#"
                className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline active:bg-indigo-700 transition duration-150 ease-in-out "
              >
                Sign Up
              </a>
            </span>
          </div>
        </div>
      </div>
      <div
        className={` ${
          isExpanded ? "" : "hidden"
        }  absolute top-0 inset-x-0 p-2 animate-scale-up-tr  lg:hidden`}
      >
        <div className="rounded-lg shadow-lg">
          <div className="rounded-lg shadow-xs bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex">
                  <img
                    className="h-8 w-auto sm:h-10"
                    src={logo}
                    alt="Workflow"
                  ></img>
                  <span className="inline-flex items-center justify-center ml-3 text-xl leading-6 font-bold text-gray-700">
                    INFINITY
                  </span>
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out  "
                    onClick={() => toggleExpansion(false)}
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <nav className="grid gap-y-8">
                  {menus.map((menu) => (
                    <a
                      key={menu.title}
                      href={menu.route}
                      className="-m-3 p-3 rounded-md hover:bg-gray-100 transition ease-in-out duration-150"
                    >
                      <div className="text-base leading-6 font-medium text-gray-900">
                        {menu.title}
                      </div>
                    </a>
                  ))}

                  <span className="w-full flex rounded-md shadow-sm">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
                    >
                      Sign up
                    </a>
                  </span>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default NavBar;
