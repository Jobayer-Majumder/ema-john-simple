import './App.css';
import Header from './Component/header/header'
import Main from './Component/shop/main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Component/review/Review';
import Inventory from './Component/inventory/Inventory';
import NotFound from './Component/notFound/NotFound';
import ProductDetail from './Component/productDetail/ProductDetail';


function App() {
  return (
    <div >
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/review'>
            <Review></Review>
          </Route>
          <Route path='/shop'>
            <Main></Main>
          </Route>
          <Route path='/inventory'>
            <Inventory></Inventory>
          </Route>
          <Route exact path='/'>
            <Main></Main>
          </Route>
          <Route path='/product/:productKey'>
              <ProductDetail></ProductDetail>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
