import React, { useState } from "react";
import avatar from "../images/avatar.png";

const Testimonials = () => {
  const [reset, setReset] = useState(false);
  return (
    <>
      <div className="max-w-6xl mx-auto my-16 flex flex-col justify-center items-center space-y-8 ">
        <div className="relative inline-flex">
          <div
            className={`animate-fade-in ${
              reset ? "block" : "hidden"
            } flex flex-col justify-center items-center space-y-8 `}
          >
            <h1 className="text-center text-2xl font-semibold text-indigo-900">
              What They Say About Us ?
            </h1>
            <div className="flex items-center  text-indigo-400 justify-center space-x-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              <img
                className="rounded-full w-24 h-24 border-2 border-indigo-200"
                src={avatar}
                alt="avatar"
              ></img>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z" />
              </svg>
            </div>
            <p className="text-center text-lg mx-auto w-4/5 lg:w-3/5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              tincidunt fermentum sapien, id condimentum ipsum tincidunt
              lobortis. Quisque eleifend, tortor vel pulvinar egestas, justo
              mauris faucibus mi, id mollis lectus ligula at velit. Donec
              posuere.
            </p>
            <div className="flex flex-col">
              <span className="whitespace-no-wrap text-base font-medium text-indigo-700">
                Sakar Ghimire
              </span>
              <span className="whitespace-no-wrap tracking-tight text-sm font-normal">
                Kathmandu, Nepal
              </span>
            </div>
          </div>
          <div
            className={`animate-fade-in ${
              reset ? "hidden" : "block"
            } flex flex-col justify-center items-center space-y-8 `}
          >
            <h1 className="text-center text-2xl font-semibold text-indigo-900">
              What They Say About Us ?
            </h1>
            <div className="flex items-center  text-indigo-400 justify-center space-x-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              <img
                className="rounded-full w-24 h-24 border-2 border-indigo-200"
                src={avatar}
                alt="avatar"
              ></img>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M11 9.275c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275zm13 0c0 5.141-3.892 10.519-10 11.725l-.984-2.126c2.215-.835 4.163-3.742 4.38-5.746-2.491-.392-4.396-2.547-4.396-5.149 0-3.182 2.584-4.979 5.199-4.979 3.015 0 5.801 2.305 5.801 6.275z" />
              </svg>
            </div>
            <p className="text-center text-lg mx-auto w-4/5 lg:w-3/5" style={{minHeight: "81px"}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              tincidunt fermentum sapien, id condimentum ipsum tincidunt
              lobortis. 
            </p>
            <div className="flex flex-col">
              <span className="whitespace-no-wrap text-base font-medium text-indigo-700">
                Keshav Bist
              </span>
              <span className="whitespace-no-wrap tracking-tight text-sm font-normal">
                Dhading, Nepal
              </span>
            </div>
          </div>
        </div>

            <div className="inline-flex justify-center items-center space-x-2">
              <span onClick={() => setReset(!reset)} className="rounded-full w-3 h-3 bg-indigo-500"></span>
              <span onClick={() => setReset(!reset)} className="rounded-full w-3 h-3 bg-indigo-500"></span>
              <span onClick={() => setReset(!reset)} className="rounded-full w-3 h-3 bg-indigo-500"></span>
            </div>
      </div>
    </>
  );
};

export default Testimonials;
