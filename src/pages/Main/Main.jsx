import { useState } from 'react'
import { ProductCard } from '../../components/ProductCard/ProductCard'
import './Main.css'
const URL = 'https://fakestoreapi.com/products'

export const Main = () => {

  const [products, setProducts] = useState([])

  const handleGetProducts = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setProducts(data)
  }

  return (
    <main className="main">
    <button onClick={handleGetProducts}>Traer productos</button>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {
          products.map(product => (
            <ProductCard key={product.id} product = {product} />
          ))
        }
      </section>
    </main>
  )
}
