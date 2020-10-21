import React, { useState } from "react";

// Import Components
import Brand from "./subcomponents/brand";
import ToogleButton from './subcomponents/toogleButton'
import Menus from "./subcomponents/menus"
import menus from "../../data/navigationMenus";
import SignUP from "./subcomponents/signUp"
function NavBar() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <>
      <div className="fixed w-full shadow-sm bg-white " style={{ zIndex: "1" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
          <div className="flex justify-between items-center  py-6 lg:justify-start  md:space-x-10 ">
            <Brand/>
            <ToogleButton type="open" toggleExpansion={toggleExpansion}/>
            <Menus />
            <SignUP/>
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
                  <Brand layout="web"/>
                  {/* <div className="-mr-2">
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
                  </div> */}
                  <ToogleButton type="close" toggleExpansion={toggleExpansion}/>
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
