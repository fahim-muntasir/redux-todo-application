import React from "react";

export default function Todo({ text }) {
    return (
        <li className="flex items-center gap-2 text-xl ring ring-1 ring-sky-500 p-2 rounded my-2">
            <input type="checkbox" />
            {text}
        </li>
    );
}
