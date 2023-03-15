import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

import { AppCustomers } from "./pages/AppCustomers";
import { AppProducts } from "./pages/AppProducts";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/customers">Customers</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/customers">
            <AppCustomers />
          </Route>
          <Route path="/products">
            <AppProducts />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
