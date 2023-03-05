import React from "react";

import { 
    Switch, 
    Route 
} from "react-router-dom";

import { MENUPATHS } from "../../data/Paths";

import HomePage from "../../pages/HomePage/HomePage";

import './PageBody.css';

export default function PageBody() {
    return (
        <div className="Switch" >
            <Switch>
                <Route path={MENUPATHS.home}>
                    <HomePage />
                </Route>
            </Switch>
        </div>
        
    );
}