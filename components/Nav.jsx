import React from "react";
import Button from "./components/Button";
import logoT from "../images/logoT.png";

const Nav = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      {/* i know this is bad code */}
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <div className="font-bold mr-4 py-2 text-xl flex items-center uppercase">
              <img
                src={logoT}
                alt="CompanyName Logo"
                className="h-12 pr-3 tracking-tighter"
              />
              <p>CompanyName</p>
            </div>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path
                  x-show="!open"
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-center py-5 lg:py-0 bg-gray-700 lg:bg-transparent rounded-lg lg:rounded-none trans" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Button link="https://goggle.com" text="Login" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
