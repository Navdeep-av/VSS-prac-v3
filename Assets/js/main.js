import { getData } from "./http.js"

const sendData = async() => {

    const categoryList = await getData("https://fakestoreapi.com/products/categories")
    console.log("CategoryList:", categoryList)
    const productList = await getData("https://fakestoreapi.com/products")
    console.log("ProductList:", productList)

}

sendData()