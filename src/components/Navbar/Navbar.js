import styles from "./Navbar.module.scss";
import menuIcon from "../../images/icon-menu.svg";
import logoImg from "../../images/logo.svg";
import cartIcon from "../../images/icon-cart.svg";
import avatarImg from "../../images/image-avatar.png";

const { nav, container, logoContainer, avatar } = styles;

const Navbar = () => {
    return (
        <nav className={nav}>
            <div className={container}>
                <img src={menuIcon} alt="Menu Icon" />
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
        </nav>
    )
}

export default Navbar;