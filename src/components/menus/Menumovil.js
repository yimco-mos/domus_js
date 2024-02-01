import React, { useState } from "react";
import { ListHeader } from "../header/headercomponents/ListHeader";

export const Menumobil = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            {/* Logo here */}
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              {/* Heroicon name: menu */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10">
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                {/* Logo here */}
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span className="sr-only">Close menu</span>
                  {/* Heroicon name: x */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
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
            {/* Links here */}
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Your links */}
              <ul className='block bg-neutral-50'>
                <ListHeader liheader={"¿Quiénes somos?"}/>
                <ListHeader liheader={"Ayudemos juntos"}/>
                <ListHeader liheader={"Voluntariado"}/>
                <ListHeader liheader={"Eventos"}/>
                <ListHeader liheader={"Contáctanos"}/>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
