import { useHistory } from "react-router-dom";
import "./styles.css"

const Header = () => {

  const history = useHistory()

  const handleCart=()=>{
    history.push("/cart")
  }

  return (
    <div className="container_header">
      <h1>Wellcome to the Kenzie Shop</h1>
      <button className="btn_to_cart" onClick={handleCart}>Carrinho</button>
    </div>
  );
};
export default Header;
