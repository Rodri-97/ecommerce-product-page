import "./_Navbar.scss";

import menuIcon from "../../images/icon-menu.svg";
import logoImg from "../../images/logo.svg";
import cartIcon from "../../images/icon-cart.svg";
import avatarImg from "../../images/image-avatar.png";

import { useState, useEffect } from "react";

const Navbar = () => {
    const maxMobileWidth = 800;
    const [isMobile, setIsMobile] = useState(window.innerWidth < maxMobileWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const isItMobile = window.innerWidth < maxMobileWidth;
            if (isItMobile !== isMobile) setIsMobile(isItMobile);
        });
    });

    const [displayMenu, setDisplayMenu] = useState(false);

    const listElements = ["Collections", "Men", "Women", "About", "Contact"];
    const displayedList = listElements.map((element) => {
        return <li key={element} className="menu-element">{element}</li>
    })

    return (
        <nav className="nav">
            <div className="container">
                <img src={menuIcon} 
                     alt="Menu Icon" 
                     className="hamburger-menu" 
                     onClick={() => setDisplayMenu(!displayMenu)}
                />
            </div>

            <div className="container logo-container">
                <img src={logoImg} alt="Logo" />
            </div>

            <div className="container">
                <img src={cartIcon} alt="Cart Icon" />
            </div>

            <div className="container">
                <img src={avatarImg} className="avatar" alt="Avatar" />
            </div>

            <ul className={(displayMenu && isMobile) ? "expand-menu" : "hide-menu"}>
                {displayedList}
            </ul>
        </nav>
    )
}

export default Navbar;