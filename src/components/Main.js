import { Switch, Route } from 'react-router-dom';
import React from 'react';
import Details from './Details';
import Tickets from './Tickets';
import Confirmation from './Confirmation';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Details}/>
      <Route exact path='/tickets' component={Tickets}/>
      <Route exact path='/form' component={Details}/>
      <Route exact path='/confirmation' component={Confirmation}/>
    </Switch>
  </main>
);

export default Main;
