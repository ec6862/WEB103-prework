import React from "react";
import { Outlet, Link } from "react-router-dom";

const ShowCreators = () => {
    return (
        // Add a background to replicate the website, otherwise this is good!
        // Can use TailwindCSS later on to fix class properties
        <div>
            <nav>
                <ul>
                    <li>
                        <Link className="" to="/">Show Creators</Link>
                    </li>
                    <li>
                        <Link className="" to="/new">Add Creator</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}

export default ShowCreators;