import React from "react";

import { Link } from "react-router-dom";
import { MENUPATHS } from "../../data/Paths";

import './Menu.css';

export default function Menu() {
    return (
        <nav className="MainNav" >
            <div className="link">
                <Link to={ MENUPATHS.home } >
                    Home
                </Link>
            </div>
        </nav>
    );
}
