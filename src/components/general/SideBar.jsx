// * React icons

import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";
import { CgMenuRound } from "react-icons/cg";
import { CiMenuKebab } from "react-icons/ci";
import Logo from "../image/logo-full.png";

// * React Router
import { NavLink, useLocation } from "react-router-dom";

// * React components
import { useEffect, useState } from "react";
import menuItem from "../layout/MenuItem";

// * React packages
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

export default function SideBar() {
  const isTab = useMediaQuery({ query: "(max-width:768px)" });
  const { pathname } = useLocation();

  const [expand, setExpand] = useState(isTab ? false : true);

  const Nav_animation = isTab
    ? {
        open: {
          x: 0,
          width: "19rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "19rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "",
          transition: {
            damping: 40,
          },
        },
      };

  useEffect(() => {
    isTab && setExpand(false);
  }, [pathname, isTab]);

  return (
    <div className="">
      <div
        onClick={() => setExpand(false)}
        className={`bg-black/50 fixed md:hidden inset-0 ${
          expand ? "block" : "hidden"
        }`}
      >
        {" "}
      </div>

      <motion.aside
        className={`  md:relative overflow-hidden fixed h-screen duration-100 `}
        variants={Nav_animation}
        initial={{ x: isTab ? -250 : 0 }}
        animate={expand ? "open" : "closed"}
      >
        <nav className=" h-full inline-flex flex-col bg-msp-blue dark:bg-msp-black border-r shadow-sm ">
          <div className=" p-4  pb-2 flex justify-between items-center mt-5  ">
            <img
              src={Logo}
              alt=""
              className={` overflow-hidden transition-all ${
                expand ? "w-32" : "w-0"
              }`}
            />
            <button
              onClick={() => setExpand(!expand)}
              className="p-1.5 rounded-sm bg-white flex text-white bg-opacity-10 hover:bg-opacity-15 "
            >
              {expand ? <GoSidebarExpand /> : <GoSidebarCollapse />}
            </button>
          </div>

          <ul className="flex-1 px-3 space-y-3 py-5 whitespace-pre">
            {menuItem.map((item, index) => (
              <li>
                <NavLink to={item.path} key={index} className={"link"}>
                  <span className="">{item.icon}</span>
                  <span
                    className={`transition-all overflow-hidden ${
                      expand ? "w-52 ml-3" : "hidden"
                    }`}
                  >
                    {item.name}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="border-t border-white border-opacity-30 flex p-3 mb-5 items-center">
            <img
              src="https://ui-avatars.com/api/?name=John+Doe"
              alt=""
              className="w-10 h-10 rounded-md"
            />
            <div
              className={`flex justify-between items-center  overflow-hidden transition-all  rounded-md ${
                expand ? "w-52 ml-3 " : "w-0 "
              }`}
            >
              <div className="leading-4 text-white ">
                <h4 className="font-semitbold">John Doe</h4>
                <span className="text-xs "> Johndoe@gmail.com</span>
              </div>
              <CiMenuKebab className="text-white" />
            </div>
          </div>
        </nav>
      </motion.aside>

      <div
        className="my-5 pl-2 md:hidden text-msp-blue "
        onClick={() => {
          setExpand(true);
        }}
      >
        <CgMenuRound size={23} />
      </div>
    </div>
  );
}
