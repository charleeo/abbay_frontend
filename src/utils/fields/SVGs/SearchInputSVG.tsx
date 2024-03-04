/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactEventHandler } from "react";

type InputSVGType = {
  label?: string;
  type?: string | "text";
  fieldName: string;
  value: any;
  addedClass?: string;
  changeEvent?: ReactEventHandler;
  placeholder?: string | "Search for items";
};

export const SearchInputSVG = ({
  label,
  type,
  fieldName,
  value,
  changeEvent,
  placeholder,
  addedClass
}: InputSVGType) => {
  return (
    <div className="w-full">
      <label htmlFor="table-search" className="sr-only">
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 rtl:inset-r-0 rtl:right-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-5 h-6 text-blue-500 dark:text-gray-400"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        <input
          type={type}
          name={fieldName}
          id={fieldName}
          value={value}
          onBlur={changeEvent}
          onChange={changeEvent}
          autoComplete={fieldName}
          placeholder={placeholder}
          className= {`block p-2 ps-10 text-sm text-gray-900 border border-blue-gray-200 bg-gray-50 rounded-lg bg-gray-50 focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-50 dark:focus:border-blue-50 ${addedClass}`}
        />
      </div>
    </div>
  );
};
