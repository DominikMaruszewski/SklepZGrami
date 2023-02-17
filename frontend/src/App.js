import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';


import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import CartScreen from "./Screens/CartScreen";

function App() {

const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
    <Navbar click={() => setSideToggle(true)}/>
    <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
    <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
<main>
  <Routes>
    <Route exec path="/" component={HomeScreen} />
    <Route exec path="/product/:id" component={ProductScreen} />
    <Route exec path="/cart" component={CartScreen} />
  </Routes>
</main>
    </Router>
  );
}

export default App;
