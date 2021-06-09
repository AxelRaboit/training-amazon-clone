import React from 'react';
import "./Checkout.css";
import Subtotal from './Subtotal';

function Checkout() {
    
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__pub"
                    src="/images/checkout/banner/amazon-pub-checkoutbanner.png"
                    alt="checkout banner pub"
                />

                <div>
                    <h2 className="checkout__title">
                        Votre panier Amazon
                    </h2>
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal />
                {/* <h2>Sous-total</h2> */}
            </div>
        </div>
    )
}

export default Checkout
