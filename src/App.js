import Product from "./components/Product"
import './App.css';
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import CheckoutCard from "./components/CheckoutCard";
import CheckoutPage from "./components/CheckoutPage";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/ubicacion";

const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 5,
    }}
  />
);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/checkout-page">
            <CheckoutPage/>
          </Route>
          <Route path="/">
            <div className="texto">
              <h1>Para ti</h1>
              <ColoredLine color="red" />
            </div>
            <Products/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
