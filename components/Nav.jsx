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
          <div id="home" className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
              <div className="-ml-8 flex items-center justify-start md:-ml-0 md:pl-10 lg:w-0 lg:flex-1">
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
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-primary hover:text-primaryDark focus:outline-none">
                  <span className="sr-only">Open menu</span>
                  <HiMenu className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              {/* <nav className="flex space-x-10">
                Middle of screen navigation here
              </nav> */}
              <div className="hidden items-center justify-end space-x-5 pr-10 text-sm md:flex">
                <a
                  href="#home"
                  className="trans text-white underline decoration-transparent decoration-4 underline-offset-8 hover:text-primary hover:decoration-primary"
                >
                  Home
                </a>
                <a
                  href="#plans"
                  className="trans text-white underline decoration-transparent decoration-4 underline-offset-8 hover:text-primary hover:decoration-primary"
                >
                  Features
                </a>
                <a
                  href="#faq"
                  className="trans text-white underline decoration-transparent decoration-4 underline-offset-8 hover:text-primary hover:decoration-primary"
                >
                  faq
                </a>
                <a
                  href="#"
                  className="text-gradStart hover:decoration-gradStart trans underline decoration-transparent decoration-4 underline-offset-8"
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
              className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition md:hidden"
            >
              <div className="rounded-lg bg-background shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
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
                      <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-primary hover:text-primaryDark focus:outline-none">
                        <span className="sr-only">Close menu</span>
                        <HiX className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-8">
                      <a
                        href="#home"
                        className="-m-3 flex items-center rounded-md p-3"
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          Home
                        </span>
                      </a>
                      <a
                        href="#plans"
                        className="-m-3 flex items-center rounded-md p-3"
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          Features
                        </span>
                      </a>
                      <a
                        href="#faq"
                        className="-m-3 flex items-center rounded-md p-3"
                      >
                        <span className="ml-3 text-base font-medium text-white">
                          Faq
                        </span>
                      </a>
                      <a
                        href="#"
                        className="-m-3 flex items-center rounded-md p-3"
                      >
                        <span className="text-gradStart ml-3 text-base font-medium">
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
