"use client";

import { useState } from "react";
import { Button } from "./Button";
import { AddPatternModal } from "./AddPatternModal";
import { SearchField } from "@heroui/react";

interface HeaderProps {
  onOpenModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  return (
    <>
      <header className="bg-surface header shadow-md">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <span className="-m-1.5 p-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="#F08080"
              >
                <path d="m305-704 112-145q12-16 28.5-23.5T480-880q18 0 34.5 7.5T543-849l112 145 170 57q26 8 41 29.5t15 47.5q0 12-3.5 24T866-523L756-367l4 164q1 35-23 59t-56 24q-2 0-22-3l-179-50-179 50q-5 2-11 2.5t-11 .5q-32 0-56-24t-23-59l4-165L95-523q-8-11-11.5-23T80-570q0-25 14.5-46.5T135-647l170-57Zm49 69-194 64 124 179-4 191 200-55 200 56-4-192 124-177-194-66-126-165-126 165Zm126 135Z" />
              </svg>
            </span>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              data-command="show-modal"
              data-commandfor="mobile-menu"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                data-slot="icon"
                aria-hidden="true"
                className="size-6"
              >
                <path
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="">
            <SearchField name="search">
              <SearchField.Group className="[&:has(input:focus)]:ring-1 bg-surface-container [&:has(input:focus)]:ring-secondary [&:has(input:focus)]:border-secondary [&:has(input:focus)]:outline-none">
                <SearchField.SearchIcon className="text-on-surface-variant" />
                <SearchField.Input
                  className="w-70 focus:outline-none placeholder:text-on-surface-variant/60"
                  placeholder="Search..."
                />
                <SearchField.ClearButton />
              </SearchField.Group>
            </SearchField>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button name="Add Pattern" onClick={onOpenModal} />
            {/* <a href="#" className="text-sm/6 font-semibold text-white">Add Pattern <span aria-hidden="true">&rarr;</span></a> */}
          </div>
        </nav>
      </header>
    </>
  );
};
