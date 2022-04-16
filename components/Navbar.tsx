import React from "react";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import NavLink from "./navbar/NavLink";

const BtnMobile = ({ open }: { open: boolean }) => {
  return (
    <Disclosure.Button className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
      <span className="sr-only">Open main menu</span>
      {open ? (
        <XIcon className="block h-6 w-6" aria-hidden="true" />
      ) : (
        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
      )}
    </Disclosure.Button>
  );
};

const NavMenu = ({ open }: { open: boolean }) => {
  return (
    <ul className="flex justify-end items-center grow">
      <div className="hidden lg:flex">
        <NavLink />
      </div>
      <li>
        <BtnMobile open={open} />
      </li>
    </ul>
  );
};

const CollapseNavbar = ({ open }: { open: boolean }) => {
  return (
    <div className={`lg:hidden ${open ? "block" : "hidden"}`} id="mobile-menu">
      <ul className="mb-2 mb-lg-0">
        <NavLink />
      </ul>
    </div>
  );
};

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-blue-500 text-white py-3">
      {({ open }) => (
        <div className="px-2">
          <div className="flex ">
            <Link href="/">
              <a className="text-2xl uppercase">IBM</a>
            </Link>
            <NavMenu open={open} />
          </div>
          <CollapseNavbar open={open} />
        </div>
      )}
    </Disclosure>
  );
}
