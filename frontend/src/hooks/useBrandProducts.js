import { useEffect, useState } from "react"

const useBrandProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const loadProducts = async () => {
            const response = await fetch("http://localhost:5000/api/product")
            const data = await response.json()
            if (data) {
                setProducts(data)
            }
        }
        loadProducts()
    }, [])
    return [products]
}
export default useBrandProducts;