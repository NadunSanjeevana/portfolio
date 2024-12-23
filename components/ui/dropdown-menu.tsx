// @/components/ui/dropdown-menu.js
import * as React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export function DropdownMenu({ children }) {
  return <Menu>{children}</Menu>;
}

export function DropdownMenuTrigger({ children, asChild }) {
  return (
    <Menu.Button as={asChild ? Fragment : undefined}>{children}</Menu.Button>
  );
}

export function DropdownMenuContent({ children, align = "start" }) {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items
        className={`absolute mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
          align === "end" ? "right-0" : "left-0"
        }`}
      >
        {children}
      </Menu.Items>
    </Transition>
  );
}

export function DropdownMenuItem({ children, onClick }) {
  return (
    <Menu.Item>
      {({ active }) => (
        <button
          className={`${
            active ? "bg-gray-100" : ""
          } block w-full text-left px-4 py-2 text-sm text-gray-700`}
          onClick={onClick}
        >
          {children}
        </button>
      )}
    </Menu.Item>
  );
}
