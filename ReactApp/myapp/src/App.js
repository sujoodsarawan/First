import React from 'react';
import {BrowserRouter , Route } from 'react-router-dom' ;

import './App.css';
import Nav from './Components/Nav';
import ProductList from './Components/ProductList';
import Dabroushed from './Components/Dabroushed';
import Product from './Components/Product';
import Item from './Components/Item';
import CartPage from './Pages/Cart';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
  
        <Route path='/' component={Nav}/>
        <Route  exact path='/' component={ProductList}/>

       <Route path ='/search/product/' component={Item}/>
       <Route path ='/cart' component={CartPage}/>
        <Route path='/' component={Dabroushed}/>
        <Route  path ="/item/:id" component={Product}/>

        

    </div>

    </BrowserRouter>
  );
}

export default App;
