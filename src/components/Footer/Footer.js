import React from "react";
import './Footer.css';
import { FOOTERDATA } from "../../data/FooterData";


export default function Footer() {
    return (
        <footer>
            
            <div className="MoneyHillContact" >
                <div className="address" >
                    <i className={FOOTERDATA.address.icon} ></i>
                    <address>
                        <p>Money Hill</p>
                        <p>{FOOTERDATA.address.data.street}</p>
                        <p>{FOOTERDATA.address.data.cityStateZip}</p>
                    </address>
                </div>
                <div className="phoneAndEmail" >
                        <p><i className={FOOTERDATA.phone.icon} ></i> {FOOTERDATA.phone.data}</p>
                        <p><i className={FOOTERDATA.email.icon} ></i> {FOOTERDATA.email.data}</p>
                        
                </div>
                <div>
                    <p>
                        <i className={FOOTERDATA.facebook.icon} ></i>
                        <i className={FOOTERDATA.instagram.icon} ></i>
                    </p>
                    <p>
                        <i className={FOOTERDATA.twitter.icon} ></i>
                        <i className={FOOTERDATA.linkedin.icon} ></i>
                    </p>
                </div>
            </div>
            <div className="DevContact" >
                <p>&copy;Jeremaquai2023</p>
            </div>
        </footer>
    );
}