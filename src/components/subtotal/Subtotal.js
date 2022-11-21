import React from 'react'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from "../stateProvider/StateProvider"
import "./Subtotal.css"
import { getBasketTotal } from '../../reducer';
import {useNavigate } from 'react-router-dom';

function Subtotal() {
    const navigate=useNavigate();
    const [{basket}, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            {/* price */}

            <CurrencyFormat
                renderText={(value) => (
                    <div>
                        <p>
                            ( Subtotal {basket.length} items ) : <strong>{value}</strong>

                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </div>
                )}
                decimalScale={2}
                // value={0}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button onClick={(e)=>navigate("/payment")}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
