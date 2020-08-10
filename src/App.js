import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Container from "@material-ui/core/Container";

import Home from './scenes/Home/Home';
import About from './scenes/About';
import NavigationBar from './components/NavigationBar/';

import './App.css';

function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route path="/about" component={About}/>
                <Route path="/" component={Home}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;
