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
                        <p>{FOOTERDATA.address.data.name}</p>
                        <p>{FOOTERDATA.address.data.street}</p>
                        <p>{FOOTERDATA.address.data.cityStateZip}</p>
                    </address>
                </div>
                <div className="phoneAndEmail" >
                        <p><i className={FOOTERDATA.phone.icon} ></i> {FOOTERDATA.phone.data}</p>
                        <p><i className={FOOTERDATA.email.icon} ></i> {FOOTERDATA.email.data}</p>
                        
                </div>
                <div className="icons" >
                    <p>
                        <a href={FOOTERDATA.facebook.link}
                            role={'facebookLink'}
                            target={'_blank'}
                            rel="noreferrer" >

                            <i alt={'facebookIcon'} className={FOOTERDATA.facebook.icon} ></i>
                        </a>
                        <a href={FOOTERDATA.instagram.link}
                            role={'instagramLink'}
                            target={'_blank'}
                            rel="noreferrer" >
                            <i className={FOOTERDATA.instagram.icon} ></i>
                        </a>
                    </p>
                    <p>
                        <a href={FOOTERDATA.twitter.link} 
                            role={'twitterLink'}
                            target={'_blank'}
                            rel="noreferrer" >
                            <i className={FOOTERDATA.twitter.icon} ></i>
                        </a>
                        <a href={FOOTERDATA.linkedin.link}
                            role={'linkedinLink'}
                            target={'_blank'}
                            rel={'noreferrer'} >
                            <i className={FOOTERDATA.linkedin.icon} ></i>
                        </a>
                    </p>
                </div>
            </div>
            <div className="DevContact" >
                <p>&copy;Jeremaquai2023</p>
            </div>
        </footer>
    );
}