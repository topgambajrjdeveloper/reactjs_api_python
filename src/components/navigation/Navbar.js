/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line no-unused-vars */
import { connect } from "react-redux";
import { Popover, Transition } from "@headlessui/react";
import { useState, Fragment, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { map } from "lodash";

import {
  AddUser,
  Community,
  MoneySquare,
  PeopleTag,
  RssFeedTag,
  SendMail,
  ServerConnection,
  User,
} from "iconoir-react";
import {
  BookmarkAltIcon,
  BriefcaseIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CursorClickIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  MenuIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronDownIcon } from "@heroicons/react/solid";
import Alert from "../shared/Alert";

const solutions = [
  {
    name: "Noticias",
    description: "Sección de noticias",
    href: "/",
    path: "/",
    target: "",
    icon: IconRss,
  },
  {
    name: "Comparte y gana",
    description: "Crea contenido y gana",
    href: "/comparte",
    path: "/comparte",
    target: "",
    icon: IconMoney,
  },
  {
    name: "Equipo",
    description: "Equipo que hace posible que todo funcione",
    href: "/teams",
    path: "/teams",
    target: "",
    icon: IconTeams,
  },
  {
    name: "Contacto",
    description: "Contacta con nosotros",
    href: "/contacto",
    path: "/contacto",
    target: "",
    icon: IconSendMail,
  },
  // {
  //   name: "Acceder",
  //   description: "Contacta con nosotros",
  //   href: "/auth/acceder",
  //   path: "/auth/acceder",
  //   target: "",
  //   icon: IconUser,
  // },
  // {
  //   name: "Registro",
  //   description: "Contacta con nosotros",
  //   href: "/auth/registrate",
  //   path: "/auth/registrate",
  //   target: "",
  //   icon: IconAddUser,
  // },
  {
    name: "API",
    description: "Comience a integrar productos y herramientas",
    href: `${process.env.REACT_APP_API_URL}/swagger/`,
    path: `${process.env.REACT_APP_API_URL}/swagger/`,
    target: "_blank",
    icon: IconApi,
  },
  {
    name: "SuperAdmin",
    description: "Comience a integrar productos y herramientas",
    href: `${process.env.REACT_APP_API_URL}/admin/`,
    path: `${process.env.REACT_APP_API_URL}/admin/`,
    target: "_blank",
    icon: IconApi,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Navbar() {
  const [loading, setLoading] = useState(true);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (document.getElementById("navbar")) {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        document.getElementById("navbar").classList.add("shadow-navbar");
        document.getElementById("navbar").classList.add("bg-white");
      } else {
        document.getElementById("navbar").classList.remove("shadow-navbar");
        document.getElementById("navbar").classList.remove("bg-white");
      }
    }
  }

  const [open, setOpen] = useState(false);

  return (
    <>
      <Popover className="relative bg-white z-auto">
        <div
          className="absolute inset-0 shadow z-30 pointer-events-none"
          aria-hidden="true"
        />
        <div className="relative z-20">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
            <div>
              <Link to="/" className="flex">
                <img className="h-8 w-auto sm:h-10" src="./logo.png" alt="" />
              </Link>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
              <Popover.Group as="nav" className="flex space-x-10">
                {/* <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}
          >
            <span>Solutions</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-900",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg bg-white">
              <div className="max-w-7xl mx-auto grid gap-y-6 px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8 lg:py-12 xl:py-16">
                {solutions.map((item) => (
                  <Link
                    target={item.target ? item.target : ""}
                    key={item.name}
                    to={item.href}
                    className="-m-3 p-3 flex flex-col justify-between rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex md:h-full lg:flex-col">
                      <div className="flex-shrink-0">
                        <span className="inline-flex items-center justify-center h-10 w-10 rounded-md bg-grey-500 text-white sm:h-12 sm:w-12">
                          <item.icon
                            className="h-6 w-6 bg-grey-500"
                            aria-hidden="true"
                          />
                        </span>
                      </div>
                      <div className="ml-4 md:flex-1 md:flex md:flex-col md:justify-between lg:ml-0 lg:mt-4">
                        <div>
                          <p className="text-base font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover> */}
                {solutions.map((item) => (
                  <>
                    <Link
                      key={item.name}
                      target={item.target ? item.target : ""}
                      to={item.href}
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </Link>
                  </>
                ))}
                {/* <Popover>
      {({ open }) => (
        <>
          <Popover.Button
            className={classNames(
              open ? "text-gray-900" : "text-gray-500",
              "group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            )}
          >
            <span>More</span>
            <ChevronDownIcon
              className={classNames(
                open ? "text-gray-600" : "text-gray-400",
                "ml-2 h-5 w-5 group-hover:text-gray-500"
              )}
              aria-hidden="true"
            />
          </Popover.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="hidden md:block absolute z-10 top-full inset-x-0 transform shadow-lg">
              <div className="absolute inset-0 flex">
                <div className="bg-white w-1/2" />
                <div className="bg-gray-50 w-1/2" />
              </div>
              <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
                <nav className="grid gap-y-10 px-4 py-8 bg-white sm:grid-cols-2 sm:gap-x-8 sm:py-12 sm:px-6 lg:px-8 xl:pr-12">
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Company
                    </h3>
                    <ul role="list" className="mt-5 space-y-6"></ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      Resources
                    </h3>
                    <ul role="list" className="mt-5 space-y-6"></ul>
                  </div>
                </nav>
                <div className="bg-gray-50 px-4 py-8 sm:py-12 sm:px-6 lg:px-8 xl:pl-12">
                  <div>
                    <h3 className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                      From the blog
                    </h3>
                    <ul role="list" className="mt-6 space-y-6"></ul>
                  </div>
                  <div className="mt-6 text-sm font-medium">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      {" "}
                      View all posts{" "}
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover> */}
              </Popover.Group>
              <div className="flex items-center md:ml-12">
                <Link
                  to="/auth/registrate"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Registro
                </Link>
                <Link
                  to="/auth/acceder"
                  className="ml-8 inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Acceder
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Transition
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
            className="absolute z-[30] top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5 sm:pb-8">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="./logo.png"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-900 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6 sm:mt-8">
                  <nav>
                    <div className="grid gap-7 sm:grid-cols-2 sm:gap-y-8 sm:gap-x-4">
                      {solutions.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="-m-3 flex items-center p-3 rounded-lg hover:bg-gray-50"
                        >
                          <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-grey-500 text-white sm:h-12 sm:w-12">
                            <item.icon className="h-6 w-6" aria-hidden="true" />
                          </div>
                          <div className="ml-4 text-base font-medium text-gray-900">
                            {item.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5">
                <div className="mt-6">
                  <Link
                    to="/auth/acceder"
                    className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                  >
                    Accder
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <Link
                      to="/auth/registrate"
                      className="text-indigo-600 hover:text-gray-500"
                    >
                      Regitro
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      <Alert />
    </>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Navbar);

function IconRss() {
  return <RssFeedTag color="red" height={36} width={36} />;
}

function IconMoney() {
  return <MoneySquare color="red" height={36} width={36} />;
}

function IconTeams() {
  return <Community color="red" height={36} width={36} />;
}

function IconAddUser() {
  return <AddUser color="red" height={36} width={36} />;
}
function IconUser() {
  return <User color="red" height={36} width={36} />;
}
function IconProfile() {
  return <PeopleTag color="red" height={36} width={36} />;
}
function IconSendMail() {
  return <SendMail color="red" height={36} width={36} />;
}
function IconApi() {
  return <ServerConnection color="red" height={36} width={36} />;
}
