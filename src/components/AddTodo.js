import React from "react";

export default function AddTodo() {
    return (
        <div className="container mx-auto text-center mb-10">
            <input
                type="text"
                placeholder="Add todo..."
                className="ring ring-sky-300 w-96 bg-transparent rounded py-2 px-5 outline-none text-gray-800 focus:ring-sky-500"
            />
        </div>
    );
}
