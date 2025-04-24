import { createContext, useState } from "react"

export const ProductContext = createContext()

export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState([])
    const [allProducts, setAllProducts] = useState([])

  return (
    <ProductContext.Provider value={{products, setProducts, allProducts, setAllProducts}}>
          {children}
    </ProductContext.Provider>
  )
}
