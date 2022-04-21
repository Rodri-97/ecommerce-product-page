import "./_Navbar.scss";

import MenuIcon from "../../images/icon-menu.svg";
import LogoImg from "../../images/logo.svg";
import GrayIconCart from "../../images/gray-icon-cart.svg";
import AvatarImg from "../../images/image-avatar.png";

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
                <img src={MenuIcon} 
                     alt="Menu Icon" 
                     className="hamburger-menu" 
                     onClick={() => setDisplayMenu(!displayMenu)}
                />
            </div>

            <div className="container logo-container">
                <img src={LogoImg} alt="Logo" />
            </div>

            <div className="container cart-container">
                <img 
                    src={GrayIconCart} 
                    alt="Cart Icon"
                    className="cart-icon" 
                />
                <div className="cart-quantity">1</div>
            </div>

            <div className="container">
                <img src={AvatarImg} className="avatar" alt="Avatar" />
            </div>

            <ul className={(displayMenu && isMobile) ? "expand-menu" : "hide-menu"}>
                {displayedList}
            </ul>
        </nav>
    )
}

export default Navbar;