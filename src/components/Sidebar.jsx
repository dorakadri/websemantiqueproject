

import { NavLink ,useLocation} from "react-router-dom";
import { navLinks } from "../utils/Constants";


export function Sidebar() {
    const location = useLocation();
  return (
    <aside className="flex flex-col w-64 h-screen px-5 pb-8 pt-5 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
      <a href="#">
        <span className="self-center text-2xl  font-semibold whitespace-nowrap   dark:text-white">
          We Share
        </span>
      </a>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs text-gray-500 uppercase dark:text-gray-400">
              features
            </label>

            {navLinks.map((link, index) => (
            <NavLink
              to={link.link}
              key={index}
              className={`flex items-center px-3 py-2 transition-colors duration-300 transform rounded-lg hover:bg-gray-300 cursor-pointer ${
                location.pathname === link.link
                  ? "text-blue-600"
                  : "text-gray-600"
              }`}
            >
             { link.icon}
              <span className="mx-2 text-sm font-medium">{link.title}</span>
            </NavLink>
          ))}
          </div>
        </nav>
    
      </div>
    </aside>
  );
}
