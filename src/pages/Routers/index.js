import { Route, Switch } from "react-router-dom";
import Cart from "../../components/cart";
import Products from "../../components/products";

const Routers = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Products />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
};
export default Routers;
