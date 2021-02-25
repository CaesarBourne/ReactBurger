import React from 'react'
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.module.css'

const BuildControls = (props) =>{
    const controls  = [
        {label: "Salad", type:"salad"},
        {label: "Bacon", type:"bacon"},
        {label: "Cheese", type:"cheese"},
        {label: "Meat", type:"meat"}
    ]
    return(
        <div className={classes.BuildControls}>
            <strong><p>Total Price : {props.price.toFixed(2)}</p></strong>
            {controls.map( ctrl =>{ return (
            <BuildControl
             add={() => {props.ingredientAdded(ctrl.type)}} 
             key={ctrl.label} 
             Label={ctrl.label}
             disabled={props.disabledInfo[ctrl.type]}
             remove = {() => {props.ingredientRemoved(ctrl.type)}}
              key={ctrl.label}/> )}
             )}
             <button 
             disabled={props.checkoutDisabled} 
             onClick={props.orderClicked}
             className={classes.OrderButton}>Order Burger</button>
        </div>
    )
}

export default BuildControls;