import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <nav className="bg-blue-600 p-4 shadow-md">
                <ul className="flex space-x-6 text-white font-semibold">
                    <li>
                        <Link to="/" className="hover:text-gray-300 transition-colors duration-200">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-300 transition-colors duration-200">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-300 transition-colors duration-200">Contact</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar