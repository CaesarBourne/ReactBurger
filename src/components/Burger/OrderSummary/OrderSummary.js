import React from 'react'
import Hoc from '../../../hoc/HocAux/Hoc'

import Button from '../../UIThemes/Button/Button'

const OrderSummary = (props) => {
    const listData = Object.keys(props.ingredients)
                    .map(ingKey => { return <li key={ingKey}><strong>{ingKey}</strong> : {props.ingredients[ingKey]} </li>})
    return(
        <Hoc>
    <h3>Order</h3>
    <p>This are the details of your order</p>
    <ul>
        {listData}
    </ul>
    <p><strong>Total price : {props.price}</strong></p>
    <p>Continue to Checkout ?</p>
    <Button clicked={props.purchaseCancelled} type={'Danger'}>Cancel</Button>
    <Button clicked={props.purchaseProceed} type={'Success'}>Proceed</Button>
    </Hoc>
    )
}

export default OrderSummary