import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValues } from './StateProvider';
import { getBasketTotal } from './Reducer';

function Subtotal() {

    const[{ basket }, dispatch] = useStateValues();
    console.log(basket);

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Sous-total ( {basket.length} articles ):
                            <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            Cette commande contient un cadeau
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"€"}
            />

            <button>Procéder au paiement</button>

        </div>
    )
}

export default Subtotal
