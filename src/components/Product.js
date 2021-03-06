import React from 'react'
import './Product.css'
import { useStateValues } from './StateProvider';

function Product({ id, title, image, price, rating }) {

    const [{ basket } , dispatch] = useStateValues();

    console.log('This is the basket > ', basket)

    const addToBasket = () => {
        //Dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    //CONDITION IF A PRODUCT'S TITLE IS MORE THAN [number] CHARACTERES
    if(title.length > 100) {
        title = title.substring(0,80);
        title = title + '...'
    } 

    return (
        <div className="product" key={id}>
            <div className="product__info">
                {title}
                <p className="product__price">
                    <small>€</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
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
            </div>

            <img src={image} alt={id} />
            <button onClick={addToBasket}>Ajouter au panier</button>
        </div>
    )
}

export default Product
