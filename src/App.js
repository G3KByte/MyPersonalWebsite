import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './scenes/Home/Home';
import About from './scenes/About';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import './App.css';

library.add(fab);

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
