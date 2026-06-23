"use client";

import { useState } from "react";

export default function SearchBar({ onSearch }) {

    const [companyName, setCompanyName] = useState("");

    const handleSubmit = (e) => {

        e.preventDefault();

        if (!companyName.trim()) return;

        onSearch(companyName);

    };

    return (

        <form
            onSubmit={handleSubmit}
            className="flex gap-4 justify-center"
        >

            <input
                type="text"
                placeholder="Enter Company Name..."
                value={companyName}
                onChange={(e)=>setCompanyName(e.target.value)}
                className="
                w-full
                max-w-xl
                p-4
                rounded-xl
                bg-gray-900
                border border-gray-700
                "
            />

            <button
                className="
                bg-gradient-to-r from-blue-500 to-cyan-500
                px-6
                rounded-xl
                font-bold
                hover:bg-blue-500
                hover:scale-105
                transition-all
                duration-300
                "
            >
                Analyze
            </button>

        </form>
    );
}