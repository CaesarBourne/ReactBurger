import React, {Component} from 'react';
import Hoc from '../HocAux/Hoc';
import classes from './Layout.module.css'
import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component{
  
    state = {
        showDrawer : false
    } 

    closeSideDrawerHandler = ()=> {
        this.setState({showDrawer : false})
    }
    toggleSideDawer = ()=> {
        this.setState( (prevState) => {
            return {showDrawer : !prevState.showDrawer}})
    }
    render(){
        return( 
            <Hoc>
           <Toolbar toggleSideDrawer={this.toggleSideDawer} />
           <SideDrawer showDrawer={this.state.showDrawer} closeDrawer={this.closeSideDrawerHandler}/>
            <main className={classes.content}>
                {this.props.children}
            </main>
            </Hoc>
            )
    }
}
export default Layout;