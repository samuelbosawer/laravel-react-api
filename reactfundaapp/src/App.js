import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Sacode from './pages/Sacode';
import Addsacode from './pages/Addsacode';
import Editsacode from './pages/Editsacode';


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Sacode} /> 
            <Route exact path="/add-sacode" component={Addsacode} /> 
            <Route exact path="/edit-sacode/:id" component={Editsacode} /> 
        </Switch>
    </Router>
  );
}

export default App;
