import React from "react";

export default function Todo({ text }) {
    return (
        <li className="flex justify-between items-center gap-2 text-xl ring ring-1 ring-sky-500 p-2 rounded my-2">
            <div className="flex items-center gap-2">
                <input type="checkbox" />
                {text}
            </div>
            <div className="flex gap-2 items-center">
                <div className="w-4 h-4 border border-red-500 rounded-md cursor-pointer hover:bg-red-500"></div>
                <div className="w-4 h-4 border border-green-500 rounded-md cursor-pointer hover:bg-green-500"></div>
                <div className="w-4 h-4 border border-yellow-500 rounded-md cursor-pointer hover:bg-yellow-500"></div>
                <i className="fa-solid fa-xmark text-gray-800 cursor-pointer"></i>
            </div>
        </li>
    );
}
