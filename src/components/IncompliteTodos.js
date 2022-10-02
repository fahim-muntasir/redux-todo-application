import React from "react";
import Todo from "./Todo";

export default function IncompliteTodos() {
    return (
        <div className="lg:w-96 md:w-96 w-full ring ring-sky-500 h-96 rounded relative overflow-y-auto ">
            <div className="sticky top-0 bg-cyan-200 right-0 left-0 pt-5 px-5">
                <h1 className="text-2xl mb-5 text-center text-gray-800 font-semibold">
                    Incomplited Todos
                </h1>
                <hr className="mb-5" />
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
