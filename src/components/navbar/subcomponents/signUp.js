import React from "react";
import { Link } from "gatsby";

const SignUP = () => (
  <div className="hidden lg:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
    <span className="inline-flex rounded-md shadow-sm">
      <Link
        href="/"
        className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline active:bg-indigo-700 transition duration-150 ease-in-out "
      >
        Sign Up
      </Link>
    </span>
  </div>
);

export default SignUP;
