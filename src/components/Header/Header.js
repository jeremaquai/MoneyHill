import React from "react";

import { Link } from "react-router-dom";
import { MENUPATHS } from "../../data/Paths";

import './Header.css';

export default function Header() {
    return (
        <header>
            <div className="HeaderContact" >
                <a href="#" >Contact Us</a>
            </div>
            <div className="MoneyHillLogo" >
                <Link to={MENUPATHS.home} >
                    <img src="https://moneyhill.com/wp-content/uploads/2020/03/MoneyHill_Vertical_White.svg" alt="The Money Hill Logo" />
                </Link>
            </div>
            <div className="HeaderLogin" >
                <a href="https://www.gnoproperty.com/our-communities/money-hill-homeowners-association/" target="_blank" rel="noreferrer" >Login</a>
            </div>
        </header>
    );
}