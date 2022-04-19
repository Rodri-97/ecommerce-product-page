import styles from "./Navbar.module.scss";

import menuIcon from "../../images/icon-menu.svg";
import logoImg from "../../images/logo.svg";
import cartIcon from "../../images/icon-cart.svg";
import avatarImg from "../../images/image-avatar.png";

import { useState, useEffect } from "react";

const { 
        nav, container, logoContainer, avatar, hamburgerMenu, 
        expandMenu, hideMenu, menuElement 
} = styles;

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

    return (
        <nav className={nav}>
            <div className={container}>
                <img src={menuIcon} 
                     alt="Menu Icon" 
                     className={hamburgerMenu} 
                     onClick={() => setDisplayMenu(!displayMenu)}
                />
            </div>

            <div className={[container, logoContainer].join(" ")}>
                <img src={logoImg} alt="Logo" />
            </div>

            <div className={container}>
                <img src={cartIcon} alt="Cart Icon" />
            </div>

            <div className={container}>
                <img src={avatarImg} className={avatar} alt="Avatar" />
            </div>

            <ul className={(displayMenu && isMobile) ? expandMenu : hideMenu}>
                <li className={menuElement}>Collections</li>
                <li className={menuElement}>Men</li>
                <li className={menuElement}>Women</li>
                <li className={menuElement}>About</li>
                <li className={menuElement}>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;