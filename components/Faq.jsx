import { Disclosure, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const Features = () => {
  return (
    <div id="faq" className="relative pt-36 md:mx-3">
      <div className="relative mx-auto flex flex-col items-center justify-center py-14 px-3 md:rounded-xl">
        <div className="relative space-y-4 text-center">
          <p className="text-4xl md:text-6xl">FAQ</p>
        </div>
        <div className="border-gradient-b-faq mx-auto mt-10 w-full bg-transparent p-4 md:w-10/12 2xl:w-1/2">
          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            {({ open }) => (
              <div className="trans border-faqHR mx-auto w-full border-b bg-transparent bg-opacity-20">
                <Disclosure.Button
                  className={`flex w-full items-center justify-between py-5 pb-6 text-left text-lg focus:outline-none md:text-xl ${
                    open
                      ? "rounded-t-2xl bg-transparent bg-opacity-100 text-white"
                      : ""
                  }`}
                >
                  <span>question</span>
                  <BsChevronDown
                    className={`${
                      open ? "trans rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="rounded-b-2xl bg-transparent pt-2 pb-4 text-sm text-white md:text-base">
                    <span>answer</span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {({ open }) => (
              <div className="trans border-faqHR mx-auto w-full border-b bg-transparent bg-opacity-20">
                <Disclosure.Button
                  className={`flex w-full items-center justify-between py-5 pb-6 text-left text-lg focus:outline-none md:text-xl ${
                    open
                      ? "rounded-t-2xl bg-transparent bg-opacity-100 text-white"
                      : ""
                  }`}
                >
                  <span>question</span>
                  <BsChevronDown
                    className={`${
                      open ? "trans rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="rounded-b-2xl bg-transparent pt-2 pb-4 text-sm text-white md:text-base">
                    <span>answer</span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            {({ open }) => (
              <div className="trans border-faqHR mx-auto w-full border-b bg-transparent bg-opacity-20">
                <Disclosure.Button
                  className={`flex w-full items-center justify-between py-5 pb-6 text-left text-lg focus:outline-none md:text-xl ${
                    open
                      ? "rounded-t-2xl bg-transparent bg-opacity-100 text-white"
                      : ""
                  }`}
                >
                  <span>question</span>
                  <BsChevronDown
                    className={`${
                      open ? "trans rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="rounded-b-2xl bg-transparent pt-2 pb-4 text-sm text-white md:text-base">
                    <span>answer</span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            {({ open }) => (
              <div className="trans border-faqHR mx-auto w-full border-b bg-transparent bg-opacity-20">
                <Disclosure.Button
                  className={`flex w-full items-center justify-between py-5 pb-6 text-left text-lg focus:outline-none md:text-xl ${
                    open
                      ? "rounded-t-2xl bg-transparent bg-opacity-100 text-white"
                      : ""
                  }`}
                >
                  <span>question</span>
                  <BsChevronDown
                    className={`${
                      open ? "trans rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="rounded-b-2xl bg-transparent pt-2 pb-4 text-sm text-white md:text-base">
                    <span>answer</span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            {({ open }) => (
              <div className="trans border-faqHR mx-auto w-full border-b bg-transparent bg-opacity-20">
                <Disclosure.Button
                  className={`flex w-full items-center justify-between py-5 pb-6 text-left text-lg focus:outline-none md:text-xl ${
                    open
                      ? "rounded-t-2xl bg-transparent bg-opacity-100 text-white"
                      : ""
                  }`}
                >
                  <span>question</span>
                  <BsChevronDown
                    className={`${
                      open ? "trans rotate-180 transform" : ""
                    } h-5 w-5 text-white`}
                  />
                </Disclosure.Button>
                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Disclosure.Panel className="rounded-b-2xl bg-transparent pt-2 pb-4 text-sm text-white md:text-base">
                    <span>answer</span>
                  </Disclosure.Panel>
                </Transition>
              </div>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Features;
