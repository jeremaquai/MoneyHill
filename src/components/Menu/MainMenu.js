import React from "react";

import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectMobileLayout } from "../../app/appSlice";
// import { MENUPATHS } from "../../data/Paths";

import { MAINMENUDATA } from "../../data/MainMenuData";

import './MainMenu.css';

export default function MainMenu() {

    const mobileState = useSelector(selectMobileLayout);

    
    // menu.style.display = 'none';
    const handleClick = () => {
        const menu = document.getElementById('nav');

        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'flex';
        }
    }

    const handleSubMenuClick = (subMenuToDisplay) => {
        const subMenu = document.getElementById(subMenuToDisplay);

        if (subMenu.style.display === 'none') {
            subMenu.style.display = 'block';
        } else {
            subMenu.style.display = 'none';
        }
    }

    const ifMobileAction = () => {
        while (mobileState) {
            return (
                <div className="mobileNavDiv" >
                    <button data-testid='MenuButton' onClick={handleClick} >
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
        };

        while (!mobileState) {
            return (
                    <nav id="nav" className="MainNav" >

                        {MAINMENUDATA.map((menuItem, index) => {
                            return (
                                <div key={index} className={menuItem.class + 'Group'} >
                                    <div className={menuItem.class} >
                                        <NavLink to={ menuItem.path } 
                                        activeClassName={'active'}
                                        role={menuItem.class}  >
                                            {menuItem.name} 
                                            <button className={ menuItem.class + 'Button subMenuRevealButton'} 
                                                    onClick={handleSubMenuClick.bind(this, [menuItem.class + 'SubMenu'])}
                                                    data-testid={ menuItem.class + 'Button' } >
                                                <i className="fa-solid fa-caret-down"></i>
                                            </button>
                                        </NavLink>
                                    </div>
                                    <div style={{display: 'none'}}  id={menuItem.class + 'SubMenu' } className={menuItem.class + 'SubMenu'}>
                                        
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
                
            );
        }
    }

    return ifMobileAction();

    // const menu = document.getElementById('nav');
}


