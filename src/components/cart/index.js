import { useHistory } from "react-router-dom"
import Product from "../product"
import "./styles.css"

const { useSelector } = require("react-redux")

const Cart =()=>{
    const cart = useSelector((store)=>store.cart)
    const history = useHistory()

    const handleBackToBuy=()=>{
        history.push("/")
    }

    const totalCart = cart.reduce((acc, act)=>{
        return acc + act.price
    },0)

    return(
        <div className="cart">
            <p>Total do carrinho: <span>R${totalCart},00</span></p>
            <button className="btn_to_buy" onClick={handleBackToBuy}>Voltar as compras</button>
            <div className="container_cart">
                {cart.map((product)=>(
                    <div key={product.id} className="product_cart">
                        <Product key={product.id} product={product} inCart/>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Cart