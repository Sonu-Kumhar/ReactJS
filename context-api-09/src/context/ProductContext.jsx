import { createContext, useEffect, useState } from "react"
import getAllProducts from "../api/ProductApi"
export const AllProductDataContext = createContext()

const ProductContext = (props) => {

    const [allProducts, setAllProducts] = useState([])

    let gettingProductsData = async () => {
        let data = await getAllProducts();
        setAllProducts(data);
    }

    useEffect(() => {
        gettingProductsData();
    }, [])

    return (
        <div>
            <AllProductDataContext.Provider value={allProducts}>
                {props.children}
            </AllProductDataContext.Provider>
        </div>
    )
}

export default ProductContext