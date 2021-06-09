import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValues } from './StateProvider';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ basket } /* , dispatch */] = useStateValues();
    
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

                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
                    {/* CheckoutProduct */}
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
