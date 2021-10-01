import { useSelector } from "react-redux"
import Comming from "../comming"
import Product from "../product"
import "./styles.css"

const Products =()=>{
    const products = useSelector((store)=>store.products)

    return(
        <>
        <div className="container_products">
            {products.map((product)=>(
                <div className="each_product" key={product.id}>
                    <Product product={product}/>
                </div>
            ))}
        </div>
            <Comming/>
        </>
    )
}
export default Products