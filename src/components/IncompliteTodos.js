import React from "react";
import Todo from "./Todo";

export default function IncompliteTodos() {
    return (
        <div className="lg:w-96 md:w-96 w-full ring ring-sky-500 h-96 rounded relative overflow-y-auto mb-5 lg:mb-0 md:mb-0 ">
            <div className="sticky top-0 bg-cyan-200 right-0 left-0 pt-5 px-5">
                <h1 className="text-2xl mb-5 text-center text-gray-800 font-semibold">
                    Incomplited Todos
                </h1>

                <hr className="mb-4" />
                <div className="flex justify-between">
                    <div className="">
                        <input
                            type="text"
                            placeholder="Search todos..."
                            className="w-full border-box bg-transparent ring ring-sky-500 ring-1 py-1 px-3 rounded outline-none text-sm"
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                        <div className="w-4 h-4 border border-red-500 rounded-md cursor-pointer hover:bg-red-500"></div>
                        <div className="w-4 h-4 border border-green-500 rounded-md cursor-pointer hover:bg-green-500"></div>
                        <div className="w-4 h-4 border border-yellow-500 rounded-md cursor-pointer hover:bg-yellow-500"></div>
                    </div>
                </div>
                <div className="my-3">
                    <span className="text cursor-pointer text-sm">
                        <i class="fa-solid fa-check-double"></i> Complite all
                        task
                    </span>
                </div>
            </div>
            <div className="px-5">
                <ul>
                    <Todo text="Redux Toolkit" />
                    <Todo text="Redux Toolkit" />
                    <Todo text="Redux Toolkit" />
                </ul>
            </div>
        </div>
    );
}
