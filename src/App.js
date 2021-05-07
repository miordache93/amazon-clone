import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Header></Header>
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
