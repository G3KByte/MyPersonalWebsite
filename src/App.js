import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './scenes/Home/Home';
import About from './scenes/About/About';
import NotFound from './scenes/NotFound/NotFound';
import NavigationBar from "./components/NavigationBar";

import backgroundImage from './assets/images/HeaderBackground.jpg';

import styles from './App.module.css';

import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';

import './App.css';

library.add(fab);

function App() {
  return (
    <div className={styles.appContainer}>
      <img src={backgroundImage} className={styles.appBackground}/>
      <div className={styles.appContentContainer}>
        <Router>
          <NavigationBar/>
          <div className={styles.appInnerContentContainer}>
            <Switch>
              <Route path="/about" component={About}/>
              <Route exact path="/" component={Home}/>
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
