import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../App.css"

const Navbar = () => {
    return (
        // Add a background to replicate the website, otherwise this is good!
        // Can use TailwindCSS later on to fix class properties
        <div>
            <nav>
                <ul className="p-5 border-sky-500 space-x-2">
                    <li className="inline">
                        <Link className="p-3 rounded-xl bg-sky-500 text-inherit hover:text-inherit hover:bg-sky-600" to="/">Show Creators</Link>
                    </li>
                    <li className="inline">
                        <Link className="p-3 rounded-xl bg-sky-500 text-inherit hover:text-inherit hover:bg-sky-600" to="/new">Add Creator</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}

export default Navbar;