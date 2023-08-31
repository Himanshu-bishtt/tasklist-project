/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useState } from "react";
import Button from "./UI/Button";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
// import { Switch } from "@headlessui/react";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function Example() {
  // const [agreed, setAgreed] = useState(false);

  return (
    <div className="isolate w-3/4 bg-slate-800 text-white px-6 py-24 sm:py-8 lg:px-8 mt-6 rounded-lg">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-2xl font-bold tracking-tight ">Add new task</h2>
      </div>
      <form className="mx-auto mt-6 max-w-xl sm:mt-5">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="text"
              className="block text-sm font-semibold leading-6"
            >
              Text
            </label>
            <div className="mt-2.5">
              <textarea
                name="text"
                id="text"
                rows={2}
                className="block w-full rounded-md border-0 px-1.5 py-2 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
                defaultValue={""}
                placeholder="Enter text..."
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6"
            >
              Priority
            </label>
            <div className="mt-2.5">
              <select
                name="priority"
                className="block w-full  bg-white border-0 px-1.5 py-2 text-gray-900 shadow-sm focus:outline-none sm:text-sm sm:leading-6"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <Button
            text="Add Task"
            classname="w-full"
            onClick={(event) => {
              event.preventDefault();
              console.log("Task added");
            }}
          />
          <Button
            text="Cancel"
            classname="w-full bg-transparent border border-sky-600 hover:bg-sky-400"
            onClick={(event) => {
              event.preventDefault();
              console.log("Cancel button clicked");
            }}
          />
        </div>
      </form>
    </div>
  );
}
