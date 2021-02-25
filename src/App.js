import React, {Component} from 'react'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './hoc/Layout/Layout';

class App extends Component{

  render(){

    return   (
    <div>
    <Layout>
      <BurgerBuilder></BurgerBuilder>
    </Layout>
    </div>)
  }

}

// function App() {
//   return (
//     <div>
     
//     </div>
//   );
// }

export default App;
