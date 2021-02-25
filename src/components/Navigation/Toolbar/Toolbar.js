import React from 'react'
import classes from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'


const Toolbar =  (props)=>(
     <div className={classes.Toolbar}>
        <DrawerToggle toggle={props.toggleSideDrawer} />
        <Logo/>
        <nav className={classes.DesktopOnly}>
       <NavigationItems></NavigationItems>
       </nav>
    </div>
)

export default Toolbar;