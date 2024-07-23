import React from "react";
import { HeaderStyle } from "./Header.css";
import { claroLogo, logo } from "../../assets";

const Header = () => {
    return(
        <div className={HeaderStyle() + " py-2"}>
            <div className="w-full flex justify-content-center align-items-center">
                <img src={logo} className="sm:mr-8 m-0 cursor-pointer image" onClick={() => window.open("https://www.linkedin.com/in/alberto-jolyt-cárdenas-338416228")}/>
            </div>
            <div className="w-full flex justify-content-center align-items-center image">
                <img src={claroLogo}className="sm:ml-8 m-0 cursor-pointer" onClick={() => window.open("https://www.linkedin.com/in/alberto-jolyt-cárdenas-338416228")}/>
            </div>
        </div>
    )
}

export default Header;