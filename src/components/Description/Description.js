import "./_Description.scss";

import IconMinus from "../../images/icon-minus.svg";
import IconPlus from "../../images/icon-plus.svg";
import WhiteIconCart from "../../images/white-icon-cart.svg";

import { useState } from "react";

const Description = () => {
    const [cartQuantity, setCartQuantity] = useState(0);

    const reduceCartQuantity = () => {
        if (cartQuantity < 1) return;
        setCartQuantity(cartQuantity - 1);
    }

    const increaseCartQuantity = () => {
        if (cartQuantity > 99) {
            alert("C'mon, what are you gonna do with all those shoes?");
            return;
        }
        setCartQuantity(cartQuantity + 1);
    }

    return (
        <div className="description">

            <h5 className="subtitle">SNEAKER COMPANY</h5>

            <h1 className="title">Fall Limited Edition Sneakers</h1>

            <p className="text">
               These low-profile sneakers are your perfect casual wear companion.
               Featuring a durable rubber outer sole, they'll withstand everything
               the weather can offer.
            </p>

            <div className="prices">
                <div className="new-price">$125.00</div>
                <div className="deduction-container"><span className="deduction">50%</span></div>
                <div className="old-price">$250.00</div>
            </div>

            <div className="cart-quantity-container">
                <div 
                    className="minus-container"
                    onClick={() => reduceCartQuantity()}
                >
                    <img src={IconMinus} alt="Minus Icon"/>
                </div>

                <div className="cart-quantity">{cartQuantity}</div>
                
                <div 
                    className="plus-container"
                    onClick={() => increaseCartQuantity()}
                >
                    <img src={IconPlus} alt="Plus Icon"/>
                </div>
            </div>

            <div className="add-to-cart">
                <img 
                    src={WhiteIconCart} 
                    alt="Cart Icon"
                    className="cart-icon"
                />
                <span>Add to cart</span>
            </div>

        </div>
    )
}

export default Description;