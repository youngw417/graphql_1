import React, {Fragment, useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
// import { Route } from 'react-router-dom';
// import PetForm from './components/PetForm';


const App = () => {

  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment className="App">
    <NavBar />
    <Home />
    {/* <Route exact path='/petform' component={PetForm} /> */}
    </Fragment>
  );
}

export default App;
