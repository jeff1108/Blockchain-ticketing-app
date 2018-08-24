import { Switch, Route } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import React, { Component } from 'react'
import Form from './Address_form';
import Submit from './Address_form'
import Dummy from './Dummy'


const Main = () => (
  <main>
  <Switch>
  <Route exact path='/' component={Form}/>
  <Route exact path='/dummy' component={Dummy}/>
  <Route exact path='/tickets' component={Submit}/>
</Switch>
</main>
  )

export default Main;