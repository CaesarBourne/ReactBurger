import React from 'react'
import classes from './BuildControl.module.css'

const BuildControl = (props) =>{
    return(
       <div className={classes.BuildControl}>
          <div className={classes.Label}>{props.Label}</div>
          <button className={classes.Less} disabled={props.disabled} onClick={props.remove}>Less</button>
          <button onClick={props.add}  className={classes.More}>More</button>
       </div> 
    )
}

export default BuildControl;