import axios  from "axios";
let getAllProducts = async () => {
    let response = await axios.get("https://fakestoreapi.com/products")
    return response.data;
}

export default getAllProducts
