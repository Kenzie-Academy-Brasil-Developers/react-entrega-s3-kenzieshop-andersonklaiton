import { useDispatch } from "react-redux"
import { addToCartThunk, removeFromCartThunk } from "../../store/modules/cart/thunk"
import "./styles.css"

const Product =({product,inCart=false})=>{

    const dispatch = useDispatch()

    return(
        <>
            <img alt={product.name} src={product.image}/>
            <h3>{product.name}</h3>
            <p className="price">{`R$${product.price},00`} 250g</p>
            {inCart ?(
                <button className="btns_cart_list" onClick={()=> dispatch(removeFromCartThunk(product.id))}>Remover</button>
            ):(
                <button className="btns_cart_list" onClick={()=> dispatch(addToCartThunk(product))}>Adicionar no carrinho</button>
            )}
        </>
    )
}
export default Product