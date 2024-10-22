"use client"; // Add this line if you are using hooks

import { useEffect, useState } from "react";

export default function Services() {
    // Define error state type as string | null
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Simulate an error condition
        const timer = setTimeout(() => {
            setError("Oops! Error: Services not found.");
        }, 2000); // Simulate a delay before the error occurs

        return () => clearTimeout(timer);
    }, []);

    if (error) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50 bg-red-100">
                <h1 className="text-red-500 text-xl">{error}</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-50 bg-red-300">
            <h1 className="text-4xl font-bold mb-4">Services Provided:</h1>
            <ul className="list-disc list-inside text-lg text-gray-700">
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>UI/UX Design</li>
                <li>SEO Services</li>
            </ul>
        </div>
    );
}
