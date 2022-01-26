import { Disclosure, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";

const Features = () => {
  return (
    <div id="faq" className="pt-36 md:mx-3 relative">
      <div className="py-14 mx-auto md:rounded-xl flex items-center justify-center flex-col relative px-3">
        <div className="text-center space-y-4 relative">
          <p className="text-4xl md:text-6xl">FAQ</p>
        </div>
        <div className="w-full md:w-10/12 2xl:w-1/2 mt-10 p-4 mx-auto bg-transparent border-gradient-b-faq">
          <Disclosure
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="0"
          >
            {({ open }) => (
              <div className="bg-transparent bg-opacity-20 w-full mx-auto trans border-b border-faqHR">
                <Disclosure.Button
                  className={`flex items-center justify-between text-lg md:text-xl w-full py-5 pb-6 text-left focus:outline-none ${
                    open
                      ? "bg-transparent bg-opacity-100 text-white rounded-t-2xl"
                      : ""
                  }`}
                >
                  <span>question</span>
                  <BsChevronDown
                    className={`${
                      open ? "transform rotate-180 trans" : ""
                    } w-5 h-5 text-white`}
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
                  <Disclosure.Panel className="pt-2 pb-4 text-sm md:text-base text-white bg-transparent rounded-b-2xl">
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
              <div className="bg-transparent bg-opacity-20 w-full mx-auto trans border-b border-faqHR">
                <Disclosure.Button
                  className={`flex items-center justify-between text-lg md:text-xl w-full py-5 pb-6 text-left focus:outline-none ${
                    open
                      ? "bg-transparent bg-opacity-100 text-white rounded-t-2xl"
                      : ""
                  }`}
                >
                  <span>question</span>
                  <BsChevronDown
                    className={`${
                      open ? "transform rotate-180 trans" : ""
                    } w-5 h-5 text-white`}
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
                  <Disclosure.Panel className="pt-2 pb-4 text-sm md:text-base text-white bg-transparent rounded-b-2xl">
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
              <div className="bg-transparent bg-opacity-20 w-full mx-auto trans border-b border-faqHR">
                <Disclosure.Button
                  className={`flex items-center justify-between text-lg md:text-xl w-full py-5 pb-6 text-left focus:outline-none ${
                    open
                      ? "bg-transparent bg-opacity-100 text-white rounded-t-2xl"
                      : ""
                  }`}
                >
                  <span>question</span>
                  <BsChevronDown
                    className={`${
                      open ? "transform rotate-180 trans" : ""
                    } w-5 h-5 text-white`}
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
                  <Disclosure.Panel className="pt-2 pb-4 text-sm md:text-base text-white bg-transparent rounded-b-2xl">
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
              <div className="bg-transparent bg-opacity-20 w-full mx-auto trans border-b border-faqHR">
                <Disclosure.Button
                  className={`flex items-center justify-between text-lg md:text-xl w-full py-5 pb-6 text-left focus:outline-none ${
                    open
                      ? "bg-transparent bg-opacity-100 text-white rounded-t-2xl"
                      : ""
                  }`}
                >
                  <span>question</span>
                  <BsChevronDown
                    className={`${
                      open ? "transform rotate-180 trans" : ""
                    } w-5 h-5 text-white`}
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
                  <Disclosure.Panel className="pt-2 pb-4 text-sm md:text-base text-white bg-transparent rounded-b-2xl">
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
              <div className="bg-transparent bg-opacity-20 w-full mx-auto trans border-b border-faqHR">
                <Disclosure.Button
                  className={`flex items-center justify-between text-lg md:text-xl w-full py-5 pb-6 text-left focus:outline-none ${
                    open
                      ? "bg-transparent bg-opacity-100 text-white rounded-t-2xl"
                      : ""
                  }`}
                >
                  <span>question</span>
                  <BsChevronDown
                    className={`${
                      open ? "transform rotate-180 trans" : ""
                    } w-5 h-5 text-white`}
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
                  <Disclosure.Panel className="pt-2 pb-4 text-sm md:text-base text-white bg-transparent rounded-b-2xl">
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
