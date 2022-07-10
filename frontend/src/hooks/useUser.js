import { useEffect, useState } from "react"

const useUser = () => {
    const [user, setUser] = useState([])
    // useEffect(() => {
    //     const loadUser = async () => {
    ////get a specific user
    //         const response = await fetch("http://localhost:5000/api/product/")
    //         const data = await response.json()
    //         if (data) {
    //             setProducts(data)
    //         }
    //     }
    //     loadUser()
    // }, [])
    // return [user]
}
export default useUser;