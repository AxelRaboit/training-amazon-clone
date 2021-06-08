import React from 'react'
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Sous-total ( 0 articles ):
                            <strong>0</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            Cette commande contient un cadeau
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"€"}
            />

            <button>Procéder au paiement</button>

        </div>
    )
}

export default Subtotal
