import { addToCart, removeFromCart } from "./action"
import { toast } from "react-toastify"

export const addToCartThunk = (product)=>{
    return (dispatch)=>{
        const list = JSON.parse(localStorage.getItem("cart"))||[]
        const productInCart = list.find((item)=>item.id === product.id)
        if(productInCart === undefined){
            list.push(product)
            localStorage.setItem("cart",JSON.stringify(list))
            dispatch(addToCart(product))
            toast.success(`${product.name} adicionado no carrinho`)
        }
        else{
            toast.error(`${product.name} já está no carrinho`)
        }
    }
}

export const removeFromCartThunk = (id) =>(dispatch, getStore)=>{
    const {cart}=getStore()
    const list = cart.filter((product)=>product.id !== id)
    localStorage.setItem("cart", JSON.stringify(list))
    
    dispatch(removeFromCart(list))
    toast.success(`Itém removido com sucesso`)
}