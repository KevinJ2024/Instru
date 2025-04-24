import { useContext } from 'react'
import './Header.css'
import { ProductContext } from '../../context/context'

export const Header = () => {

  const { allProducts, products, setProducts } = useContext(ProductContext)

  const handleFilter = (e) => {
  const value = e.target.value.toLowerCase()

  if (value === '') {
    setProducts(allProducts)
  } else {
    const filteredProducts = allProducts.filter(product =>
      product.title.toLowerCase().includes(value)
    )
    setProducts(filteredProducts)
  }
  }

  return (
    <header className="header">
        <h1 className='title'>PRODUCTS</h1>
        <input type='text' placeholder='Search by Name...' className='input' onChange={handleFilter}/>
    </header>
  )
}
