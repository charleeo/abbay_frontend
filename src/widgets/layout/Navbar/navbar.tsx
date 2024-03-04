import React, { FC, useEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { Typography } from "@material-tailwind/react";
import IonIcon from "@reacticons/ionicons";

import UserOne from "../../../assets/images/user-06.png";
import { useAuth } from "../../../context/AuthContext";
import { IRoutes } from "../../../models/types/IRoutes";
import http from "../../../services/httpServices";

const Navbar: FC<any> = ({ routes }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState(false);
  const [open, setOpen] = useState(false);
  const { user } = useAuth();

  let profileProtectedRoutes = null;
  let mainProtectedMenus = null;

  if (user && user.is_admin) {
    profileProtectedRoutes = [...routes?.admin_protected, ...routes?.protected];
    mainProtectedMenus = [...routes?.admin_protected_menu];
  }

  if (user && !user.is_admin) {
    profileProtectedRoutes = [
      ...routes?.client_protected,
      ...routes?.protected,
    ];
    mainProtectedMenus = [...routes?.client_protected_menu];
  }

  const profile_picture = user ? user.profile_picture : "";
  const toggleNav = () => {
    const isOpen = !navOpen;
    setNavOpen(isOpen);
  };

  const navbarRef: any = useRef(null);
  const profileLinkRef = useRef<HTMLButtonElement | null>(null); // Specify the type for the ref

 
  const handleClick = (event: MouseEvent) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target as Node) &&
      profileLinkRef.current &&
      !profileLinkRef.current.contains(event.target as Node)
    ) {
      setNavOpen(false);
      setOpen(false);
      setOpenSubmenus(false);
    }
  };

  const handleProfileClick = () => {
    const subMenuToggle = !openSubmenus;
    setOpenSubmenus(subMenuToggle);
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav className={`bg-white shadow-md flex z-10 py-4`}>
      {/* <!-- container --> */}
      <div
        ref={navbarRef}
        className="container flex flex-wrap px-4 pt-2 mx-auto lg:space-x-4"
      >
        {/* <!-- brand --> */}
        <Link
          to="/"
          className="inline-flex p-2 text-xl font-bold tracking-wider text-black uppercase "
        >
          Abbey
        </Link>
        {/* <!-- brand --> */}

        {/* <!-- toggler btn --> */}
        <button
          className="inline-flex items-center justify-center w-10 h-10 ml-auto text-black border rounded-md outline-none  lg:hidden focus:outline-none"
          onClick={toggleNav}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/* <!-- toggler btn --> */}
        {/* <!-- menu --> */}

        <div
          className={`w-full mt-2 lg:inline-flex flex items-center justify-between lg:w-auto   lg:mt-0 ${
            navOpen ? "flex" : "hidden"
          } lg:absolute lg:right-0`}
        >
          <ul className="flex flex-col w-full space-y-2  lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-2">
            {routes?.general.map(({ name, path, icon, target }: IRoutes) => (
              <Typography key={name} as="li">
                <Link
                  to={path}
                  target={target}
                  className="flex px-4 py-2 font-medium text-black  rounded-md  hover:bg-gray- capitalize"
                  onClick={() => {
                    setNavOpen(false);
                    setOpen(false);
                    setOpenSubmenus(false);
                  }}
                >
                  {name}
                  {icon &&
                    React.createElement(icon, {
                      className: "w-[18px] h-[18px] opacity-75 mt-1 ml-1 ",
                    })}
                </Link>
              </Typography>
            ))}

            {/* <!-- dropdown --> */}

            {user && (
              <>
                {mainProtectedMenus?.map(
                  ({ name, path, icon, target }: IRoutes) => (
                    <Typography key={name} as="li">
                      <Link
                        to={path}
                        target={target}
                        className="flex px-4 py-2 font-medium text-black  rounded-md  hover:bg-gray- capitalize"
                        onClick={() => {
                          setNavOpen(false);
                          setOpen(false);
                          setOpenSubmenus(false);
                        }}
                      >
                        {name}
                        {icon &&
                          React.createElement(icon, {
                            className:
                              "w-[18px] h-[18px] opacity-75 mt-1 ml-1 ",
                          })}
                      </Link>
                    </Typography>
                  )
                )}

                <li className="relative">
                  <button
                    ref={profileLinkRef} // Attach the ref to the "Profile" link
                    className="flex items-center w-full px-4 font-medium text-black rounded-md outline-none "
                    onClick={() => handleProfileClick()}
                  >
                    <span className="h-12 w-12 rounded-full mr-2">
                      <img
                        src={
                          profile_picture
                            ? http.setFileURL + profile_picture
                            : UserOne
                        }
                        alt="User"
                        className="h-12 w-12 rounded-full"
                      />
                    </span>
                    <span className="text-right">
                      <span className="block text-sm font-medium text-black dark:text-white">
                        {user.firstname ?? user.email.split("@")[0]}
                      </span>
                    </span>

                    <IonIcon
                      name={`${open ? "chevron-up" : "chevron-down"}`}
                      className="mt-1 ml-1"
                    ></IonIcon>
                  </button>

                  {/* <!-- dropdown menu --> */}

                  <div
                    className={`right-0 p-2 mt-1 bg-white z-30 rounded-md shadow lg:absolute ${
                      openSubmenus ? "flex flex-col" : "hidden"
                    }`}
                  >
                    <ul className="space-y-2 lg:w-48">
                      {profileProtectedRoutes?.map(
                        ({ name, path, icon, target }: IRoutes) => (
                          <Typography key={name} as="li">
                            <Link
                              to={path}
                              target={target}
                              className="flex p-2 font-medium text-gray-600 rounded-md  hover:bg-gray-100 hover:text-black capitalize"
                              onClick={() => {
                                setNavOpen(false);
                                setOpen(false);
                                setOpenSubmenus(false);
                              }}
                            >
                              {icon &&
                                React.createElement(icon, {
                                  className: "w-[18px] h-[18px] opacity-75 ",
                                })}
                              {name}
                            </Link>
                          </Typography>
                        )
                      )}
                    </ul>
                  </div>
                  {/* <!-- dropdown menu --> */}
                </li>
              </>
            )}
            {/* End of auth check */}

            {/* <!-- dropdown --> */}

            {!user &&
              routes?.auth.map(({ name, path, icon, target }: IRoutes) => (
                <Typography key={name} as="li">
                  <Link
                    to={path}
                    target={target}
                    className="flex px-4 py-2 font-medium text-black rounded-md  hover:bg-gray-300 capitalize"
                    onClick={() => {
                      setNavOpen(false);
                      setOpen(false);
                      setOpenSubmenus(false);
                    }}
                  >
                    {name}
                    {icon &&
                      React.createElement(icon, {
                        className:
                          "w-[18px] h-[18px] opacity-75 mt-1 ml-1 blue-icon",
                      })}
                  </Link>
                </Typography>
              ))}
          </ul>
        </div>
        {/* <!-- menu --> */}
      </div>
      {/* <!-- container --> */}
    </nav>
  );
};

export default Navbar;
