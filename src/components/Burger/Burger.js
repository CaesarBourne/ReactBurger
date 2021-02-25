import React, {Component} from "react"
import BurgerIngredient from './BurgerIngredients/BurgerIngredients';
import classes from'./Burger.module.css'

const Burger = (props)=>{

    let renderedElement = Object.keys(props.ingredients)
            .map((ingKey, index)=>{
                return [...Array(props.ingredients[ingKey])]
                  .map((val, ind) =>{
                  return  <BurgerIngredient key={ingKey+ind} type={ingKey} />
                  })
            }).reduce((initValArr, nxtVal) => { return initValArr.concat(nxtVal)}, [])
            if(renderedElement.length === 0){
                renderedElement =   <p>Please start adding ingredients</p>
            }
        return(
           <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {renderedElement}
            <BurgerIngredient type='bread-bottom'/>
            </div>
        )

    }

export default Burger;