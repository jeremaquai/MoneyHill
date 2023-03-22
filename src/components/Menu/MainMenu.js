import React from "react";

import { NavLink } from "react-router-dom";
// import { MENUPATHS } from "../../data/Paths";

import { MAINMENUDATA } from "../../data/MainMenuData";

import './MainMenu.css';

export default function MainMenu() {

    
    // menu.style.display = 'none';
    const handleClick = () => {
        const menu = document.getElementById('nav');

        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    }

    return (
        <div className="navDiv" >
        <button onClick={handleClick} >
            <i className="fa-solid fa-bars"></i>
        </button>
        <nav id="nav" className="MainNav" >

            {MAINMENUDATA.map((menuItem, index) => {
                return (
                    <div key={index} className={menuItem.class + 'Group'} >
                        <div className={menuItem.class} >
                            <NavLink to={ menuItem.path } 
                            activeClassName={'active'}
                            role={menuItem.class}  >
                                {menuItem.name} 
                            </NavLink>
                        </div>
                        <div className={menuItem.class + 'SubMenu'}>
                            
                            { menuItem.subMenus.map((subMenuItem, index) => {
                                return (
                                    <div key={index} className={subMenuItem.class}>
                                        <NavLink to={subMenuItem.path}
                                        activeClassName={'active'}
                                        role={subMenuItem.class} >
                                            {subMenuItem.name}
                                        </NavLink>
                                    </div>
                                );
                            }) }
                        </div>
                    </div>
                );
            })}

            
        </nav>
        </div>
    );

    // const menu = document.getElementById('nav');
}


