/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { HiMenu, HiX } from "react-icons/hi";
import Image from "next/image";

export default function Nav() {
  return (
    <Popover className="relative z-20">
      {({ open }) => (
        <>
          <div id="home" className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
              <div className="flex items-center justify-start lg:w-0 lg:flex-1 -ml-8 md:-ml-0 md:pl-10">
                <a href="#" className="relative h-28 w-28">
                  <Image
                    src="/img/logoT.png"
                    alt="Logo"
                    layout="fill"
                    className=""
                  />
                </a>
                <p className="-ml-6 text-xl">Company name</p>
              </div>
              <div className="-my-2 md:hidden">
                <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-primaryDark focus:outline-none">
                  <span className="sr-only">Open menu</span>
                  <HiMenu className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              {/* <nav className="flex space-x-10">
                Middle of screen navigation here
              </nav> */}
              <div className="hidden md:flex text-sm items-center justify-end space-x-5 pr-10">
                <a
                  href="#home"
                  className="text-white hover:text-primary underline underline-offset-8 decoration-4 decoration-transparent hover:decoration-primary trans"
                >
                  Home
                </a>
                <a
                  href="#plans"
                  className="text-white hover:text-primary underline underline-offset-8 decoration-4 decoration-transparent hover:decoration-primary trans"
                >
                  Features
                </a>
                <a
                  href="#faq"
                  className="text-white hover:text-primary underline underline-offset-8 decoration-4 decoration-transparent hover:decoration-primary trans"
                >
                  faq
                </a>
                <a
                  href="#"
                  className="text-gradStart underline underline-offset-8 decoration-4 decoration-transparent hover:decoration-gradStart trans"
                >
                  Dashboard
                </a>
              </div>
            </div>
          </div>

          <Transition
            show={open}
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              static
              className="absolute z-50 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-lg ring-1 ring-black bg-background ring-opacity-5">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div className="relative h-16 w-16">
                      <Image
                        src="/img/logoT.png"
                        alt="Logo"
                        layout="fill"
                        className=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="rounded-md p-2 inline-flex items-center justify-center text-primary hover:text-primaryDark focus:outline-none">
                        <span className="sr-only">Close menu</span>
                        <HiX className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <a
                        href="#home"
                        className="-m-3 p-3 flex items-center rounded-md"
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          Home
                        </span>
                      </a>
                      <a
                        href="#plans"
                        className="-m-3 p-3 flex items-center rounded-md"
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          Features
                        </span>
                      </a>
                      <a
                        href="#faq"
                        className="-m-3 p-3 flex items-center rounded-md"
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          Faq
                        </span>
                      </a>
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-md"
                      >
                        <span className="ml-3 text-base font-medium text-gradStart">
                          Dashboard
                        </span>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}
