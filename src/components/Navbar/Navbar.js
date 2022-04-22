import "./_Navbar.scss";

import MenuIcon from "../../images/icon-menu.svg";
import LogoImg from "../../images/logo.svg";
import GrayIconCart from "../../images/gray-icon-cart.svg";
import AvatarImg from "../../images/image-avatar.png";

import { useState, useEffect } from "react";

import Cart from "../Cart/Cart.js";

const Navbar = (props) => {
    const { navbarCartQuantity, resetNavbarCartQuantity } = props;

    const maxMobileWidth = 1200;
    const [isMobile, setIsMobile] = useState(window.innerWidth < maxMobileWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            const isItMobile = window.innerWidth < maxMobileWidth;
            if (isItMobile !== isMobile) setIsMobile(isItMobile);
        });
    });

    const [displayOptionsMenu, setDisplayOptionsMenu] = useState(false);

    const listElements = ["Collections", "Men", "Women", "About", "Contact"];
    const displayedList = listElements.map((element) => {
        return <li key={element} className="options-menu-element">{element}</li>
    })

    const [displayCartMenu, setDisplayCartMenu] = useState(false);

    const toggleMenu = (menu) => {
        if (menu === "cart") {
            if (displayOptionsMenu === true) setDisplayOptionsMenu(false);
            setDisplayCartMenu(!displayCartMenu);
            return;
        }

        if (displayCartMenu === true) setDisplayCartMenu(false);
        setDisplayOptionsMenu(!displayOptionsMenu);
    }

    return (
        <nav className="nav">
            <div className="container hamburger-container">
                <img src={MenuIcon} 
                     alt="Menu Icon" 
                     className="hamburger-menu" 
                     onClick={() => toggleMenu("options")}
                />
            </div>

            <div className="container logo-container">
                <img src={LogoImg} alt="Logo" />
            </div>

            <ul className={!isMobile ? "desktop-options-menu" : "hide-menu"}>
                {displayedList}
            </ul>

            <div className="container cart-container" onClick={() => toggleMenu("cart")}>
                <img 
                    src={GrayIconCart} 
                    alt="Cart Icon"
                    className="cart-icon" 
                />
                <div className="cart-quantity">{navbarCartQuantity > 0 ? navbarCartQuantity : null}</div>
            </div>

            <div className="container">
                <img src={AvatarImg} className="avatar" alt="Avatar" />
            </div>

            <ul className={(displayOptionsMenu && isMobile) ? "show-options-menu" : "hide-menu"}>
                {displayedList}
            </ul>

            <Cart 
                displayCartMenu={displayCartMenu} 
                navbarCartQuantity={navbarCartQuantity}
                resetNavbarCartQuantity={resetNavbarCartQuantity}
            />
        </nav>
    )
}

export default Navbar;