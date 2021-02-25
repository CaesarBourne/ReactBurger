import React, {Component} from 'react'
import classes from './Modal.module.css'
import HOC from '../../../hoc/HocAux/Hoc'
import BackDrop from '../BackDrop/BackDrop'

class Modal extends Component {

    componentDidUpdate(){
        console.log("Component is updating unnecessarily again");
    }
    shouldComponentUpdate(nextprops, nextState){
        return this.props.show != nextprops.show
    }
    render(){
        return <HOC>
        <BackDrop show={this.props.show} close={this.props.backdropClose}/>
                    <div className={classes.Modal}
                style={{transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity :this.props.show ? '1' : '0'}}>
        {this.props.children}
    </div>
    </HOC>
    }
  
}

export default Modal;