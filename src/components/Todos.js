import React from "react";
import CompliteTodos from "./CompliteTodos";
import IncompliteTodos from "./IncompliteTodos";

export default function Todos() {
    return (
        <div className="lg:flex md:flex block md:container lg:container mx-auto w-[90%] lg:justify-evenly md:justify-evenly md:gap-5">
            <IncompliteTodos />
            <CompliteTodos />
        </div>
    );
}
