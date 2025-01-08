import React from "react";

import Link from "next/link";

function NavBar({ links_list, className }) {
  const links_elements = links_list.map((link, index) => (
    <li key={index}>
      <a href={link.href}>{link.label}</a>
    </li>
  ));
  return (
    <div className={"navbar bg-base-100 " + className}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-2 shadow"
          >
            {links_elements}

            <li>
              <a href="https://jordanwakelam.alwaysdata.net/flask/page1/">
                page1
              </a>
            </li>
            <li>
              <a href="https://jordanwakelam.alwaysdata.net/flask/page2/">
                page2
              </a>
            </li>
            <li>
              <a href="https://jordanwakelam.alwaysdata.net/flask/page3/">
                page3
              </a>
            </li>
            <li>
              <a href="https://jordanwakelam.alwaysdata.net/flask/cv3/">cv3</a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xl">
          JWKL
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links_elements}
          <li>
            <a href="https://jordanwakelam.alwaysdata.net/flask/page1/">
              page1
            </a>
          </li>
          <li>
            <a href="https://jordanwakelam.alwaysdata.net/flask/page2/">
              page2
            </a>
          </li>
          <li>
            <a href="https://jordanwakelam.alwaysdata.net/flask/page3/">
              page3
            </a>
          </li>
          <li>
            <a href="https://jordanwakelam.alwaysdata.net/flask/cv3/">cv3</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">{/* <a className="btn">Button</a> */}</div>
    </div>
  );
}

export default NavBar;
