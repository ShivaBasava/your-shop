import './App.css';
import boostrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbarcompo';
import Homescreen from './screens/Homescreen';
import React from 'react';
import Productdescscreen from './screens/Productdescscreen';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>

        <Route path='/' component={Homescreen} exact />

        <Route path='/product/:id' component={Productdescscreen} />

      </BrowserRouter>
    </div>
  );
}

export default App;
