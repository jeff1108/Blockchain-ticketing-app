import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import React, { Component } from 'react'
import Form from './Form';
import Submit from './Form'
import Tickets from './Tickets'


const Main = () => (
  <main>
  <Switch>
  <Route exact path='/' component={Form}/>
  <Route exact path='/tickets' component={Tickets}/>
  <Route exact path='/form' component={Form}/>
  </Switch>
  </main>
  )

export default Main;