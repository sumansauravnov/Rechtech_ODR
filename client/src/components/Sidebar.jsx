// import React from "react";
import { useState } from "react";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const Sidebar = () => {
  const [isUsersOpen, setIsUsersOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Button - Only visible on medium and small screens */}
      <button
        className="z-50 fixed top-4 left-4 p-2 rounded-lg bg-blue-50 shadow-lg md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className="z-10 flex flex-col h-screen">
        <div className="flex flex-1 overflow-hidden">
          {/* Modified aside with conditional classes for responsive behavior */}
          <aside
            className={`
            fixed md:static w-52 bg-blue-50 shadow-lg flex flex-col justify-between h-screen
            transition-transform duration-300 ease-in-out
            ${
              isSidebarOpen
                ? "translate-x-0"
                : "-translate-x-full md:translate-x-0"
            }
          `}
          >
            <div className="flex-1">
              <ul className="p-4 space-y-0 mt-16">
                <Link to="/admin">
                  <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg transition-colors">
                    <span className="mr-3">📊</span>
                    Dashboard
                  </li>
                </Link>

                <li
                  className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg cursor-pointer transition-colors"
                  onClick={() => setIsUsersOpen(!isUsersOpen)}
                >
                  <div className="flex items-center">
                    <span className="mr-3">👥</span>
                    Users
                  </div>
                  {/* <span className={`transform transition-transform duration-200 ${isUsersOpen ? 'rotate-90' : ''}`}>
                  
<IoIosArrowDroprightCircle/>
                  </span> */}
                </li>

                {isUsersOpen && ( 
                <div className="ml-8 space-y-1">
                  <Link to="/arbitratortable">
                    <li className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-blue-100 rounded-lg transition-colors">
                      Arbitrator
                    </li>
                  </Link>
                  <Link to="/clienttable">
                    <li className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-blue-100 rounded-lg transition-colors">
                      Client
                    </li>
                  </Link>
                </div>
                )} 

                <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg transition-colors">
                  <span className="mr-3">📁</span>
                  Cases
                </li>
                <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg transition-colors">
                  <span className="mr-3">📅</span>
                  Meetings
                </li>
                <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg transition-colors">
                  <span className="mr-3">📄</span>
                  Documents
                </li>
                <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg transition-colors">
                  <span className="mr-3">🎫</span>
                  Tickets
                </li>
                <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg transition-colors">
                  <span className="mr-3">📞</span>
                  Consultation Requests
                </li>
              </ul>
            </div>

            {/* Bottom Section */}
            <div className="p-4 border-t border-blue-100">
              <ul className="space-y-2">
                <li className="flex items-center px-4 py-2 text-gray-700 hover:bg-blue-100 rounded-lg transition-colors">
                  <span className="mr-3">⚙️</span>
                  Settings
                </li>
                <li className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <span className="mr-3">🚪</span>
                  Log out
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
