import React from "react";
import AddTodo from "./AddTodo";
import Navbar from "./Navbar";
import Todos from "./Todos";

export default function Home() {
    return (
        <main>
            <Navbar />
            <AddTodo />
            <Todos />
        </main>
    );
}
