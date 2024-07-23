import React from "react";
import { logo } from "../../assets";
import { FooterStyle } from "./Footer.css";

const Footer = () => {
    return(
        <div className={ FooterStyle() + " py-4 px-0 m-0"}>
            <div className="w-full md:hidden flex justify-content-center align-items-center">
                <img src={logo} className="cursor-pointer image" onClick={() => window.open("https://www.linkedin.com/in/alberto-jolyt-cárdenas-338416228")}/>
            </div>
            <div className="w-full flex justify-content-center align-items-center cursor-pointer">
                <span className="cursor-pointer font-bold label" onClick={() => window.open("https://www.linkedin.com/in/alberto-jolyt-cárdenas-338416228")}>Aviso de privacidad / Contacto</span>
            </div>
            <div className="w-full md:flex hidden justify-content-center align-items-center">
                <img src={logo} className="cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/alberto-jolyt-cárdenas-338416228")}/>
            </div>
            <div className="w-full flex gap-2 justify-content-center align-items-center">
                <div className="icon-container cursor-pointer" style={{ backgroundColor: '#e64edb' }} onClick={() => window.open("https://www.linkedin.com/in/alberto-jolyt-cárdenas-338416228")}>
                    <i className="pi pi-instagram"/>
                </div>
                <div className="icon-container cursor-pointer" style={{ border: '1px solid white' }} onClick={() => window.open("https://www.linkedin.com/in/alberto-jolyt-cárdenas-338416228")}>
                    <i className="pi pi-twitter"/>
                </div>
                <div className="icon-container cursor-pointer" style={{ backgroundColor: '#377ac1' }} onClick={() => window.open("https://www.linkedin.com/in/alberto-jolyt-cárdenas-338416228")}>
                    <i className="pi pi-facebook"/>
                </div>
                <div className="icon-container cursor-pointer" style={{ backgroundColor: '#ce2222' }} onClick={() => window.open("https://www.linkedin.com/in/alberto-jolyt-cárdenas-338416228")}>
                    <i className="pi pi-youtube"/>
                </div>
            </div>
        </div>
    )
}

export default Footer;