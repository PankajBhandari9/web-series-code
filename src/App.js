import React from 'react';
import {Switch, Route} from 'react-router-dom'
import Netflix from './netflix/Netflix'
import Amazon from './amazon/Amazon';
import Hotstar from './hotstar/Hotstar'
import Error from './Error';
import Menu from './Menu';
import Footer from './Footer';


const App=()=>{
  return(
    <>
      <Menu/>
      <Switch>
        <Route exact path='/' component={Netflix}/>
        <Route exact path='/amazon' component={Amazon}/>
        <Route exact path='/hotstar' component={Hotstar}/>
        <Route component={Error}/>
      </Switch>
      <Footer/>
    </>
  );
}



export default App;
