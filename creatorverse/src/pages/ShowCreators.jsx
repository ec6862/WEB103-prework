import React from "react";
import { Outlet, Link } from "react-router-dom";

const ShowCreators = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link className="" to="/">Show Creators</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
}

export default ShowCreators;