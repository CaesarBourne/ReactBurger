import React, {Component} from "react";
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UIThemes/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import HocAux from "../../hoc/HocAux/Hoc";

export const INGREDIENT_PRICES = {
    salad : 0.5,
    bacon : 0.4,
    cheese : 0.6,
    meat :1.4
}

class BurgerBuilder extends Component{

    state = {
        ingredients : {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat :0
        },
        totalPrice:  4,
        disabledCheckout: true,
        purchaseModalCondition: false
    }
    addIngredientsHandler = (ingredient) => {
        console.log("Ingredients given ", ingredient + " state " + this.state )
        let ingChange = this.state.ingredients[ingredient] + 1;
        let originalState = { ...this.state.ingredients}
        originalState[ingredient]  = ingChange
        let newTotalPrice = this.state.totalPrice+INGREDIENT_PRICES[ingredient]
        this.setState({ingredients: originalState, totalPrice : newTotalPrice})
        this.updateCheckoutButton(originalState);
    }
    removeIngredientsHandler = (ingredient) => {
        console.log("Ingredients given ", ingredient + " state " + this.state )
        if(this.state.ingredients[ingredient] <= 0 ){
            return;
        }
        let ingChange = this.state.ingredients[ingredient] - 1;
        let originalState = { ...this.state.ingredients}
        originalState[ingredient]  = ingChange
        let newTotalPrice = this.state.totalPrice - INGREDIENT_PRICES[ingredient]
        this.setState({ingredients: originalState, totalPrice : newTotalPrice})
        this.updateCheckoutButton(originalState)
    }
    updateCheckoutButton = (ingredients)=>{
     //   let presentIngridState = {...this.state.ingredients}
        let stateIng = Object.keys(ingredients)
        .map((key) =>{
            return ingredients[key] })
            .reduce((presVal, nextVal)=>{return presVal+ nextVal}, 0);
            this.setState({disabledCheckout: !(stateIng > 0)})
        
    }

    purchaseOrderHandler = ()=>{
        this.setState({purchaseModalCondition : true})
    }
    
    purchaseCancelHandler = ()=>{
        this.setState({purchaseModalCondition : false})
    }
    purchaseProceedHandler = ()=>{
       alert('Purchase complete')
    }


    render(){
        let disabledInfo = { ...this.state.ingredients}
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
        }
  
        return(
            <HocAux>
                 <Modal  show={this.state.purchaseModalCondition} backdropClose={this.purchaseCancelHandler}>
                     <OrderSummary purchaseCancelled={this.purchaseCancelHandler}
                     price={this.state.totalPrice}
                     purchaseProceed={this.purchaseProceedHandler}
                      ingredients={this.state.ingredients}/>
                 </Modal>
            <Burger  ingredients={this.state.ingredients} />
            <BuildControls ingredientAdded={this.addIngredientsHandler} 
            ingredientRemoved={this.removeIngredientsHandler}
            price={this.state.totalPrice}
            disabledInfo={disabledInfo}
            checkoutDisabled={this.state.disabledCheckout}
            orderClicked={this.purchaseOrderHandler}
          />
           
            </HocAux>
        )
    }
}

export default BurgerBuilder;