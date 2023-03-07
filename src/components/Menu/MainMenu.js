import React from "react";

import { Link } from "react-router-dom";
import { MENUPATHS } from "../../data/Paths";

import { MAINMENUDATA } from "../../data/MainMenuData";

import './MainMenu.css';

export default function MainMenu() {
    
    const checkForSubMenu = (item) => {
        if (item.subMenus) {
            // item.subMenus.map(())
            item.subMenus.map((subMenuItem, index)=> {
                console.log(subMenuItem.name)
                return (
                    // <p>{subMenuItem.name}</p>
                    <Link key={index} to={subMenuItem.path} >
                        {subMenuItem.name}
                    </Link>
                )
            })
        } 
    }

    return (
        <nav className="MainNav" >

            {MAINMENUDATA.map((menuItem, index) => {
                return (
                    <div key={index} className={menuItem.class + 'Group'} >
                        <div className={menuItem.class} >
                            <Link to={ menuItem.path } >
                                {menuItem.name}
                            </Link>
                        </div>
                        <div className={menuItem.class + 'SubMenu'}>
                            
                            { menuItem.subMenus.map((subMenuItem, index) => {
                                return (
                                    <div key={index} className={subMenuItem.class}>
                                        <Link to={subMenuItem.path} >
                                            {subMenuItem.name}
                                        </Link>
                                    </div>
                                );
                            }) }
                        </div>
                    </div>
                );
            })}

            
        </nav>
    );
}
