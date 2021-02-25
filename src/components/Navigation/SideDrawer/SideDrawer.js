import React from 'react';
import classes from './SideDrawer.module.css'

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UIThemes/BackDrop/BackDrop';
import Hoc from '../../../hoc/HocAux/Hoc';

const SideDrawer = (props)=>{

    let drawerClasses =[classes.SideDrawer]

   props.showDrawer ? drawerClasses.push(classes.Open) : drawerClasses.push(classes.Close)

return (
    <Hoc>
        <div className={classes.BackDrop}>
          <BackDrop show={props.showDrawer} close={props.closeDrawer}/>
          </div>
    <div className={drawerClasses.join(' ')}>
        <div className={classes.Logo}>
        <Logo/>
        </div>
        <nav>
            <NavigationItems/>
        </nav>
    </div>
    </Hoc>
)

}

export default SideDrawer