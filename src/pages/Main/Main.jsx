import { useContext, useEffect, useState } from 'react'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import './Main.css'
import { ProductContext } from '../../context/context'
const URL = 'https://fakestoreapi.com/products'

export const Main = () => {

  const { products, setProducts, setAllProducts } = useContext(ProductContext)

  useEffect(() => {
    handleGetProducts()
  }, [])

  const handleGetProducts = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setProducts(data)
    setAllProducts(data)
  }

  return (
    <main className="main">
      <section className="products">
        {
          products.map(product => (
            <ProductCard key={product.id} product = {product} />
          ))
        }
      </section>
    </main>
  )
}
