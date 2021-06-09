import React from 'react'
import './CheckoutProduct.css';
import { useStateValues } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {

    const [/* { basket } ,  */dispatch] = useStateValues();

    const removeFromBasket = () => {
        //Remove item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt={title} />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                
                <div className="checkoutProduct__rating">
                    {Array(rating)
                        .fill()
                        .map((_,i) => (
                            <div className="containerStar">
                                <img className="star" src="/images/star/star.png" alt="star" />
                            </div>
                        ))
                    }
                    {(() => {
                        switch(rating) {
                            case 5:
                                return '';
                            case 4:
                                return(
                                    <div className="containerStar">
                                        <img className="star" src="/images/star/empty-star.png" alt="star" />
                                    </div>
                                )
                            case 3:
                                return(
                                    <div className="containerStar">
                                        <img className="star" src="/images/star/empty-star.png" alt="star" />
                                        <img className="star" src="/images/star/empty-star.png" alt="star" />
                                    </div>
                                )
                            case 2:
                                return(
                                    <div className="containerStar">
                                        <img className="star" src="/images/star/empty-star.png" alt="star" />
                                        <img className="star" src="/images/star/empty-star.png" alt="star" />
                                        <img className="star" src="/images/star/empty-star.png" alt="star" />
                                    </div>
                                )
                            case 1:
                                return(
                                    <div>
                                        <img className="star" src="/images/star/empty-star.png" alt="star" />
                                        <img className="star" src="/images/star/empty-star.png" alt="star" />
                                        <img className="star" src="/images/star/empty-star.png" alt="star" />
                                        <img className="star" src="/images/star/empty-star.png" alt="star" />
                                    </div>
                                )
                            default:
                                return(
                                    <div className="containerStar">
                                        <img className="star" src="/images/star/empty-star.png" alt="star" />
                                        <img className="star" src="/images/star/empty-star.png" alt="star" />
                                        <img className="star" src="/images/star/empty-star.png" alt="star" />
                                        <img className="star" src="/images/star/empty-star.png" alt="star" />
                                        <img className="star" src="/images/star/empty-star.png" alt="star" />
                                    </div>
                                )
                        }
                    })()}
                </div>

                <button onClick={removeFromBasket}>Retirer du panier</button>
            </div>


        </div>
    )
}

export default CheckoutProduct
