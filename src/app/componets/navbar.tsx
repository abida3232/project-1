import Link from "next/link";

export default function Navbar() {
    return (
        <div className="bg-black text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">Abida</div>
            <div className="flex space-x-4">
                <Link href="/" className="hover:text-gray-400">Home</Link>
                <Link href="/about" className="hover:text-gray-400">About</Link>
                <Link href="/contact" className="hover:text-gray-400">Contact Us</Link>
                <Link href="/services" className="hover:text-gray-400">Services</Link>
            </div>
        </div>
    );
}
