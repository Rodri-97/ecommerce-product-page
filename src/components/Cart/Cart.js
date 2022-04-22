import "./_Cart.scss";

import Product1Thumbnail from "../../images/image-product-1-thumbnail.jpg";
import TrashIcon from "../../images/icon-delete.svg";

const Cart = (props) => {
    const { displayCartMenu, navbarCartQuantity, resetNavbarCartQuantity } = props;

    const emptyCartContent = <div className="empty-content">
        Your cart is empty
    </div>

    const filledCartContent = <div className="filled-content">
        <div className="content-info">
            <div className="thumbnail-container">
                <img src={Product1Thumbnail} alt="sneaker thumbnail" className="thumbnail"/>
            </div>

            <div className="text">
                Fall Limited Edition Sneakers<br />
                $125.00 x {navbarCartQuantity} 
                <span className="total-price">
                    ${(125 * navbarCartQuantity).toFixed(2)}
                </span>
            </div>

            <div className="trash-icon-container" onClick={() => resetNavbarCartQuantity()}>
                <img src={TrashIcon} alt="trash icon" className="trash-icon"/>
            </div>
        </div>
        <button className="checkout-btn">Checkout</button>
    </div>

    return (
        <div className={displayCartMenu ? "show-cart-menu" : "hide-cart-menu"}>
            <div className="title">Cart</div>
            {navbarCartQuantity === 0 ? emptyCartContent : filledCartContent}
        </div>
    )
}

export default Cart;