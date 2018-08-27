import Main from './Main';
import Form from './Form';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
    render() { 
        return (
            <div>
            <Main />
            </div>
        );
    }
}

export default App;

