"use client"; // Add this line if you are using hooks

import { useEffect, useState } from "react";

export default function About() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Set a timeout to simulate loading
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the time (in milliseconds) as needed

        // Cleanup the timeout if the component unmounts
        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-3xl">Loading...</h1>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-5xl">About Page</h1>
        </div>
    );
}
